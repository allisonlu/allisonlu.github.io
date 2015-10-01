/*global $*/
/*jslint sloppy: true, browser: true*/

$("h1.page-title").text("My code runs!");

//moves image horizontally
$(window).on('click', function (e) {
    $('img.logo').css({left: e.pageX});
});

//moves image vertically
$(window).on('click', function (e) {
    $('img.logo').css({left: e.pageX,
                       top: e.pageY});
});