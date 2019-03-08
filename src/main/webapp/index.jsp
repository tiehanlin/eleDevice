<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="en">

	<head>
		<meta charset="UTF-8">
		<title>Document</title>
		<link rel="stylesheet" href="/css/bootstrap.min.css">
		<link rel="stylesheet" href="/css/login.css" />
	</head>

	<body>
	<div class="videoBG">
		<video autoplay="autoplay" loop="loop" muted="muted" >
			<source src="https://ninghao.net/sites/all/themes/ninghao/images/blue_bokeh.mp4" type="video/mp4">
		</video>
	</div>
		<img src="/img/ele.png" style="position: absolute;bottom: 30px;right: 30px;" alt="" />
		<div class="container" style="padding-top: 80px;">
			<div class="row">
				<div class="col-xs-6">
					<div class="left">
						<img src="/img/logo.png" class="logo" alt="" />
						<img src="/img/earth.png" width="100%" class="earth" />
						<p>智慧电梯安全隐患监管服务平台

							<img src="/img/textborder.png" width="460px" /></p>
						<img src="/img/computer.png" class="computer" />
					</div>
				</div>
				<div class="col-xs-1"></div>
				<div class="col-xs-5">
					<div class="login">
						<div class="nameDiv">
							<img src="/img/name.png" alt="" />
							<input type="text" class="name" id="name" placeholder="用户名" />
						</div>
						<div class="passDiv">
							<img src="/img/pass.png" alt="" />
							<input type="password" class="pass" id="pass" placeholder="密码" />
						</div>
						<div class="subDiv">
							<button type="button" class="button btn btn-lg" id="login">登录</button>
							<a href="/page/regist" style="width: 100px;border-radius: 25px;" class="button btn btn-xs" id="registA">注册</a>
						</div>
					</div>
				</div>
			</div>
		</div>
		<script src="/js/jquery-1.11.1.min.js"></script>
		<script src="/js/bootstrap.min.js"></script>
		<script src="/js/UnicodeAnsi.js"></script>
		<script src="/js/cookie.js"></script>
		<script src="/js/login.js"></script>
		
	</body>

</html>