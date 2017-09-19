$(function(){
	$(document).ajaxStart(function() {
		$Img = $('<img src="http://img.5lux.com.cn/source/js/artdialog/icons/loading.gif">')
		$("#register_btn").html($Img);
	})
	$('#register_btn').click(function() {
		$(this).attr("disabled","disabled");
		var $user = $("input[name=username]").val();
	 	var $password = $("input[name=password]").val();
	 	var $passwordConfirm = $("input[name=password_confirm]").val();
	 	var $canSubmit = false;
	 	if ($user == "") {
	 		$(".msg_tips").eq(0).addClass('msg_warning').html("请输入用户名");
	 		$canSubmit = false;
	 		$("#register_btn").removeAttr("disabled"); 
	 	}else if($password == "") {
	 		$(".msg_tips").eq(0).removeClass('msg_warning').html('');
	 		$(".msg_tips").eq(1).addClass('msg_warning').html("请输入密码")
	 		//$canSubmit = false;
	 		$("#register_btn").removeAttr("disabled");
	 	}else if($password != $passwordConfirm){
	 		$(".msg_tips").eq(0).removeClass('msg_warning').html('');
	 		$(".msg_tips").eq(1).removeClass('msg_warning').html('');
	 		$(".msg_tips").eq(2).addClass('msg_warning').html("密码不符")
	 		$canSubmit = false;
	 		$("#register_btn").removeAttr("disabled");
	 	}
	 	else{
	 		$canSubmit = true;
	 	}
	 	if ($canSubmit) {
	 		//ajax请求接口
	 		$.ajax({
		 		url:"http://datainfo.duapp.com/shopdata/userinfo.php",
		 		type:"POST",
		 		data:{
		 			status:"register",
		 			userID:$user,
		 			password:$password
		 		},
		 		success:function(res){
		 			setTimeout(function(){
		 				switch (res) {
		 				case "0":
		 					$(".msg_tips:last").addClass('msg_warning').html("已有用户名，注册失败！");
		 					break;
		 				case "1":
		 					$(".msg_tips:last").removeClass("msg_warning").html("注册成功！稍后将为您跳转");
		 					setTimeout(function(){
		 						location.href="../index.html"
		 					},1000)				
	 					}
		 			}, 500);
		 			$("#register_btn").removeAttr("disabled").html("注册");
		 		},
		 		error:function(){
		 			alert("服务器出问题了，稍后再试吧！");
		 			$("#register_btn").removeAttr("disabled");
		 		}
		 	})
	 	}

	});

})