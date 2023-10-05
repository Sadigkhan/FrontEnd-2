//Promise

// 1. Promise nedir?
//Promise gelecekde tamamlanacaq bir asinxron funksiyani temsil eden bir JavaScript obyektidir.
//Funksiya tamamlandiginda prossesin ugurlu (resolved) ve ya ugursuz (rejected) oldugunu gosteren
//bir netice (result) donur (return).


// function promiseReturner(){
//     return new Promise((resolve,reject)=>{
//         resolve("Ugurlu")
//     })
// }

// 2. Promise obyektinin 3 esas statusu var:
// a. Pending: Promise yaradildiqdan sonra ve ya resolve ve reject metodu cagirilmadan evvel statusu pendingdir.
// b. Resolved: Promise funksiyasi ugurla tamamlandiginda statusu resolved olur.
// c. Rejected: Promise funksiyasi ugursuz tamamlandiginda statusu rejected olur.


// 3. Promise yaradilmasi:

// const promise = new Promise(function (resolve, reject) {
//     // resolve("Success");
//     reject("Xeta");
// });

// console.log(promise)


// 4. Promise funksiyasinin ishlemesi:
// Promise funksiyasi resolve ve ya reject metodu ile ishleyir.


// 5. Promise funksiyasinin ishlemesi ucun 2 funksiya istifade olunur:
// a. then(): Promise funksiyasi ugurla tamamlandiginda ishleyen funksiyadir.
// b. catch(): Promise funksiyasi ugursuz tamamlandiginda ishleyen funksiyadir.

// promise
// .then((data)=>{
//     console.log(data)
// })
// .catch((err)=>{
//     console.log(err)
// })

//Promise chaining

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


// function wait(ms){
//     return new Promise((resolve,reject)=>{
//         setTimeout(resolve,ms)
//     })
// }


// wait(1000)
//     .then(function(){
//         console.log(1)
//         return wait(1000)
//     })
//     .then(function(){
//         console.log(2)
//         return wait(1000)
//     })
//     .then(function(){
//         console.log(3)
//         return wait(1000)
//     })
//     .then(function(){
//         console.log(4)
//         return wait(1000)
//     })

// 7. Promise.all() funksiyasi:
// Promise.all() funksiyasi bir nece promise obyektini birlesdirib birlesdirmemesine baxmir ve
// butun promise obyektlerinin tamamlanmasini gozleyir.
// Promise.all() funksiyasi 1 argument qebul edir. Bu argument bir array olmalidir.
// Promise.all() funksiyasi butun promise obyektlerinin tamamlanmasini gozleyir ve butun promise obyektleri
// tamamlandiqda ishleyir.Eger bir promise obyekti ugursuz tamamlanarsa butun promise obyekti ugursuz tamamlanir.
// Promise.all() funksiyasi butun promise obyektlerinin neticelerini array olaraq qaytarir.
//Harda istifade olunur? Bir nece asinxron funksiyalarin neticelerini birlesdirmek ucun istifade olunur.


// const promise1 = asyncFuntion1("API");
// const promise2 = asyncFuntion2("API");
// const promise3 = asyncFuntion3("API");

// Promise.all([promise1, promise2, promise3])
//     .then(results => {
//         // Butun Promise'ler ugurlu olduğunda isleyecek kod
//     })
//     .catch(error => {
//         // En az bir Promise ugursuz olduğunda isleyecek kod
//     });




// const apiEndpoint1 = "https://api.github.com/users/1";
// const apiEndpoint2 = "https://api.github.com/users/2";
// const apiEndpoint3 = "https://api.github.com/users";


// function fetchApi(apiEndpint) {
//     return new Promise((resolve, reject) => {
//         fetch(apiEndpint)
//             .then((response) => {
//                 if (response.status === 200) {
//                     resolve(response.json())
//                 } else {
//                     reject(new Error("Data cekilmesi zamani xeta bas verdi"))
//                 }
//             })
//             .catch((err) => {
//                 alert(err)
//             })
//     })
// }

// const promise1 = fetchApi(apiEndpoint1)
// const promise2 = fetchApi(apiEndpoint2)
// const promise3 = fetchApi(apiEndpoint3)


// Promise.all([promise1, promise2, promise3])
//     .then((datas) => {
//         datas.forEach(data => {
//             console.log(data)
//         })
//     })
//     .catch((err) => {
//         alert(err)
//     })



// const promise1 = new Promise((resolve, reject) => {
//     setTimeout(resolve, 500, 'one');
//   });
  
//   const promise2 = new Promise((resolve, reject) => {
//     setTimeout(reject, 100, 'two');
//   });
  
// //   Promise.race([promise1, promise2]).then((value) => {
// //     console.log(value);
// //   });
  



//   Promise.any([promise1, promise2]).then((value) => {
//     console.log(value);
//   });