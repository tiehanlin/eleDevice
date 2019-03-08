<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="en">

	<head>
		<meta charset="UTF-8">
		<title>TEDUEDU智慧电梯</title>
		<link rel="stylesheet" href="/css/bootstrap.min.css">
		<link rel="stylesheet" href="/css/regist.css" />
	</head>

	<body>
	<div class="videoBG">
				<video autoplay="autoplay" loop="loop" muted="muted" >
					<source src="https://ninghao.net/sites/all/themes/ninghao/images/blue_bokeh.mp4" type="video/mp4">
				</video>
	</div>
		<img src="/img/ele.png" style="position: absolute;bottom: 30px;right: 30px;" alt="" />
		<div class="container" style="padding-top:80px">
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
						<h2>注册</h2>
						<div class="nameDiv">
							<img src="/img/name.png" alt="" />
							<input type="text" class="name" id="name" placeholder="用户名" style="width: 70%;"/>
							<img id="namePic" src="" alt="" />
						</div>
						<div class="passDiv">
							<img src="/img/pass.png" alt="" />
							<input type="password" class="pass" id="pass" placeholder="密码" />
						</div>
						<div class="passDiv">
							<img src="/img/pass.png" alt="" />
							<input type="password" class="pass" id="pass2" placeholder="确认密码" />
						</div>
						<div class="passDiv">
							<img src="/img/email.jpg" alt="" />
							<input type="text" class="pass" id="email" style="width: 70%;" placeholder="邮箱" />
							<img src="/img/send.jpg" id="sendYZMpic" style="cursor:pointer" alt="发送验证码" title="发送验证码" />
						</div>
						<div class="passDiv">
							<img src="/img/yzm.jpg" alt="" />
							<input type="text" class="pass" id="yzm" style="width: 70%;" placeholder="验证码" />
							<img id="yzmPic" src="" alt="" />
						</div>
						<div class="subDiv">
							<button disabled="disabled" type="button" class="button btn btn-lg" id="regist">注册</button>
						</div>
					</div>
				</div>
			</div>
		</div>
		<script src="/js/jquery-1.11.1.min.js"></script>
		<script src="/js/bootstrap.min.js"></script>
		<script src="/js/regist.js"></script>
	</body>

</html>