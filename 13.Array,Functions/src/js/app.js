let people = ["Ayten", "Natavan", "Kamran", "Simon", "Rafail", "Vuqar"];
let people2 = ["Ayten2", "Natavan2", "Kamran2", "Simon2", "Rafail2", "Vuqar2"];
// let anotherPeople=[];
// anotherPeople[0]="Tural";
// anotherPeople[1]="Azer";
// anotherPeople[2]="Shekili";
// anotherPeople[4]="Eziz";


// console.log(typeof anotherPeople[3]);

// let names= new Array();
// names[0]="ayten";
// names[1]="ayten";
// names[2]="ayten";
// names[3]="ayten";
// console.log(people);
// console.log(people.toString())
// console.log(people.join(" --- "))
// console.log(people)
// console.log(people.pop());
// console.log(people);

// console.log(people.push("Adil"));
// console.log(people);

// console.log(people.shift());
// console.log(people);

// console.log(people.unshift("Adil"));
// console.log(people);
// console.log(people[people.length-1])
// people[people.length]="Adil";
// console.log(people);

// console.log(people.concat(people2));

// console.log(people)

// console.log(people.splice(2,0,"Adil","Tural"));
// console.log(people);

// let numbers=[[1,2,[12,11,[13,14,[15,16,[18,19]]]]],[3,4],[5,6]]
// console.log(numbers)
// console.log(numbers.flat(Infinity))

// class Insan{
//     constructor(ad,soyad,yas){
//         this.ad=ad;
//         this.soyad=soyad;
//         this.yas=yas;

//     }
// }

// let Natavan = new Insan("Natavan","Nagiyeva",35);
// console.log(typeof Natavan);


// function Toplama(a,b){
//     console.log(a+b);
// }


// Toplama(5,6)


//function declaration
// Topla(5,6)

// function Topla(a,b){
//     console.log(a+b);
// }


//function expression

// Toplama(5,6)


// let Toplama=function(a,b){
//     return a+b;
// }


//Arrow function

// let Toplama=(a,b)=>{
//     return a+b;
// }

// let Toplama2=a=>a;

// console.log(Toplama2(5))

// let btn1=document.getElementById("first");
// let btn2=document.getElementById("second");


// let First=()=>console.log(this)



// let Second=function(){
//     console.log(this)
// }


// btn1.addEventListener("click",First)
// btn2.addEventListener("click",Second)


// const Sum = function (a) {
//     return function (b) {
//         return function (c) {
//             return a + b + c;
//         }
//     }
// }




// // let result = Sum

// console.log(result)

// (function () {
//     Cixma(1,5)
// }())


// function Cixma(a,b){
//     console.log(a-b);
// }
// class Human{
//     constructor(ad,soyad,yas){
//         this.ad=ad;
//         this.soyad=soyad;
//         this.yas=yas;
//     }
//     fullName(){
//         return this.ad+" "+this.soyad;
//     }
//     static sayHello(){
//         console.log("Hello")
//     }
// }

function Person(ad,soyad,yas){
        this.ad=ad;
        this.soyad=soyad;
        this.yas=yas;
        this.fullName = ()=> {
            return this.ad+" "+this.soyad;
        }
}

let Natavan=new Person("Natavan","Nagiyeva",35);

console.log(Natavan.fullName())


