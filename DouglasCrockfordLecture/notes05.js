// Monads & Gonads Part 5 Lecture by Douglas Crockford

// (Mt) -> (t-> M u) -> (M u)
// A monand is an object

// Example: AJAX
// Macroid - A macro like thing that is used to create other functions

function MONAD() {
    return function unit(value) {
        var monad = Object.create(null);
        monad.bind = function (func) {
            return func(value);
        };
        return monad;
    };
}

//var unit = MONAD();
//var monad = unit("Hello World");
//monad.bind(alert);

function MONAD2() {
    var protortype = Object.create(null);
    function unit(vluae) {
        var monad = Object.create(protortype);
        monad.bind = function (func) {
            return func(value);
        };
        return monad;
    }
    return unit;
}

// Concurrency - Having multiple things happening at the same time. The most popular way of dealing with it is threads.

// But threads are evil. Easy to get started but hard to reason about. System can easily get complicated.


// The Alternative is Turn based processing:
// Single-threaded. Race free. Deadlock free
// The law of turns: Never wait. Nerver Block. Finish Fast.
// Web browsers
// Most UI frameworks
// Servers: Elko, Twisted, Node.js
// Asynchronicity can be hard to manage

// Promises
// Are an excellent mechanism for managinc asynchronicity. A promise is an object that represents a possible future value. Every promise has a coressponding resolver that is used to ultimately assign a value to the promise. A promise can have one of three statkes: Kept, Broken, or pending. Basically means on a turned based system that last the we can to do is have the system waiting to process a request. Instead give it promise and when the promise is successful it will execute a function that handles returning your data.

//A promise is a monand. The value is not known when the monad is made. Each promise is lined to two resolver function, keep and break that determine the promises success and value. when can take two functions, bind only one.
