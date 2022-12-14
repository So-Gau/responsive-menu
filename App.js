$(document).ready(function(){
	$('#nav-icon3').click(function(){
		$(this).toggleClass('open');
		if($('#navigationMobile').hasClass("open")) {
			$('#navigationMobile').removeClass("open")
			// $('#navigationMobile').css("width", "0")
		} else {
			$('#navigationMobile').addClass("open")
			// $('#navigationMobile').css("width", "80vw")
		}
	});
});