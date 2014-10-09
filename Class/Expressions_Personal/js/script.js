/*
//JavaScript
// Name: Job Roberts
//WPF 1410 Section 01
// Date: 06 Oct 2014
//Assignment:Expressions
// How much to feed your dog or puppy.
*/
// Ask the user his or her name
var name = prompt("Enter Your name");

// Welcome greeting to the user
alert("Welcome  "+name+"! Let's find out how long to pay of a debt");

// First prompt for the user
var balanceDue = prompt("Enter you current Balance on bill");
console.log(balanceDue);//console.log response

//Prompt to gather monthly payments
var currentPayments = prompt("What is your monthly payment");
console.log(currentPayments);//console.log response


//Calculate the payoff
var total = balanceDue / currentPayments ;
console.log(total);//console.log response


//Calculate pay off months
console.log("You will pay off " +balanceDue+" in "+total+" Months.");
alert("You will pay off " +balanceDue+" in "+total+" Months.");
// console.log should match alert box
