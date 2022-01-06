/*scroll top*/
	$(window).scroll(function(){
		400<$(this).scrollTop()?$(".scroll-top").fadeIn():$(".scroll-top").fadeOut()
	}),
	$(".scroll-top").click(function(){$("html, body").animate({scrollTop:0},1e3)})
/*scroll top*/
