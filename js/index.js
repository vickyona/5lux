// 轮播图
$(function () {
	$('.m_slider').banner({
		imgs:$('.slider_list'),
		items:$('.change_img_btn'),
		left:$('.slider_left'),
		right:$('.slider_right')
	})

	
	
	$('.brandship_item').hover(function() {
		$(this).find('.brand_hide').stop().animate({
			top:0
		})
	}, function() {
		$(this).find('.brand_hide').stop().animate({
			top:'100px'
		})
	});

}) 


