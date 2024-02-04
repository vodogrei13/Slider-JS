let images = [{
    url: "./images/png/img-one.png",
  }, {
    url: "./images/png/img-two.png",
  }, {
    url: "./images/png/img-three.png",
  }];

  let paragraph1 = ["Rostov-on-Don LCD admiral", "Sochi Thieves","Rostov-on-Don Patriotic"];

  let paragraph2 = ["81 m2", "105 m2", "Rostov-on-Don Patriotic"];

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

    function initImages() {
        images.forEach((image, index) => {
            let imageElement = document.createElement("div");
            imageElement.className = `image n${index} ${index? "" : "active"}`;
            imageElement.dataset.index = index;
            imageElement.style.backgroundImage = `url(${image.url})`;
            sliderImages.appendChild(imageElement);
        });
    }

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

    function moveSlider(num) {
        sliderImages.querySelector(".active").classList.remove("active");
        sliderImages.querySelector(`.n${num}`).classList.add("active");

        if (options.dots) {
            let dotsWrapper = document.querySelector(".slider__dots");
            dotsWrapper.querySelector(".active").classList.remove("active");
            dotsWrapper.querySelector(`.n${num}`).classList.add("active");
          }
    }
    
    function initDots() {
        let dotsWrapper = document.createElement("div");
        dotsWrapper.className = "slider__dots";
        images.forEach((image, index) => {
          let dot = document.createElement("div");
          dot.className = `slider__dots-item n${index} ${index? "" : "active"}`;
          dot.dataset.index = index;
          dot.addEventListener("click", function() {
            moveSlider(this.dataset.index);
          });
          dotsWrapper.appendChild(dot);
        });
        document.querySelector('.block-point').appendChild(dotsWrapper);
      }
}

document.addEventListener('DOMContentLoaded', () => {
    let sliderOptions = {
        dots: true,
    }
    initSlider(images, sliderOptions);
});
