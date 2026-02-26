(function ($) {
  
        

    $(".toggle_menu").click(function (e) {
        e.preventDefault();
        e.stopPropagation();
        $(".mobile_main_menu").slideToggle();
        $(this).toggleClass('active');
      });
   
 
      $('.toggle_btn_menu').click(function() {
          $(this).parent('.menu_dropdown').toggleClass('active');
          $(this).parent().siblings().removeClass('active')
      });



      if ($('.board_slider').length) {
        $('.board_slider').slick({
            slidesToShow: 4.5,
            slidesToScroll: 1,
            autoplay: false,
            autoplaySpeed: 2000,
            dots: false,
            arrows: true,
            infinite: false,
            centerMode: false,
            responsive: [
                {
                    breakpoint: 1025,
                    settings: {
                        slidesToShow: 3
                    }
                },
                {
                    breakpoint: 991,
                    settings: {
                        slidesToShow: 2
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1
                    }
                }
            ]
        });
        $(".prev-btn1").click(function () {
            $(".board_slider").slick("slickPrev");
        });

        $(".next-btn1").click(function () {
            $(".board_slider").slick("slickNext");
        });
        $(".prev-btn1").addClass("slick-disabled");
        $(".board_slider").on("afterChange", function () {
            if ($(".board_mamber .slick-prev").hasClass("slick-disabled")) {
                $(".prev-btn1").addClass("slick-disabled");
            } else {
                $(".prev-btn1").removeClass("slick-disabled");
            }
            if ($(".board_mamber .slick-next").hasClass("slick-disabled")) {
                $(".next-btn1").addClass("slick-disabled");
            } else {
                $(".next-btn1").removeClass("slick-disabled");
            }
        });
    };

    

    if ($('.leadership_slider').length) {
        $('.leadership_slider').slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay: false,
            dots: false,
            arrows: true,
            infinite: false,
            rows: 0,
            responsive: [
                {
                    breakpoint: 1025,
                    settings: {
                        slidesToShow: 3,
                    }
                },
                {
                    breakpoint: 991,
                    settings: {
                        slidesToShow: 2,
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                    }
                }
            ]
        });
        $(".prev-btn").click(function () {
            $(".leadership_slider").slick("slickPrev");
        });

        $(".next-btn").click(function () {
            $(".leadership_slider").slick("slickNext");
        });
        $(".prev-btn").addClass("slick-disabled");
        $(".leadership_slider").on("afterChange", function () {
            if ($(".leadership_section .slick-prev").hasClass("slick-disabled")) {
                $(".prev-btn").addClass("slick-disabled");
            } else {
                $(".prev-btn").removeClass("slick-disabled");
            }
            if ($(".leadership_section .slick-next").hasClass("slick-disabled")) {
                $(".next-btn").addClass("slick-disabled");
            } else {
                $(".next-btn").removeClass("slick-disabled");
            }
        });
    }

    $('.tab-a').click(function(){  
        $(".tab").removeClass('tab-active');
        $(".tab[data-id='"+$(this).attr('data-id')+"']").addClass("tab-active");
        $(".tab-a").removeClass('active-a');
        $(this).parent().find(".tab-a").addClass('active-a');
        $('.leadership_slider').slick('setPosition');
        $('#' + tabId).find('.leadership_slider').slick('setPosition');
    });



    if ($('.home_banner_slider').length) {
    $('.home_banner_slider').slick({
        dots: true,
        arrows: true,
        loop:true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    variableWidth: false,
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 600,
                settings: {
                    variableWidth: false,
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
    $(".prev-btn").click(function () {
        $(".home_banner_slider").slick("slickPrev");
    });

    $(".next-btn").click(function () {
        $(".home_banner_slider").slick("slickNext");
    });
    $(".prev-btn").addClass("slick-disabled");
    $(".home_banner_slider").on("afterChange", function () {
        if ($(".home_banner .slick-prev").hasClass("slick-disabled")) {
            $(".prev-btn").addClass("slick-disabled");
        } else {
            $(".prev-btn").removeClass("slick-disabled");
        }
        if ($(".home_banner .slick-next").hasClass("slick-disabled")) {
            $(".next-btn").addClass("slick-disabled");
        } else {
            $(".next-btn").removeClass("slick-disabled");
        }
    });
}









if ($('.support_collaboration_logos').length) {
    $('.support_collaboration_logos').slick({
        autoplay: true,
        autoplaySpeed: 0,
        speed: 5000,
        arrows: false,
        swipe: false,
        slidesToShow: 8,
        cssEase: 'linear',
        pauseOnFocus: false,
        pauseOnHover: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    variableWidth: false,
                    slidesToShow: 4,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 600,
                settings: {
                    variableWidth: false,
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            }
        ]
    });
}

if ($('.real_world_slider').length) {
    $('.real_world_slider').slick({
        dots: false,
        arrows: false,
        infinite: false,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 2000,
        pauseOnHover: true,
        pauseOnFocus: true,

        responsive: [
            {
                breakpoint: 1199,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });


    $(".prev-btn").click(function () {
        $(".real_world_slider").slick("slickPrev");
    });

    $(".next-btn").click(function () {
        $(".real_world_slider").slick("slickNext");
    });
    $(".prev-btn").addClass("slick-disabled");
    $(".real_world_slider").on("afterChange", function () {
        if ($(".real_world_section .slick-prev").hasClass("slick-disabled")) {
            $(".prev-btn").addClass("slick-disabled");
        } else {
            $(".prev-btn").removeClass("slick-disabled");
        }
        if ($(".real_world_section .slick-next").hasClass("slick-disabled")) {
            $(".next-btn").addClass("slick-disabled");
        } else {
            $(".next-btn").removeClass("slick-disabled");
        }
    });


}

if ($('.real_world_slider-details').length) {
    $('.real_world_slider-details').slick({
        dots: false,
        arrows: false,
        infinite: false,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 2000,
        pauseOnHover: true,
        pauseOnFocus: true,

        responsive: [
            {
                breakpoint: 1199,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

    // Custom prev/next buttons
    $(".prev-btn").click(function () {
        $(".real_world_slider-details").slick("slickPrev");
    });

    $(".next-btn").click(function () {
        $(".real_world_slider-details").slick("slickNext");
    });

    function updateButtons() {
        var $slider = $(".real_world_slider-details");
        var slick = $slider.slick("getSlick");
        var currentSlide = slick.currentSlide;
        var totalSlides = slick.slideCount;
        var slidesToShow = slick.options.slidesToShow;

        if (currentSlide === 0) {
            $(".prev-btn").addClass("slick-disabled");
        } else {
            $(".prev-btn").removeClass("slick-disabled");
        }

        if (currentSlide >= totalSlides - slidesToShow) {
            $(".next-btn").addClass("slick-disabled");
        } else {
            $(".next-btn").removeClass("slick-disabled");
        }
    }

    $(".real_world_slider-details").on("afterChange", function () {
        updateButtons();
    });

    updateButtons();
}



if ($('.real_world_slider-details-one').length) {
    $('.real_world_slider-details-one').slick({
        dots: false,
        arrows: false,
        infinite: false,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 2000,
        pauseOnHover: true,
        pauseOnFocus: true,

        responsive: [
            {
                breakpoint: 1199,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

    // Custom prev/next buttons
    $(".prev-btn-real-one").click(function () {
        $(".real_world_slider-details-one").slick("slickPrev");
    });

    $(".next-btn-real-one").click(function () {
        $(".real_world_slider-details-one").slick("slickNext");
    });

    function updateButtons() {
        var $slider = $(".real_world_slider-details-one");
        var slick = $slider.slick("getSlick");
        var currentSlide = slick.currentSlide;
        var totalSlides = slick.slideCount;
        var slidesToShow = slick.options.slidesToShow;

        if (currentSlide === 0) {
            $(".prev-btn-real-one").addClass("slick-disabled");
        } else {
            $(".prev-btn-real-one").removeClass("slick-disabled");
        }

        if (currentSlide >= totalSlides - slidesToShow) {
            $(".next-btn-real-one").addClass("slick-disabled");
        } else {
            $(".next-btn-real-one").removeClass("slick-disabled");
        }
    }

    $(".real_world_slider-details-one").on("afterChange", function () {
        updateButtons();
    });

    updateButtons();
}



if ($('.real_world_slider-details-two').length) {
    $('.real_world_slider-details-two').slick({
        dots: false,
        arrows: false,
        infinite: false,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 2000,
        pauseOnHover: true,
        pauseOnFocus: true,

        responsive: [
            {
                breakpoint: 1199,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

    // Custom prev/next buttons
    $(".prev-btn-real-two").click(function () {
        $(".real_world_slider-details-two").slick("slickPrev");
    });

    $(".next-btn-real-two").click(function () {
        $(".real_world_slider-details-two").slick("slickNext");
    });

    function updateButtons() {
        var $slider = $(".real_world_slider-details-two");
        var slick = $slider.slick("getSlick");
        var currentSlide = slick.currentSlide;
        var totalSlides = slick.slideCount;
        var slidesToShow = slick.options.slidesToShow;

        if (currentSlide === 0) {
            $(".prev-btn-real-two").addClass("slick-disabled");
        } else {
            $(".prev-btn-real-two").removeClass("slick-disabled");
        }

        if (currentSlide >= totalSlides - slidesToShow) {
            $(".next-btn-real-two").addClass("slick-disabled");
        } else {
            $(".next-btn-real-two").removeClass("slick-disabled");
        }
    }

    $(".real_world_slider-details-two").on("afterChange", function () {
        updateButtons();
    });

    updateButtons();
}

if ($('.real_world_slider-details-three').length) {
    $('.real_world_slider-details-three').slick({
        dots: false,
        arrows: false,
        infinite: false,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 2000,
        pauseOnHover: true,
        pauseOnFocus: true,

        responsive: [
            {
                breakpoint: 1199,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

    // Custom prev/next buttons
    $(".prev-btn-real-three").click(function () {
        $(".real_world_slider-details-three").slick("slickPrev");
    });

    $(".next-btn-real-three").click(function () {
        $(".real_world_slider-details-three").slick("slickNext");
    });

    function updateButtons() {
        var $slider = $(".real_world_slider-details-three");
        var slick = $slider.slick("getSlick");
        var currentSlide = slick.currentSlide;
        var totalSlides = slick.slideCount;
        var slidesToShow = slick.options.slidesToShow;

        if (currentSlide === 0) {
            $(".prev-btn-real-three").addClass("slick-disabled");
        } else {
            $(".prev-btn-real-three").removeClass("slick-disabled");
        }

        if (currentSlide >= totalSlides - slidesToShow) {
            $(".next-btn-real-three").addClass("slick-disabled");
        } else {
            $(".next-btn-real-three").removeClass("slick-disabled");
        }
    }

    $(".real_world_slider-details-three").on("afterChange", function () {
        updateButtons();
    });

    updateButtons();
}


$(".popup_btn").click(function () {
    $(".popup_main").fadeIn(500);
});

$(".close").click(function () {
    $(".popup_main").fadeOut(500);
});

$(".popup_btn_publication").click(function () {
  $(".popup_main_publication").fadeIn(500);
  $("body").addClass("popup_open");
});

$(".close_publication, .popup_overlay").click(function () {
  $(".popup_main_publication").fadeOut(500);
  $("body").removeClass("popup_open");
});

$(".popup_btn_science").click(function () {
    $(".popup_main_science").fadeIn(500);
});

$(".close_science").click(function () {
    $(".popup_main_science").fadeOut(500);
});



$(".popup_btn_founder").click(function () {
    $(".popup_main_founder").fadeIn(500);
});

$(".close_founder").click(function () {
    $(".popup_main_founder").fadeOut(500);
});

$(".popup_btn_founder").click(function () {
    $(".popup_main_founder").fadeIn(500);
});

$(".close_founder").click(function () {
    $(".popup_main_founder").fadeOut(500);
});



    $('.transforming_insight_slider').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: true,
        dots: false,
        infinite: false,
        speed: 300,
        autoplay: false,
        autoplaySpeed: 2000,
        pauseOnHover: true,
        pauseOnFocus: true,
        draggable: false,  // Mouse dragging disable
        swipe: false,      // Mobile swipe disable
        responsive: [
            {
                breakpoint: 1199,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false
                }
            }
        ]
    });


    $(".prev-btn1").click(function () {
        $(".transforming_insight_slider").slick("slickPrev");
    });

    $(".next-btn1").click(function () {
        $(".transforming_insight_slider").slick("slickNext");
    });
    $(".prev-btn1").addClass("slick-disabled");
    $(".transforming_insight_slider").on("afterChange", function () {
        if ($(".transforming_insights_section .slick-prev").hasClass("slick-disabled")) {
            $(".prev-btn1").addClass("slick-disabled");
        } else {
            $(".prev-btn1").removeClass("slick-disabled");
        }
        if ($(".transforming_insights_section .slick-next").hasClass("slick-disabled")) {
            $(".next-btn1").addClass("slick-disabled");
        } else {
            $(".next-btn1").removeClass("slick-disabled");
        }
    });



    $('.pop_up_slide').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: false,
        dots: false,
        infinite: true,  // Infinite loop enable kiya
        speed: 300,
        autoplay: false,
        autoplaySpeed: 2000,
        pauseOnHover: true,
        pauseOnFocus: true,
        responsive: [
            {
                breakpoint: 1199,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    arrows: false
                }
            }
        ]
    });


    // start about us page js


    

    $('.history_slider').slick({
        slidesToShow: 7,
        slidesToScroll: 1,
        arrows: true,
        dots: false,
        infinite: false,
        speed: 300,
        autoplay: false,
        preventClicks: true,
        autoplaySpeed: 2000,
        pauseOnHover: true,
        pauseOnFocus: true,
        draggable: true,  // Mouse dragging disable
        responsive: [
            {
                breakpoint: 1199,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            }
        ]
    });




    $('.clickme a').click(function(){
        $('.clickme a').removeClass('activelink');
        $(this).addClass('activelink');
        var tagid = $(this).data('tag');
        $('.list').removeClass('active').addClass('hide');
        $('#'+tagid).addClass('active').removeClass('hide');
    });




    // end about us page js


// Transforming inner popup js code 

document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".see_all").forEach(btn => {
        btn.addEventListener("click", function (event) {
            event.preventDefault();
            const popupId = this.getAttribute("onclick").match(/'([^']+)'/)[1];
            document.getElementById(popupId).classList.add('active');
        });
    });

    document.querySelectorAll(".cross_icon").forEach(btn => {
        btn.addEventListener("click", function () {
            this.closest(".transforming_pop_up_slider").classList.remove("active");
        });
    });
});



$('.our_team_clickme').click(function(){
    $('.our_team_clickme').removeClass('activelink');
    $(this).addClass('activelink');
    var tagid = $(this).data('tag');
    $('.our_team_inner').removeClass('active').addClass('hide');
    $('#'+tagid).addClass('active').removeClass('hide');
});


// ==========================================our team page start=============================================



    $('.our_team_clickme').on('click', function() {
        var parentId = $(this).data('tag');

        $('.our_team_inner').hide();

        $('#category-' + parentId).show();

        $('#group-' + parentId).val('');
    });

    $('.category-group-select').on('change', function() {
        var selectedGroup = $(this).val();
        console.log('Selected Group ID:', selectedGroup);
    });



    $(".search_loader").hide();
    filter_post(1);



function filter_post(page) {
    var get_site_url = $(".get_site_url").val();
    var chieldCategoryId = $(".cat_chield_id").val();

    var catid = $(".cat_id").val();

    var searchVal = $('#search_text').val();
    $.ajax({
        type: 'POST',
        url: get_site_url + '/wp-admin/admin-ajax.php',
        dataType: 'html',

        data: {
            page: page,
            our_team_category: catid,
            search: searchVal,
            child_category_id:chieldCategoryId,
            action: 'our_team_search_cat_filter'
        },

        beforeSend: function() {
            $(".search_loader").show();
        },
        success: function(res) {
            $(".search_loader").hide();
            $("#loadMoresec").hide();
            if (res != "") {
                $('.post-search-list').empty();
                $('.post-search-list').html(res);
                $("#loadMoresec").show();


            } else {
                if ($(".our_team_new").length == 0) {
                    $("#loadMoresec").fadeOut("slow");
                }
                $('.post-search-list').html('<strong>Post Not Found</strong>');

            }
        }
    });
}


$(".blog_cat").click(function() {
    $(".search_loader").show();
    $("#loadMoresec").hide();
    var cat_id = $(this).attr("data-tag");
    //alert(cat_id);
    $(".cat_id").val(cat_id);
    $(".cat_chield_id").val('');
    $("#search_text").val('');
    $(".post-search-list").empty();
    filter_post(1);
});
$(".chield_group").change(function() {
$(".search_loader").show();
$("#loadMoresec").hide();
var cat_chield_id = $(this).val();
// alert(cat_chield_id);
$(".cat_chield_id").val(cat_chield_id);
$("#search_text").val('');
$(".post-search-list").empty();
filter_post(1);
});



$('.key_press').on('keyup', function(e) {
    e.preventDefault();
    $(".search_loader").show();

    var searchVal = $("#search_text").val();
    console.log("Search value:", searchVal);  // Debugging line

    $(".post-search-list").empty();
    filter_post(1);
    $('html, body').animate({
        scrollTop: $(".our_team_section").offset().top
    });
});



document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".see_all").forEach(btn => {
        btn.addEventListener("click", function (event) {
            event.preventDefault();
            const popupId = this.getAttribute("onclick").match(/'([^']+)'/)[1];
            document.getElementById(popupId).classList.add('active');
        });
    });

    document.querySelectorAll(".cross_icon").forEach(btn => {
        btn.addEventListener("click", function () {
            this.closest(".transforming_pop_up_slider").classList.remove("active");
        });
    });
});



if ($('.government_inst_slider').length) {
    $('.government_inst_slider').slick({
        dots: false,
        arrows: true,
        infinite: false,
        speed: 300,
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 2000,
        pauseOnHover: true,
        pauseOnFocus: true,

        responsive: [
            {
                breakpoint: 1199,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });


    $(".government-inst-prev-btn").click(function () {
        $(".government_inst_slider").slick("slickPrev");
    });

    $(".government-inst-next-btn").click(function () {
        $(".government_inst_slider").slick("slickNext");
    });
    $(".government-inst-prev-btn").addClass("slick-disabled");
    $(".government_inst_slider").on("afterChange", function () {
        if ($(".government_inst_section .slick-prev").hasClass("slick-disabled")) {
            $(".government-inst-prev-btn").addClass("slick-disabled");
        } else {
            $(".government-inst-prev-btn").removeClass("slick-disabled");
        }
        if ($(".government_inst_section .slick-next").hasClass("slick-disabled")) {
            $(".government-inst-next-btn").addClass("slick-disabled");
        } else {
            $(".government-inst-next-btn").removeClass("slick-disabled");
        }
    });


}


if ($('.domestic_donors_slider').length) {
    $('.domestic_donors_slider').slick({
        dots: false,
        arrows: true,
        infinite: false,
        speed: 300,
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 2000,
        pauseOnHover: true,
        pauseOnFocus: true,

        responsive: [
            {
                breakpoint: 1199,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });


    $(".domestic-donors-prev-btn").click(function () {
        $(".domestic_donors_slider").slick("slickPrev");
    });

    $(".domestic-donors-next-btn").click(function () {
        $(".domestic_donors_slider").slick("slickNext");
    });
    $(".domestic-donors-prev-btn").addClass("slick-disabled");
    $(".domestic_donors_slider").on("afterChange", function () {
        if ($(".domestic_donors_section .slick-prev").hasClass("slick-disabled")) {
            $(".domestic-donors-prev-btn").addClass("slick-disabled");
        } else {
            $(".domestic-donors-prev-btn").removeClass("slick-disabled");
        }
        if ($(".domestic_donors_section .slick-next").hasClass("slick-disabled")) {
            $(".domestic-donors-next-btn").addClass("slick-disabled");
        } else {
            $(".domestic-donors-next-btn").removeClass("slick-disabled");
        }
    });


}




if ($('.collaborators_slider').length) {
    $('.collaborators_slider').slick({
        dots: false,
        arrows: true,
        infinite: false,
        speed: 300,
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 2000,
        pauseOnHover: true,
        pauseOnFocus: true,

        responsive: [
            {
                breakpoint: 1199,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });


    $(".collaborators-prev-btn").click(function () {
        $(".collaborators_slider").slick("slickPrev");
    });

    $(".collaborators-next-btn").click(function () {
        $(".collaborators_slider").slick("slickNext");
    });
    $(".collaborators-prev-btn").addClass("slick-disabled");
    $(".collaborators_slider").on("afterChange", function () {
        if ($(".collaborators_section .slick-prev").hasClass("slick-disabled")) {
            $(".collaborators-prev-btn").addClass("slick-disabled");
        } else {
            $(".collaborators-prev-btn").removeClass("slick-disabled");
        }
        if ($(".collaborators_section .slick-next").hasClass("slick-disabled")) {
            $(".collaborators-next-btn").addClass("slick-disabled");
        } else {
            $(".collaborators-next-btn").removeClass("slick-disabled");
        }
    });


}



if ($('.internatonal_donors_slider').length) {
    $('.internatonal_donors_slider').slick({
        dots: false,
        arrows: true,
        infinite: false,
        speed: 300,
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 2000,
        pauseOnHover: true,
        pauseOnFocus: true,

        responsive: [
            {
                breakpoint: 1199,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });


    $(".internatonal-donors-prev-btn").click(function () {
        $(".internatonal_donors_slider").slick("slickPrev");
    });

    $(".internatonal-donors-next-btn").click(function () {
        $(".internatonal_donors_slider").slick("slickNext");
    });
    $(".internatonal-donors-prev-btn").addClass("slick-disabled");
    $(".internatonal_donors_slider").on("afterChange", function () {
        if ($(".internatonal_donors_section .slick-prev").hasClass("slick-disabled")) {
            $(".internatonal-donors-prev-btn").addClass("slick-disabled");
        } else {
            $(".internatonal-donors-prev-btn").removeClass("slick-disabled");
        }
        if ($(".internatonal_donors_section .slick-next").hasClass("slick-disabled")) {
            $(".internatonal-donors-next-btn").addClass("slick-disabled");
        } else {
            $(".internatonal-donors-next-btn").removeClass("slick-disabled");
        }
    });


}


$(".at-title").click(function () {
    $(this)
      .toggleClass("active")
      .next(".at-tab")
      .slideToggle()
      .parent()
      .siblings()
      .find(".at-tab")
      .slideUp()
      .prev()
      .removeClass("active");
  });


  $('.projectclick a').click(function(){
    $('.projectclick a').removeClass('activelink');
    $(this).addClass('activelink');
    var tagid = $(this).data('tag');
    $('.projectlist').removeClass('active').addClass('hide');
    $('#'+tagid).addClass('active').removeClass('hide');
});


// project details js start 


function initAllRealWorldSliders() {
  $('.slider-wrapper').each(function () {
    const $wrapper = $(this);
    const $slider = $wrapper.find('.real_world_slider-group');
    const $prev = $wrapper.find('.prev-btn');
    const $next = $wrapper.find('.next-btn');

    // Init slick only if not already initialized
    if (!$slider.hasClass('slick-initialized')) {
      $slider.slick({
        dots: false,
        arrows: false, // use custom buttons
        infinite: false,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: false,
        pauseOnHover: true,
        pauseOnFocus: true,
        responsive: [
          {
            breakpoint: 1199,
            settings: { slidesToShow: 3 }
          },
          {
            breakpoint: 991,
            settings: { slidesToShow: 2 }
          },
          {
            breakpoint: 767,
            settings: { slidesToShow: 1 }
          }
        ]
      });

      function updateArrowState() {
        const slick = $slider.slick('getSlick');
        const currentSlide = slick.currentSlide;
        const totalSlides = slick.slideCount;
        const slidesToShow = slick.options.slidesToShow;

        // Disable prev if at first slide
        if (currentSlide === 0) {
          $prev.addClass('slick-disabled');
        } else {
          $prev.removeClass('slick-disabled');
        }

        // Disable next if at or beyond last visible slide
        if (currentSlide >= totalSlides - slidesToShow) {
          $next.addClass('slick-disabled');
        } else {
          $next.removeClass('slick-disabled');
        }
      }

      // Initial button state
      updateArrowState();

      // Button clicks
      $prev.on('click', () => {
        $slider.slick('slickPrev');
      });

      $next.on('click', () => {
        $slider.slick('slickNext');
      });

      // Update buttons on slide change
      $slider.on('afterChange', updateArrowState);
    }
  });
}

// Call once DOM is ready
$(document).ready(function () {
  initAllRealWorldSliders();
});

   
 $(".share-click-btn").on("click", function () {
      $(".social-share-show-hide").toggle();
    });
 


if ($('.upcoming_event_slider').length) {
  $('.upcoming_event_slider').slick({
    slidesToShow: 1.6,
    slidesToScroll: 1,
    arrows: false,
    infinite: false,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 1.3
        }
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  });

  // Navigation buttons
  $('.prev-btn-upcoming').on('click', function () {
    $('.upcoming_event_slider').slick('slickPrev');
  });

  $('.next-btn-upcoming').on('click', function () {
    $('.upcoming_event_slider').slick('slickNext');
  });
}
if ($('.featured_blog_slider').length) {
  $('.featured_blog_slider').slick({
    slidesToShow: 2.35,
    slidesToScroll: 1,
    arrows: false, 
    infinite: false,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 1.42
        }
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  });

  $('.featured_blog_slider .slick-prev, .featured_blog_slider .slick-next').css('display', 'none');
  updateCustomNav();
  $(".featured-prev-btn").click(function () {
    if (!$(this).hasClass("slick-disabled")) {
      $(".featured_blog_slider").slick("slickPrev");
    }
  });
  $(".featured-next-btn").click(function () {
    if (!$(this).hasClass("slick-disabled")) {
      $(".featured_blog_slider").slick("slickNext");
    }
  });
  $(".featured_blog_slider").on("afterChange", function () {
    updateCustomNav();
  });

  function updateCustomNav() {
    const $slickSlider = $(".featured_blog_slider");
    if ($slickSlider.find('.slick-prev').hasClass("slick-disabled")) {
      $(".featured-prev-btn").addClass("slick-disabled");
    } else {
      $(".featured-prev-btn").removeClass("slick-disabled");
    }

    if ($slickSlider.find('.slick-next').hasClass("slick-disabled")) {
      $(".featured-next-btn").addClass("slick-disabled");
    } else {
      $(".featured-next-btn").removeClass("slick-disabled");
    }
  }
}



if ($('.our_apporach_right_slider').length) {
  $('.our_apporach_right_slider').slick({
    slidesToShow: 3.25,
    slidesToScroll: 1,
    arrows: true, 
    infinite: false,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 2.2
        }
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow:2.2
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2
        }
      }
    ]
  });

  $('.our_apporach_right_slider .slick-prev, .our_apporach_right_slider .slick-next').css('display', 'none');
  updateCustomNav();
  $(".our-apporach-prev-btn").click(function () {
    if (!$(this).hasClass("slick-disabled")) {
      $(".our_apporach_right_slider").slick("slickPrev");
    }
  });
  $(".our-apporach-next-btn").click(function () {
    if (!$(this).hasClass("slick-disabled")) {
      $(".our_apporach_right_slider").slick("slickNext");
    }
  });
  $(".our_apporach_right_slider").on("afterChange", function () {
    updateCustomNav();
  });

  function updateCustomNav() {
    const $slickSlider = $(".our_apporach_right_slider");
    if ($slickSlider.find('.slick-prev').hasClass("slick-disabled")) {
      $(".our-apporach-prev-btn").addClass("slick-disabled");
    } else {
      $(".our-apporach-prev-btn").removeClass("slick-disabled");
    }

    if ($slickSlider.find('.slick-next').hasClass("slick-disabled")) {
      $(".our-apporach-next-btn").addClass("slick-disabled");
    } else {
      $(".our-apporach-next-btn").removeClass("slick-disabled");
    }
  }
}



if ($('.event_teaser_slider').length) {
  $('.event_teaser_slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true, 
    infinite: false,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 1
        }
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow:1
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  });

  $('.event_teaser_slider .slick-prev, .event_teaser_slider .slick-next').css('display', 'none');
  updateCustomNav();
  $(".event-teaser-prev-btn").click(function () {
    if (!$(this).hasClass("slick-disabled")) {
      $(".event_teaser_slider").slick("slickPrev");
    }
  });
  $(".event-teaser-next-btn").click(function () {
    if (!$(this).hasClass("slick-disabled")) {
      $(".event_teaser_slider").slick("slickNext");
    }
  });
  $(".event_teaser_slider").on("afterChange", function () {
    updateCustomNav();
  });

  function updateCustomNav() {
    const $slickSlider = $(".event_teaser_slider");
    if ($slickSlider.find('.slick-prev').hasClass("slick-disabled")) {
      $(".event-teaser-prev-btn").addClass("slick-disabled");
    } else {
      $(".event-teaser-prev-btn").removeClass("slick-disabled");
    }

    if ($slickSlider.find('.slick-next').hasClass("slick-disabled")) {
      $(".event-teaser-next-btn").addClass("slick-disabled");
    } else {
      $(".event-teaser-next-btn").removeClass("slick-disabled");
    }
  }
}




if ($('.event_speaker_slider').length) {
  $('.event_speaker_slider').slick({
    slidesToShow: 2.56,
    slidesToScroll: 1,
    dots: true, 
    arrows: false,
    infinite: false,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow:2
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  });
}


if ($('.why_work_sec_slider').length) {
  $('.why_work_sec_slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true, 
    infinite: false,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  });

  $('.why_work_sec_slider .slick-prev, .why_work_sec_slider .slick-next').css('display', 'none');
  updateCustomNav();
  $(".why-work-box-prev-btn").click(function () {
    if (!$(this).hasClass("slick-disabled")) {
      $(".why_work_sec_slider").slick("slickPrev");
    }
  });
  $(".why-work-box-next-btn").click(function () {
    if (!$(this).hasClass("slick-disabled")) {
      $(".why_work_sec_slider").slick("slickNext");
    }
  });
  $(".why_work_sec_slider").on("afterChange", function () {
    updateCustomNav();
  });

  function updateCustomNav() {
    const $slickSlider = $(".why_work_sec_slider");
    if ($slickSlider.find('.slick-prev').hasClass("slick-disabled")) {
      $(".why-work-box-prev-btn").addClass("slick-disabled");
    } else {
      $(".why-work-box-prev-btn").removeClass("slick-disabled");
    }

    if ($slickSlider.find('.slick-next').hasClass("slick-disabled")) {
      $(".why-work-box-next-btn").addClass("slick-disabled");
    } else {
      $(".why-work-box-next-btn").removeClass("slick-disabled");
    }
  }
}

// var $carousel = $('.life_at_big_img_slider');

// $carousel.slick({
//   slidesToShow: 1,
//   slidesToScroll: 1,
//   arrows: false,
//   infinite: true,
// //   fade: true,
// //   adaptiveHeight: true,
//   asNavFor: '.life_at_thumb_img_slider'
// });

// // Thumbnail navigation
// $('.life_at_thumb_img_slider').slick({
//   slidesToShow: 6.5,
//   slidesToScroll: 1,
//   asNavFor: '.life_at_big_img_slider',
//   focusOnSelect: true,
//   arrows: true,
//   infinite: false,
//   loop: false,
//   draggable: false,
//   responsive: [
//     {
//         breakpoint: 1025,
//         settings: {
//           slidesToShow: 5.5
//         }
//       },
//       {
//         breakpoint: 991,
//         settings: {
//           slidesToShow: 4.5
//         }
//       },
//     {
//       breakpoint: 768,
//       settings: {
//         slidesToShow: 3.5
//       }
//     }
//   ]
// });

var $carousel = $('.life_at_big_img_slider');

// Main slider
$carousel.slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  infinite: false,
  asNavFor: '.life_at_thumb_img_slider'
});

// Thumbnail slider
$('.life_at_thumb_img_slider').slick({
  slidesToShow: 6.5,
  slidesToScroll: 1,
  asNavFor: '.life_at_big_img_slider',
  focusOnSelect: true,
  arrows: true,
  infinite: false,
  draggable: false,
  responsive: [
    { breakpoint: 1025, settings: { slidesToShow: 5.5 } },
    { breakpoint: 991, settings: { slidesToShow: 4.5 } },
    { breakpoint: 768, settings: { slidesToShow: 3.5 } }
  ]
});

// Update #main-image src on slide change
$carousel.on('afterChange', function(event, slick, currentSlide){
  var $currentSlide = $carousel.find('.slick-slide[data-slick-index="' + currentSlide + '"] img');
  var currentImg = $currentSlide.attr('src');
  if (currentImg) {
    $('#main-image').attr('src', currentImg);
  }
});

// Set initial image on load after slick initialized
$carousel.on('init', function(event, slick){
  var $initialSlide = $carousel.find('.slick-slide.slick-current img');
  var initialImg = $initialSlide.attr('src');
  if (initialImg) {
    $('#main-image').attr('src', initialImg);
  }
});

// Trigger 'init' manually if needed
$carousel.slick('setPosition');


})(jQuery);

  function activateTab($tab) {
        // Prevent default link behavior
        event?.preventDefault();

        // Remove all active classes from image tabs
        $(".tab-blog").removeClass('tab-active');

        // Add active class to the matching image tab
        $(".tab-blog[data-id='" + $tab.closest("li").attr('data-id') + "']").addClass("tab-active");

        // Handle tab active class
        $(".group-a").removeClass('active-a');
        $tab.addClass('active-a');
    }

    // Bind click handler
    $('.group-a').click(function (e) {
        activateTab($(this));
    });

    // Automatically activate the first tab on page load
    activateTab($('.group_tabbing li:first-child .group-a'));


function isMobileView() {
    return window.innerWidth <= 767;
  }

  function activateAccordion($clicked) {
    if (!isMobileView()) return; // only for mobile

    const $li = $clicked.closest('li');
    const $content = $li.find('.group_mobile_img');

    if ($content.hasClass('open')) {
      $content.removeClass('open');
      $clicked.removeClass('active-a');
    } else {
      $('.group_mobile_img').removeClass('open');
      $('.group-a').removeClass('active-a');

      $content.addClass('open');
      $clicked.addClass('active-a');
    }
  }

  $(document).ready(function () {
    // Default open first accordion in mobile
    if (isMobileView()) {
      const $first = $('.group_tabbing li:first-child');
      $first.find('.group_mobile_img').addClass('open');
      $first.find('.group-a').addClass('active-a');
    }

    // On click
    $('.group-a').on('click', function (e) {
      e.preventDefault();
      activateAccordion($(this));
    });
  });

  // Optional: If you want it to react to resize
  $(window).on('resize', function () {
    if (isMobileView()) {
      if (!$('.group_mobile_img.open').length) {
        const $first = $('.group_tabbing li:first-child');
        $('.group_mobile_img').removeClass('open');
        $('.group-a').removeClass('active-a');
        $first.find('.group_mobile_img').addClass('open');
        $first.find('.group-a').addClass('active-a');
      }
    } else {
      // Clear accordion state when switching to desktop
      $('.group_mobile_img').removeClass('open');
      $('.group-a').removeClass('active-a');
    }
  });





    
const tabs = document.querySelectorAll(".tabbing_click_insight");
const contents = document.querySelectorAll(".insights_tabs-stage");

tabs.forEach(tab => {
    tab.addEventListener("click", function (e) {
        e.preventDefault(); // Stop <a> default behavior
        const rel = this.getAttribute("data-rel");

        tabs.forEach(t => t.classList.remove("activelink"));
        contents.forEach(content => content.classList.remove("active"));

        this.classList.add("activelink");

        const targetContent = document.querySelector(`.${rel}`);
        if (targetContent) {
            targetContent.classList.add("active");

            // Set position for .real_world_slider
            const sliders = targetContent.querySelectorAll('.real_world_slider-details, .real_world_slider-details-one, .real_world_slider-details-two, .real_world_slider-details-three');
            sliders.forEach(slider => {
                if ($(slider).hasClass('slick-initialized')) {
                    $(slider).slick('setPosition');
                }
            });

        }
    });
});
// Accordion for Annual Reports
const annualAccordionItems = document.querySelectorAll(
  ".annual_reports_accordion_sec .accordion-item"
);

annualAccordionItems.forEach((item) => {
  const header = item.querySelector(".accordion-header");

  header.addEventListener("click", () => {
    if (item.classList.contains("active")) {
      item.classList.remove("active");
    } else {
      annualAccordionItems.forEach((el) => el.classList.remove("active"));
      item.classList.add("active");
    }
  });
});

// Accordion for Filters (Checkboxes)
const filterAccordionItems = document.querySelectorAll(".checkbox_left_part");

filterAccordionItems.forEach((item) => {
  const header = item.querySelector(".checkbox_title");

  header.addEventListener("click", () => {
    const isActive = item.classList.contains("active");

    filterAccordionItems.forEach((el) => el.classList.remove("active"));

    if (!isActive) {
      item.classList.add("active");
    }
  });
});

 document.querySelectorAll('.scroll_behaviour').forEach(link => {
    link.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      
      // Ignore if href is just "#" or empty
      if (targetId === "#" || targetId === "") return;

      e.preventDefault();

      const targetElement = document.querySelector(targetId);

      if (targetElement) {
        const elementPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
        const offset = 100; // Adjust how far below the top you want to scroll

        window.scrollTo({
          top: elementPosition - offset,
          behavior: 'smooth'
        });
      }
    });
  });


  document.addEventListener('DOMContentLoaded', () => {
    const eventBentoImages = document.querySelectorAll('.event_gallery_inner .event_bento_img img');
    const imagePopup = document.getElementById('imagePopup');
    const closeBtn = document.querySelector('.close-btn');
    const popupImage = document.getElementById('popupImage');
    const popupText = document.getElementById('popupText');
    const prevArrow = document.querySelector('.prev-arrow');
    const nextArrow = document.querySelector('.next-arrow');

    let currentImageIndex = 0;
    const imagesData = []; 
    eventBentoImages.forEach((img, index) => {
        imagesData.push({
            src: img.src,
            text: img.alt || ''
        });
    });

    // Function to open the popup
    function openPopup(index) {
        currentImageIndex = index;
        popupImage.src = imagesData[currentImageIndex].src;
        popupText.textContent = imagesData[currentImageIndex].text;
        imagePopup.style.display = 'flex'; // Use flex to center the popup
        document.body.style.overflow = 'hidden'; // Prevent scrolling when popup is open
    }

    // Function to close the popup
    function closePopup() {
        imagePopup.style.display = 'none';
        document.body.style.overflow = ''; // Restore scrolling
    }

    // Event listeners for opening the popup
    eventBentoImages.forEach((img, index) => {
        img.addEventListener('click', () => openPopup(index));
    });

    // Event listener for closing the popup via the close button
    closeBtn.addEventListener('click', closePopup);

    // Close popup when clicking outside the content (on the overlay)
    imagePopup.addEventListener('click', (e) => {
        if (e.target === imagePopup) {
            closePopup();
        }
    });

    // Navigation functions
    function showNextImage() {
        currentImageIndex = (currentImageIndex + 1) % imagesData.length;
        popupImage.src = imagesData[currentImageIndex].src;
        popupText.textContent = imagesData[currentImageIndex].text;
    }

    function showPrevImage() {
        currentImageIndex = (currentImageIndex - 1 + imagesData.length) % imagesData.length; // Ensure index is not negative
        popupImage.src = imagesData[currentImageIndex].src;
        popupText.textContent = imagesData[currentImageIndex].text;
    }

    // Event listeners for navigation arrows
    nextArrow.addEventListener('click', showNextImage);
    prevArrow.addEventListener('click', showPrevImage);

    // Keyboard navigation (optional)
    document.addEventListener('keydown', (e) => {
        if (imagePopup.style.display === 'flex') { // Check if popup is currently visible
            if (e.key === 'ArrowRight') {
                showNextImage();
            } else if (e.key === 'ArrowLeft') {
                showPrevImage();
            } else if (e.key === 'Escape') {
                closePopup();
            }
        }
    });
});



