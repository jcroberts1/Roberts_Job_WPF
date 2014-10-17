/*
 //JavaScript
 // Name: Job Roberts
 //WPF 1410 Section 01
 // Date: 16 Oct 2014
 //Assignment:Conditionals
 // Conditionals_Wacky.
 */
//
// condition let's see if you are able to drive your car after a couple of beers
var name = prompt("What is your name?");

// validation of the prompt
if (name === "") {

    name = prompt("Oops!! you forgot your name");

    alert("Hi " + name + " let's see if you can drive");
    console.log("Hi" + name + " let's see if you can drive");
}

var weight = prompt("How much do you weigh?");
    console.log(weight);

var sex = prompt("Enter your Gender");
    console.log(sex);

var beer = prompt("How many beers have you had?");
    console.log(beer);

var standard = 0.06;

var total = beer * standard;

if(total < standard){

    console.log("You can drive");

}else{

     console.log("You can not drive");

}