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
    getDonutCount() {
      return this.donutCount;
    }
    getAutoClicks() {
      return this.autoClicks;
    }

    getAutoClicksCost(){
      return this.autoClicksCost;
    }
    getMultiplier(){
      return this.multiplier;
    }
    getMultiplierCount(){
      return this.multiplierCount;
    }
    getMultiplierCost(){
      return this.multiplierCost;
    }
  
    bakeDonut() {
        this.donutCount += this.multiplier;
    }

buyAutoClicker() {
  if (this.donutCount >= this.autoClickPrice) {
    this.donutCount -= this.autoClickPrice;
    this.autoClickCount += 1;
    this.autoClickPrice = (this.autoClickCount * 100);
  }
}
buyMultiplier() {
  if (this.donutCount >= this.multiplierPrice) {
    this.donutCount -= this.multiplierPrice;
    this.multiplierCount += 1;
    this.multiplierPrice = (this.multiplierCount * 50);
}
}
}
export default DonutClicker;