define(function(){
	class Slider{
		constructor(){

		}
		init(option){
			//左右按钮
			this.left = option.left;
			this.right = option.right;
			//切换小按钮
			this.pagination = option.pagination;
			//图片
			this.list = option.list;
			this.box = option.box;
			//当前显示图片下标
			this.iNow = 0;
			this.zIndex = 2;
			//定时器
			this.timer = null;
			//绑定事件
			var that = this;
			//自动播放
			clearInterval(this.timer);
			this.timer = setInterval(function(){that.right.trigger('click');},6000);
			this.box.hover(function() {
				that.left.stop().animate({
					left: '10',
					opacity: '1'
				});
				that.right.stop().animate({
					right: '10',
					opacity: '1'
				});
				clearInterval(that.timer);
			}, function() {
				that.left.stop().animate({
					left: '-20',
					opacity: '0'
				});
				that.right.stop().animate({
					right: '-20',
					opacity: '0'
				});
				clearInterval(that.timer);
				that.timer = setInterval(function(){that.right.trigger('click');},6000);
			});
			this.left.click(function() {
				that.changeIndex("left");
			});
			this.right.click(function(){
				that.changeIndex("right");
			});
			
			this.pagination.on('click',function(){			
				that.iNow = $(this).index();
				that.changeImg();
			})
			//console.log(this.left,this.right,this.pagination,this.list,this.box);

		}
		changeIndex(direction){
			//this.iNow = this.iNow = 0 ? this.list.length-1 : this.iNow-1;
			//上一张
			if(direction == "left"){
				this.iNow = this.iNow == 0 ? this.list.length-1 : this.iNow-1;
				//根据下标切换图片
				this.changeImg();
			}
			//下一张
			if(direction == "right"){
				this.iNow = this.iNow == this.list.length-1 ? 0 : this.iNow+1;
				//根据下标切换图片
				this.changeImg();
			}
			//console.log(this.iNow);
			
		}
		changeImg(){
			var that = this;
			this.list.css({
				opacity: '0',
				zIndex: '0'
			});
			this.pagination.removeClass('active').eq(this.iNow).addClass('active');;
			this.list.eq(this.iNow).animate({
				zIndex:'1',
				opacity: '1'
			});

		}
	}
	return new Slider;
})