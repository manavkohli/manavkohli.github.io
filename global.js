$(document).ready(function (){
            //Work
            $("#work-button-title").click(function (){
                    $('html, body').animate({
                        scrollTop: $("#work").offset().top
                    }, 750);
            });
        	
        	//Play
        	$("#play-button-title").click(function (){
                //$(this).animate(function(){
                    $('html, body').animate({
                        scrollTop: $("#play").offset().top
                    }, 750);
                //});
            });

        	//About
        	$("#about-link").click(function (){
                    $('html, body').animate({
                        scrollTop: $("#about").offset().top
                    }, 750);
            });

        });

jQuery(window).scroll(function() {
if ($(this).scrollTop() > 0) {
    $('.theBlock').stop().animate({ right: '0px' }, 500);
} else {
    $('.theBlock').stop().animate({ right: '-800px' }, 0);
}
});

jQuery(window).scroll(function() {
if ($(this).scrollTop() > 100) {
    $('.titleBlock').stop().animate({ left: '0px' }, 500);
} else {
    $('.titleBlock').stop().animate({ left: '-800px' }, 0);
}
});

jQuery(window).scroll(function() {
if ($(this).scrollTop() > 700) {
    $('.whereBlock').stop().animate({ left: '0px' }, 500);
} else {
    $('.whereBlock').stop().animate({ left: '-800px' }, 0);
}
});

jQuery(window).scroll(function() {
if ($(this).scrollTop() > 900) {
    $('.playBlock').stop().animate({ right: '0px' }, 500);
} else {
    $('.playBlock').stop().animate({ right: '-800px' }, 0);
}
});

jQuery(window).scroll(function() {
if ($(this).scrollTop() > 700) {
    $('.movieBlock').stop().animate({ left: '0px' }, 500);
} else {
    $('.movieBlock').stop().animate({ left: '-800px' }, 0);
}
});

jQuery(window).scroll(function() {
if ($(this).scrollTop() > 700) {
    $('.movieTwoBlock').stop().animate({ left: '0px' }, 500);
} else {
    $('.movieTwoBlock').stop().animate({ left: '-800px' }, 0);
}
});

jQuery(window).scroll(function() {
if ($(this).scrollTop() > 1000) {
    $('.workTitle').stop().animate({ left: '0px' }, 500);
} else {
    $('.workTitle').stop().animate({ left: '-800px' }, 0);
}
});

jQuery(window).scroll(function() {
if ($(this).scrollTop() > 1200) {
    $('.experience').stop().animate({ left: '0px' }, 500);
} else {
    $('.experience').stop().animate({ left: '-800px' }, 0);
}
});

//research
jQuery(window).scroll(function() {
if ($(this).scrollTop() > 1000) {
    $('.research-title').stop().animate({ right: '0px' }, 500);
} else {
    $('.research-title').stop().animate({ right: '-800px' }, 0);
}
});

jQuery(window).scroll(function() {
if ($(this).scrollTop() > 1200) {
    $('.research').stop().animate({ right: '0px' }, 500);
} else {
    $('.research').stop().animate({ right: '-800px' }, 0);
}
});



