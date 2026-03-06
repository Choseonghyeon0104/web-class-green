document.addEventListener("DOMContentLoaded",function(){
    const swiper1 = new Swiper('.station', {
        direction:`vertical`, 
        loop:true,
        slidesPerView:2,
        spaceBetween:`20px`,
        speed:1000,
        pagination: {
            el: ".swiper-pagination",
            clickable:true,
        },
        autoplay: {
        delay: 100,
        },
        
        
    // // Optional parameters
    // direction: 'horizontal',
    // loop: true,

    // // If we need pagination
    // pagination: {
    //     el: '.swiper-pagination',
    // },

    // // Navigation arrows
    // navigation: {
    //     nextEl: '.swiper-button-next',
    //     prevEl: '.swiper-button-prev',
    // },

    // // And if we need scrollbar
    // scrollbar: {
    //     el: '.swiper-scrollbar',
    // },
    });
     const swiper2 = new Swiper('.station2', {
        loop:true,
        direction:`horizontal`, 
        slidesPerView:2,
        spaceBetween:`20px`,
        speed:1000,
        navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
        },
        pagination: {
            el: ".swiper-pagination",
            clickable:true,
        },
        autoplay: {
        delay: 100,
        },

     });

      var swiper3 = new Swiper(".mySwiper", {
      effect: "cube",
      grabCursor: true,
      cubeEffect: {
        shadow: true,
        slideShadows: true,
        shadowOffset: 20,
        shadowScale: 0.94,
      },
      loop:true,
      pagination: {
        el: ".swiper-pagination",
      },
      autoplay: {
        delay: 100,
        },
        
    });
})
