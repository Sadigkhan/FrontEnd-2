import CounterModel from "./CounterModel.js";
import CounterViewModel from "./CounterViewModel.js";


function intialise(){
    const counterViewModel=new CounterViewModel(new CounterModel())
    counterViewModel.init()
}

window.addEventListener("DOMContentLoaded",intialise)