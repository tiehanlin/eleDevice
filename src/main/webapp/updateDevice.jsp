<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>

	<head>
		<meta charset="UTF-8">
		<title>TEDUEDU智慧电梯</title>
		<link rel="stylesheet" type="text/css" href="/css/bootstrap.min.css" />
		<link rel="stylesheet" type="text/css" href="/css/yunwei.css" />
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
			left: -100px;
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
			<a id="goIndex" href="/page/real">
					数据<br/>总览
					<br/>
					<span style="color: rgb(85,251,255);">→</span>
			</a>
			<h1 style="float:left;font-size: 30px;">
			智慧电梯维保服务平台
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
			<div class="row topRow" style="position: relative;">
				<input type="text" class="form-control" id="searchInput" /><button class="btn" type="button" id="search">搜索</button>
				<button class="btn" type="button" id="remove">清除</button>
				<div class="col-xs-8" id="deviceMap" style="margin-top: 5px;">
					11
				</div>
				<div class="col-xs-4 ">
					<div id="deviceError" class="row" style="overflow: scroll;padding-top: 40px;">
						<h2>修改设备信息</h2>
						<form class="form-horizontal">
							<div class="form-group">
								<label for="searchDevice" class="col-sm-2 control-label" style="color:white">搜索设备</label>
								<div class="col-sm-10">
									<input type="text" class="form-control" id="searchDevice" placeholder="搜索设备" style="width: 70%;display: inline-block;">
									<button type="button" id="searchDeviceBtn" class="btn btn-info">搜索</button>
								</div>
							</div>
							<div class="form-group">
								<label for="deviceName" class="col-sm-2 control-label" style="color:white">设备名称</label>
								<div class="col-sm-10">
									<input type="text" class="form-control" id="deviceName" placeholder="设备名称">
								</div>
							</div>
							<div class="form-group">
								<label for="deviceType" class="col-sm-2 control-label" style="color:white"	>设备类型</label>
								<div class="col-sm-10">
									<input type="text" class="form-control" id="deviceType" placeholder="设备类型">
								</div>
							</div>
							<div class="form-group">
								<label for="deviceLocation" class="col-sm-2 control-label" style="color:white"	>设备位置</label>
								<div class="col-sm-10">
									<input type="text" class="form-control" id="deviceLocationLng" placeholder="经度" style="width: 45%;display: inline-block;" disabled="disabled">
									<input type="text" class="form-control" id="deviceLocationLat" placeholder="纬度" style="width: 45%;display: inline-block;" disabled="disabled">
								</div>
							</div>
							<button type="button" id="updateDevice" class="btn btn-info btn-lg center-block" style="margin-top: 40px;">确认修改</button>
							</form>
					</div>
				</div>

			</div>
		</div>

		<script type="text/javascript" src="/js/jquery-1.11.1.min.js"></script>
		<script type="text/javascript" src="/js/moment.min.js"></script>
		<script type="text/javascript" src="https://webapi.amap.com/maps?v=1.4.4&key=ec94a5c7fb1acf789b258c99ef83af38"></script>
		<script type="text/javascript" src="/js/share.js"></script>
		<script src="/js/cookie.js"></script>
		<script src="/js/userJuge.js"></script>
		<script type="text/javascript" src="/js/updateDevice.js"></script>
	</body>

</html>