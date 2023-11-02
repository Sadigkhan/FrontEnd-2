let container = document.querySelector("#Products .container .row")
let productCount=document.querySelector(".productCount span")
let productPrice=document.querySelector(".productPrice span")


if (localStorage.getItem("basket") === null) {
    localStorage.setItem("basket", JSON.stringify([]))
    productCount.innerText="0";
    productPrice.innerText="0";
}else{
    let basket=JSON.parse(localStorage.getItem("basket"))
    productCount.innerText=basket.length
    let price=0;
    basket.forEach(elem=>{
        console.log(elem.count)
        price+=elem.price*elem.count
    })
    productPrice.innerText=price

}

fetch("db.json")
    .then(response => response.json())
    .then(data => {
        let html = " "
        data.products.forEach(product => {
            html += `
        <div class="col-lg-3">
        <div class="customcard">
            <div class="image">
                <img src="${product.image}" alt="">
            </div>
            <div class="content">
                <p class="title">${product.name}</p>
                <p class="price">${product.price}</p>
            </div>
            <div class="addDiv">
                <button data-price="${product.price}" data-id="${product.id}" class="addBasket">Add Basket</button>
            </div>
        </div>
    </div>
        `
        })
        container.innerHTML = html;
        let addBasketBtns = document.querySelectorAll(".addBasket")
        addBasketBtns.forEach(btn => {

         
            btn.addEventListener("click", function () {

                if (localStorage.getItem("basket") === null) {
                    localStorage.setItem("basket", JSON.stringify([]))
                }
                let basket = JSON.parse(localStorage.getItem("basket"))
                let data_id = this.getAttribute("data-id")
                let data_price = this.getAttribute("data-price")
                let exist=basket.find(a=>a.id==data_id)
                if(exist){
                    exist.count++
                }else{
                    basket.push({
                        id: data_id,
                        price: data_price,
                        count: 1
                    })
                }
                
                productCount.innerText=basket.length
                let price=0;
                basket.forEach(element=>{
                    price+=Number(element.price)*Number(element.count)
                })
                productPrice.innerText=price.toFixed(2)

                localStorage.setItem("basket",JSON.stringify(basket))
            })
        })

    })