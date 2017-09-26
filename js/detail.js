define(["../js/module/load","../js/module/zoom"],function(load){
	load();
	var sBox = $('gsimg_box img');
	var positionBox = $('position_box');
	var bBox = $('gbimg_box');
	var bBoxAll = $('b_box_all');
	var changeImg = $('changeimg li');


	Zoom.init({
		sBox:sBox,
		positionBox:positionBox,
		bBox:bBox,
		bBoxAll:bBoxAll,
		changeImg:changeImg
	})
})
	