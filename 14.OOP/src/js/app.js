// // // // // foreach
// // // // // let salary = [100, 200, 300, 400, 5000];
// // // // // numbers.forEach( (number) =>{
// // // // //     console.log(number);
// // // // // });

// // // // //for
// // // // // for (let i=0; i<numbers.length; i++){
// // // // //     console.log(numbers[i]);
// // // // // }

// // // // //for of
// // // // // for (let number of numbers){
// // // // //     console.log(number);
// // // // // }

// // // // //for in

// // // // // for(let index in numbers){
// // // // //     console.log(numbers[index]);
// // // // // }

// // // // //while
// // // // // let i=0;
// // // // // while(i<numbers.length){
// // // // //     console.log(numbers[i]);
// // // // //     i++;
// // // // // }

// // // // //do while
// // // // // let i = 0;
// // // // // do {
// // // // //     console.log(numbers[i]);
// // // // //     i++;
// // // // // } while (i < numbers.length);


// // // // //map
// // // // // let newsalary= salary.map((item)=>{
// // // // //     return item*2;
// // // // // });

// // // // // console.log(newsalary);
// // // // // console.log(salary);


// // // // // function Person(name, age) {
// // // // //     this.name = name;
// // // // //     this.age = age;
// // // // // }



// // // // // class Human{
// // // // //     constructor(name, age){
// // // // //         this.name = name;
// // // // //         this.age = age;
// // // // //     }
// // // // //     sayHi(){
// // // // //         console.log(`Hi, my name is ${this.name}`);
// // // // //     }
// // // // // }

// // // // // class Developer extends Human{
// // // // //     constructor(name, age, skill){
// // // // //         super(name, age);
// // // // //         this.skill = skill;
// // // // //     }
// // // // //     sayHi(){
// // // // //         super.sayHi();
// // // // //         console.log(`I am a ${this.skill} developer`);
// // // // //     }
// // // // // }


// // // // // let developer = new Developer('John', 30, 'Javascript');
// // // // // developer.sayHi();
// // // // // let num=5
// // // // // console.log(typeof num)
// // // // // let number=new Number(5)
// // // // // console.log(typeof number)

// // // // // console.log(String.prototype.__proto__)  

// // // // // let x=5;
// // // // // x=6;
// // // // // console.log(x)


// // // // // const person={
// // // // //     name:'John',
// // // // //     surname:'Doe',
// // // // //     age:30,
// // // // //     getFullName:function(){
// // // // //         return `${this.name} ${this.surname}`
// // // // //     },
// // // // //     sayHi(){
// // // // //         return `Hi, my name is ${this.name}`
// // // // //     }

// // // // // }

// // // // // console.log(person.sayHi())


// // // // // const person = new Object({name:"John", surname:"Doe", age:30})

// // // // // const person=new Object();
// // // // // person.name="John";
// // // // // person.surname="Doe";
// // // // // person.getFullName=function(){
// // // // //     return `${this.name} ${this.surname}`
// // // // // };

// // // // // console.log(person.getFullName());

// // // // //object literal
// // // // // const person={
// // // // //     name:'John',
// // // // //     surname:'Doe',
// // // // //     age:30,
// // // // //     getFullName:function(){
// // // // //         return `${this.name} ${this.surname}`
// // // // //     }
// // // // // }

// // // // // let ad="getFullName";
// // // // // console.log(person.name)
// // // // // console.log(person["name"])
// // // // // console.log(person[ad]())


// // // // // let x=person;
// // // // // x.name="Jane";
// // // // // let c=x;
// // // // // c.name="Jack";
// // // // // let y=c;
// // // // // y.name="Jim";
// // // // // console.log(person.name);
// // // // // console.log(x.name);
// // // // // console.log(c.name);
// // // // // console.log(y.name);

// // // // // const person={
// // // // //     name:"",
// // // // //     surname:"",
// // // // // }

// // // // // // person.name="John";
// // // // // // person.surname="Doe";
// // // // // // console.log(person);
// // // // // let John=Object.create(person);
// // // // // John.name="John";
// // // // // John.surname="Doe";
// // // // // console.log(John);


// // // // // const person = {
// // // // //     ad: "Elsen",
// // // // //     soyad: "Memmedov",
// // // // //     cars: [
// // // // //         {name:"Ford", models:["Fiesta", "Focus", "Mustang"]},
// // // // //         {name:"BMW", models:["320", "X3", "X5"]},
// // // // //         {name:"Fiat", models:["500", "Panda"]}
// // // // //       ]
// // // // // }

// // // // // person.cars.forEach((car)=>{
// // // // //     console.log(car.name)
// // // // //     car.models.forEach((model)=>{
// // // // //         console.log(model)
// // // // //     })
// // // // // })  

// // // // // let milliyet="milliyet"
// // // // // console.log(person)
// // // // // person[milliyet]="Azerbaycanli"
// // // // // console.log(person)


// // // // // Object.freeze(person)
// // // // // delete person.ad
// // // // // console.log(person)

// // // // // class Human {
// // // // //     constructor(name, surname) {
// // // // //         this.name = name;
// // // // //         this.surname = surname;
// // // // //     }
// // // // //     getFullName() {
// // // // //         return `${this.name} ${this.surname}`
// // // // //     }
// // // // // }

