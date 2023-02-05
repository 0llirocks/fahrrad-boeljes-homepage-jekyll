$(document).ready(function(){

	$("#popup-content-close, #popup").click(function(e) {
		if(e.target === e.currentTarget)
		{
			$("#popup").fadeOut();
		}
	});
	 
});