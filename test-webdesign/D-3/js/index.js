document.addEventListener("DOMContentLoaded",()=>{

    const slide = document.querySelectorAll(".train li")
    let count = 0
    setInterval(()=>{
        count++
        if(count>2){count=0}
        slide.forEach((a)=>{a.classList.remove("on")})
        slide[count].classList.add("on")
    },2500)

    const btnPopup = document.querySelector(".btn-popup")
    const popup = document.querySelector(".popup")        
    const btnClose = document.querySelector("#btn-close")
    btnPopup.addEventListener("click",()=>{
        popup.classList.add("on")
    })
    btnClose.addEventListener("click",()=>{
        popup.classList.remove("on")
    })

    const tabs = document.querySelectorAll(".tabs>span")
    const tabDescs = document.querySelectorAll(".tab-desc>div")
    tabs.forEach((tab,i)=>{
        tab.addEventListener("click",()=>{

            tabs.forEach((span)=>{span.classList.remove("on")})
            tabDescs.forEach((div)=>{div.classList.remove("on")})
            tabs[i].classList.add("on")
            tabDescs[i].classList.add("on")

        })
    })
 


})