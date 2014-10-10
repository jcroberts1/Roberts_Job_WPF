/*
 //JavaScript
 // Name: Job Roberts
 //WPF 1410 Section 01
 // Date: 06 Oct 2014
 //Assignment:Expressions
 // Tired Weight of your car.
 */
//

// Ask the user his or her name
var name = prompt("Enter Your name");

// Welcome greeting to the user
alert("Welcome  "+name+"! Let's find out the weight of you car");

alert("You will need thin cardboard,ruler,& tire gage in PSI(pound per square inch) ");
//This is the materials you will need to do this

alert("Get a footprint of tire on cardboard to measure length and width");
//instructions to get length and width

alert("Shove the cardboard under the tire in all four directions");

alert("Roll the car off from the cardboard and measure the area bounded by the cardboard. Take measurements in inches.");

alert(" Use a tire gauge to measure the internal air pressure of the tire.");

alert("Find the amount of tire surface area touching the ground. To find this, multiply the length and width of the footprint.Your answer should be in square inches.");

alert("To find the amount of weight the tire holds, multiply the surface area by the psi in that tire.When you multiply square inches by pounds per square inch the square inches cancel and you're left with pounds.");

// First prompt for the user
var length = prompt("Enter length ");
console.log(length);//console.log response

//Prompt
var width = prompt("Enter width of tire");
console.log(width);//console.log response

//Calculate the weight
var weight = length * width ;
console.log(weight);//console.log response

var tire = prompt("Enter in Tire preasure in pounds");
console.log(tire);//console.log response

var totalWeight = weight * tire  ;
console.log(totalWeight);//console.log response

alert("Add the weight together for all four tires - that's the total weight of the car");












