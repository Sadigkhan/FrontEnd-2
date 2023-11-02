//DRY - Don't Repeat Yourself
//Call, Apply, Bind

// let human={
//     getDetails:function(adress,phoneNumber){
//         console.log(`Name: ${this.name}, Age: ${this.age}, City: ${this.city}, Adress:${adress}, PhoneNumber: ${phoneNumber}`)
//     }
// }



// let person1={
//     name:'John',
//     age:30,
//     city:'New York',
 
// }
// let person2={
//     name:'Toy Adami',
//     age:30,
//     city:'New York',

// }
// let person3={
//     name:'Paxlava',
//     age:30,
//     city:'Sheki',

// }


// human.getDetails.call(person1,'Baku','0555555555');
// human.getDetails.call(person2,'Baku','0502111111');
// human.getDetails.call(person3,'Baku','0777777777');


// human.getDetails.apply(person1,['Baku','0555555555']);
// human.getDetails.apply(person2,['Baku','0502111111']);
// human.getDetails.apply(person3,['Baku','0777777777']);

// let math={
//     max:function(){
//         let max=arguments[0];
//         for(let i=1;i<arguments.length;i++){
//             if(arguments[i]>max){
//                 max=arguments[i];
//             }
//         }
//         return max;
//     }
// }

// class Math{
//     static max(){
//         let max=arguments[0];
//         for(let i=1;i<arguments.length;i++){
//             if(arguments[i]>max){
//                 max=arguments[i];
//             }
//         }
//         return max;
//     }
// }

// let numbers=[1,2,3,4,5,6,15,7,8,9,10];

// console.log(Math.max.apply(0,numbers))
// console.log(Math.max(1,2,3,4,5,6,7,8,9,10))
// console.log(Math.max.apply(null,numbers))
// console.log(math.max.apply(null,numbers))
// console.log(Math.max.apply(null,numbers))
// console.log(numbers.sort((a,b)=>a-b))

//bind
// const person={
//     name:'John',
//     age:30,
//     city:'New York',
//     getDetails:function(){
//         console.log(`Name: ${this.name}, Age: ${this.age}, City: ${this.city}`)
//     }
// }

// const person2={
//     name:'Toy Adami',
//     age:30,
//     city:'New York',
// }

// person.getDetails()
// setTimeout(person.getDetails.bind(person),5000)
// let getDetails=person.getDetails.bind(person2)

// // getDetails()

// person.getDetails.bind(person2)


//XMLHttpRequest

//AJAX - Asynchronous JavaScript and XML


// let btn=document.querySelector('#btn');
let result=document.querySelector('#result');


window.addEventListener('DOMContentLoaded',function(){
    fetch("https://api.github.com/users")
    .then(response=>response.json())
    .then(users=>{
        let output='';
        users.forEach(user => {
            output+=`
            <div class="user-card">
            <div class="user-card__avatar">
                <img src="${user.avatar_url}" alt="avatar">
            </div>
            <div class="user-card__info">
                <div class="user-card__name">
                    <a href="${user.html_url}">${user.login}</a>
                </div>
                <div class="user-card__email">${user.type}</div>
            </div>
        </div>
            `
        });
        result.innerHTML=output;
    })
})


               


// window.addEventListener('DOMContentLoaded',function(){
//     let xhr=new XMLHttpRequest();
//     //github users api
//     xhr.open("GET","https://api.github.com/users");

//     xhr.onload=function(){
//         // console.log(this.status)
//         if(this.status===200){
//             // console.log(this.responseText)
//             let users=JSON.parse(this.responseText);
//             console.log(users)
//             let output='';
//             users.forEach(user => {
//                 output+=`
//                 <div class="user-card">
//                 <div class="user-card__avatar">
//                     <img src="${user.avatar_url}" alt="avatar">
//                 </div>
//                 <div class="user-card__info">
//                     <div class="user-card__name">
//                         <a href="${user.html_url}">${user.login}</a>
//                     </div>
//                     <div class="user-card__email">${user.type}</div>
//                 </div>
//             </div>
                
//                 `
//             });
//             result.innerHTML=output;
//         }
//     }


//     xhr.send()
// })
