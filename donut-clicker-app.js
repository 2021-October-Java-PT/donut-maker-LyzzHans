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