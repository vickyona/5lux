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
	$('.hotflagbox').stroke({
		box:$('.hotflagbox'),
		list:$('.hotflagbox li'),
		imgs:$('.hotmiddle'),
		left:$('.hot_pre'),
		right:$('.hot_next'),
	})

	//storesame
	$('.storesame_link li').mouseenter(function() {
		$('.storesame_link li').removeClass('active')
		$(this).addClass("active");
		$('.storesame_box').stop().animate({
			left:-$('.storesame_box li').width()*($(this).index('.storesame_link li'))
		})
	});
	
	$('.storesameb_right>div>div').hover(function() {
		$(this).children('.storesametoptxt').stop().animate({
			left: '-20'
		}).siblings('.storesametoppic').stop().animate({
			left: '20'
		});
	}, function() {
		$(this).children('.storesametoptxt').stop().animate({
			left: '0'
		}).siblings('.storesametoppic').stop().animate({
			left: '0'
		});
	});

	//shopcenter
	$('.shopcenterbox').hover(function() {
		$(this).stop().animate({
			top: '-50'
		})
	}, function() {
		$(this).stop().animate({
			top: '0'
		})
	});

	//good slider
	class GoodsSlider{
		constructor(){

		}
		init(box,list,items){
			var that = this;
			this.index = 0;
			this.box = box;
			this.list = list;
			this.items = items;
			this.left = items.parent().siblings('.bx-controls-direction').children('.bx-prev');
			this.right = items.parent().siblings('.bx-controls-direction').children('.bx-next');
			this.left.on('click',function(){that.move("left")});
			this.right.on('click',function(){that.move("right")});
			
		}
		move(direction){
			var that = this;
			if (direction == "left") {
				if(this.box.position().left != 0){
					this.box.stop().animate({
						left:that.box.position().left+that.list.width()
					})
					this.index--;
					this.items.children().removeClass('active');
					this.items.eq(this.index).children().addClass('active');
				}
			}
			if (direction == "right") {
				if(this.box.position().left != -(this.list.length-1)*this.list.width()){
					this.box.stop().animate({
						left:that.box.position().left-that.list.width()
					})
					this.index++;
					this.items.children().removeClass('active');
					this.items.eq(this.index).children().addClass('active');
				}
			}
		}
	}
	new GoodsSlider().init($('#slider1 .sliderbox'),$('#slider1 .sliderbox li'),$('#slider1 .bx-pager-item'));
	new GoodsSlider().init($('#slider2 .sliderbox'),$('#slider2 .sliderbox li'),$('#slider2 .bx-pager-item'));
	new GoodsSlider().init($('#slider3 .sliderbox'),$('#slider3 .sliderbox li'),$('#slider3 .bx-pager-item'));
	new GoodsSlider().init($('#slider4 .sliderbox'),$('#slider4 .sliderbox li'),$('#slider4 .bx-pager-item'));
	new GoodsSlider().init($('#slider5 .sliderbox'),$('#slider5 .sliderbox li'),$('#slider5 .bx-pager-item'));

	

	//侧边栏
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
	
	//加载页脚
	$('#footer_message_bg').load("../html/footer.html");
	//加载侧边栏
	//$('#right_menu').load("../html/rightMenu.html");
}) 


