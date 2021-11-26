$(document).ready(function(){

    $(function(){
     
        $(document).on( 'scroll', function(){
     
            if ($(window).scrollTop() > 100) {
                $('.scroll-top-wrapper').addClass('show');
            } else {
                $('.scroll-top-wrapper').removeClass('show');
            }
        });
     
        $('.scroll-top-wrapper').on('click', scrollToTop);
    });
     
    function scrollToTop() {
        verticalOffset = typeof(verticalOffset) != 'undefined' ? verticalOffset : 0;
        element = $('body');
        offset = element.offset();
        offsetTop = offset.top;
        $('html, body').animate({scrollTop: offsetTop}, 500, 'linear');
    }
});

window.onload = function () {
    const pieces = document.getElementsByTagName('svg');
    for (var i = 0; pieces.length; i++) {
        let _piece = pieces[i];
        _piece.onclick = function(t) {
            if (t.target.getAttribute('data-position') != null){
                document.getElementById('data').innerHTML = t.target.getAttribute('data-position');
                if (document.getElementById('data').innerHTML == 'head'){
                    location.href = 'about.html';
                }
            }
            if (t.target.parentElement.getAttribute('data-position') != null){
                document.getElementById('data').innerHTML = t.target.parentElement.getAttribute('data-position');
                if (document.getElementById('data').innerHTML == 'head'){
                    location.href = 'about.html';
                }
            }
        }
    }
}