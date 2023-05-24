"use strict";

$(function () {
    // ------------------------------------------------------- //
    //   Multilevel dropdowns
    // ------------------------------------------------------ //

    $(".dropdown-menu [data-bs-toggle='dropdown']").on("click", function (event) {
        event.preventDefault();
        event.stopPropagation();

        // close other dropdowns
        $(this).parents(".dropdown-menu").first().find(".show").removeClass("show");
        $(this).parents(".dropdown-menu").first().find("[aria-expanded='true']").attr("aria-expanded", false);

        // mark these as open
        $(this).attr("aria-expanded", true);
        $(this).siblings(".dropdown-menu").toggleClass("show");

        // and close submenus when the main dropdown gets closed
        $(this)
            .parents(".nav-item.dropdown")
            .on("hidden.bs.dropdown", function (e) {
                $(".dropdown-submenu .show").removeClass("show");
                $(".dropdown-submenu [aria-expanded='true']").attr("aria-expanded", false);
            });
    });

    // ------------------------------------------------------- //
    //   Transparent navbar dropdowns
    //
    //   = do not make navbar
    //   transparent if dropdown's still open
    //   / make transparent again when dropdown's closed
    // ------------------------------------------------------ //

    var navbar = $(".navbar"),
        navbarCollapse = $(".navbar-collapse");

    $(".navbar.bg-transparent .dropdown").on("shown.bs.dropdown", function () {
        makeNavbarWhite();
    });

    $(".navbar.bg-transparent .dropdown").on("hidden.bs.dropdown", function () {
        // if we're not on mobile, make navbar transparent
        // after we close the dropdown

        if (!navbarCollapse.hasClass("show") && navbar.find(".dropdown-menu.show").length == 0) {
            makeNavbarTransparent();
            if (navbar.find(".dropdown.show").length > 0) {
            }
        }
    });

    $(".navbar.bg-transparent .navbar-collapse").on("show.bs.collapse", function () {
        makeNavbarWhite();
    });

    $(".navbar.bg-transparent .navbar-collapse").on("hide.bs.collapse", function () {
        makeNavbarTransparent();
    });

    function makeNavbarWhite() {
        navbar.addClass("was-transparent");
        if (navbar.hasClass("navbar-dark")) {
            navbar.addClass("was-navbar-dark");
            navbar.removeClass("navbar-dark");
        } else {
            navbar.addClass("was-navbar-light");
        }

        navbar.removeClass("bg-transparent");

        navbar.addClass("bg-white");
        navbar.addClass("navbar-light");
    }

    function makeNavbarTransparent() {
        navbar.removeClass("bg-white");
        navbar.removeClass("navbar-light");
        navbar.removeClass("was-transparent");

        navbar.addClass("bg-transparent");
        if (navbar.hasClass("was-navbar-dark")) {
            navbar.addClass("navbar-dark");
        } else {
            navbar.addClass("navbar-light");
        }
    }

    // ------------------------------------------------------- //
    //   Open & Close Fullscreen Navbar Menu
    // ------------------------------------------------------ //

    $(".navbar-collapse-fullscreen").on("show.bs.collapse", function () {
        $(document.body).addClass("overflow-hidden");
    });
    $(".navbar-collapse-fullscreen").on("hide.bs.collapse", function () {
        $(document.body).removeClass("overflow-hidden");
    });

    // ------------------------------------------------------- //
    //   Open & Close Search Panel
    // ------------------------------------------------------ //
    $('[data-bs-toggle="search"]').on("click", function () {
        $(".search-area-wrapper").show();
        $(".search-area-input").focus();
    });

    $(".search-area-wrapper .close-btn").on("click", function () {
        $(".search-area-wrapper").hide();
    });

    // ------------------------------------------------------- //
    //   GLightbox
    // ------------------------------------------------------ //

    const lightbox = GLightbox({
        touchNavigation: true,
        //loop: true,
        autoplayVideos: true,
    });

    // ------------------------------------------------------- //
    //   Image zoom
    // ------------------------------------------------------ //

    $('[data-bs-toggle="zoom"]').each(function () {
        $(this).zoom({
            url: $(this).attr("data-image"),
            duration: 0,
        });
    });

    // ------------------------------------------------------- //
    //   Make a sticky navbar on scrolling
    // ------------------------------------------------------ //
    $(window).scroll(function () {
        var body = $("body"),
            stickyNavbar = $("nav.navbar-sticky"),
            header = $(".header"),
            topbar = $(".top-bar");

        function makeItFixed(x) {
            if ($(window).scrollTop() > x) {
                stickyNavbar.addClass("fixed-top");
                if (!header.hasClass("header-absolute")) {
                    body.css("padding-top", stickyNavbar.outerHeight());
                    body.data("smooth-scroll-offset", stickyNavbar.outerHeight());
                }
            } else {
                stickyNavbar.removeClass("fixed-top");
                body.css("padding-top", "0");
            }
        }

        // if .top-bar exists, affix the navbar when we scroll past .top-bar
        // else affix it immediately
        if (stickyNavbar.length > 0 && topbar.length > 0) {
            makeItFixed(topbar.outerHeight());
        } else if (stickyNavbar.length > 0) {
            makeItFixed(0);
        }
    });

    // ------------------------------------------------------- //
    //   Increase/Decrease product amount
    // ------------------------------------------------------ //

    $(".btn-items-decrease").on("click", function () {
        var input = $(this).siblings(".input-items");
        if (parseInt(input.val(), 10) >= 1) {
            input.val(parseInt(input.val(), 10) - 1);
        }
    });

    $(".btn-items-increase").on("click", function () {
        var input = $(this).siblings(".input-items");
        input.val(parseInt(input.val(), 10) + 1);
    });

    // ------------------------------------------------------- //
    //   Scroll to top button
    // ------------------------------------------------------ //

    $(window).on("scroll", function () {
        if ($(window).scrollTop() >= 1500) {
            $("#scrollTop").fadeIn();
        } else {
            $("#scrollTop").fadeOut();
        }
    });

    $("#scrollTop").on("click", function () {
        $("html, body").animate(
            {
                scrollTop: 0,
            },
            1000
        );
    });

    // ------------------------------------------------------- //
    //    Colour form control
    // ------------------------------------------------------ //

    $(".btn-colour").on("click", function (e) {
        var button = $(this);

        if (button.attr("data-allow-multiple") === undefined) {
            button.parents(".colours-wrapper").find(".btn-colour").removeClass("active");
        }

        button.toggleClass("active");
    });

    // ------------------------------------------------------- //
    //  Button-style form labels used in detail.html
    // ------------------------------------------------------ //

    $(".detail-option-btn-label").on("click", function () {
        var button = $(this);

        button.parents(".detail-option").find(".detail-option-btn-label").removeClass("active");

        button.toggleClass("active");
    });

    // ------------------------------------------------------- //
    //   Circle Slider
    // ------------------------------------------------------ //
    var circleSlider = $(".circle-slider");
    circleSlider
        .on({
            "initialized.owl.carousel": function () {
                // we add ..mh-full-screen to the parent section to avoid items below the carousel jumping before the carousel loads
                circleSlider.parents("section").removeClass("mh-full-screen");
            },
        })
        .owlCarousel({
            loop: true,
            margin: 0,
            smartSpeed: 500,
            responsiveClass: true,
            navText: [
                '<img src="' + basePath + 'img/prev-dark.svg" alt="" width="50">',
                '<img src="' + basePath + 'img/next-dark.svg" alt="" width="50">',
            ],
            responsive: {
                0: {
                    items: 1,
                    nav: false,
                    dots: true,
                },
                600: {
                    items: 1,
                    nav: false,
                    dots: true,
                },
                1120: {
                    items: 1,
                    dots: false,
                    nav: true,
                },
            },
            onRefresh: function () {
                circleSlider.find(".item").height("");
            },
            onRefreshed: function () {
                var maxHeight = 0;
                var items = circleSlider.find(".item");
                items.each(function () {
                    var itemHeight = $(this).outerHeight();
                    if (itemHeight > maxHeight) {
                        maxHeight = itemHeight;
                    }
                });
                items.height(maxHeight);
            },
        });
    // ------------------------------------------------------- //
    //   Home Slider
    // ------------------------------------------------------ //
    var homeSlider = $(".home-slider");
    homeSlider.owlCarousel({
        loop: true,
        margin: 0,
        smartSpeed: 500,
        responsiveClass: true,
        navText: [
            '<img src="' + basePath + 'img/prev.svg" alt="" width="50">',
            '<img src="' + basePath + 'img/next.svg" alt="" width="50">',
        ],
        responsive: {
            0: {
                items: 1,
                nav: false,
                dots: true,
            },
            600: {
                items: 1,
                nav: false,
                dots: true,
            },
            1120: {
                items: 1,
                dots: false,
                nav: true,
            },
        },
        onRefresh: function () {
            homeSlider.find(".item").height("");
        },
        onRefreshed: function () {
            var maxHeight = 0;
            var items = homeSlider.find(".item");
            items.each(function () {
                var itemHeight = $(this).height();
                if (itemHeight > maxHeight) {
                    maxHeight = itemHeight;
                }
            });
            items.height(maxHeight);
        },
    });

    // ------------------------------------------------------- //
    //   Home Full Slider
    // ------------------------------------------------------ //

    var homeFullSlider = $(".home-full-slider");
    homeFullSlider.owlCarousel({
        loop: true,
        margin: 0,
        smartSpeed: 500,
        responsiveClass: true,
        navText: [
            '<img src="' + basePath + 'img/prev.svg" alt="" width="50">',
            '<img src="' + basePath + 'img/next.svg" alt="" width="50">',
        ],
        responsive: {
            0: {
                items: 1,
                nav: false,
                dots: true,
            },
            600: {
                items: 1,
                nav: false,
                dots: true,
            },
            1120: {
                items: 1,
                dots: false,
                nav: true,
            },
        },
        onRefresh: function () {
            homeFullSlider.find(".item").height("");
        },
        onRefreshed: function () {
            var maxHeight = 0;
            var items = homeFullSlider.find(".item");
            items.each(function () {
                var itemHeight = $(this).height();
                if (itemHeight > maxHeight) {
                    maxHeight = itemHeight;
                }
            });
            items.height(maxHeight);
        },
    });

    // ------------------------------------------------------- //
    //   Product Slider
    // ------------------------------------------------------ //
    $(".product-slider").owlCarousel({
        loop: false,
        margin: 0,
        nav: false,
        dots: true,
        navText: [
            '<img src="' + basePath + 'img/prev.svg" alt="" width="50">',
            '<img src="' + basePath + 'img/next.svg" alt="" width="50">',
        ],
        smartSpeed: 400,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 2,
            },
            1000: {
                items: 5,
            },
        },
    });

    // ------------------------------------------------------- //
    // Detail Carousel with thumbs
    // ------------------------------------------------------ //
    $(".detail-slider").owlCarousel({
        loop: true,
        items: 1,
        thumbs: true,
        thumbsPrerendered: true,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                dots: true,
            },
            768: {
                items: 1,
                dots: false,
            },
        },
    });

    // ------------------------------------------------------- //
    // Detail Full Carousel
    // ------------------------------------------------------ //
    $(".detail-full").owlCarousel({
        loop: true,
        items: 1,
        dots: true,
        responsiveClass: false,
    });

    // ------------------------------------------------------- //
    // Brands Slider
    // ------------------------------------------------------ -//

    var brandsSlider = $(".brands-slider");
    brandsSlider.owlCarousel({
        loop: true,
        margin: 20,
        dots: true,
        nav: false,
        smartSpeed: 400,
        responsiveClass: true,
        responsive: {
            0: {
                items: 2,
            },
            600: {
                items: 3,
            },
            1000: {
                items: 6,
                loop: false,
            },
        },
        onRefresh: function () {
            brandsSlider.find(".item").height("");
        },
        onRefreshed: function () {
            var maxHeight = 0;
            var items = brandsSlider.find(".item");
            items.each(function () {
                var itemHeight = $(this).height();
                if (itemHeight > maxHeight) {
                    maxHeight = itemHeight;
                }
            });
            if (maxHeight > 0) {
                items.height(maxHeight);
            }
        },
    });

    // ------------------------------------------------------- //
    //   Bootstrap tooltips
    // ------------------------------------------------------- //

    $('[data-bs-toggle="tooltip"]').tooltip();

    // ------------------------------------------------------- //
    //   Smooth Scroll
    // ------------------------------------------------------- //

    var smoothScroll = new SmoothScroll("a[data-smooth-scroll]", {
        offset: 80,
    });

    // ------------------------------------------------------- //
    //   Object Fit Images
    // ------------------------------------------------------- //

    objectFitImages();
});
