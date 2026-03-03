document.addEventListener("DOMContentLoaded",function(){
    const hiddenGnb = document.querySelector(".hiddenGnb")
    const btnMenu = document.querySelector(".btn-menu")
    const btnCloseMenu = document.querySelector(".btn-close-menu")

    // 메뉴버튼을 누르면 숨겨진 메뉴가 나오는 기능
    btnMenu.addEventListener("click",function(){
        //  hiddenGnb에 on클래스가 추가되면 메뉴가 나오게 되어있음
        hiddenGnb.classList.add("on")
    })

    btnCloseMenu.addEventListener("click",()=>{
        hiddenGnb.classList.remove("on")
    })

})