/*
//JavaScript
// Name: Job Roberts
//WPF 1410 Section 01
// Date: 06 Oct 2014
//Assignment:Expressions
// How much to feed your dog or puppy.
*/
//alert("Testing 1,2,3");
var name = prompt("Type your name");
alert("Welcome  "+name+"! Let's figure out how old you are");
var yearBorn = prompt("What year were you born");

var currentYear = 2014;

var age = currentYear - yearBorn;

alert (name+" you are "+age+" years old");
console.log(yearBorn);

var yearsMore = prompt ("How many years in future would you like to know");
console.log("yearsMore");

var futureAge = age + Number(yearsMore);
console.log(futureAge);

console.log("You will be  "+futureAge+" in "+ yearsMore +" years.");
alert("You will be  "+futureAge+" in "+ yearsMore +" years.");