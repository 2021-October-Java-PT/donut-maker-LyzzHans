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
const donutClicker = new DonutClicker(0,0,100,0,10);
const autoCntDisp = document.querySelector('#autoCntr');


donutBtn.addEventListener('click', () => {
  donutClicker.bakeDonut();
  donutCntDisp.innerText = donutClicker.donutCount;
console.log(donutClicker.donutCount);
});


buyAutoClicker.addEventListener("click", () => {
  donutClicker.buyAutoClicker();
  donutClicker.autoClickFunction;
  autoCntDisp.innerText = donutClicker.autoClicks;
    
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