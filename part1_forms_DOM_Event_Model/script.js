//COMM644 Assignment 5
//Practice with Forms and the DOM Event Model (10 points)

//STEP 1
function writeMessage1() {
"use strict";
    window.alert("'Click Me' has been clicked.");
}
//STEP 2
var myButton = document.getElementById("myBtn2");
myButton.onclick = function () {
"use strict";
    alert("'Click Me 2' has been clicked.");
}; 

//STEP 3
myBtn3.addEventListener("click", writeMessage3, false);
function writeMessage3() {
    "use strict";
    window.alert("'Click Me 3' has been clicked.");
}

//STEP 4
var myButton2 = document.getElementById("myBtn4");
function writeMessage4 () {
 "use strict";
  window.alert("'Click Me 4' has been clicked.");
}
myButton2.addEventListener("click", writeMessage4, false); 

//STEP 5 - See code in HTML <head> tag

//STEP 6
var myAnchor = document.getElementById("redirect");
myAnchor.addEventListener("click", function(noGoogle) {
    noGoogle.preventDefault();
    window.alert("You have clicked the 'Visit Google' link.");
}, false);

//STEP 7
var myBtn7 = document.getElementById("myBtn7");
var message = document.getElementById("message");
  myBtn7.addEventListener("click", function(showText) {
    myBtn7.disabled = true;
    showText = message.value;
    alert(showText);  
},false);

//STEP 8
myBtn8.addEventListener("click", function () {
goTo = window.open("newpage.html", "goTo", "width=300, height=300", "resizable=yes");
    changeSize();
},false);
function changeSize (){
  window.goTo.resizeTo(500, 300);
}

//STEP 9
var id;
function startCount () {
   id = setInterval (function () {
       console.log("Learning JavaScript is fun!");
   }, 2000);
}
function stopCount() {
   clearInterval(id);
}
myStartBtn.addEventListener("click", startCount, false);
myStopBtn.addEventListener("click", stopCount, false); 

//STEP 10
function dropDown(val) {
    val = document.getElementById("list").value;
    alert(val);
}
myBtn10.addEventListener("click", dropDown, false); 




