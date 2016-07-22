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