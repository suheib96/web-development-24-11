const header = document.getElementById("header");
function headerStyleChange() {
  header.innerHTML = "Dieser Text kommt aus der Javascript Datei";
  header.style.color = "red";
  header.style.backgroundColor = "purple";
  header.style.fontSize = "24px";
}

function changeFontSize(pixel) {
  header.style.fontSize = pixel + "px";
}

let button1 = document.getElementById("onClick")
let button2 = document.getElementById("onMouseOver")
let button3 = document.getElementById("wheel")
let button4 = document.getElementById("OnMouseLeave")

button1.onclick = function (){
    alert("Du hast mich angeklickt")
}
button2.onmouseover = function (){
    alert("Du schwebst über mich")
}
button3.onwheel = function(){
    alert("Überroll mich nicht")
}
button4.onmouseleave = function(){
    alert("Verlass mich nicht")
}

let ausgabefeld = document.getElementById("ausgabeFeld")
function showInputValue (){
   ausgabefeld.innerHTML = document.getElementById("inputField").value
}
