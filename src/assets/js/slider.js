import $ from 'jquery'

import 'slick-carousel';

const slider = $('.comments--slider')

slider.slick({
  arrows: false,
  dots: true,
  focusOnSelect: false,
  infinite: true,
  slidesToShow: 2,
  slidesToScroll: 2
});
