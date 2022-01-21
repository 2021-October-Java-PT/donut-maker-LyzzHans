import DonutClicker from './donut-clicker';

renderPage();


function renderPage() {
  bakeDonut();
  
}


function bakeDonut(){
  const donutBtn = document.querySelector('#bakeDonut');
  const buyAutoClicker =document.querySelector('#buyAutoClicker');
  const donutCntDisp = document.querySelector('#donutCntr');
  const buyMultiplier = document.querySelector('#multiplierBtn');
  const resetBtn = document.querySelector('#reset-btn');
  const donutClicker = new DonutClicker(100,0,100,0,10);
  const autoCntDisp = document.querySelector('#autoClickBtn');
  const autoCostDisp = document.querySelector('#autoCostDisp');

  donutBtn.addEventListener('click', () => {
    donutClicker.bakeDonut();
    donutCntDisp.innerText = donutClicker.donutCount;
    console.log(donutClicker.donutCount);
});


buyAutoClicker.addEventListener("click", () => {
  donutClicker.buyAutoClicker();
  donutClicker.autoClickFunction();

donutCntDisp.innerText = donutClicker.donutCount;
  autoCntDisp.innerText = donutClicker.autoClicks;
  autoCostDisp.innerText = donutClicker.autoClicksCost;
  console.log(donutClicker.donutCount);
    
   });
 
  buyMultiplier.addEventListener('click', () =>{
      donutClicker.buyMultiplier();
      donutCntDisp.innerText = donutClicker.donutCount;
      autoCntDisp.innerText = donutClicker.autoClicks;
      multiCntDisp.innerText = donutClicker.multiplierCount;
  });
  
  resetBtn.addEventListener("click", () => {
    location.reload();
  });
}
