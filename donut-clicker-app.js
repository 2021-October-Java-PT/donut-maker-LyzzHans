import DonutClicker from "./donut-clicker";

renderPage();


 var btn = document.getElementById("btn");

 var counter = document.getElementById("btn-counter");

 counter.innerHTML = 0;

 btn.onclick = function()
 {
    counter.innerHTML++;
 };