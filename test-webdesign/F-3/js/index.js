document.addEventListener("DOMContentLoaded",()=>{

    const slide = document.querySelector(".train")
    let count = 0

    setInterval(()=>{
        count++
        if(count>2){count=0}
        slide.style.transform=`translateX(${-33.33*count}%)`
    }
        ,800)

    const popup = document.querySelector(".popup")
    const btnPopup = document.querySelector(".btn-popup")
    const btnClose = document.querySelector(".btn-close")

    btnPopup.addEventListener("click",()=>{
        popup.classList.add("on")
    })
    btnClose.addEventListener("click",()=>{
        popup.classList.remove("on")
    })

    const tabs = document.querySelectorAll(".tabs>span")
    const tabDesc = document.querySelectorAll(".tab-desc>ul")

    tabs.forEach((tab,i)=>{
        tab.addEventListener("click",()=>{

            tabs.forEach((span)=>{span.classList.remove("on")})
            tabs[i].classList.add("on")
            tabDesc.forEach((ul)=>{ul.classList.remove("on")})
            tabDesc[i].classList.add("on")

        })

    })
})