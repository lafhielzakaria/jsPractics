    let box =   document.getElementById("dragBox");
    let dropZone = document.getElementById("dropZone")
   box.addEventListener("dragstart",(e)=>{
    console.log(e.target.id)
    e.target.style.opacity = "30%"    
})
box.addEventListener("dragend",(e)=>{
    e.target.style.opacity = "100%"    

})
dropZone.addEventListener("dragover",(e)=>{
    e.preventDefault();
    dropZone.appendChild(box)           
})
dropZone.addEventListener("dragend",(e)=>{
    console.log("sss")
  
})