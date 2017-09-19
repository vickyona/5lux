;jQuery.fn.banner = function(options){
	//找到第一张图片显示在最前面
	options.imgs.css({
		left:options.imgs.eq(0).width()
	}).eq(0).css({
		left:0
	})

	//存放当前所需要的数值
	this.LOCAL = {
		iNow : 0
	}

	var that = this;
	//判断是否存在items
	if (typeof options.items == "object" && options.items.length != 0) {
		//存在items
		//绑定事件
		options.items.on('mouseenter',function(){
			//判断方向
			var direction = "";
			//当前要显示的图片
			var target = $(this).index();
			//获取下标比对
			if(that.LOCAL.iNow == $(this).index()){
				return 0;
			}
			if (that.LOCAL.iNow < $(this).index()) {
				//向左移动
				direction = "left";
			}else{
				//向右移动
				direction = "right"
			}
			if(direction == "left"){
				that.LOCAL.move("left",target);
			}
			if(direction == "right"){
				that.LOCAL.move("right",target);
			}
			options.items.removeClass("change_img_btn_selected").eq(target).addClass("change_img_btn_selected");
			that.LOCAL.iNow = $(this).index();
		})
	}else{
		//不存在items
		console.warn("no items")
	}

	this.LOCAL.move = function(direction,target){
		//运动
		//显示图片出场
		if(direction == "left"){
			var moveTarget = -options.imgs.eq(0).width();
			var moveStart = options.imgs.eq(0).width();
		}else{
			var moveTarget = options.imgs.eq(0).width();
			var moveStart = -options.imgs.eq(0).width();

		}
		options.imgs.eq(that.LOCAL.iNow).css({
			left:0
		})
		options.imgs.eq(that.LOCAL.iNow).stop()
		.animate({
			left:moveTarget
		})
		//目标图片入场
		options.imgs.eq(target).css({
			left:moveStart
		})
		options.imgs.eq(target).stop()
		.animate({
			left:0
		})
	}
	//判断是否存在button
	if (typeof options.left == "object" && options.left.length != 0 && typeof options.right == "object" && options.right.length != 0) {
		// 存在button
		// 左按钮
		options.left.on("click",function(){
			var iNext = 0 ;
			if(that.LOCAL.iNow == 0){
				that.LOCAL.iNow = options.imgs.length - 1;
			}else{
				that.LOCAL.iNow --;
			}

			//下一张显示哪张图片
			//挑特殊值处理
			if (that.LOCAL.iNow == options.imgs.length - 1) {
				iNext = 0;
			}else{
				iNext = that.LOCAL.iNow + 1;
			}

			options.imgs.eq(iNext).stop()
			.animate({
				left:options.imgs.eq(0).width()
			});
			options.imgs.eq(that.LOCAL.iNow).css({
				left:-options.imgs.eq(0).width()
			});
			options.imgs.eq(that.LOCAL.iNow).stop()
			.animate({
				left:0
			});
			

			options.items.removeClass("change_img_btn_selected").eq(that.LOCAL.iNow).addClass("change_img_btn_selected");
		})
		options.right.on("click",function(){
			var iNext = 0 ;
			if(that.LOCAL.iNow == options.imgs.length - 1){
				that.LOCAL.iNow = 0;
			}else{
				that.LOCAL.iNow ++;
			}

			//下一张显示哪张图片
			//挑特殊值处理
			if (that.LOCAL.iNow == 0) {
				iNext = options.imgs.length - 1;
			}else{
				iNext = that.LOCAL.iNow - 1;
			}
			
			options.imgs.eq(iNext).stop()
			.animate({
				left:-options.imgs.eq(0).width()
			})


			options.imgs.eq(that.LOCAL.iNow).css({
				left:options.imgs.eq(0).width()
			})

			options.imgs.eq(that.LOCAL.iNow).stop()
			.animate({
				left:0
			})

			options.items.removeClass("change_img_btn_selected").eq(that.LOCAL.iNow).addClass("change_img_btn_selected");
		})
		//自动播放
		if(options.autoPlay == undefined || options.autoPlay == true){
			clearInterval(this.LOCAL.timer);
			this.LOCAL.timer = setInterval(function(){
				options.right.trigger('click');
			},3000)
			options.imgs.eq(0).parent().parent().on('mouseenter',function(){
				clearInterval(that.LOCAL.timer);
			})
			options.imgs.eq(0).parent().parent().on('mouseleave',function(){
				clearInterval(that.LOCAL.timer);
				that.LOCAL.timer = setInterval(function(){
					options.right.trigger('click');
				},3000)
			})
		}
	}
}
