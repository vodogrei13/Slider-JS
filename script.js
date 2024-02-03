//инициализируем Swiper Картинок
const swiperImage = new Swiper('.image-slider', {
    slidesPerView: 1,
    spaceBetween: 50,
    speed: 450,
    loop: true,
    effect: 'fade',
    simulateTouch: false,
    //стрелки
    navigation: {
        nextEl: '.arrow-next',
        prevEl: '.arrow-back'
    },
    //Буллеты(точки)
    pagination: {
        el: '.swiper-point',
        clickable: true,
    },

});

//Свайпер текста
const swiperText = new Swiper('.text-slider', {
    slidesPerView: 1,
    spaceBetween: 50,
    simulateTouch: false,
    effect: 'flip',
    loop: true,
});

//управление слайдерами
swiperImage.controller.control = swiperText;
swiperText.controller.control = swiperImage;

document.addEventListener('DOMContentLoaded', () => {
    
})