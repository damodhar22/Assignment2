/* Declaring varibles */
var transparent = true;
var window_width;
var window_height;

$(document).ready(function(){
  window_width = $(window).width();
  window_height = $(window).height();
  rubik.initAnimationsCheck();
  $('.nav li a').click(function(e) {
    $('.nav li').removeClass('active');
    var $parent = $(this).parent();
    if (!$parent.hasClass('active')) {
      $parent.addClass('active');
    }
  });
});

$(window).resize('scroll',function(){
  rubik.checkScrollForTransparentNavbar();
});

$(window).on('scroll',function(){
  rubik.checkScrollForTransparentNavbar();
});
$(window).load(function(){
  //after the content is loaded we reinitialize all the waypoints for the animations
  rubik.initAnimationsCheck();
});

rubik = {
  initAnimationsCheck: function(){

    $('[class*="add-animation"]').each(function(){
      offset_diff = 30;
      if($(this).hasClass('title')){
        offset_diff = 110;
      }

      var waypoints = $(this).waypoint(function(direction) {
        if(direction == 'down'){
          $(this.element).addClass('animate');
        } else {
          $(this.element).removeClass('animate');
        }
      }, {
        offset: window_height - offset_diff
      });
    });
  },
  checkScrollForTransparentNavbar: function() {
    if($(document).scrollTop() > 200 || $(window).width() < 768) {
      if(transparent) {
        transparent = false;
        $('nav[role="navigation"]').removeClass('navbar-transparent');
      }
    } else {
      if( !transparent ) {
        transparent = true;
        $('nav[role="navigation"]').addClass('navbar-transparent');
      }
    }
  }
}
