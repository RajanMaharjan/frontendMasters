// Probles part 4 - Workshop series by Douglas Crockford

function funky(o) {
    o = null;
}

var x = [];
funky(x);
alert(x);

// What is x?
// => []

function swap(a,b) {
    var temp = a;
    a = b;
    b = temp;
}

var x = 1; y = 2;
swap(x,y);
alert(x);

// What is x?
// #=> 1


// Write a  function that takes an argument and returns that argument

function indentify(x) {
    return x;
}

indentify(3); //=> 3

// Write to binary functions, add and mul that take two numbers and return their sum and product.

function add(x,y) {
    return x + y;
}

function mul(x,y) {
    return x * y;
}

add(3,4); //=> 7
mul(3,4); //=> 12

// Write a function that takes an argument and returns a function that that retuns that argument

function idf(x) {
    return function() {
        return x;
    };
}

var result = idf(3)(); // => 3

// Write a function that adds from two incovations.

function addf(x) {
    return function(y) {
        return x + y;
    };
}

// function addf(3)(4) // 7

// Write a function that takes a binary function and makes it callable with two invocations

function applyf(binary) {
    return function (x) {
        return function (y) {
            return binary(x,y);
        }
    }
}

// addf = applyf(add);
// addf(3)(4) // => 7
// applyf(mul)(5)(6) => 30

// Write a function that takes a function and an argument and returns a function that can supply a second argument.

function curry(func, first) {
    return function(second) {
        return func(first, second);
    }
}

// Second way of writing with the applyf func

function curry(func, first) {
    return applyf(func)(first);
}

// curry(add, 3)(4) // => 7
// curry(mul, 5)(6) // => 30


// Without writing any new functions, show three ways to create the inc function

inc = addf(1);
inc = applyf(add)(1);
inc = curry(add,1);

// inc(5) #=> 6
// inc(inc(5)) #=> 7

// Write methodize a function that converts a binary function to a method

function methodize(func) {
    return function (y) {
        return func(this, y);
    }
}

//Number.prototype.add = methodize(add);
// (3).add(4) => 7

// Write a demethodize, a function that converts a method to a binary function

function demethodize(func) {
    return function (that, y) {
        return func.call(that, y);
    }
}

// Write a function twice that takes a binary function and returns a unary function that passes its argument to the binary function twice

function twice(binary) {
    return function(a) {
        return binary(a,a);
    }
}

var double = twice(add);
double(11); // => 22
var square = twice(mul);
square(11); // => 121

// Write a function composeu that takes two unary functions and returns a unary function that calls them both

function compeseu(func, func2) {
    return function(x) {
        return func2(func(x));
    };
}

compeseu(double, square)(3); //=> 36

// Write a function that allows another function to only be called once.

function once(func) {
    return function() {
        var f = func;
        func = null;
        return f.apply(this, arguments);
    }
}

add_once = once(add);

add_once(3,4); // 7
add_once(3,4); // throw

// Write a factory function that returns two functions that implement up up an down counter

function counterf(num) {
    return {
        inc: function() {
            num += 1;
            return num;
        },

        dec: function() {
            num -= 1;
            return num
        }
    };
}

counter = counterf(10);
counter.inc(); //11
counter.dec(); //10

// Make a revocable function that takes a nice function and returns a revoke function, and an invoke function that can invoke the nice function until revoked

function revocable(func) {
    var revoke = false;
    return {
        invoke: function(x) {
            if (!revoke) {
                return func(x);
            }
        },
        revoke: function() {
            revoke = true;
            return throw;
        }
    };
}

var temp = revocable(alert);
temp.invoke(7); // alert 7
temp.invoke(8); // alert 8
temp.revoke();
temp.invoke(8); // throw


// Other way of writing it

function revocable(nice) {
    return {
        invoke: function () {
            return nice.apply(this, arguments);
        },
        revoke: function () {
            nice = null;
        }
    }
}
