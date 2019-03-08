var isLogin=getCookie("isLogin");
if(isLogin==""){
	alert("您还未登录，请登录后查看")
	window.location.href = '/index';
}