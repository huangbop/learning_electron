$(function() {
  $('.feed-grid').masonry({
    itemSelector: '.feed-item',
    columnWidth: '.feed-item-sizer',
    gutter: '.feed-gutter-sizer',
    fitWidth: true
  });
});
