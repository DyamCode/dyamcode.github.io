$(document).on('ready', main);
$(window).scroll(function(){
    if($(this).scrollTop() > 0 ){
        $( "header" ).animate({
            color: "green",
            backgroundColor: "rgb( 20, 20, 20 )"
          });
        $('header').addClass('header-border');
    }else {
        $('header').removeClass('header-border');
    }
});
function main(){
    $('header li a').on('click', goTo);
    $('#view-more-a').on('click', goTo);
    $('.skillbar').each(function(){
        $(this).find('.skillbar-bar').animate({width:$(this).attr('data-percent')
        },2000);
    });
}
function goTo(){
    var section = $(this).attr('href');
    $('body, html').animate({
        scrollTop: $(section).offset().top-60
    }, 500);

    return false;
}

function myFunction() {
    document.getElementsByClassName("topnav")[0].classList.toggle("responsive");
    $('nav ul li a').on('click',function(){
        $(".topnav").removeClass("responsive");
    });
}
