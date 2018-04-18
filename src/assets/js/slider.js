import $ from 'jquery'
import 'slick-carousel';

const slider = $('.comments--slider')

slider.slick({
  arrows: false,
  dots: true,
  focusOnSelect: false,
  infinite: true,
  slidesToShow: 2,
  slidesToScroll: 2,
  autoplay: true,
  autoplaySpeed: 6000,
  pauseOnHover: true,
  adaptiveHeight: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
        adaptiveHeight: false
      }
    }
  ]
});
