$("#login").click(function() {
	login();
})
$('#pass').bind('keypress', function(event) {
	if(event.keyCode == "13") {
		login();
	}
});
function login() {
	if($("#name").val()==""||$("#pass").val()==""){
		alert("内容不能为空");
		return
	}
	$.ajax({
		type: "get",
		//url: "https://tiehanlin.quarkioe.cn/
		url: "/login",
		data:{
		username:$("#name").val(),
		password:$("#pass").val(),
		},
		success: function(data) {
			console.log("su");
			console.log(data);
			if(data.status==200){
				setCookie("isLogin",{
					username:$("#name").val(),
					password:$("#pass").val(),
				});
				window.location.href = '/page/real';
			}else{
				alert("用户名密码不正确")
			}

		},
		error: function(data) {
			console.log("error");
			console.log(data);
			alert("服务器连接有误")
		}
	});
}