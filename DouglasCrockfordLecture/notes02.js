// Workshop Part2

// Javascript was built in 10 days

// LiveScript = Java, Scheme, Self
// CEO of netscape then named it to JavaScript


// Where do bad pars of JavaScript come from?
// Legacy, Good Intentions, Haste

// Almost everything in the language is Objects
// An object is a dynamic collection of propeties and every property has a key string that is unique within that object

// Javascript has object literals which is an expressive notation for creating objects

// Basic three operations on an object are GET SET and DELETE
var p = {name: 'hello'}
// GET
p.name
p['name']

// SET
p.name = 'hi'
p['name'] = 'hi'

// DELETE
delete p.name
delete p['name']

// Classes vs Prototypes
// Working with prototypes :
// Make an object that you like
// Create new instances that inherit for that object
// Customize the new objects
// Taxonomy and classification are not necessary

// Number , Boolean , String, Array, Date, RegExp, Function all inherit from Object

// Numbers

// Only one number type and uses IEEE-754 aka "Double"
// Associate Law does not hold expecially in fractions
a = 0.1;
b = 0.2;
c = 0.3;

(a + b) + c === a + (b + c);

// Produces false for some values of a,b,c

// NaN is a special number and its toxic because an arithmetic operation using it will have a NaN result. Additionally NaN is not equal to anything including NaN

NaN === NaN // => false
NaN !== NaN // => true

// Strings are immutable which means once a string is made it can't be modified


// Arrays have the advantage of not needing to provide length or type when creating

// Do not use for in with arrays because it does not guarantee order

// #sort function is horrible because it sorts as string
var n = [4,15,0,1]
n.sort(); // => [0,1,15,4]

// There is only two values in JavaScript that are not values null and undefined

// null - A value that isn't anything
// undefined - A value that isn't even that, it is the default value for variables, parameters and of missing meembers in objects

// falsy values = false, null, undefined, "", 0, NaN

// Loosely type meaning any of the types can be stored in a variable or be passed as a parameter to any function

// Objects are passed by reference and not by value.

a === b; // => Only true if a and b, both point to the same object
