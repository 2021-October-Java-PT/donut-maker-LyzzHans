const donutCount = document.querySelector(".donutCount");


class DonutClicker{

    constructor() {
        this.donutCount = 0;
        this.autoClicks = 0;
        this.autoClicksCost = 100;
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
  getClickInc(){
    return this.clickInc;
  }
    bakeDonut() {
        if (this.multiplierCount === 0){
          this.donutCount += 1;
        }else{
          this.donutCount =+ Math.pow(1.2, this.multiplierCount);
        }
        }
    
  
buyAutoClicker() {
  if (this.donutCount >= this.autoClicksCost) {
    { this.donutCount -= this.autoClicksCost;
      this.autoClicksCost = this.autoClicksCost * 1.2;
      this.autoClicks += 1;
      }  
      
    }

  }

autoClickFunction() {
  if (this.autoClicks === 0) {
  } else if (this.multiplierCount === 0 && this.autoClicks >= 1) {
    this.donutCount += this.autoClicks * 2;
  } else {
    this.donutCount += Math.pow(1.2, this.multiplierCount) * this.autoClicks;
  }

}

buyMultiplier() {

  if (this.donutCount >= this.multiplierCost) {
    this.donutCount -= this.multiplierCost;
    this.donutCount += Math.pow(1.2, this.multiplierCount) * this.autoClicks;
  }
    
  }
}




export default DonutClicker;