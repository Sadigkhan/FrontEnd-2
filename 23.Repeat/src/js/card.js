let cardRow=document.querySelector("#Card .container .row")
let cardHTML=" "

let basket=JSON.parse(localStorage.getItem("basket"))

basket.forEach(cardElement => {
    cardHTML+=`
    <div class="col-lg-4">
                    <div class="top">
                        <img  style="max-width: 100%;" src="${cardElement.image}" alt="">
                    </div>
                    <div class="bottom">
                        <h4>${cardElement.title}</h4>
                        <h4>${cardElement.price}</h4>
                        <h4>${cardElement.count}</h4>
                    </div>
                </div>
    `
});
cardRow.innerHTML=cardHTML