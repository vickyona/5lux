define(function(){
	class ShopCar{
		constructor(){
			this.load();		
		}
		load(){
			var that = this;
			$.ajax({
				url:"../data/goodslist.json",
				dataType:'json',
				global:false
			}).then(function(res){
				that.res = res;
				that.init();
			},function(a,b){
				console.wran(b);
			})
		}
		init(){
			var that = this;
			//获取元素
			//增加数量
			this.addNum = $('#addnum');
			//减少数量
			this.reduceNum = $('#reducenum');
			this.num = parseInt($('#number').val());
			//绑定事件
			this.addNum.click(function(){
				that.num++;
				$('#number').val(that.num);
			});
			this.reduceNum.click(function(){
				that.num = that.num == 1 ? 1 : that.num - 1;				
				$('#number').val(that.num);
			});
			$('.goods_add_fav').on('click',function(){
				that.storage(parseInt($(this).attr('goodsId')),that.num);
				that.howMany();		
			});
			$('#header').on('mouseenter','.hm_cartbox',function(){
				that.showCar($(this).children('.shopping_bag_cont'));
				$(this).children('.shopping_bag_cont,b').css('display','block');
				that.howMany();
			});
			$('#header').on('mouseleave','.hm_cartbox',function(){
				$(this).children('.shopping_bag_cont,b').css('display','none');
			});
		}
		storage(id,num){
			//获取添加数量
			if(!$.cookie("goods")){
				//不存在;
				$.cookie("goods",'[{"id":'+id+',"num":'+num+'}]');
			}else{
				//存在
				//变成数组 => 操作cookie;
				var cookie = $.cookie('goods');
				var cookieArr = JSON.parse(cookie);
				var same = false;
				for(var i = 0; i < cookieArr.length ; i++){
					if (cookieArr[i].id == id) {
						//存在当前商品
						cookieArr[i].num += parseInt(num);
						same = true;						
						break;
					}
				}
				if(same == false){
					var obj = {
						id:id,
						num:1
					};
					cookieArr.push(obj);
				}			
				
				//变成字符串 => 存进cookie
				cookie = JSON.stringify(cookieArr);
				$.cookie("goods",cookie);
			}
			//console.log($.cookie("goods"));
		}
		howMany(){
			if($.cookie("goods")){
				var aCookie = JSON.parse($.cookie("goods"));
				var res = 0;
				for(var i = 0 ; i < aCookie.length ; i++){
					res += parseInt(aCookie[i].num);
				}	

				$("#cart_number").html(res);
				//console.log(res);			
				return res;
			}
		}
		showCar(obj){
			if($.cookie('goods')){
				obj.children('.hmc_head').css("display","block");
				var aCookie = JSON.parse($.cookie('goods'));
				var allNum = 0;
				var allPrice = 0;
				var html = "";
				var footer = "";
				for(let i = 0 ; i < aCookie.length ; i++){
					allNum += aCookie[i].num;
					allPrice += Number(this.res[aCookie[i].id].price.substring(1))*aCookie[i].num;
					html+=`
							<li class="clearfix">
								<div class="hmc_box">
									<div class="hmcb_i clearfix">
										<img src="${this.res[aCookie[i].id].img}">
									</div>
									<ul class="hmcb_l clearfix">
										<li>${this.res[aCookie[i].id].title}</li>
										<li>
											<span>${this.res[aCookie[i].id].price}</span>
											"×${aCookie[i].num}件"
										</li>
									</ul>
								</div>
							</li>
					`
				}
				footer = `
							<div class="hmc_foot">
								共
								<span class="cod00000">${allNum}</span>
								件商品<br>
								共计
								<span class="cod00000 w500">¥${allPrice.toLocaleString()}.00</span>
							</div>
						`
				obj.children('ul').html(html);
				obj.children('ul').append(footer);
				console.log(allNum,allPrice);
			}
		}
	}
	return new ShopCar();

})