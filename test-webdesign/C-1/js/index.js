document.addEventListener("DOMContentLoaded",()=>{
    //popup
    const btnPopup = document.querySelector(`#btn-popup`)
    const popup = document.querySelector(`.popup`)
    const btnClose =document.querySelector(`#btn-close`)
    btnPopup.addEventListener("click",()=>{
        popup.classList.add("on")
    })
    btnClose.addEventListener("click",()=>{
        popup.classList.remove("on")
    })

    //slide
    //3초마다 .train>li 태그 3개가 on클래스가 지워지고 순번에 맞는 li태그한테 on클래스가 들어가면 된다.
    const slides = document.querySelectorAll(".train>li")
    let count = 0
    setInterval(()=>{
        count++
        if(count>2){count=0}
        slides.forEach((slide)=>{slide.classList.remove("on")})
        //3개의 li태그에 on클래스를 지운다.
        slides[count].classList.add("on")
    },2500)

    //tabs
    const tabs = document.querySelectorAll(".tabs>span")
    const tabsDesc = document.querySelectorAll(".tab-desc>div")
    //forEach 함수의 2번째 인자가 가르키는건 각 원소의 순번
    tabs.forEach((tab,i)=>{
        tab.addEventListener("click",()=>{
            //2개의 탭 내용에 on클래스를 다 지운다.
            tabsDesc.forEach((div)=>{div.classList.remove("on")})
            tabsDesc[i].classList.add("on")
            tabs.forEach((span)=>{span.classList.remove("on")})
            tabs[i].classList.add("on")
        })
    })
   
})