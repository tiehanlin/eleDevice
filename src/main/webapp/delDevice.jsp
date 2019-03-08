<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>

	<head>
		<meta charset="utf-8" />
		<title>TEDUEDU智慧电梯</title>
		<link rel="stylesheet" type="text/css" href="/css/bootstrap.min.css" />
		<link rel="stylesheet" type="text/css" href="/css/index.css" />
		<link rel="stylesheet" type="text/css" href="/css/delDevice.css" />
	<style type="text/css" >
					#goIndex {
			display: block;
			padding-top: 10px;
			color: white;
			text-decoration: none;
			height: 60px;
			width: 60px;
			font-size: 10px;
			line-height: 14px;
			background-image: url(/img/button.png);
			background-size: 100% 100%;
			position: absolute;
			left: -70px;
}
			#frontUl{
				display: none;
				font-size:12px;width:200px;float: left;position: absolute;
left: 90%;list-style: none;padding-top:15px
			}
			#frontUl li{
				float:left;margin-left:5px;width:35px;height:35px;line-height:35px;border: 2px solid skyblue;border-radius:100%
			}
		</style>
	</head>

	<body>
		<header>
			<div class="headerDiv1" style="float:left;position: relative;">
				<span id="sysDays">系统运行天数：</span><span id="days"></span>
			</div>
			<div id="pageDiv" style="width:100px;height:60px;position:absolute;left:-200px;">
				<p style="width: 100px;height: 20px;font-size: 12px;line-height: 16px;">共<span id="totalPage"></span>页</p>
				<p style="height: 30px;font-size: 12px;line-height: 12px;">去第<input type="text" id="pageIndex" value="1" style="width:20px;height:20px;color:black">页<button class="btn btn-xs btn-info" id="goPageIndex">Go</button></p>
				
			</div>
			<a id="goIndex" href="/page/real">
					数据<br/>总览
					<br/>
					<span style="color: rgb(85,251,255);">→</span>
			</a>
			<h1 style="float:left;font-size: 30px;">
			智慧用电安全隐患监管服务平台
			</h1>
			<div class="headerDiv2" style="float:left">
				<span id="timetext" style="position: absolute;bottom: -5px;">
					系统时间<span id="times"></span>
				</span>
				<div id="front">
					设备<br/> 管理
					<br/>
					<span style="color: rgb(85,251,255);">→</span>
				</div>
				<ul id="frontUl" style="">
					<li><a href="/page/addDevice" style="color:white;">增加</a></li>
					<li ><a href="/page/delDevice" style="color:white;">删除</a></li>
					<li ><a href="/page/updateDevice" style="color:white;">修改</a></li>
					<li ><a href="/page/allDevice" style="color:white;">查询</a></li>
				</ul>
			</div>
		</header>
		<div class="bodyer">
			<div class="row downRow" style="height: 100%;">
				<div class="col-sm-12 ">
					<div id="P8" style="height: 100%;">
						<h4><img src="/img/three.png" height="20px"/>全部设备信息
						<span id="guzhangCount"></span>
						</h4>
						<table class="table">
							<tr>
								<th style="width: 20%;">设备名称</th>
								<th style="width: 20%;">设备类型</th>
								<th style="width: 20%;">创建时间</th>
								<th style="width: 20%;">当前状态</th>
								<th style="width: 20%;">删除设备</th>
								<!--<th>报警值</th>-->
							</tr>
							<tbody id="breakTable">
					
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</div>
		<div id="models">
			
		</div>
	</body>
	<script type="text/javascript" src="/js/jquery-1.11.1.min.js"></script>
	<script type="text/javascript" src="/js/bootstrap.min.js"></script>
	<script type="text/javascript" src="/js/moment.min.js"></script>
	<script src="/js/underscore-min.js"></script>
	<script type="text/javascript" src="/js/share.js"></script>
	<script src="/js/cookie.js"></script>
	<script src="/js/userJuge.js"></script>
	<script type="text/javascript" src="/js/delDevice.js"></script>
</html>