$(function(){
	$('#returntop').click(function() {
		$(window).scrollTop(0);
	});
	$(".nav ul li").click(function(){
		var titleNum = $(this).index();
		var titleTop = $(".qwe").eq(titleNum).offset().top -40;
		$(this).addClass("on").siblings("li").removeClass("on");
		$("html,body").animate({scrollTop:titleTop+"px"},200);
		return false;
	});

	$(window).scroll(function(){

		var divTop=$(".nav").offset().top;
		var windowTop=$(window).scrollTop();
		if(windowTop >= divTop){
			$(".nav").children("ul").css({"position":"fixed","z-index":"9999","top":"0"});
		}else{
			$(".nav").children("ul").css({"position":"static","z-index":"0","top":""});
			$(".nav ul li").removeClass("on");
			$(".nav ul li p").removeClass("nav_triangle");
		}
		setLi();
	})
	function setLi(){
		var title = $(".qwe");
		for(var i=0; i < title.length; i++){
			if($(window).scrollTop() >= $(title[i]).offset().top-40){
				$(".nav ul li").eq(i).addClass("on").siblings().removeClass("on");
				$(".nav ul li p").eq(i).addClass("nav_triangle").siblings().removeClass("nav_triangle");
			}
		}
	}
})
