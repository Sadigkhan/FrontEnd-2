export default class View {
    constructor() {
        this.gameContainer = document.querySelector(".container");
        this.buttons = this.gameContainer.querySelectorAll("button");
        this.modal = document.querySelector(".modal");
        this.overlay = document.querySelector(".overlay");
        this.message = document.querySelector(".message");
        this.newGameBtn = document.querySelector(".new");
        this.resetBtn = document.querySelector(".reset");

    }


    listenButtonClick(callback) {

    }

    listenNewGameBtnClick(callback) {

    }

    listenResetBtnClick(callback) {

    }

    addToBoard(board) {

    }


    switchBtnClass(curPlayer, btn) {
        btn.classList.remove("btn_x");
        btn.classList.remove("btn_o");
        curPlayer === "X" ? btn.classList.add("btn_x") : btn.classList.add("btn_o");
    }

    showModal(winner) {

    }

    hideModal(){

    }


    manageScore(xScore, oScore) {

    }


}