;
$(function () {
	// 轮播图
	$('.m_slider').banner({
		imgs:$('.slider_list'),
		items:$('.change_img_btn'),
		left:$('.slider_left'),
		right:$('.slider_right')
	})
	$('.m_slider').hover(function() {
		$('.bn_c').css({
			display: 'block'
		});
	}, function() {
		$('.bn_c').css({
			display: 'none'
		});
	});

	
	//brandship
	$('.brandship_item').hover(function() {
		$(this).find('.brand_hide').stop().animate({
			top:0
		})
	}, function() {
		$(this).find('.brand_hide').stop().animate({
			top:'100px'
		})
	});

	//hotstore
	

}) 


