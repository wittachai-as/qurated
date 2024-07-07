$(document).ready(function() {
    $('#tp_header').load("/2019/template/header.html", function(){
        $('#loadPage').animate({opacity:'toggle'},1000);
    });
    $('#tp_header2').load("/2019/template/header2.html", function(){
        $('#loadPage').animate({opacity:'toggle'},1000);
    }); 
    $('#tp_menu_portfolio').load("/2019/template/menu_portfolio.html");
    $('#tp_menu_trend').load("/2019/template/menu_trend.html");
    $('#tp_menu_directory').load("/2019/template/menu_directory.html");
    $('#tp_footer').load("/2019/template/footer.html");
    $('#tp_footer2').load("/2019/template/footer2.html");
    $('#tp_footer3').load("/2019/template/footer2.html");

    AOS.init();

    var topMenu = $("#nav_scroll"),
    topMenuHeight = topMenu.outerHeight()+15,
    menuItems = topMenu.find("a"),
    scrollItems = menuItems.map(function(){
        var item = $($(this).attr("href"));
        if (item.length) { return item; }
    });

    $(window).scroll(function (event) {
        var scroll = $(window).scrollTop();
        if(scroll > 500) {
            $('#top_btn').fadeIn('slow');
            $('#nav_scroll').fadeIn('slow');
        } else {
            $('#top_btn').fadeOut('slow');
            $('#nav_scroll').fadeOut('slow');
        }

        var fromTop = $(this).scrollTop()+topMenuHeight;
        var cur = scrollItems.map(function(){
            if ($(this).offset().top < fromTop)
            return this;
        });
        cur = cur[cur.length-1];
        var id = cur && cur.length ? cur[0].id : "";
        menuItems.removeClass("active");
        menuItems.filter("a[href='#"+id+"']").addClass("active");
        if( id ) topMenu.find(".text").html($( "#" + id ).data( "title" ));
    });

    $( "#nav_scroll a" ).click(function( event ) {
        event.preventDefault();
        $("html, body").animate({
            scrollTop: $($(this).attr("href")).offset().top
        }, 500);
    });

    $( "._intro .caption a" ).click(function( event ) {
        event.preventDefault();
        $("html, body").animate({
            scrollTop: $($(this).attr("href")).offset().top
        }, 1000);
    });

    $('#intro_directory_detail .header_directory_detail').height($( '#intro_directory_detail' ).height());

    $("#accordion a").hover(function () {
        $('#image_accordion').attr('src', 'images/home/' + $(this).data( "image" ) + '.jpg');
    });

    $('.scrollbar-inner').scrollbar();
});

function click_caption(action){
    var num_bottom = '0';
    if($(window).width() <= 375 && $(window).height() >= 812 ) {
        num_bottom = '-140px';
    } else {
        num_bottom = '-260px';
    }

    if(action == 'open') {
        $('.fancybox-caption').stop().animate({
            bottom: "0"
        }, 'slow', function() {
            $('.fancybox-caption .arrow').attr('onClick','click_caption("close");');
            $('.fancybox-caption .arrow').css({ 'transform' : 'rotate(45deg)' , '-webkit-transform' : 'rotate(45deg)' , 'top' : '-25px' });
        });
    } else {
        $('.fancybox-caption').stop().animate({
            bottom: num_bottom
        }, 'slow', function() {
            $('.fancybox-caption .arrow').attr('onClick','click_caption("open");');
            $('.fancybox-caption .arrow').css({ 'transform' : 'rotate(225deg)' , '-webkit-transform' : 'rotate(225deg)' , 'top' : '-10px' });
        });
    }
}