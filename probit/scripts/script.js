function scroll(section) {
    var offset = -127; //Offset of 20px
    $('html, body').animate({
        scrollTop: $(section).offset().top + offset
    }, 1500);
}
$(document).ready(function () {
    $("#navbar a").click(function () {
        $('#navbar a').removeClass('active');
        $(this).addClass('active');
    });
});
function onScroll() {
    var nav = $('#navbar');
    var offset = nav.outerHeight();
    //noinspection JSValidateTypes
    if ($(document).scrollTop() > offset) {
        nav.css({
            "position": "fixed"
            , "top": "0px"
        });
        $(".nav-box").animate({
            "padding": "20px 40px"
        }, 200);
    } else {
        nav.css({
            "position": "relative"
            , "top": "'" + offset + "'"
        });
        $(".nav-box").animate({
            "padding": "10px 30px"
        }, 200);
    }
}