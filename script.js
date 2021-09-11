/*

mouse and click listeners for the button in the html
the [0] treats the buttons like an array, and to select the first button, we need to declare the index it is in [0]

var button = document.getElementsByTagName("button")[0];

button.addEventListener("click", function(){
    console.log("Clicked it bruh....");
})

button.addEventListener("mouseenter", function(){
    console.log("Clicked it bruh....");
})

button.addEventListener("mouseleave", function(){
    console.log("Clicked it bruh....");
})

*/

// this is a simple todo button that adds list items to the ul when the user clicks the enter button
// this will add the users text to the list

var button = document.getElementById("enter");
var input = document.getElementById("userInput");
var ul = document.querySelector("ul");

button.addEventListener("click", function(){
    // this if statement does not allow users to enter blank values to the list
    if(input.value.length > 0){
        console.log("Click it working");
        var li = document.createElement("li");
        li.appendChild(document.createTextNode(input.value));
        ul.appendChild(li);
        // this will empty the enter input and clear the prior entry, resetting the users text field.
        input.value = "";
    }
})
