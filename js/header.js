$(function () {
	$(".h_mobile").click(function(){
		location.href="http://www.5lux.com/download"
	})
	$(".h_mobile").hover(function(){
			$('.hm_qr').css({
				display:'block',
				clear:'both'
			})
		},function(){
			$('.hm_qr').css({
				display:'none',
				clear:'both'
			})
		}
	)
	$('.h_my5lux').hover(function(){
			$('.h_my5lux dt').addClass('show');
			$('.h_my5lux dt span').css({
				color: '#d00000'
			})
			$('.h_my5lux_hide ').css({
				display:'block'
			})
		},function () {
			$('.h_my5lux dt').removeClass('show');
			$('.h_my5lux_hide').css({
				display:'none'
			})
		}
	)
	$('.hm_cart').hover(function() {
		$('.hm_cart dl b').css({
			display: 'inline-block'
		})
		$('.hm_cart .shopping_bag_cont').css({
			display: 'inline-block'
		})
	}, function() {
		$('.hm_cart dl b').css({
			display: 'none'
		})
		$('.hm_cart .shopping_bag_cont').css({
			display: 'none'
		})
	});


	$('#icon_wrap li').hover(function() {
		$(this).stop().animate({
			width:'140'
		}).siblings().stop().animate({
			width:'30'
		})
	}, function() {
		$(this).stop().animate({
			width:'30'
		})
	});


})