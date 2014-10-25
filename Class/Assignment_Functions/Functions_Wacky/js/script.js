/*
 //JavaScript
 // Name: Job Roberts
 //WPF 1410 Section 01
 // Date: 23 Oct 2014
 //Assignment:Functions.
 */
var name =prompt("Please enter your name");
  console.log(name);

while(name===""){
    name = prompt("You forgot your name again");
}

function greet(name){
    //code to run

   alert("Hello " + name + "");

}
greet(name);