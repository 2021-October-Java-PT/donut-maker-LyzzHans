const donutCount = document.querySelector(".donutCount");


class DonutClicker{

    constructor() {
        this.donutCount = 0;
        this.autoClicks = 0;
        this.autoClicksCost = 100;
        this.multiplier = 1;
        this.multiplierCount = 0;
        this.multiplierCost = 10;
       
       
    }

    bakeDonut() {
        this.donutCount += this.multiplier;
    }

buyAutoClicker() {
  this.donutCount = Math.round(this.donutCount - this.autoClicksCost);
  this.autoClicks += 1;
}
buyMultiplier() {
  this.donutCount = Math.round(this.count - this.multiplierCost);
  this.multiplier = this.multiplier * 1.2;
  this.multiplierCount += 1;
}
}

reset() 
  location.reload;


export default DonutClicker;