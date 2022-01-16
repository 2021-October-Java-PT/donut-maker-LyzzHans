import DonutClicker from './donut-clicker';

renderPage();


function renderPage() {
  bakeDonut();
}
function bakeDonut(){


const counterBoard = document.querySelector('#donut-counter');
const donutBtn = document.querySelector('#bakeDonut');
const donutCntDisp = document.querySelector('#donutCntr');
const donutClicker = new DonutClicker();
console.log('check in 1');
donutBtn.addEventListener('click', () => {
console.log('check in 2');
  donutClicker.bakeDonut();
  donutCntDisp.innerText = donutClicker.donutCount;//important method and listener for autoclick
console.log(donutClicker.donutCount);
  


// const resetCounter =() =>{

//   counterBoard.innerHTML = 0;
//   donutCount = 0;
// }
// resetButton.addEventListener('click', resetCounter);
});
}

