document.addEventListener("DOMContentLoaded",()=>{

    //slide
    const slide = document.querySelectorAll(".train>li")
    let count = 0

    setInterval(()=>{
        count++
        if(count>2){count=0}
        slide.forEach((on)=>{on.classList.remove("on")})
        slide[count].classList.add("on")
    },800)

    //popup
    const popup = document.querySelector(".popup")
    const btnPopup = document.querySelector(".btn-popup")
    const btnClose = document.querySelector(".btn-close")

    btnPopup.addEventListener("click",()=>{
        popup.classList.add("on")
    })

    btnClose.addEventListener("click",()=>{
        popup.classList.remove("on")
    })


    //tab
    const tabs = document.querySelectorAll(".tabs>span")
    const tabDesc = document.querySelectorAll(".tab-desc>ul")

    tabs.forEach((tab,i)=>{
        tab.addEventListener("click",()=>{
            tabs.forEach((a)=>{a.classList.remove("on")})
            tabs[i].classList.add("on")
            tabDesc.forEach((a)=>{a.classList.remove("on")})
            tabDesc[i].classList.add("on")
        })
    })
})