document.addEventListener('DOMContentLoaded', () => {
    // Select all image elements within the gallery for click events
    const eventBentoImages = document.querySelectorAll('.event_gallery_inner .event_bento_img img');
    const imagePopup = document.getElementById('imagePopup');
    const closeBtn = document.querySelector('.close-btn');
    const popupImage = document.getElementById('popupImage');
    const popupText = document.getElementById('popupText');
    const prevArrow = document.querySelector('.prev-arrow');
    const nextArrow = document.querySelector('.next-arrow');

    // Store references to all bento image containers and their descriptions
    const galleryItems = [];
    document.querySelectorAll('.event_gallery_inner .event_bento_img').forEach(imgContainer => {
        const imgSrc = imgContainer.querySelector('img').src;
        const descriptionId = imgContainer.dataset.descriptionId;
        const descriptionElement = document.getElementById(descriptionId);
        const descriptionText = descriptionElement ? descriptionElement.textContent.trim() : '';

        galleryItems.push({
            src: imgSrc,
            text: descriptionText
        });
    });

    let currentImageIndex = 0;

    // Function to open the popup
    function openPopup(index) {
        currentImageIndex = index;
        popupImage.src = galleryItems[currentImageIndex].src;
        popupText.textContent = galleryItems[currentImageIndex].text;
        imagePopup.style.display = 'flex';
        document.body.style.overflow = 'hidden'; // Prevent scrolling when popup is open
    }

    // Function to close the popup
    function closePopup() {
        imagePopup.style.display = 'none';
        document.body.style.overflow = ''; // Restore scrolling
    }

    // Event listeners for opening the popup
    eventBentoImages.forEach((img, index) => {
        img.addEventListener('click', () => openPopup(index));
    });

    // Event listener for closing the popup via the close button
    closeBtn.addEventListener('click', closePopup);

    // Close popup when clicking outside the content (on the overlay)
    imagePopup.addEventListener('click', (e) => {
        if (e.target === imagePopup) {
            closePopup();
        }
    });

    // Navigation functions
    function showNextImage() {
        currentImageIndex = (currentImageIndex + 1) % galleryItems.length;
        popupImage.src = galleryItems[currentImageIndex].src;
        popupText.textContent = galleryItems[currentImageIndex].text;
    }

    function showPrevImage() {
        currentImageIndex = (currentImageIndex - 1 + galleryItems.length) % galleryItems.length; // Ensure index is not negative
        popupImage.src = galleryItems[currentImageIndex].src;
        popupText.textContent = galleryItems[currentImageIndex].text;
    }

    // Event listeners for navigation arrows
    nextArrow.addEventListener('click', showNextImage);
    prevArrow.addEventListener('click', showPrevImage);

    // Keyboard navigation (optional)
    document.addEventListener('keydown', (e) => {
        if (imagePopup.style.display === 'flex') { // Check if popup is currently visible
            if (e.key === 'ArrowRight') {
                showNextImage();
            } else if (e.key === 'ArrowLeft') {
                showPrevImage();
            } else if (e.key === 'Escape') {
                closePopup();
            }
        }
    });
});


