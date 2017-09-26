define(function(){
	class Zoom{
		constructor(){

		}
		init(option){
			//获取元素
			//小图
			this.sBox = option.sBox;
			//放大镜
			this.positionBox = option.positionBox;
			//放大部分
			this.bBox = option.bBox;
			//大图
			this.bBoxAll = option.bBoxAll;
			//切换图片按钮
			this.changeImg = option.changeImg;
			
			//console.log(this.sBox,this.positionBox,this.bBoxAll,this.changeImg);

			//绑定事件
			var that = this;
			//小图鼠标移入移出事件
			this.sBox.hover(function() {
				that.positionBox.css('display', 'block');
				that.bBox.css('display', 'block');
				that.sBox.children('img').animate({
					opacity: 0.6
				});
				
			}, function() {
				that.positionBox.css('display', 'none');
				that.bBox.css('display', 'none');
				that.sBox.children('img').animate({
					opacity: 1
				});
				
			});
			//鼠标移动事件
			this.sBox.on('mousemove',function(event) {
				var evt = event || window.event;
				//获取当前鼠标坐标，将移动位置定位到放大镜中心
				var left = evt.offsetX - that.positionBox.width()/2;
				var top = evt.offsetY - that.positionBox.height()/2;
				//console.log(left,right);

				//运动
				that.move(left,top);
			});

			//切换图片
			this.change();
		}
		
		//运动
		move(left,top){
			//根据坐标移动放大镜
			//计算比例
			//移动大图
			//边界检测
			this.left = left;
			this.top = top;

			//x轴移动总距离
			var xAll = this.sBox.width() - this.positionBox.width();
			//y轴移动总距离
			var yAll = this.sBox.height() -this.positionBox.height();

			//边界检测
			this.left = this.left < 0 ? 0 : left;
			this.left = this.left > xAll ? xAll : left;
			this.top = this.top < 0 ? 0 : top;
			this.top = this.top > yAll ? yAll : top;
			//console.log(this.left,this.top);
			this.positionBox.css({
				left:this.left,
				top:this.top,
				backgroundPosition:-this.left+'px '+ -this.top+'px'
			})

			//计算比例
			var propX = this.left/xAll;
			var propY = this.top/yAll;

			//大图移动总距离
			var Xall = this.bBoxAll.width() - this.bBox.width();
			var Yall = this.bBoxAll.height() - this.bBox.height();
			//移动大图
			this.bBoxAll.css({
				left: -Xall*propX,
				top: -Yall*propY
			});

		}

		change(){
			//切换大图小图src
			//切换放大镜背景图
			for(let i = 0 ; i < this.changeImg.length; i++){
				var that = this;
				this.changeImg.eq(i).click(function(){
					//console.log(this);
					that.bBoxAll.find('img').attr('src', $(this).find('img').attr("src"));
					that.sBox.find('img').attr('src', $(this).find('img').attr('src'));				
					that.positionBox.css('backgroundImage','url("'+ $(this).find("img").attr("src")+'")');
				})
			}
		}
	}
	return new Zoom();
})
