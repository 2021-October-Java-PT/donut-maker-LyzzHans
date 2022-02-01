// const donutCount = document.querySelector(".donutCount");
const paraDonutCount = document.querySelector("#donutCount");
const autoCostDisp = document.querySelector("#autoCntr");
const currentDonutCount = document.querySelector('.currentDonutCount')


class DonutClicker {

  constructor(donutCount, autoClicks, autoClicksCost, multiplier, multiplierCount, multiplierCost) {
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

  getAutoClicksCost() {
    return this.autoClicksCost;
  }
  getMultiplier() {
    return this.multiplier;
  }
  getMultiplierCount() {
    return this.multiplierCount;
  }
  getMultiplierCost() {
    return this.multiplierCost;
  }


  bakeDonut() {

    this.donutCount += this.multiplier * 1;

  }


  buyAutoClicker() {
    if (this.donutCount >= this.autoClicksCost) {
      this.donutCount -= this.autoClicksCost;
      this.autoClicks += 1;
      this.autoClicksCost *= 1.15;
      let price = 0.1 * this.autoClicksCost;
      this.autoClicksCost += price;
      console.log(this.autoClicks);
    
    }
    if (this.autoClicks >= 1) {
      setInterval(() => {
        console.log(this.donutCount);
        this.donutCount += this.autoClicks;
        const count = document.querySelector('#donutCount');
        count.innerText = this.donutCount;
      }, 1000);

  }
  }


  buyMultiplier() {

    if (this.donutCount >= this.multiplierCost) {
      this.donutCount -= this.multiplierCost;
      this.multiplierCount += 1;
      this.multiplierCost  *= 1.1;
      this.multiplier *= 1.2;
    }
  }

  updateDonutCount() {
    paraDonutCount.innerText = bakedDonut.getDonutCount();
  }

}
export default DonutClicker;