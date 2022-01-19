import DonutClicker from './donut-clicker';

renderPage();


function renderPage() {
  bakeDonut();
}
function bakeDonut(){



const donutBtn = document.querySelector('#bakeDonut');
const buyAutoClicker =document.querySelector("#buyAutoClicker");
const donutCntDisp = document.querySelector('#donutCntr');
const multiBtn = document.querySelector('#multiplierBtn');
const resetBtn = document.querySelector('#reset-btn');
const donutClicker = new DonutClicker(0,0,100,1,0,10);



console.log('check in 1');
donutBtn.addEventListener('click', () => {

console.log('check in 2');
  donutClicker.bakeDonut();
  donutCntDisp.innerText = donutClicker.donutCount;
console.log(donutClicker.donutCount);
});

buyAutoClicker.addEventListener("click", () => {
  
donutClicker.buyAutoClicker();
donutCntDisp.innerText = donutClicker.donutCount;
autoCntDisp.innerText = donutClicker.autoClickCount;
    
    });
 
  multiBtn.addEventListener('click', () =>{
      
    donutClicker.buyMultiplier();
  
  donutCntDisplay.innerText = donutClicker.donutCount;
  autoCntDisplay.innerText = donutClicker.autoClickCount;
  multiCntDisplay.innerText = donutClicker.multiplierCount;
});
 autoClickBtn.addEventListener('click', () =>{
  for (let i = 0; i < donut.autoClicks; i++) {
    donutClicker.bakeDonut();
  }
  donutClicker.donutCount();
});
  resetBtn.addEventListener("click", () => {
    location.reload();

  });
}