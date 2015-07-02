//Lecture on context.
// Below is an object literal person which holds two properties a name and a function that returns the name.
// Additionally we have a global object variable name.

var name = 'bar';

var person = {
    name: 'foo',
    getName: function () {
        return this.name;
    }
}

// We can see the persons objects name by calling it.

person.getName(); // => 'foo'

// However you can rip out a function like so

var rippedFunction = person.getName;

// Now that you've ripped out the function it no longer in the function scope. Instead its in the global scope.
// Meaning if we call the function it will not see 'foo' but 'bar';

var rippedFunction(); // => 'bar'

// But what if we wanted to see 'foo'. Well JavaScript is so cool that you can do it by using either call, apply, or bind.

rippedFunction.bind(person)(); //  => 'foo'
rippedFunction.call(person); //    => 'foo'
rippedFunction.apply(person); //   => 'foo'

// function can take in functions as parameters

function add (x,y) {
    return x + y;
}

function mul (x,y) {
    return x * y;
}

function doMath(x,y, operation) {
    return (operation(x,y));
}

doMath(10,10,add); // => 20
