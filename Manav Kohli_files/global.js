
$(document).ready(function (){
    var scroll_list = [["#work-button-title", "#jobs"], ["#play-button-title", 
                        "#jameez"], ["#about-link", "#about"], ["#about-arrow", 
                        "#jameez"], ["#jameez-arrow", "#site"], ["#site-arrow",
                        "#political-research"], ["#political-research-arrow",
                        "#science-research"]];

    $("#work-button-title").click(function(){
            $('html, body').animate({
            scrollTop: $("#jobs").offset().top
        }, 750);
    });

    $("#play-button-title").click(function(){
            $('html, body').animate({
            scrollTop: $("#jameez").offset().top
        }, 750);
    });

    $("#about-link").click(function(){
            $('html, body').animate({
            scrollTop: $("#about").offset().top
        }, 750);
    });

    $("#about-arrow").click(function(){
            $('html, body').animate({
            scrollTop: $("#jameez").offset().top
        }, 750);
    });

    $("#jameez-arrow").click(function(){
            $('html, body').animate({
            scrollTop: $("#site").offset().top
        }, 750);
    });

    $("#site-arrow").click(function(){
            $('html, body').animate({
            scrollTop: $("#political-research").offset().top
        }, 750);
    });

    $("#political-research-arrow").click(function(){
            $('html, body').animate({
            scrollTop: $("#science-research").offset().top
        }, 750);
    });

    $("#project").click(function(){
            $('html, body').animate({
            scrollTop: $("#science-research").offset().top
        }, 750);
    });

    $("#science-research").click(function(){
            $('html, body').animate({
            scrollTop: $("#jobs").offset().top
        }, 750);
    });

    // for(i=0; i<scroll_list.length; i++){
    //     var source = scroll_list[i][0]
    //     var dest = scroll_list[i][1];
    //     $(source).click(function(){
    //         $('html, body').animate({
    //         scrollTop: $(dest).offset().top
    //     }, 750);
    //     });
    // };

    //Font shit
    var $body = $('body'); //Cache this for performance

    var setBodyScale = function() {
        var scaleSource = $body.width(),
            scaleFactor = 0.2,                     
            maxScale = 100,
            minScale = 12; //Tweak these values to taste
        var fontSize = scaleSource * scaleFactor; //Multiply the width of the body by the scaling factor:
        if (fontSize > maxScale) fontSize = maxScale;
        if (fontSize < minScale) fontSize = minScale; //Enforce the minimum and maximums
        $('body').css('font-size', fontSize + '%');
    }
    
    $(window).resize(function(){
        setBodyScale();
    });

    //Fire it when the page first loads:
    setBodyScale();
});
