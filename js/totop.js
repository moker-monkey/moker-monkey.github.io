(function($) {
    // When to show the scroll link
    // higher number = scroll link appears further down the page
    var upperLimit = 1000;

    // Our scroll link element
    var scrollElem = $('#totop');

    // Scroll to top speed
    var scrollSpeed = 1600;

    // Show and hide the scroll to top link based on scroll position
    scrollElem.hide();
   $('#container').scroll(function () {
        var scrollTop = $('#container').scrollTop();
        if ( scrollTop > upperLimit ) {
            $(scrollElem).stop().fadeTo(300, 1); // fade back in
        }else{
            $(scrollElem).stop().fadeTo(300, 0); // fade out
        }
    });
    // Scroll to top animation on click
    $(scrollElem).click(function(){
        $('#container').animate({scrollTop:0,height:800}, scrollSpeed); return false;
        $(scrollElem).css("background-position-x","-189px")
    });
    $(scrollElem).on("mouseover",function(){
        $(scrollElem).css("background-position-x","-97px")
    })
})(jQuery);