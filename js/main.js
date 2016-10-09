$(document).ready(function(){
	$("#logo-animate").hover(function(){
		//set timer to 5 seconds, after that, load the magic animation
		setTimeout(function(){
			$('.yourdiv').addClass('magictime puffIn');
		}, 1000);

		$(this).addClass("magictime giragira");
		// $(this).addClass("giragira");
	});


	var open=false;	
	$("#icon-menu").click(function(){

		if (open==true) {
			$("#menu").css({"transition":"1s all lineal","left":"-250px"});
			open = false;
		}else{
			$("#menu").css({"transition":"1s all lineal","left":"0"});
			open=true;
		}

	});

});