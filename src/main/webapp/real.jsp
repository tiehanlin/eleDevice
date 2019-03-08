<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8" />
		<title>TEDUEDU智慧电梯</title>
		<link rel="stylesheet" type="text/css" href="/css/bootstrap.min.css" />
		<link rel="stylesheet" type="text/css" href="/css/index1.css" />
	<style type="text/css" >
			
		</style>
	</head>

	<body>
		<header>
			<div class="headerDiv1" style="float:left;position: relative;">
				<span id="sysDays">系统运行天数：</span><span id="days"></span>
			</div>
			<a id="logout" href="#">登<br/>出</a>
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
			<div class="row topRow">
				<div class="col-sm-3 ">
					<div id="P1" class="topRowLeft">
					</div>
				</div>
				<div class="col-sm-6" id="P3" style="margin-top: 5px;">11</div>
				<div class="col-sm-3 ">
					<div id="P4" class="topRowRight">
						111
					</div>
				</div>
			</div>
			<div class="row downRow">
				<div class="col-sm-12 ">
					<div id="P8">
						<h4><img src="/img/three.png" height="20px"/>全部设备信息
							<span id="guzhangCount"></span>
						</h4>
						<table class="table">
							<tr>
								<th style="width: 25%;">设备名称</th>
								<th style="width: 25%;">设备类型</th>
								<th style="width: 25%;">所在大区</th>
								<th style="width: 25%;">当前状态</th>
								<!--<th>报警值</th>-->
							</tr>
							<tbody id="breakTable">
							
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</div>
	</body>
	<script type="text/javascript" src="/js/jquery-1.11.1.min.js"></script>
	<script type="text/javascript" src="/js/bootstrap.min.js"></script>
	<script type="text/javascript" src="/js/echarts.min.js"></script>
	<script type="text/javascript" src="/js/beijingMap.js"></script>
	<script type="text/javascript" src="/js/moment.min.js"></script>
	<script src="/js/underscore-min.js"></script>
	<script src="/js/cookie.js"></script>
	<script src="/js/userJuge.js"></script>
	<script type="text/javascript" src="/js/p1.js"></script>
	<script type="text/javascript" src="/js/p3.js"></script>
	<script type="text/javascript" src="/js/p4.js"></script>
	<script type="text/javascript" src="/js/share.js"></script>
	<script type="text/javascript" src="/js/real.js"></script>
</html>