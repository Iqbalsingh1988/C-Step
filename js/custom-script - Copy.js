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
        arrows: true,
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





$(".popup_btn").click(function () {
    $(".popup_main").fadeIn(500);
});

$(".close").click(function () {
    $(".popup_main").fadeOut(500);
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
        arrows: false,
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
        arrows: false,
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
        arrows: false,
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
        arrows: false,
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



})(jQuery);


