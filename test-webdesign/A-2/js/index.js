document.addEventListener("DOMContentLoaded",()=>{

    //팝업기능
    const btnPopup = document.querySelector(`#btn-popup`)
    const popup = document.querySelector(`.popup`)
    const modal = document.querySelector(`.modal`)
    const btnClose = document.querySelector("#btn-close")

    btnPopup.addEventListener("click",()=>{
        //팝업 열리는 기능
        popup.classList.add("on")
        modal.classList.add("on")

    })

    btnClose.addEventListener("click",()=>{
        //팝업 닫는 기능
        popup.classList.remove("on")
        modal.classList.remove("on")

    })

    //슬라이드
    const train = document.querySelector(".train")
    let count = 0

    setInterval(() => {
        count++
        train.style.transition = `all 0.7s ease 0s`
        train.style.transform = `translateX(${-25*count}%)`

        if(count==3){
            setTimeout(()=>{
                train.style.transition = `none`
                train.style.transform = `translateX(0%)`
                count=0
            },800)
            
        }
    }, 2500);

})