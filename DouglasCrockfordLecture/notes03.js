// function expression

// Produce an instance of function object
// Function objects are first class meaning they may be passed as an argument to a function, may be return from a function, may be assigned to a variable or stored in an object array. Additionally they inherit from Function.prototype

// function statement almost identical

// The function statement is a short hand for a var statment with a function value

function foo() {}

// expands to
var foo = function foo() {};

// which further expands to
var foo = undefined;
foo = function foo () {};

// the assignment of the function is also hoisted

// function expression vs function statement

// If the first token in a statement is a function, then its a function statement and/or function declaration

// Declare all variables at the top of the function
// Declase all functions before you call them.

// Functions have two pseudo paramaters arguments and this. The arguments is an array like object that contains all of the arguments from its invocation.

// Example
function sum () {
    var i;
    var n = arguments.length;
    var total = 0;

    for (i=0; i < n; i++) {
        total += arguments[i];
    }
    return total;
}

var ten = sum(1,2,3,4);

// The this paramater contains a reference to the object of invocation.

// this allows a method to know what object it's concerned with.
// this allows a single function object to service many objects
// this is a key to prototypal inheritance

// Invocation => ()
// If a function is called with too many arguments, the extra arguments are ignored however if its called with too few arguments, the missing values will be undefined. Additionally there is no implicity type checking on the arguments

// There is four ways to invocate a function.

// Function form #=> this is set to global object
// People may create var that = this;
sum();

// Method form #=> this is set to thisObject.
this.sum();
this['sum'].call();

// Constructor form #=> new Object is created and assigned to this
new foo();

// Apply form #=> this is the argument
foo.apply();

// Summary on this. It's a bonus paramater and its value depends on the calling form. It gives methods access to their objects and it's bound during invocation time.

// Subrotine: call and return
// aka sub, procedure, proc, func, function, lambda
// Why are there subroutines?
// Code reuse, decomposition, modularity, expressiveness, higher order

// Recursion
// function that calls itself
// Quicksort - Divide the array into two groups, low and high. Then call quicksort on each group containing more than one element

// Closure
// The context of an inner function includes the scope of the outer function.
// An inner function enjoys that context even after the parent functions have returned.
// Function scope works like block scope.

// Example in Global
// In the example below digitName function is called but inside the function it runs into names. Then because of closure it looks for names in the outer function, finds it and returns the correct output
var names = ['zero', 'one', 'two'];

var digitName = function(n) {
    return names[n];
}

console.log(digitName(1)); // #=> 'one'

// Slow
// In the example below although var names is within the innerfunction function is slow because everytime the function gets called it has to create an array over again which is inneficient
var digitName = function(n) {
    var names = ['zero', 'one', 'two'];
    return names[n];
}

console.log(digitName(1)); // #=> 'one'

// closure
// In the example below digitName is not being assigned to function but the result of the function because of immediate invocation.
var digitName = (function(n) {
    var names = ['zero', 'one', 'two'];

    return function(n){
        return names[n];
    }
})();

// Pseudoclassical
function Gizmo(id) {
    this.id = id;
}

Gizmo.prototype.toString = function () {
    return "gizmo " + this.id;
}

// Power Constructors
// Make an object, make some variables and function that will become private members. Augment the object with privileged methods. Then return object.

function myPowerConstructor(x) {
    var that = otherMaker(x);
    var secret = f(x);
    that.priv = function() {
        // secret x that...
    };
    return that;
}

// Functional Inheritance
function gizmo(id) {
    return {
        id: id,
        toString: function () {
            return "gizmo " + this.id;
        }
    };
}

function hoozit(id) {
    var that = gizmo(id); // gizmo object
    that.test = function (testid) {
        return testid === this.id
    }
    return that;
}

// Dont make functions in a loop. It can be wasteful because a new function object is created on every iteration.
// Additionally is can be confusing because the new function closes over the loop's variable,s not over their current values.
