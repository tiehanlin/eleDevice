var map = new AMap.Map('deviceMap', {
	resizeEnable: true,
	zoom: 19,
	center: [116.355208, 39.891832]
});
var placeSearch, marker;
var markerList=[]
//关键字查询

$("#search").click(function() {
	var val = $('#searchInput').val()
	if(val == '') {
		return
	}
	AMap.service('AMap.PlaceSearch', function() { //回调函数
		//实例化PlaceSearch
		//	placeSearch = new AMap.PlaceSearch();

		//TODO: 使用placeSearch对象调用关键字搜索的功能
		placeSearch = new AMap.PlaceSearch({ //构造地点查询类
			pageSize: 5,
			pageIndex: 1,
			city: "北京" //城市
		});
		placeSearch.search(val, function(status, result) {
			console.log(result)
			map.remove(markerList)
			markerList=[];
			var locations = [result.poiList.pois[0].location.O, result.poiList.pois[0].location.P]
			map.setCenter(locations)
			marker = new AMap.Marker({
				draggable: true,
				icon: "http://webapi.amap.com/theme/v1.3/markers/n/mark_b.png",
				position: locations,
				map:map
			});
			$("#deviceLocationLng").val(locations[0])
			$("#deviceLocationLat").val(locations[1])
			marker.on('dragend', function(e) {
				console.log(e) //监听拖拽
				$("#deviceLocationLng").val(e.lnglat.lng)
				$("#deviceLocationLat").val(e.lnglat.lat)
			});
			markerList.push(marker)
		});
	})

})

var infoWindow = new AMap.InfoWindow({
	offset: new AMap.Pixel(0, -30)
});
//for(var i = 0; i < 1; i++) {
	var marker = new AMap.Marker({
		draggable: true,
		cursor: 'move',
		position: [116.355208, 39.891832],
		//这里位置拖拽获取后还要更新位置
		map: map
	});
//	marker.content = `设备名称:${i}<br/>
//	设备类型:111<br/>
//	运行状态:true`
	marker.on('click', markerClick);
	marker.emit('click', {
		target: marker
	});
	markerList.push(marker)
//}

function markerClick(e) {
	infoWindow.setContent(e.target.content);
	infoWindow.open(map, e.target.getPosition());
}
map.setFitView();
var listener = marker.on('dragend', function(e) {
	console.log(e) //监听拖拽
	$("#deviceLocationLng").val(e.lnglat.lng)
	$("#deviceLocationLat").val(e.lnglat.lat)
});
$("#remove").click(function(){
	map.remove(markerList)
})
$("#searchDeviceBtn").click(function(){
	$.ajax({
		type: "get",
		//url: "https://tiehanlin.quarkioe.cn/
		url: "/device/findOne",
		data:{
			id:$("#searchDevice").val()
		},
		success: function(data) {
			console.log("su");
			console.log(data);
			if(data.status==200){
				$("#deviceName").val(data.data.name)
				$("#deviceType").val(data.data.type)
				$("#deviceLocationLng").val(data.data.location.split(",")[0])
				$("#deviceLocationLat").val(data.data.location.split(",")[1])
				//在地图上显示数据
				map.remove(markerList)
				markerList=[];
				var locations = [data.data.location.split(",")[0], data.data.location.split(",")[1]]
				map.setCenter(locations)
				marker = new AMap.Marker({
					draggable: true,
					icon: "http://webapi.amap.com/theme/v1.3/markers/n/mark_b.png",
					position: locations,
					map:map
				});
				marker.on('dragend', function(e) {
					console.log(e) //监听拖拽
					$("#deviceLocationLng").val(e.lnglat.lng)
					$("#deviceLocationLat").val(e.lnglat.lat)
				});
			markerList.push(marker)
			}else{
				alert("没有此设备")
			}
		},
		error: function(data) {
			console.log("error");
			console.log(data);
			alert("服务器链接错误")
		}
	});
})
//确认修改设备
$("#updateDevice").click(function(){
	$.ajax({
		type: "get",
		//url: "https://tiehanlin.quarkioe.cn/
		url: "/device/updateOne",
		data:{
			id:$("#searchDevice").val(),
			name:$("#deviceName").val(),
			type:$("#deviceType").val(),
			lng:$("#deviceLocationLng").val(),
			lat:$("#deviceLocationLat").val(),
		},
		success: function(data) {
			console.log("su");
			console.log(data);
			if(data.status==200){
				alert("修改成功")
			}else{
				alert("修改失败")
			}
			//window.location.href = '/apps/bqindex/real.html'

		},
		error: function(data) {
			console.log("error");
			console.log(data);
			alert("连接服务器有问题")
		}
	});
})