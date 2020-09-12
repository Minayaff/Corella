$(document).ready(function(){

    // $(window).scroll(function(){
    //     var navbar = $('header nav'),
    //         navHeight = navbar.height(),
    //         scrollPos = $(this).scrollTop();

    //     if(scrollPos > navHeight){
    //         navbar.addClass('fixed');
    //         $('header').css('padding-top', navHeight + 'px')
    //     }
    //     else {
    //         navbar.removeClass('fixed');
    //         $('header').css('padding-top', '0')
    //     }

    // })

    $(".open").click(function () {
        $(".nav-links").fadeIn();
    });
    $(".close").click(function () {
        $(".nav-links").fadeOut();
    });

    $('.lang-link').on('click',function(){

        //Remove any previous active classes
        $('.lang-link').removeClass('active');
      
        //Add active class to the clicked item
        $(this).addClass('active');
      });   
})