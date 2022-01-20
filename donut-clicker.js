// const donutCount = document.querySelector(".donutCount");
const donutCntDisp = document.querySelector(".donutCount");
const autoCostDisp = document.querySelector('#autoCostDisp');
class DonutClicker{

    constructor(donutCount, autoClicks, autoClicksCost, multiplier, multiplierCost) {
        this.donutCount = donutCount;
        this.autoClicks = autoClicks;
        this.autoClicksCost = autoClicksCost;
        this.multiplierCount = multiplier;
        this.multiplierCost = multiplierCost;
 
       
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
    getMultiplierCost(){
      return this.multiplierCost;
    }

  
    bakeDonut() {
      this.donutCount++;
        // if (this.multiplierCount <= 0){
        //   this.donutCount += 1;
        // }else{
        //   this.donutCount =+ Math.pow(1.2, this.multiplierCount);
        // }
         }
        
        
buyAutoClicker() {
  if (this.donutCount >= this.autoClicksCost) {
     this.donutCount -= this.autoClicksCost;
      this.autoClicksCost = this.autoClicksCost * 1.2;
      this.autoClicks += 1;
      
      
    }

  }

autoClickFunction() {
  if (this.autoClicks >= 1) {
    setInterval(() => {
      console.log(this.donutCount);
      this.donutCount += (1 * this.autoClicks);
      autoCostDisp.innerText = this.autoClicksCost;
      donutCntDisp.innerText = this.donutCount;
    }, 1000);
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