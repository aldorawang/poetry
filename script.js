var lines = document.getElementById("lines");
var textbox = document.getElementById("textbox");
var button = document.getElementById("button");
var button2 = document.getElementById("button2");

let fonts = [`'Dancing Script', cursive`,`'Indie Flower', cursive`,`'Shadows Into Light', cursive`,`'Amatic SC', cursive`,`'Caveat', cursive`,` 'Satisfy', cursive`,`'Patrick Hand', cursive`,`'Handlee', cursive`,`'Sacramento', cursive`,`'Nanum Pen Script', cursive`,` 'Chilanka', cursive`,`'Kalam', cursive`];
let newLine;

button.addEventListener("click", function(){
    newLine = document.createElement("li");
    newLine.innerHTML = textbox.value;
    lines.appendChild(newLine);
    textbox.value = "";
})

button2.addEventListener("click", function(){
    if(newLine != undefined){
        let size = Math.floor(Math.random() * 10) + 30;
        newLine.style.fontSize = size + "px";

        let font = fonts[Math.floor(Math.random() * fonts.length)];
        newLine.style.fontFamily = font;
    }
})

textbox.addEventListener("keyup",
function(event){
    if (event.keyCode === 13){
        event.preventDefault();
        button.click();
    }
})