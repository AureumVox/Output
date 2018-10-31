$(document).ready(function(){  
    var lastScrollTop = 0;
      $(window).scroll(function(){
        var scrollTop = $(this).scrollTop();
        if (scrollTop - lastScrollTop > 250){
          var navHeight = $('.navbar').css('height');
          $('.navbar').animate({top: '-' + navHeight}, 200);
          lastScrollTop = scrollTop;
        } else if (lastScrollTop - scrollTop > 100) {
          $('.navbar').animate({top: '0px'}, 150);
          lastScrollTop = scrollTop;
        }
      });
    });
    