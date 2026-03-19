document.addEventListener("DOMContentLoaded",()=>{

    //슬라이드
    let count = 0
    const slide = document.querySelector(".train")

    setInterval(()=>{
        
        count++
        if(count>2){count=0
            // slide.style.transform=(`translateX(0%)`)
        }
        slide.style.transform=(`translateX(${-33.33*count}%)`)
        slide.style.transition=(`all 0.5s ease 0s`)

    },1000)

    //팝업
    const btnClose = document.querySelector(".btn-close")
    const btnPopup = document.querySelector(".btn-popup")
    const popup = document.querySelector(".popup")

    btnPopup.addEventListener('click',()=>{
        popup.classList.add("on")
    })
    btnClose.addEventListener('click',()=>{
        popup.classList.remove("on")
    })

    //탭메뉴
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