let swiper = new Swiper('.swiper', {
    loop: true, 
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    autoplay: { delay: 3000 },
    effect: 'slide'
});