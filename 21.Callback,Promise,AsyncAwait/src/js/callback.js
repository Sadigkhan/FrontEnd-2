//JS single Threaddir lakin buna baxmayaraq asinxron isleye bilir
//Sinxron proqramlasdirmada funksiyalar ardicilliqla bir birlerini gozleyirler (biri bitir digeri baslayir)
//Asinxron proqramlasdirmada ise funksiyalar eyni anda isleyirler

// 1. Callback funksiya nedir?
// Callback funksiya basqa bir funksiyaya argument kimi verilen funksiyadir.
// Callback funksiyalar asinxron funksiyalarin icinde istifade olunur. yeniki asinxron funksiya tamamlandiginda 
//ve ya her hansi bir event bas verdiyinde callback funksiyasi ishe dushur.

// console.log(1)
// setTimeout(sayTwo,2000)
// console.log(3)



// function sayTwo(){
//     console.log(2)
// }


// const multiply = (x, y) => {
//     return x * y
//   }

//   const multiplyLogger = (x, y) => {
//     const value = multiply(x, y)
//     console.log(value)
//   }

//   multiplyLogger(2, 3)

// 3. setTimeout() funksiyasi:
// setTimeout() funksiyasi asinxron funksiyadir. setTimeout() funksiyasi 2 argument qebul edir. Birinci argument 
//callback funksiyadir. Ikinci argument ise callback funksiyasinin nece milisaniye sonra ishe dushmesi ile baglidir.
// setTimeout() funksiyasi callback funksiyasini bir defe ishe salir.


// 4. setInterval() funksiyasi:
// setInterval() funksiyasi asinxron funksiyadir. setInterval() funksiyasi 2 argument qebul edir. Birinci argument
// callback funksiyadir. Ikinci argument ise callback funksiyasinin nece milisaniyeden bir tekrar ishe dushmesi ile baglidir.
// setInterval() funksiyasi callback funksiyasini tekrar tekrar ishe salir.


//sinxron callback

// function Greet(ad) {
//     console.log(`Salam, ${ad}!`);
// }


// function userLogin(callbackFunction) {
//     const username = prompt("Enter your name:");
//     callbackFunction(username);
// }

// userLogin(Greet);

//asinxron

// function Greet(ad) {
//     console.log(`Salam, ${ad}!`);
// }


// function userLogin(callbackFunction) {
//     setTimeout(() => {
//         const username = prompt("Enter your name:");
//         callbackFunction(username);
//     }, 2000)
// }

// userLogin(Greet);


//asinxron callback AJAX
// function getData(url,callbackFunction){
//     const xhr = new XMLHttpRequest();
//     xhr.open("GET",url);
//     xhr.onload=function(){
//         if(xhr.status===200){
//             callbackFunction(xhr.responseText);
//         }else{
//             console.error("Xeta bas verdi")
//         }
//     }
//     xhr.send();
    
// }

// getData("https://jsonplaceholder.typicode.com/users",(data)=>{
//     console.log(data)
// });


// 5. Callback hell:
// Callback hell funksiyalarin bir birinin icinde istifade olunmasi ile yaranir.
// Callback hell probleminin helli ise Promise ve Async/Await

// setTimeout(function () {
//     console.log("1");
//     setTimeout(function () {
//         console.log("2");
//         setTimeout(function () {
//             console.log("3");
//             setTimeout(function () {
//                 console.log("4");
//             }, 1000);
//         }, 1000);
//     }, 1000);
// }, 1000);
//her bir netice 1 saniye gozleme ile konsola cixardilir

