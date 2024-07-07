$(document).ready(function() {
    var url = window.location.href;
    url = url.substr(url.lastIndexOf("/") + 1);

    $('#menu_portfolio a').each(function(){
        var href = $(this).attr('href');
        if(url == href){
            $(this).addClass('active');
        }
    });
});