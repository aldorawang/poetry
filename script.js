var lines = document.getElementById("lines");
var textbox = document.getElementById("textbox");
var button = document.getElementById("button");
var button2 = document.getElementById("button2");

button.addEventListener("click", function(){
    var newLine = document.createElement("li");
    newLine.innerHTML = textbox.value;
    lines.appendChild(newLine);
    textbox.value = "";
})

button2.addEventListener("click", function(){
    newLine.style.fontSize = "50px";
})

textbox.addEventListener("keyup",
function(event){
    if (event.keyCode === 13){
        event.preventDefault();

        button.click();
    }
})