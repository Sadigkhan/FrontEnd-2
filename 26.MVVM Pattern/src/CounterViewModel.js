export default class CounterViewModel{
    incBtn;
    decBtn;
    display;

    constructor(model){
        this.model=model;
    }


    init(){
        this.decBtn=document.getElementById("decrease");
        this.incBtn=document.getElementById("increase");
        this.display=document.getElementById("display");

        this.incBtn.addEventListener("click",this.increase.bind(this))
        this.decBtn.addEventListener("click",this.decrease.bind(this))
    }


    increase(){
        this.model.inc()
        this.updateDisplay()
    }

    decrease(){
        this.model.dec()
        this.updateDisplay()
    }


    updateDisplay(){
        this.display.value=this.model.count
    }
}
