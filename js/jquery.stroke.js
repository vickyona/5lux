;jQuery.fn.stroke = function (options) {
	//点击按钮移动
	if (typeof options.left == "object" && options.left.length != 0 && typeof options.right == "object" && options.right.length != 0) {
		// 存在button
		// 左按钮
		options.left.on("click",function(){
			if(options.box.position().left != 0){
				options.box.stop().animate({
					left:options.box.position().left+options.list.width()
				})
			}
		})
		//右按钮
		options.right.on("click",function(){
			if(options.box.position().left != -(options.list.length-1)*options.list.eq(0).width()){
				options.box.stop().animate({
					left:options.box.position().left-options.list.width()
				})
			}
		})
	}
	options.imgs.hover(function() {
		$(this).stop().animate({
			opacity:1
		}).siblings('.topline,.bottomline').stop()
		.animate({
			width:'166'
		}).siblings('.leftline,.rightline').stop()
		.animate({
			height:'85'
		})
	}, function() {
		$(this).stop().animate({
			opacity:0
		}).siblings('.topline,.bottomline').stop()
		.animate({
			width:'0'
		}).siblings('.leftline,.rightline').stop()
		.animate({
			height:'0'
		})
	});


}