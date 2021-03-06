define(function(){
	var load = function (){
		//加载头部
		$.ajax({
			url: 'header.html',
			context: $('#header'),
			dataType: 'html',
			global:false,
			success:function(res){
				$(this).append(res);
			
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
				);
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

				//二级导航
				
				$('.cata_list').hover(function() {
					$('.leftmenu').css({
						display: 'block'
					});
					$('body').append('<div id="navwrap"></div>');
				
					$('#navwrap').css({
						top: $('.nav').offset().top + $('.menu_item').height()
					});
				}, function() {
					$('.leftmenu').css({
						display: 'none'
					});
					$('#navwrap').remove();
				});
				$('.cata_list li').hover(function() {
					$(this).children('.menu_show').css({
						display: 'block'
					}).end()
					.children('.group').css({
						opacity: '1'
					}).find('i').css({
						display: 'inline'
					});
				}, function() {
					$(this).children('.menu_show').css({
						display: 'none'
					}).end()
					.children('.group').css({
						opacity: '0.85'
					}).find('i').css({
						display: 'none'
					});
				});
			}
		});

		//加载页脚
		$.ajax({
			url: 'footer.html',	
			context: $('#footer_message_bg'),
			dataType: 'html',
			global:false,
			success:function(res){
				$(this).append(res)
			}
		});

		//加载侧边栏
		$.ajax({
			url: 'rightMenu.html',	
			context: $('#right_menu'),
			dataType: 'html',
			global:false,
			success:function(res){
				$(this).append(res);
				$('.menu_block2>ul>li,.menu_block3>ul>li').hover(function() {
						$(this).find('.tab-tip').css({
							display: 'block'
						});
					}, function() {
						$(this).find('.tab-tip').css({
							display: 'none'
						});
					});

					$('.tab-logo_top').on('click',function(){
						$(window).scrollTop(0);
					})
				}
		});

		
		//加载对应图片和标题
		$.ajax({
			url:"../data/goodslist.json",
			dataType:'json',
			success:function(res){
				var goosId = $.cookie('goosId');
				//console.log(goosId);
				if (goosId) {
					$('.gsimg_box img').attr("src",res[goosId].img);
					$('.b_box_all img').attr("src",res[goosId].img);
					$('.gimg_wrap').eq(0).attr("src",res[goosId].img);
					$('.position_box').css('backgroundImage','url('+res[goosId].img+')');
					$('#gd_title').html(res[goosId].title);
					$('#gd_price').html(res[goosId].price);
					$('.goods_add_fav').attr('goodsId',goosId);
				}
				
			}
		});
		//悬浮导航
		$(window).scroll(function(){
			var navTop = $('#gd_main').offset().top;
			var windowTop = $(window).scrollTop();
			if (windowTop >= navTop) {
				$('.gd_nav').addClass("fix");
			}else{
				$('.gd_nav').removeClass("fix");
			}
		});
		//选项卡
		$('.switch li').click(function() {
			
			$('.switch li').removeClass('_ed');
			$(this).addClass('_ed');
			$('.goodsContent_right>ul>li').addClass('hide');
			$('.goodsContent_right>ul>li').eq($(this).index()).removeClass("hide");
		});
	}
	return load;
})

	