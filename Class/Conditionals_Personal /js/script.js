/*
 //JavaScript
 // Name: Job Roberts
 //WPF 1410 Section 01
 // Date: 14 Oct 2014
 //Assignment:Conditionals
 // Vending Machine.
 */
//
// created an array
var vendMachine =["coke", "dietCoke", "sprite", "DrPepper"];//index 0,1,2,3

//console logged array
console.log(vendMachine);

//check item 1 in array
vendMachine[0] = "coke";

console.log(vendMachine);

console.log(vendMachine.length);



var numSoda = 3;

 if (vendMachine[0] === "coke"){

     numSoda ++;

 }else {

     console.log("this soda is not coke!");
 }


if (vendMachine[1] === "coke"){

    numSoda ++;

}else {

    console.log("this soda is not coke!");
}

if (vendMachine[2] === "coke"){

    numSoda ++;

}else {

    console.log("this soda is not coke!");
}
if (vendMachine[3] === "coke"){

    numSoda ++;

}else {

    console.log("this soda is not coke!");
}

console.log(numSoda);

var name = prompt("What is your name?");
    console.log(name);


//validation the prompt

if (name === ""){

    name = prompt("You forgot your name.");

}

console.log("Hi " + name + " you have " + numSoda + " sodas in your soda machine!");
alert("Hi " + name + " you have " + numSoda + " sodas in your soda machine!");