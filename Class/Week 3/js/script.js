
var min = prompt("please type in min number");

while(min===""){

    min = prompt("please type in min number");

}

///Not a number NaN. Checks value

while(isNaN(min)){
    min = prompt("please type in min number");
}


//Logical op

while(isNaN(min) || min===""){

     min = prompt("please type in min number!!");
}

var max =prompt("Please enter max number");

while (isNaN(max) || max===""){
    max = prompt("Please enter a number");
}
//call function
//randomizer(5,20);
//call function using arguments
var result= randomizer(min,max);
//create a result variable
console.log("The returned value is " + result);

//function to generate random number

function randomizer(minNumber,maxNumber){

     var randomNumber = (Math.random()*(maxNumber-minNumber)+ Number(minNumber));

     return randomNumber;


}