// ### Problem 4:
// Create a function that returns 5 more than the integer sent to it.
//     Assume the user only enters integers.
//     Create a different function that adds " is awesome" to any strings sent to it.
// <strong>Challenge:</strong> If the wrong data type is sent to one of the functions print "ERROR".

var number = parseInt(prompt("Enter a number"));


function times(){
    if(number){
        console.log(number*5)
        return;
    }
    else{
        console.log("ERROR");
    }
}

times();

var thing = prompt("Give a word");

function excited(){
    if (parseInt(thing) >= 0)
        {
            console.log("ERROR");
        }
    else
        {
        console.log(thing + " is awesome.");
    }
}

excited();