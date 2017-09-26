define(function(){
	class Zoom{
		constructor(){

		}
		init(option){
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
			
			console.log(this.sBox,this.positionBox,this.bBoxAll,this.changeImg);
		}
	
	}
	return new Zoom();
})