const thumbnails = document.querySelectorAll('.thumbnail');
    const mainImage = document.getElementById('main-image');

    thumbnails.forEach(thumb => {
        thumb.addEventListener('click', function () {
            // Remove active from all
            thumbnails.forEach(t => t.classList.remove('active'));
            // Set new image
            mainImage.src = this.dataset.large;
            // Add active to clicked
            this.classList.add('active');
        });
    });
    document.getElementById('openSearch').addEventListener('click', function() {
    document.querySelector('.global_search_sec .global_result_left').classList.add('active');
});





if ($('.real_world_slider-details-ten').length) {
    $('.real_world_slider-details-ten').slick({
        dots: false,
        arrows: false,
        infinite: false,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 2000,
        pauseOnHover: true,
        pauseOnFocus: true,

        responsive: [
            {
                breakpoint: 1199,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

    // Custom prev/next buttons
    $(".prev-btn-real-ten").click(function () {
        $(".real_world_slider-details-ten").slick("slickPrev");
    });

    $(".next-btn-real-ten").click(function () {
        $(".real_world_slider-details-ten").slick("slickNext");
    });

    function updateButtons() {
        var $slider = $(".real_world_slider-details-ten");
        var slick = $slider.slick("getSlick");
        var currentSlide = slick.currentSlide;
        var totalSlides = slick.slideCount;
        var slidesToShow = slick.options.slidesToShow;

        if (currentSlide === 0) {
            $(".prev-btn-real-ten").addClass("slick-disabled");
        } else {
            $(".prev-btn-real-ten").removeClass("slick-disabled");
        }

        if (currentSlide >= totalSlides - slidesToShow) {
            $(".next-btn-real-ten").addClass("slick-disabled");
        } else {
            $(".next-btn-real-ten").removeClass("slick-disabled");
        }
    }

    $(".real_world_slider-details-ten").on("afterChange", function () {
        updateButtons();
    });

    updateButtons();
}


  $('.search-icon a').click(function (e) {
    e.preventDefault();
    $('.search_header_sec').addClass('active');
  });

  $('.cross').click(function () {
    $('.search_header_sec').removeClass('active');
  });
