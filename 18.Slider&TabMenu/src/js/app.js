let prevBtn=document.getElementById("prevBtn")
let nextBtn=document.getElementById("nextBtn")
let sliderImg=document.getElementById("sliderImg")
let sliderContainer=document.querySelector(".slider-container")

let images=[
    "src/images/Draven_29.jpg",
    "src/images/draven.jpeg",
    "src/images/draven2.jpeg",
]
let currentIndex=0;

function Slider(){
    if(currentIndex<0){
        currentIndex=images.length-1
    }else if(currentIndex>=images.length){
        currentIndex=0
    }
    sliderImg.src=images[currentIndex]
}


prevBtn.addEventListener("click",function(){
    currentIndex--
    Slider()
})

nextBtn.addEventListener("click",function(){
    currentIndex++
    Slider()
})

let autoSlider=setInterval(function(){
    currentIndex++
    Slider()
},2000)


// let autoPlay;
// function autoSlider(){
//     autoPlay=setInterval(function(){
//         currentIndex++
//         Slider()
//     },2000)
// }

// autoSlider()
sliderContainer.addEventListener("mouseenter",function(){
    // clearInterval(autoPlay)
    clearInterval(autoSlider)
})
sliderContainer.addEventListener("mouseleave",function(){
    // autoSlider()
    autoSlider=setInterval(function(){
        currentIndex++
        Slider()
    },2000)
})



let tabs=document.querySelectorAll(".tabs div")
let contents=document.querySelectorAll(".content div")

for(let tab of tabs){
    tab.addEventListener("click",function(){
        let activeTab=document.querySelector(".active")
        activeTab.classList.remove("active")
        this.classList.add("active")

        let index=this.getAttribute("data-index")
        for(let content of contents){
            if(index==content.getAttribute("data-index")){
                content.classList.add("show")
            }else{
                content.classList.remove("show")
            }
        }
    })
}
