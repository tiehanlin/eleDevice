var map = new AMap.Map('deviceMap', {
	resizeEnable: true,
	zoom: 19,
	center: [116.355208, 39.891832]
});
var placeSearch, marker;
var markerList = [];
var areaName="西城区";
// 关键字查询

$("#search").click(function() {
	map.remove(markerList)
	markerList=[]
	var val = $('#searchInput').val()
	if(val == '') {
		return
	}
	AMap.service('AMap.PlaceSearch', function() { // 回调函数
		// 实例化PlaceSearch
		// placeSearch = new AMap.PlaceSearch();

		// TODO: 使用placeSearch对象调用关键字搜索的功能
		placeSearch = new AMap.PlaceSearch({ // 构造地点查询类
			pageSize: 5,
			pageIndex: 1,
			city: "北京" // 城市
		});
		placeSearch.search(val, function(status, result) {
			var locations = [result.poiList.pois[0].location.O, result.poiList.pois[0].location.P]
			map.setCenter(locations)
			marker = new AMap.Marker({
				draggable: true,
				icon: "http://webapi.amap.com/theme/v1.3/markers/n/mark_b.png",
				position: locations,
				map: map
			});
			var geocoder = new AMap.Geocoder({
				city: "010", // 城市设为北京，默认：“全国”
				radius: 500 // 范围，默认：500
			});
			$("#deviceLocationLng").val(locations[0]);
			$("#deviceLocationLat").val(locations[1]);
			marker.on('dragend', function(e) {
				$("#deviceLocationLng").val(e.lnglat.lng)
				$("#deviceLocationLat").val(e.lnglat.lat)
			});
			var lnglat = result.poiList.pois[0].location.O + "," + result.poiList.pois[0].location.P
			geocoder.getAddress(lnglat, function(status, result) {
				if(status === 'complete' && result.regeocode) {
					areaName = result.regeocode.addressComponent.district;
				}else{
					areaName=""
				}
			});
			markerList.push(marker)
			
		});
	})

})

var infoWindow = new AMap.InfoWindow({
	offset: new AMap.Pixel(0, -30)
});
for(var i = 0, marker; i < 1; i++) {
	var marker = new AMap.Marker({
		draggable: true,
		cursor: 'move',
		position: [116.355208, 39.891832],
		// 这里位置拖拽获取后还要更新位置
		map: map
	});
	/*
	 * marker.content = `设备名称:${i}<br/> 设备类型:111<br/> 运行状态:true`
	 */
	marker.on('click', markerClick);
	marker.emit('click', {
		target: marker
	});
	
	markerList.push(marker)
}

function markerClick(e) {
	infoWindow.setContent(e.target.content);
	infoWindow.open(map, e.target.getPosition());
}
map.setFitView();
var listener = marker.on('dragend', function(e) {
	console.log(e) // 监听拖拽
	var geocoder = new AMap.Geocoder({
		city: "010", // 城市设为北京，默认：“全国”
		radius: 500 // 范围，默认：500
	});
	var lnglat = e.lnglat.lng + "," + e.lnglat.lat
	geocoder.getAddress(lnglat, function(status, result) {
		if(status === 'complete' && result.regeocode) {
			areaName = result.regeocode.addressComponent.district;
		}else{
			areaName=""
		}
	});
	$("#deviceLocationLng").val(e.lnglat.lng)
	$("#deviceLocationLat").val(e.lnglat.lat)
});
$("#remove").click(function() {
	map.remove(markerList)
})
			
$("#addDevice").click(function() {
		$.ajax({
			type: "get",
			url: "/device/addDevice",
			data:{
				name:$("#deviceName").val(),
				type:$("#deviceType").val(),
				lng:$("#deviceLocationLng").val(),
				lat:$("#deviceLocationLat").val(),
				areaName:areaName
			},
			success: function(data) {
				if(data.status==200){
					alert("创建成功")
				}else{
					alert("创建失败")
				}
			},
			error: function(data) {
				alert("连接后台有问题")
			}
		});
	})