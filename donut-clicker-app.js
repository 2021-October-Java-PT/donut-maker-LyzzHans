import DonutClicker from './donut-clicker';

renderPage();


function renderPage() {
  bakeDonut();
}

function bakeDonut() {



  const donutBtn = document.querySelector('#bakeDonut');
  const buyAutoClicker = document.querySelector('#buyAutoClicker');
  const donutCntDisp = document.querySelector('#donutCount');
  const buyMultiplier = document.querySelector('#buyMultiplier');
  const resetBtn = document.querySelector('#reset-btn');
  const donutClicker = new DonutClicker(100, 0, 100, 0, 10);
  const autoCntDisp = document.querySelector('#autoCntr');
  const autoCostDisp = document.querySelector('#autoCostDisp');
  const multiCntDisp = document.querySelector('#buyMultiplierBtn')

  donutBtn.addEventListener('click', () => {
    donutClicker.bakeDonut();
    donutCntDisp.innerHTML = Math.round(donutClicker.donutCount);
    console.log(donutClicker.donutCount);
  });


  buyAutoClicker.addEventListener("click", () => {
    donutClicker.buyAutoClicker();
    donutClicker.autoClickFunction();
    donutCntDisp.innerText = donutClicker.donutCount;
    // autoCntDisp.innerText = donutClicker.autoClicks;
    // autoCostDisp.innerText = donutClicker.autoClicksCost;
    donutCntDisp.innerHTML = Math.round(donutClicker.donutCount);
    console.log(donutClicker.donutCount);

  });

  buyMultiplier.addEventListener('click', () => {
    donutClicker.buyMultiplier();
    donutCntDisp.innerHTML = Math.round(donutClicker.donutCount);
    autoCntDisp.innerText = donutClicker.autoClicks;
    multiCntDisp.innerText = donutClicker.multiplierCount;


  });
  resetBtn.addEventListener("click", () => {
    location.reload();

  });
}
var modal = document.getElementById("myModal");

var btn = document.getElementById("about");

var span = document.getElementsByClassName("close")[0];

btn.onclick = function () {
  modal.style.display = "block";
};

span.onclick = function () {
  modal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

var modal2 = document.getElementById("myModal2");

var btn2 = document.getElementById("inspiration");

var span2 = document.getElementsByClassName("close2")[0];

btn2.onclick = function () {
  modal2.style.display = "block";
};

span2.onclick = function () {
  modal2.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == modal2) {
    modal2.style.display = "none";
  }
};

var modal3 = document.getElementById("myModal3");

var btn3 = document.getElementById("contact");

var span3 = document.getElementsByClassName("close3")[0];

btn3.onclick = function () {
  modal3.style.display = "block";
};

span3.onclick = function () {
  modal3.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == modal3) {
    modal3.style.display = "none";
  }
};