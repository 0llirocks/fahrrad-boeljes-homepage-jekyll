$(document).ready(function(){

	$('.slick').slick({
		autoplay: true,
		autoplaySpeed: 7000,
		pauseOnHover: false,
		arrows: false,
		fade: true,
		speed: 1000
	});
    
    $(".collapsible-trigger > a").click(function() {
    	$(".collapsible-trigger").removeClass("active");
    	$(this).parent().addClass("active");
    	$(".collapsible").hide();
    	$(this).next(".collapsible").show();
    	
    });
    
    $(".collapsible > li > a").click(function() {
    	$(".collapsible > li").removeClass("active");
    	$(this).parent().addClass("active");
    });
   
});