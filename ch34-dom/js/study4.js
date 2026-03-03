document.addEventListener("DOMContentLoaded",function(){

    let btn1 = document.querySelector("#btn1")
    btn1.addEventListener("click",function(){
        alert("안녕하세요")
    }) //이벤트리스너 다음에 인자 -> 첫번째 인자는 트리거(문자데이터형태로) , 두번째 인자는 동작

    let btn2 = document.querySelector("#btn2")
    let box = document.querySelector(".box")
    btn2.addEventListener("click",function(){
        box.style.backgroundColor = "lime"
    })

    const btn3 = document.querySelector("#btn3") // let과 동일한 표현, 태그 선택시엔 const를 더 자주 사용
    btn3.addEventListener("click",function(){
        box.style.backgroundColor = "initial"
    })

    let basicFontSize = 20
    let minfontsize = 14
    let maxfontsize = 26
    const chip=document.querySelector(".chip")

    const html = document.querySelector("html")

    const btnSmallFont = document.querySelector("#btn-small-font")
    btnSmallFont.addEventListener("click",function(){
        if(basicFontSize<=minfontsize){
            alert(minfontsize+"픽셀 보다 작게 글씨를 줄일 수 없습니다.")
            return
        }
        basicFontSize-=1
        html.style.fontSize=`${basicFontSize}px`
        chip.innerHTML=`${basicFontSize}px`
    })

    const btnBigFont = document.querySelector("#btn-big-font")
    btnBigFont.addEventListener("click",function(){
        if(basicFontSize>=maxfontsize){
            alert(maxfontsize+"픽셀보다 크게 글씨를 키울 수 없습니다.")
            return
        }
        basicFontSize+=1
        html.style.fontSize=`${basicFontSize}px`
        chip.innerHTML=`${basicFontSize}px`
    })

    const btnFontBase = document.querySelector("#btn-font-base")
    btnFontBase.addEventListener("click",function(){
        basicFontSize=20
        html.style.fontSize = basicFontSize+"px"
        chip.innerHTML=`${basicFontSize}px`
    })

})

