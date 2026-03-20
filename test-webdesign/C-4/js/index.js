document.addEventListener("DOMContentLoaded",()=>{
    const slide = document.querySelector(".train")
    let count = 0

    setInterval(()=>{
        count++
        if(count>2){count=0}
        slide.style.transform=`translateX(${-33.33*count}%)`
    }
        ,800)

    const modal = document.querySelector(".modal")
    const popup = document.querySelector(".popup")
    const btnClose = document.querySelector(".btn-close")
    const btnPopup = document.querySelector(".btn-popup")

    btnPopup.addEventListener("click",()=>{
        modal.classList.add("on")
        popup.classList.add("on")
    })
    btnClose.addEventListener("click",()=>{
        modal.classList.remove("on")
        popup.classList.remove("on")
    })

})