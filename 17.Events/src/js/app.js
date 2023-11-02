// // let pass=document.getElementById("pass");
// // let eye=document.getElementById("eye");


// // eye.addEventListener("click",function(){
// //     if(pass.type=="password"){
// //         pass.type="text";
// //         eye.classList.replace("fa-eye","fa-eye-slash");
// //     }else{
// //         pass.type="password";
// //         eye.classList.replace("fa-eye-slash","fa-eye");
// //     }
// // });



// // let smsInp=document.getElementById("smsInp");
// // let smsLength=document.querySelector(".smsLength");
// // let smsCount=document.querySelector(".smsCount");

// //keyup //keydown //keypress
// // smsInp.addEventListener("input",function(){
// //     let inpLength=smsInp.value.length;
// //     smsLength.innerText=inpLength;
// //     smsCount.innerText=Math.ceil(inpLength/160);
// // });


// // function Change(){
// //     let inpLength=smsInp.value.length;
// //     smsLength.innerText=inpLength;
// //     smsCount.innerText=Math.ceil(inpLength/160);
// // }


// let board = document.querySelector(".board");
// let snake = document.querySelector(".snake");

// window.onkeydown = function (e) {
//         let key = e.key;
//         let left = snake.offsetLeft;
//         let top = snake.offsetTop;
//         let snakeWidth = snake.offsetWidth;
//         let snakeHeight = snake.offsetHeight;
//         let boardWidth = board.offsetWidth;
//         let boardHeight = board.offsetHeight;

//         if (key == "ArrowLeft") {
//             if (left > 0) {
//                 snake.style.left = left - 10 + "px";
//             }
//         } else if (key == "ArrowRight") {
//             if (left < boardWidth - snakeWidth) { //1516px
//                 snake.style.left = left + 10 + "px";
//             }
//         }else if(key=="ArrowUp"){
//             if(top>0){
//                 snake.style.top=top-10+"px";
//             }
//         }
//         else if(key=="ArrowDown"){
//             if(top<boardHeight-snakeHeight){
//                 snake.style.top=top+10+"px";
//             }
//         }
// }


let btn=document.getElementById("btn");

btn.addEventListener("click",function(e){
    e.preventDefault();
    console.log("clicked");
});