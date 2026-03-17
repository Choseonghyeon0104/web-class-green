document.addEventListener("DOMContentLoaded",()=>{
    // 슬라이드 기능

    const slide = document.querySelectorAll(".train>li")
    let count = 0
    setInterval(()=>{

        count++
        if(count>2){count=0}
        slide.forEach((on)=>{on.classList.remove("on")})
        slide[count].classList.add("on")

    },1500)

    //모달팝업
    const modal = document.querySelector(".modal")
    const popup = document.querySelector(".popup")
    const btnPopup = document.querySelector("#btn-popup")
    const btnClose = document.querySelector("#btn-close")

    btnPopup.addEventListener("click",()=>{
        modal.classList.add("on")
        popup.classList.add("on")
    })
    btnClose.addEventListener("click",()=>{
        modal.classList.remove("on")
        popup.classList.remove("on")
    })

})