// window.addEventListener("load", function() {
//   let preloader = document.getElementById("preloader");
//   this.setTimeout(()=>{
//     
//   },2000)
//   preloader.style.display = "none";
// });



setTimeout(function() {
  let preloader = document.getElementById("preloader");
  preloader.style.display = "none";
}, 2000);

document.addEventListener('DOMContentLoaded', function () {
    let mySwiper = new Swiper('.swiper-container', {
        loop: true,
        pagination: {
            el: '.swiper-pagination',
        },
      });
      
      let imageSources = [
        './Assets/s1.webp',
        './Assets/s2.jpg',
        './Assets/s1.jpeg'
      ];
      
      
      let swiperSlides = document.querySelectorAll('.swiper-slide img');
      let prevButton = document.querySelector('.prev-button');
      let nextButton = document.querySelector('.next-button');
      
      for (let i = 0; i < swiperSlides.length; i++) {
        swiperSlides[i].src = imageSources[i];
      }
      setInterval(function () {
        mySwiper.slideNext();
      }, 2000);
  
    
    prevButton.addEventListener('click', function () {
      mySwiper.slidePrev();
    });
    
    nextButton.addEventListener('click', function () {
        mySwiper.slideNext();
    });
      });
    
  