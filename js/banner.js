var mySwiper = new Swiper('.swiper', {
    loop: true,
    autoplay: {
        delay: 1000,
    },
    mousewheel: true,

    // 如果需要分页器
    pagination: {
        el: '.swiper-pagination',
        bulletClass: 'my-bullet',

    },

    // 如果需要前进后退按钮
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

})        
