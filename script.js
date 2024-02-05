//Массив Картинок
let images = [{
    url: "./images/png/img-one.png",
  }, {
    url: "./images/png/img-two.png",
  }, {
    url: "./images/png/img-three.png",
  }];
  
//Массивы Текстов
  let paragraph1 = ["<span>Rostov-on-Don<br>LCD admiral</span>", "<span>Sochi<br>Thieves</span>","<span>Rostov-on-Don<br>Patriotic</span>"];

  let paragraph2 = ["81 m2", "105 m2", "93 m2"];

  let paragraph3 = ["3.5 months", "4 months", "3 months"];

function initSlider(images, options) {
    if(!images || !images.length) return;

    options = options || {
        dots: false,
    }

    const sliderWrapper = document.querySelector('.slider');
    const sliderImages = sliderWrapper.querySelector('.slider__images');
    const sliderArrows = document.querySelector('.block-arrow');

    initImages();
    initArrows();
    
    if (options.dots) {
        initDots();
    }
//Функция слайдер-картинок
    function initImages() {
        images.forEach((image, index) => {
            let imageElement = document.createElement("div");
            imageElement.className = `image n${index} ${index ? "" : "active"}`;
            imageElement.dataset.index = index;
            imageElement.style.backgroundImage = `url(${image.url})`;
            sliderImages.appendChild(imageElement);
        });
    }
//Функция слайдер-стрелки
    function initArrows() {
        let lastIndex = images.length - 1;
        sliderArrows.querySelectorAll('.block-arrow-item').forEach(arrow => {
            arrow.addEventListener('click', function() {
                let curNumber = +sliderImages.querySelector('.active').dataset.index;
                let nextNumber;
                if (arrow.classList.contains('left')) {
                    nextNumber = curNumber === 0? lastIndex : curNumber - 1;
                } else {
                    nextNumber = curNumber === lastIndex? 0 : curNumber + 1;
                }
                moveSlider(nextNumber);
            });
        });
    }
//Функция слайдер-точки
    function initDots() {
        let dotsWrapper = document.createElement("div");
        dotsWrapper.className = "slider__dots"; 
        images.forEach((_, index) => {
          let dot = document.createElement("div");
          dot.className = `slider__dots-item n${index} ${index ? "" : "active"}`;
          dot.dataset.index = index;
          dot.addEventListener("click", function() {
            moveSlider(this.dataset.index);
          });
          dotsWrapper.appendChild(dot);
        });
        document.querySelector('.block-point').appendChild(dotsWrapper);
      }
//Функция изменения классов в зависимости от Активности
    function moveSlider(num) {
        sliderImages.querySelector(".active").classList.remove("active");
        sliderImages.querySelector(`.n${num}`).classList.add("active");

        if (options.dots) {
            let dotsWrapper = document.querySelector(".slider__dots");
            dotsWrapper.querySelector(".active").classList.remove("active");
            dotsWrapper.querySelector(`.n${num}`).classList.add("active");
          }
        document.getElementById('city__text').innerHTML = paragraph1[num];
        document.getElementById('apartment__text').innerText = paragraph2[num];
        document.getElementById('repair__text').innerText = paragraph3[num];

        document.querySelector('.address_active').classList.remove("address_active");
        document.getElementById(`city__link_${num}`).classList.add('address_active');
    }
//Ссылки сверху слайдера (включают нужный слайд)
    document.getElementById('links__block').addEventListener('click', function(event) {
        event.preventDefault();
        const target = event.target
        if(target.hasAttribute('data-index')) {
            moveSlider(target.getAttribute('data-index'));
        }
    })
}


document.addEventListener('DOMContentLoaded', () => {
    let sliderOptions = {
        dots: true,
    }
    initSlider(images, sliderOptions);
});
