function initCarousel() {
  let slides = document.querySelectorAll('.carousel__slide');
  let position = 0;
  let number = 0;
  let width = document.querySelector('.carousel__slide').offsetWidth;
  let carouselR = document.querySelector('.carousel__arrow_right');
  let carouselL = document.querySelector('.carousel__arrow_left');
 
  carouselL.style.display = 'none';
  
  function updateLeftArrow(e) {
    if (e === 0) {
      carouselL.style.display = 'none'
    } else {
      carouselL.style.display = ''
    }
  }

  function updateRightArrow(e) {
    if (e === (slides.length - 1)) {
      carouselR.style.display = 'none'
    } else {
      carouselR.style.display = ''
    }
  }

  carouselR.addEventListener('click', right)

  function right() {
    position -= width;
    position = Math.max(position, -width * (slides.length - 1));
    document.querySelector('.carousel__inner').style.transform = `translateX(${position}px)`;
    number++;
    
    updateLeftArrow(number);
    updateRightArrow(number);
  }
    
  carouselL.addEventListener('click', left);

  function left() {
    position += width;
    position = Math.min(position, 0);
    document.querySelector('.carousel__inner').style.transform = `translateX(${position}px)`;
    number--;
    
    updateRightArrow(number);
    updateLeftArrow(number);
  }
  
}
