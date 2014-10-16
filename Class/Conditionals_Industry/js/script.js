/*
 //JavaScript
 // Name: Job Roberts
 //WPF 1410 Section 01
 // Date: 14 Oct 2014
 //Assignment:Conditionals
 // Conditionals_Photo printing.
 */
//

var minRes = 300;
var photo = 500;
var fileSize =  900;

// condition if your photo is to small resolution you can not print , how ever if your resolution is high enough you can print!

if (minRes < photo) {
    console.log("You can not print the photo");
} else {
    console.log("You can print the photo!");
}

// 
var size = prompt("What is your photo resolution?");
    console.log(size);


// validation of the prompt

if (size === ""){

    size = prompt("Enter your photo resolution.");


}

if(size < minRes){
    console.log("You can not print the photo.");
}else{
    console.log("You can print the photo.");


}

console.log("This " + minRes < size  + " resolution is large enough to print");
alert("This " + minRes < size  + " resolution is large enough to print");