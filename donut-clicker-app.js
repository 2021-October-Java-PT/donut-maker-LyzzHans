import DonutMaker from './donut-clicker.js';

// const donutBtn = document.getElementById('donutBtn');

const counterBoard = document.getElementById("counter-board");
      
let counterValue = 0;

const donutBtn = () =>{
  counterBoard.innerHTML = ++counterValue;
}


donutBtn.addEventListener('click', increaseCounter);
  
