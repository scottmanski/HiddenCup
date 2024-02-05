(function($) {

    "use strict";

    $('.owl-show-events').owlCarousel({
        items: 4,
        loop: true,
        dots: true,
        nav: true,
        autoplay: true,
        margin: 30,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 4
            }
        }
    })

    const second = 1000,
        minute = second * 60,
        hour = minute * 60,
        day = hour * 24;

    let countDown = new Date('Feb 25, 2024 09:30:00').getTime(),
        x = setInterval(function() {

            let now = new Date().getTime(),
                distance = countDown - now;

            document.getElementById('days').innerText = Math.floor(distance / (day)),
                document.getElementById('hours').innerText = Math.floor((distance % (day)) / (hour)),
                document.getElementById('minutes').innerText = Math.floor((distance % (hour)) / (minute)),
                document.getElementById('seconds').innerText = Math.floor((distance % (minute)) / second);

            //do something later when date is reached
            //if (distance < 0) {
            //  clearInterval(x);
            //  'IT'S MY BIRTHDAY!;
            //}

        }, second)

    // $(function() {
    //      $("#tabs").tabs();
    //  });


    $('.schedule-filter li').on('click', function() {
        var tsfilter = $(this).data('tsfilter');
        $('.schedule-filter li').removeClass('active');
        $(this).addClass('active');
        if (tsfilter == 'all') {
            $('.schedule-table').removeClass('filtering');
            $('.ts-item').removeClass('show');
        } else {
            $('.schedule-table').addClass('filtering');
        }
        $('.ts-item').each(function() {
            $(this).removeClass('show');
            if ($(this).data('tsmeta') == tsfilter) {
                $(this).addClass('show');
            }
        });
    });


    // Window Resize Mobile Menu Fix
    mobileNav();


    // Scroll animation init
    window.sr = new scrollReveal();


    // Menu Dropdown Toggle
    if ($('.menu-trigger').length) {
        $(".menu-trigger").on('click', function() {
            $(this).toggleClass('active');
            $('.header-area .nav').slideToggle(200);
        });
    }


    // Page loading animation
    $(window).on('load', function() {

        $('#js-preloader').addClass('loaded');

    });


    // Window Resize Mobile Menu Fix
    $(window).on('resize', function() {
        mobileNav();
    });


    // Window Resize Mobile Menu Fix
    function mobileNav() {
        var width = $(window).width();
        $('.submenu').on('click', function() {
            if (width < 767) {
                $('.submenu ul').removeClass('active');
                $(this).find('ul').toggleClass('active');
            }
        });
    }


})(window.jQuery);

                    function MstageQ() {
                      //console.log("Qual");
                      //console.log(document.querySelectorAll("input[value='Qualifier'][name='Mstage']"));
                      //console.log(document.querySelector("input[value='Qualifier'][name='Mstage']").checked);
                      if (document.querySelector("input[value='Qualifier'][name='Mstage']").checked == true) {
                        document.querySelector("input[value='Qualifier'][name='Mstage']").checked = false;
                        //document.getElementById("MstageQid") = document.getElementById("MstageQid").classList.remove('active');
                        document.getElementById("MstageQid").querySelector("i").setAttribute("style", "visibility: hidden;");
                      } else {
                        //document.getElementById("MstageQid") = document.getElementById("MstageQid").classList.add('active');
                                                document.querySelector("input[value='Qualifier'][name='Mstage']").checked = true;
                                                                        document.getElementById("MstageQid").querySelector("i").setAttribute("style", "visibility: visbible;");
                      }
                      
                     //console.log(document.querySelector("input[value='Qualifier'][name='Mstage']").checked);
                    }
                    
                    function MstageME() {
                      console.log("ME");
                      console.log(document.querySelectorAll("input[value='Main Event'][name='Mstage']"));
                      console.log(document.querySelector("input[value='Main Event'][name='Mstage']").checked);
                      if (document.querySelector("input[value='Main Event'][name='Mstage']").checked == true) {
                                                document.querySelector("input[value='Main Event'][name='Mstage']").checked = false;
                        // document.getElementById("MstageMEid") = document.getElementById("MstageMEid").classList.remove('active');
                                                document.getElementById("MstageMEid").querySelector("i").setAttribute("style", "visibility: hidden;");
                      } else {
                        //document.getElementById("MstageMEid")= document.getElementById("MstageMEid").classList.add('active');
                                                                        document.querySelector("input[value='Main Event'][name='Mstage']").checked = true;
                                                                        document.getElementById("MstageMEid").querySelector("i").setAttribute("style", "visibility: visible;");
                      }
                      
                      //document.getElementById("MyElement").classList.toggle('MyClass');
                    }
                    