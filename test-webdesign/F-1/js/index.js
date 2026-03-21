document.addEventListener("DOMContentLoaded",()=>{

    const popup = document.querySelector(".popup")
    const btnPopup = document.querySelector(".btn-popup")
    const btnClose = document.querySelector(".btn-close")

    btnPopup.addEventListener("click",()=>{
        popup.classList.add("on")
    })
    btnClose.addEventListener("click",()=>{
        popup.classList.remove("on")
    })

    const slide = document.querySelectorAll(".train>li")
    count=0
    setInterval(()=>{
        count++
        if(count>2){count=0}
        slide.forEach((on)=>{on.classList.remove("on")})
        slide[count].classList.add("on")
    },800)

    const tabs = document.querySelectorAll(".tabs>span")
    const tabsDesc = document.querySelectorAll(".tabs-desc>ul")

    tabs.forEach((tab,i)=>{
        tab.addEventListener("click",()=>{

            tabs.forEach((span)=>{span.classList.remove("on")})
            tabs[i].classList.add("on")
            tabsDesc.forEach((ul)=>{ul.classList.remove("on")})
            tabsDesc[i].classList.add("on")

        })
    })

})