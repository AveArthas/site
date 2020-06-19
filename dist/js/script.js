$(document).ready(function () {
    let prevScroll = 0;    
    $(window).on('scroll', function () {
        let scroll = $(this).scrollTop();
        if (scroll > prevScroll) {
            $('.header').addClass('header__active')
            $('.header__inner').addClass('inner__active')
            $('.header').css({
                'top' : '-300px',
            })
        } else if (scroll <= 100) {
            $('.header').removeClass('header__active')
            $('.header__inner').removeClass('inner__active')
        } else {
            $('.header').css({
                'top' : '0',
            })          
        }
        prevScroll = scroll;
        console.log(scroll)
    })

    $('.header__burger').on('click', function () {
       $('.header__nav').addClass('header__nav-active')
       $('body').css({
           'overflow' : 'hidden'
       })
    })
    $('.header__nav-close').on('click', function () {
        $('.header__nav').removeClass('header__nav-active')    
        $('body').css({
            'overflow' : 'auto'
        })
    })

  $('a[data-target^="anchor"]').on('click', function () {
        $('.header__nav').removeClass('header__nav-active')
        $('body').css({
            'overflow' : 'auto'
        })
  })


   

  


    
    $('a[data-target^="anchor"]').bind('click.smoothscroll', function (e) {
        event.preventDefault()
        let target = $(this).attr('href');
        let bl_top = $(target).offset().top - 81;
        $('body, html').animate({
            scrollTop: bl_top 
        },2000)
        return false
    })
})