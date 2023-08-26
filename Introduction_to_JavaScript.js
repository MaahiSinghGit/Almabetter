// INTRACTION  Alert, Prompt, Confirm
// ALERT
var a="Hello world ! Welcome to JavaScript World";
alert(a);

// PROMPT
let name= prompt("Enter Your Name","Manoj Singh");
if(name!=null){
    console.log("Hello "+name);
}
else{
    console.log("You didn't enter you name, Kindly enter your name into dialog box");
}

// CONFIRM
 
let OK=confirm("You have entered wrong name");
if(OK){
    console.log("Kindly enter your name again");
}
else{
    console.log("Thank you for your co-opratain")
}
