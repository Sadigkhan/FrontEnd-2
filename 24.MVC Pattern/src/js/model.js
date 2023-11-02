export default class Model{
    constructor(){
        this.count = 0; 
    }

    increase(){
        this.count++;
    }

    decrease(){
        if(this.count<=0){
            this.count = 0;
        }else{
            this.count--;
        }
    }
}