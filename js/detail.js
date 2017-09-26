define(["../js/module/load","../js/module/zoom"],function(load,zoom){
	load();

	//放大镜
	
	//小图
	var sBox = $('.gsimg_box');
	//放大镜
	var positionBox = $('.position_box');
	//放大部分
	var bBox = $('.gbimg_box');
	//大图
	var bBoxAll = $('.b_box_all');
	//更换图片
	var changeImg = $('.changeimg li');

	//调用
	zoom.init({
		sBox:sBox,
		positionBox:positionBox,
		bBox:bBox,
		bBoxAll:bBoxAll,
		changeImg:changeImg
	})
})
	