const donutCount = document.querySelector(".donutCount");


class DonutClicker{

    constructor() {
        this.donutCount = 0;
    }

    getDonutCount() {
        return this.donutCount;
    }

    bakeDonut() {
        this.donutCount += 1;
    }







}
export default DonutClicker;