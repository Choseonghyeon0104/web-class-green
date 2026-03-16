document.addEventListener("DOMContentLoaded",()=>{

    const popup = document.querySelector(".popup")
    const btnClose = document.querySelector(".btn-close")
    const btnPopup = document.querySelector(".btn-popup")

    btnPopup.addEventListener("click",()=>{
        popup.classList.add("on")
    })
    btnClose.addEventListener("click",()=>{
        popup.classList.remove("on")
    })

    const train = document.querySelector(".train")
    let count = 0

    setInterval(()=>{
        count++
        if(count>2){count=0}
        train.style.transform = `translateY(${count*-33.333}%)`
    },2500)
})