(function($) {
    // When to show the scroll link
    // higher number = scroll link appears further down the page
    var upperLimit = 1000;

    // Our scroll link element
    var scrollElem = $('#totop');

    // Scroll to top speed
    var scrollSpeed = 800;

    // Show and hide the scroll to top link based on scroll position
    scrollElem.css("display","none");
    $('#container').scroll(function () {
        var scrollTop = $('#container').scrollTop();
        if ( scrollTop > upperLimit ) {
            $(scrollElem).stop().fadeTo(300, 1); // fade back in
        }else{
            $(scrollElem).stop().fadeTo(300, 0); // fade out
        }
    });
    // Scroll to top animation on click
    var flag = true;
    function setOver(){
       $(scrollElem).on("mouseover",function(){
        $(scrollElem).css("background-position-x","-97px");
        setClick();
        flag = false;
         setIs(flag);
    })
   }
   function setClick(){
    $(scrollElem).click(function(){
        $(scrollElem).unbind("mouseout");
        $(scrollElem).css("background-position-x","-189px");
        $(scrollElem).animate({height:500},400,function(){
            $('#container').animate({scrollTop:0}, scrollSpeed,function(){
                $(scrollElem).css("background-position-x","-5px");
                $(scrollElem).css("height","63px");
                flag = true;
                setIs(flag)
            });
        });
    });
}
function setOut(){
   $(scrollElem).on("mouseout",function(){
    $(scrollElem).css("background-position-x","-5px");
})
}
function setIs(flag){
    if(flag){
    setOver();
    }
    else{
    setOut();
}
}

setOver();

})(jQuery);