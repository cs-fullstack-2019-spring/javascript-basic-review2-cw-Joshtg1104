// ### Problem 2:
// Ask the user to enter a 4 digit code.
//     Ask the user to enter the password again.
//     If the passwords are the same print "Password is set."
// If the passwords are different print "ERROR, Passwords are different."

var password = prompt("Enter a 4 digit code");
var confirm = prompt("Enter 4 digit code again");

if(password === confirm){
    console.log("Password is set.");
}
else{
    console.log("ERROR");
}
