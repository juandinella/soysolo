import $ from 'jquery'

const toggle = $('.read-more button')
const readMore = $('.read-more')
const text = $('.comments--text')

toggle.on('click', function () {
  $(this).closest(readMore).fadeOut()
  $(this).closest(text).addClass('is-open')
});
