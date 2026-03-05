document.addEventListener("DOMContentLoaded",()=>{

    const btnNext = document.querySelector("#btn-next")
    const train = document.querySelector(".train")
    let count = 0
    let slides = train.children.length // 리스트의 개수
    train.style.width=`${slides*100}%`


    btnNext.addEventListener("click",()=>{
        count++
        if(count>slides-1){count=slides-1}
        //train 클래스가 왼쪽으로 1000픽셀 씩 이동
        train.style.transform=`translateX(${-(100/slides)*count}%)`
    })

    const btnPrev = document.querySelector("#btn-prev")
    btnPrev.addEventListener("click",()=>{
        count--
        if(count<0){count=0}
        train.style.transform=`translateX(${-(100/slides)*count}%)`
    })

})