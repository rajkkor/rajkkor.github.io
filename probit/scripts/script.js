function scroll(section) {

    var offset = -120; //Offset of 20px
    $('html, body').animate({
        scrollTop: $(section).offset().top + offset
    }, 1500);
}
$(document).ready(function () {
    $("#navbar a").click(function () {
        $('#navbar a').removeClass('active');
        $(this).addClass('active');
    });
    var lastScrollTop = 50;
    $(window).scroll(function () {
        var st = $(this).scrollTop();
        if (st > lastScrollTop) {
            $("#navbar").slideUp(300);
        } else {
            $("#navbar").slideDown(100);
        }
        lastScrollTop = st;
    });
});