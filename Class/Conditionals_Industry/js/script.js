/*
 //JavaScript
 // Name: Job Roberts
 //WPF 1410 Section 01
 // Date: 14 Oct 2014
 //Assignment:Conditionals
 // Conditionals_Photo printing.
 */
//

var minRes = 200;
var maxRes = 300;

// condition if your photo is to small resolution you can not print , how ever if your resolution is high enough you can print!

var name = prompt("What is your name?");

// validation of the prompt
if (name === "") {

    name = prompt("Oops!! you forgot your name");

    alert("Hi " + name + " let's see if your photo is large enough to print");
    console.log("Hi" + name + " let's see if your photo is large enough to print");

    var size = prompt("What is your photo resolution?");
    console.log(size);


// validation of the prompt
    if (size === "") {

        size = prompt("Enter your photo resolution.");

    }

    if (minRes >= maxRes) {
        console.log("You can print the photo.");

    } else {
        //code performed if false
        console.log("You can not print the photo.");

    }

}

