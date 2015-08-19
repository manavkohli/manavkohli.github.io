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

            $("#about-arrow").click(function (){
                $('html, body').animate({
                        scrollTop: $("#projects").offset().top
                    }, 750);
            });

        });
