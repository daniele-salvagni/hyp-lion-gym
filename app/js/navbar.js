<!-- =============================================================================================================== -->
<!-- =============================================== Daniele Salvagni - Hypermedia Applications (Web and Multimedia) -->

// jQuery to collapse the navbar on scroll
$(window).scroll(function() {
    if ($(".navbar").offset().top > 40) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
        $(".navbar-fixed-top").addClass("navbar-inverse");
        $(".topbar").addClass("hidden");
        $("img#logo").attr("src", "img/logo.png");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
        $(".navbar-fixed-top").removeClass("navbar-inverse");
        $(".topbar").removeClass("hidden");
        $("img#logo").attr("src", "img/logo-green.png");
    }
});
