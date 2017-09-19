	function Slider(){
		this.img = $('.slider_list');
		this.iNow = 0;
		this.iPrev = this.img.length-1;
		this.right = $('.slider_right');
		this.left = $('.slider_left');
		this.silderTimer = null;
		this.init();

	}
	Slider.prototype.init = function(){
		this.img.first().css({
			left: '0px',
		});
		var that = this;
		console.log(this.left)
		this.left.click = function(){
			that.changeIndex("left");
		}
		this.right.click = function(){
			that.changeIndex("right");
		}
		// this.silderTimer = setInterval(that.right.click, 3000);
		// this.img.mouseover = function(){
		// 	clearInterval(that.silderTimer);
		// }
		// this.img.mouseout = function(){
		// 	clearInterval(that.silderTimer);
		// 	that.timer = setInterval(that.right.click, 3000);
		// }

	};
	Slider.prototype.changeIndex = function(direction){
		console.log(direction);
		if (direction == "left") {
			if (this.iNow == 0) {
				this.iNow = this.img.length-1;
				this.iPrev = 0; 
			}else{
				this.iNow --;
				this.iPrev = this.iNow + 1;
			}
			this.move("left");
		}
		if (direction == "right") {
			if (this.iNow == this.img.length-1) {
				this.iNow = 0;
				this.iPrev = this.img.length-1; 
			}else{
				this.iNow ++;
				this.iPrev = this.iNow-1;
			}
			this.move("right");
		}

	}
	Slider.prototype.move = function(direction){
		if (direction == "left") {
			$('.slider_list').eq(this.iNow).css({
				left: '-1440px',
				opacity:'0.5'
			}).stop().animate({
				left: '0px',
				opacity:'1'
			},800).end()
			.eq(this.iPrev).css({
				left: '0px',
				opacity:'1'
			}).stop().animate({
				left: '1440px',
				opacity:'0.5'
			},800)
		}
		if (direction == "right") {
			$('.slider_list').eq(this.iNow).css({
				left: '1440px',
				opacity:'0.5'
			}).stop().animate({
				left: '0px',
				opacity:'1'
			},800).end()
			.eq(this.iPrev).css({
				left: '0px',
				opacity:'1'
			}).stop().animate({
				left: '-1440px',
				opacity:'0.5'
			},800)
		}
	}
	new Slider();