// ### Problem 3:
// Create a function that is sent two integers,
//     then print from the first integer to the second integer.
//     Assume the first integer is less than the second integer.

var begin = parseInt(prompt("Enter a number"));
var end = parseInt(prompt("Enter a different number"));

function count(){
    for(n = begin; n <= end; n++){
       console.log(n);
    }
}

count()