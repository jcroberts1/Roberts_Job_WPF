/*
 //JavaScript
 // Name: Job Roberts
 //WPF 1410 Section 01
 // Date: 23 Oct 2014
 //Assignment:Functions.
 */
var name =prompt("Please enter your name.");

while(name===""){
//Validate the users input information.
    name =prompt("Please enter your name.");
    console.log(name);
}

function outptMsg() {
    console.log("Greetings "+name+" I am a computer.");

}


//Invoking the function:
outptMsg();



