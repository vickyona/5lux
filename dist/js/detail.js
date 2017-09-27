define(["../js/module/load","../js/module/zoom","../js/module/slider","../js/jquery.cookie",'../js/module/shopCar'],function(load,zoom,slider,shopCar){
	//加载页面
	load();
	//tab();
	//放大镜

	//调用
	zoom.init({
		//小图
		sBox:$('.gsimg_box'),
		//放大镜
		positionBox:$('.position_box'),
		//放大部分
		bBox:$('.gbimg_box'),
		//大图
		bBoxAll:$('.b_box_all'),
		//更换图片
		changeImg:$('.changeimg li')
	})

	slider.init({
		left:$('.btn_l'),
		right:$('.btn_r'),
		pagination:$('.pagination'),
		list:$('.banner-list'),
		box:$('#gd-banner')
	});
	
})
	