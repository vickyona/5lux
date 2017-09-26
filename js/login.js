;$(function  () {
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
					$('html,body').animate({
						scrollTop:0
					})
				})
			}
	});
	

	if ($.cookie("user")&&$.cookie("password")) {
		$("input[name=username]").val($.cookie("user"));
		$("input[name=password]").val($.cookie("password"));
	}
	$(document).ajaxStart(function() {
		$Img = $('<img src="http://img.5lux.com.cn/source/js/artdialog/icons/loading.gif">')
		$("#login_btn").html($Img);
	});
	$("#login_btn").click(function() {
		$(this).attr("disabled","disabled");
	 	var $user = $("input[name=username]").val();
		var $password = $("input[name=password]").val();
	 	var $canSubmit = false; 
	 	var $isChecked = $('input[type=checkbox]').is(':checked');
	 	if ($user == "") {
	 		$(".msg_tips").addClass('msg_warning').html("用户名不能为空");
	 		$canSubmit = false;
	 		$("#login_btn").removeAttr("disabled"); 
	 	}else if($password == "") {
	 		$(".msg_tips").addClass('msg_warning').html("密码不能为空")
	 		$canSubmit = false;
	 		$("#login_btn").removeAttr("disabled");
	 		
	 	}else{
	 		$canSubmit = true;
	 	}

	 	if ($canSubmit) {
	 		//ajax请求接口
	 		$.ajax({
		 		url:"http://datainfo.duapp.com/shopdata/userinfo.php",
		 		type:"POST",
		 		data:{
		 			status:"login",
		 			userID:$user,
		 			password:$password
		 		},
		 		success:function(res){
		 			setTimeout(function(){
		 				switch (res) {
		 				case "0":
		 					$(".msg_tips").addClass('msg_warning').html("用户名不存在,请注册");
		 					break;
		 				case "2":
		 					$(".msg_tips").addClass('msg_warning').html("用户名和密码不符！");
		 					break;
		 				default:
		 					$(".msg_tips").removeClass("msg_warning").html("登录成功,稍后将为您跳转");
		 					if ($isChecked) {
		 						$.cookie("user",$user,{
		 							expires:15
		 						})
		 						$.cookie("password",$password,{
		 							expires:15
		 						})
		 					}
		 					setTimeout(function(){
		 						location.href="../index.html"
		 					},1000);

	 					}
		 			}, 500);
		 			$("#login_btn").removeAttr("disabled").html("登录");
		 		},
		 		error:function(){
		 			alert("服务器出问题了，稍后再试吧！");
		 			$("#login_btn").removeAttr("disabled");
		 		}
		 	})
	 	}
	})
	
})