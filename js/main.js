$(document).ready(function(){

	$('.slick').slick({
		autoplay: true,
		autoplaySpeed: 7000,
		pauseOnHover: false,
		arrows: false,
		fade: true,
		speed: 1000
	});

	var popupEmpty = $("#popup-content-title").html() === "";

	if(popupEmpty)
	{
		sessionStorage.clear();
	}
	else if (sessionStorage.popup === undefined) {
		$('#popup').css('display', 'flex');
		sessionStorage.popup = 0;
	}

	$("#popup-content-close, #popup").click(function(e) {
		if(e.target === e.currentTarget)
		{
			$("#popup").fadeOut();
		}
	});
	 
});