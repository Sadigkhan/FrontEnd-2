// const dropArea=document.getElementById("drop-area")
// const video=document.getElementById("video")
let output=document.getElementById("output")

// dropArea.addEventListener("dragover", (event) => {
//     event.preventDefault()
// })

// dropArea.addEventListener("drop",(event)=>{
//     event.preventDefault()

//     // console.log(event.dataTransfer.files)
//     const files=event.dataTransfer.files;
//     if(files.length>0){
//         const file=files[0];
//         // console.log(file)
//         if(file.type.startsWith("image/")){
//             const reader=new FileReader();
//             reader.onload=(event)=>{
//                 const image=new Image();
//                 // console.log(image)
//                 // console.log(event.target.result)
//                 image.src=event.target.result;
//                 image.style.maxWidth=100+"%";
//                 image.style.maxHeight=100+"%";
//                 dropArea.innerHTML="";
//                 dropArea.appendChild(image);
//             }
//             reader.readAsDataURL(file);
//         }else if(file.type.startsWith("video/")){
//             const objectURL=URL.createObjectURL(file);
//             video.src=objectURL;
//             video.play();
//         }else if(file.type==="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"){
//             const reader=new FileReader();
//             // console.log(reader)
//             reader.onload=(event)=>{
//                 const data=new Uint8Array(event.target.result);
//                 // console.log(data)
//                 const workbook=XLSX.read(data,{type:"array"});
//                 // console.log(workbook)
//                 const sheetName=workbook.SheetNames[0]
//                 // console.log(sheetName)
//                 const sheet=workbook.Sheets[sheetName]
//                 // console.log(sheet)
//                 const htmlTable=XLSX.utils.sheet_to_html(sheet)
//                 output.innerHTML=htmlTable;
//             }
//             reader.readAsArrayBuffer(file);
//         }
//     }
 
// })



//multiple file dropping

// dropArea.addEventListener("drop",(event)=>{
//     const files=event.dataTransfer.files;
//     const fileArray=Array.from(files)

//     fileArray.forEach((file)=>{
//         const reader=new FileReader();
//         reader.onload=(event)=>{
//             const image=new Image();
//             image.src=event.target.result;
//             image.style.maxWidth=100+"%";
//             image.style.maxHeight=100+"%";
//             dropArea.appendChild(image);
//         }
//         reader.readAsDataURL(file);
//     })
// })


document.addEventListener("DOMContentLoaded",function(){

    const fetchBtn=document.getElementById("fetchBtn")

    fetchBtn.addEventListener("click",function(){
        fetch("https://randomuser.me/api/?results=100")
    .then((response)=>response.json())
    .then((data)=>{
        let users=data.results
        users.forEach((user)=>{
            output.innerHTML+=`
            <div class="card">
            <div class="card-image">
                <img src="${user.picture.large}" alt="">
            </div>
            <div class="card-body">
                <p>${user.name.title} ${user.name.first} ${user.name.last}</p>
                <p>${user.location.street.name}</p>
                <p>${user.dob.age}</p>
            </div>
        </div>
            `
        })
    })
    })

    fetch("https://randomuser.me/api/?results=100")
    .then((response)=>response.json())
    .then((data)=>{
        let users=data.results
        users.forEach((user)=>{
            output.innerHTML+=`
            <div class="card">
            <div class="card-image">
                <img src="${user.picture.large}" alt="">
            </div>
            <div class="card-body">
                <p>${user.name.title} ${user.name.first} ${user.name.last}</p>
                <p>${user.location.street.name}</p>
                <p>${user.dob.age}</p>
            </div>
        </div>
            `
        })
    })
})