// // // // // class Developer extends Human {
// // // // //     constructor(name, surname, skill) {
// // // // //         super(name, surname);
// // // // //         this.skill = skill;
// // // // //     }
// // // // //     getFullName() {
// // // // //         return `${super.getFullName()} - ${this.skill} developer`
// // // // //     }
// // // // // }

// // // // // let developer = new Developer('John', 'Doe', 'Javascript');

// // // // // delete Human.prototype.name;
// // // // // console.log(developer)




// // // // // Define a constructor function
// // // // function Person(name) {
// // // //     this.name = name;
// // // // }



// // // //  //Add a method to the prototype
// // // //   Person.prototype.greet = function () {
// // // //     console.log(`Hello, my name is ${this.name}`);
// // // //   };

// // // //   console.log(Person.prototype)
// // // //   // Create an instance
// // // //   const person1 = new Person("Alice");

// // // //   // Create another instance
// // // //   const person2 = new Person("Bob");

// // // // //   // Call the greet method for person1
// // // // //   person1.greet(); // Output: Hello, my name is Alice

// // // // //   // Call the greet method for person2
// // // // //   person2.greet(); // Output: Hello, my name is Bob

// // // //   // Delete the name property in person1
// // // // //   delete person1.name;

// // // // //   // Call the greet method for person1 again
// // // // //   person1.greet(); // Output: Hello, my name is undefined

// // // // //   // Call the greet method for person2 again
// // // // //   person2.greet(); // Output: Hello, my name is Bob

// // // //   // Delete the greet method in the prototype
// // // //   delete Person.prototype.greet;
// // // //     person1.greet=function(){
// // // //         console.log(`Hi, my name is ${this.name}`)
// // // //     }
// // // //     person2.greet=function(){
// // // //         console.log(`Hi, my name is ${this.name}`)
// // // //     }
// // // //     console.log(person1)
// // // //     console.log(person2)
// // // //     console.log(Person.prototype)
// // // //   // Call the greet method for person1 one more time
// // // //   person1.greet(); // Error: person1.greet is not a function

// // // //   // Call the greet method for person2
// // // // //   person2.greet(); // Error: person2.greet is not a function








// // // const person = {
// // //     name: "John",
// // //     age: 30,
// // //     city: "New York",
// // //     sayHi: function () {
// // //         return `Hi, my name is ${this.name}`;
// // //     }
// // // };

// // // person.sayHi =person.sayHi.toString()

// // // //   let txt = "";
// // // //   for (let x in person) {
// // // //   txt += person[x] + " ";
// // // //   };


// // // let myString = JSON.stringify(person)
// // // console.log(myString)
// // // document.getElementById("body").innerHTML = myString
// // // // console.log(Object.values(person))



// // const person = {
// //     name: "",
// //     surname: "",
// //     age: 0,
// //     get Name() {
// //         return this.name;
// //     },
// //     set setName(value) {

// //         if(value.trim().length>2){
// //             this.name = value;
// //         }else{
// //             console.log("name is too short")
// //         }
// //     },
// //     set setSurname(value) {
// //         if(value.trim().length>5){
// //             this.surname = value;
// //         }else{
// //             console.log("surname is too short")
// //         }
// //     },
// //     get FullName() {
// //         return `${this.name} ${this.surname}`
// //     },
// //     getFullName:function(){
// //         return `${this.name} ${this.surname}`
// //     }
// // }

// // person.setName = "John";
// // person.setSurname = "Feteliyev";
// // console.log(person.FullName)



// // Define object
// const obj = {
//     counter: 0
// };

// // Define setters and getters
// Object.defineProperty(obj, "reset", {
//     get: function () {
//         this.counter = 0;
//     }
// });
// Object.defineProperty(obj, "increment", {
//     get: function () {
//         this.counter++;
//     }
// });
// Object.defineProperty(obj, "subtract", {
//     set: function (value) {
//         this.counter -= value;
//     }
// });
// Object.defineProperty(obj, "decrement", {
//     get: function () {
//         this.counter--;
//     }
// });
// Object.defineProperty(obj, "add", {
//     set: function (value) {
//         this.counter += value;
//     }
// });

// Object.defineProperty(obj, "setVal", {
//     set: function (value) {
//         this.counter = value;
//     }
// });

// // Play with the counter:
// obj.reset;
// obj.add = 5;
// obj.subtract = 1;
// obj.increment;
// obj.decrement;
// obj.add = 10;

// console.log(obj.counter)

// function Human(ad,soyad){
//     this.name=ad;
//     this.surname=soyad;
//     this.getFullName=function(){
//         return `${this.name} ${this.surname} ${Human.milliyyet}`
//     }
// }

// Human.milliyyet="Azerbaycanli"  //static property
// let person=new Human("John","Doe");
// console.log(person.getFullName())

// let person=new Human("John","Doe");
// console.log(person.getFullName())
// let person2=new Human("Jane","Doe");
// console.log(person2.getFullName())
// let person3=new Human("Jack","Doe");
// console.log(person3.getFullName())

// const person={
//     name:"John",
//     surname:"Doe",
// }
// const person2={...person, age:30}

// console.log(person2)

class String{
    constructor(value){
        this.value=value;
    }
    toString(){
        return this.value;
    }
    valueOf(){
        return this.value;
    }
  
}

let text=new String("Hello World")
console.log(text.valueOf())