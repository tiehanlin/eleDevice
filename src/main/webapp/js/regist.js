var userNameJugement=false;
var yzmJugement=false;
$('#name').bind('blur', function(event) {
	var data={
		username:$("#name").val()
	}
	$.ajax({
		type: "get",
		url: "/user/usernamejugement",
		data:data,
		success: function(data) {
			console.log(data);
			if(data.status==200){
				userNameJugement=true;
				$("#namePic").attr("src","/img/true.jpg")
			}else{
				$("#namePic").attr("src","/img/false.jpg")
			}
		},
		error: function(data) {
			console.log(data);
			alert("服务器连接错误")
		}
	});
});
$('#yzm').bind('blur', function(event) {
	//$("#regist").attr('disabled',false);//false可点击
	//$("#yzmPic").attr("src","/img/true.jpg")
	var data={
		email:$("#email").val(),
		yzm:$("#yzm").val()
	}
	$.ajax({
		type: "get",
		url: "/user/yzm",
		data:data,
		success: function(data) {
			if(data.status==200){
				yzmJugement=true;
				$("#yzmPic").attr("src","/img/true.jpg")
				if(userNameJugement==true){
					$("#regist").attr('disabled',false)
				}
			}else{
				$("#yzmPic").attr("src","/img/false.jpg")
				$("#regist").attr('disabled',true)
			}
			console.log(data);
		},
		error: function(data) {
			console.log(data);
			alert("服务器连接错误")
		}
	});
});
$("#regist").click(function(){
	var data={
			username:$("#name").val(),
			password:$("#pass").val(),
			password2:$("#pass2").val(),
			email:$("#email").val(),
	}
	$.ajax({
		type: "get",
		url: "/user/registe",
		data:data,
		success: function(data) {
			if(data.status==200){
				alert("您已注册成功")
			}else{
				alert("注册失败")
			}
		},
		error: function(data) {
			alert("服务器连接错误")
		}
	});
})
$("#sendYZMpic").click(function(){
	if($("#email").val()==""){
		alert("您未输入邮箱")
		return
	}
	var data={
			email:$("#email").val()
	}
	$.ajax({
		type: "get",
		url: "/user/sendEmail",
		data:data,
		success: function(data) {
			console.log("su");
			console.log(data);
		},
		error: function(data) {
			console.log("error");
			console.log(data);
		}
	});
})
