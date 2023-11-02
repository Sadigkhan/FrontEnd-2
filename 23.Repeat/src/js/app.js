if (localStorage.getItem("basket")) {
    let basket=JSON.parse(localStorage.getItem("basket"))
    console.log(basket.length)
} else {
    localStorage.setItem("basket", JSON.stringify([]))
}

let row = document.querySelector("#All-prods .container .row")
let prodsHTML = " "

fetch("https://fakestoreapi.com/products")
    .then(response => response.json())
    .then(data => {
        data.forEach(product => {
            prodsHTML += `
           <div class="card mb-4" style="width: 18rem;">
           <img class="card-img-top" src="${product.image}" alt="Card image cap">
           <div class="card-body">
               <h5 class="card-title">${product.title}</h5>
               <p class="card-text">${product.price}</p>
               <a href="#" data-id="${product.id}" class="btn btn-primary add-basket">Add Basket</a>
           </div>
       </div>
           `
        });
        row.innerHTML = prodsHTML
        let addBtns = document.querySelectorAll(".add-basket")
        let basket = JSON.parse(localStorage.getItem("basket"))
        let prodID;
        addBtns.forEach(addBtn => {
            addBtn.addEventListener("click", function (e) {
                e.preventDefault();
                prodID=e.target.getAttribute("data-id")
                let product=data.find(data=>data.id==prodID)
                let {id,title,price,image}=product
                let exist=basket.find(item=>item.id==prodID)
                if(exist){
                    exist.count++;
                }else{
                    basket.push({
                        id,
                        title,
                        price,
                        image,
                        count:1
                    })
                }
                console.log(basket.length)
                localStorage.setItem("basket",JSON.stringify(basket))
                // console.log(basket)

            })
        })
    })




























// let basket=JSON.parse(localStorage.getItem("basket"))
// let prodId;
// addBtns.forEach(btn=>{
//     btn.addEventListener("click",function(e){
//         prodId=e.target.getAttribute("data-id")
//         let product=data.find(item=>item.id==prodId)
//         const { id,price,title,image }=product


//         let exist=basket.find(exst=>exst.id==prodId)
//         if(exist){
//             exist.count++
//         }else{
//             basket.push({
//                 id,
//                 price,
//                 title,
//                 image,
//                 count:1
//             })
//         }

//         localStorage.setItem("basket",JSON.stringify(basket))