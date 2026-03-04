document.addEventListener("DOMContentLoaded",()=>{

    const modal = document.querySelector(".modal")
    const popup = document.querySelector(".popup")
    const btnNo = document.querySelector(".btn-no")
    btnNo.addEventListener("click",function(){
        popup.classList.add("blind")
        modal.classList.add("blind")
    })

})