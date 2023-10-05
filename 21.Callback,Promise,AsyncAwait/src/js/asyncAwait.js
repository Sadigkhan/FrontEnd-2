// // bir funkisiyanin asinxron teyin etmek  ucun async yaziriq
// // async yazdigimiz zaman bu funksiya mutleq promise qaytarir

// async function sayHello() {
//     await fetch("")
// }

// // async funksiyalarin icinde await yazdigimiz zaman funksiya promise qaytarmalidir
// // await yazdigimiz zaman funksiya bitene qeder kodlarin islemesini dayandirir


// async function Murad(){
//     await function1
//     await function2
// }
// async function Murad(){
//     await function1
//     await function2
// }
// async function Murad(){
//     await function1
//     await function2
// }
// async function Murad(){
//     await function1
//     await function2
// }




// function resolveAfter2Secs(){
//     return new Promise((resolve)=>{
//         setTimeout(()=>{
//             resolve("Process tamamlandi")
//         },1000)
//     })
// }


// function resolveAfter3Secs(){
//     return new Promise((resolve)=>{
//         setTimeout(()=>{
//             resolve("3 saniyelik Process tamamlandi")
//         },1000)
//     })
// }


// async function asyncCall(){
//     console.log("Calling")
//     const result= await resolveAfter2Secs()
//     // console.log(result)
//     const result2=await resolveAfter3Secs()
//     // console.log(result2)
//     console.log("asinxronluq bitdi")

// }

// asyncCall()


// const myList=[];

// async function fetcData(){
//     try{
//         const response=await fetch("https://jsonplaceholder.typicode.com/posts/")
//         console.log(response)
//         const data= await response.json()
//         console.log(data)
//         myList.push(data)
//         console.log(myList)

//     }catch(err){
//         console.error(err)
//     }
// }

// fetcData()



// console.log(1)

// setTimeout(() => {
//     console.log(2)
// }, 1000);

// console.log(3)

// setTimeout(() => {
//     console.log(4)
//     setTimeout(() => {
//         console.log(5)
//     }, 1000);
//     new Promise((resolve, reject) => {
//         console.log(6)
//         resolve()
//     }).then(() => {
//         console.log(7)
//     })
// }, 0);

// new Promise((resolve, reject) => {
//     console.log(8)
//     resolve()
// }).then(() => {
//     console.log(9)
// })

// console.log(10)


console.log(null==0)
console.log(null>0)
console.log(null<=0)

