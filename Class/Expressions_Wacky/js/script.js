/*
 //JavaScript
 // Name: Job Roberts
 //WPF 1410 Section 01
 // Date: 06 Oct 2014
 //Assignment:Expressions
 // Determine gas mileage.
 */
// Ask the user his or her name
var name = prompt("Enter Your name");

// Welcome greeting to the user
alert("Welcome  "+name+"! Let's find out your vehicle gas mileage");

// First prompt for the user
var milesTraveled = prompt("Enter your miles");
console.log(milesTraveled);//console.log response

//Prompt to gather gallons of gas
var currentPayments = prompt("What is your monthly payment");
console.log(currentPayments);//console.log response


//Calculate the payoff
var total = balanceDue / currentPayments ;
console.log(total);//console.log response


//Calculate pay off months
console.log("You will pay off " +balanceDue+" in "+total+" Months.");
alert("You will pay off " +balanceDue+" in "+total+" Months.");
// console.log should match alert box