// Workshop with Douglas Crockford

// Model of though has two systems:

// System01 Gut -  Fast, associative, intuitive, can't turn it off.
// System02 Head - Slow, anilitical, but requires alot of effort.

// Connection - System01 provides the working assumptions to System02.

// Example: Visual Processing.

// As humans we have the ability to think fast and visually indentify if there is danger near by or see what objects are edible. On the other hand making a computer do that is very difficult.

// We make programming hard because we thrive for perfection. But if we depend on pefection then we would never release it so we then release a beta and fix bugs as they come along.

// Programming uses the Head and Gut.

// Blocks Left or Right?

// Works well in JS

return {
    ok: true
};

// Silent Error

return
{
    ok: false
};

// Prefer forms that are error resistant
// Remember that we spend most of our time making mistakes and fixing them.
// A good style can help produce better programs.
// Style should not be about personal preference and self-expression

// Programs must communicate clearly to people
// Don't use the with statement
// Always use ==== vs ==

// Scope - Block scope vs function scope
// the var statment gets slpit into two parts Declaration and Initialization

// The declaration gets hoisted to the top of the function initializing with undefined
function foo () {
    var myVar = 0, myOtherVar;
}

// Which expands into this
function foo () {
    var myVar = undefined, myOtherVar = undefined;

    myVar = 0;
}

// So its good practice to declare all your variables in the top of your function. Additionally declare all functions before you call them.

// Example of a loop
for (var i) {}
// The variable i is not scoped to the loop. It gets hoisted to the top. So its recommended you declare it on top of your function.

// Global variables are evil. Avoid writing them and when you do be explicit and write them in UPPER_CASE

// Constructor functions should be named with initial caps.

// Example

var a = b = 0; // Expect #=> var a = 0; b = 0;

// But in reality it makes a global variable b and initializes a. Like so
b = 0;
var a = b;

// Write in a way that clearly communicates your intent
