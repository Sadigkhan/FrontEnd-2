export default class CounterModel{
    #count=0;

    inc(){
        this.#count++;
    }

    dec(){
        if(this.#count<=0){
            this.#count=0;
        }else{
            this.#count--;
        }
    }

    get count(){
        return this.#count;
    }

   

}