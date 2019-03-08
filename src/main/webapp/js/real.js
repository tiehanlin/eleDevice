$.ajax({
		type: "get",
		url: "/device/searchDeviceCount",
		success: function(data) {
			console.log("su");
			console.log(data);
			if(data.status==200){
				var deviceAll=data.data.list;
				var tag="";
				var online=data.data.onlineCount;
				var offline=data.data.offlineCount;
				var allCount=online+offline;
				
				var errorCount=data.data.errorCount;
				var normalCount=data.data.normalCount+errorCount;
				echartsP1(online, offline,allCount)
				echartsP4(normalCount,errorCount)
				//所有设备和错误设备
				var deviceListOn=[]
				var deviceListOff=[]
				for(var i=0;i<deviceAll.length;i++){
					
					var status=deviceAll[i].status==1?"正常":"故障";
					tag+="<tr>";
					tag+="<td>"+deviceAll[i].name+"</td>";
					tag+="<td>"+deviceAll[i].type+"</td>";
					tag+="<td>"+deviceAll[i].area+"</td>";
					tag+="<td>"+status+"</td>";
					tag+="</tr>";
					if(deviceAll[i].status==1){
						deviceListOn[i]={}
						deviceListOn[i].name=deviceAll[i].name;
						deviceListOn[i].value=deviceAll[i].location.split(",")
					}else{
						deviceListOff[i]={}
						deviceListOff[i].name=deviceAll[i].name;
						deviceListOff[i].value=deviceAll[i].location.split(",")
					}
					
					if(i>100){
						break
					}
				}
				echartsP3(deviceListOn,deviceListOff)
				$("#breakTable").html(tag)
			}
			//window.location.href = '/apps/bqindex/real.html'

		},
		error: function(data) {
			console.log("error");
			console.log(data);
		}
	});
$("#logout").click(function(){
	delCookie("isLogin")
	alert("您已成功登出，即将返回登录页")
	window.location.href = '/index'
})
/*echartsP1(20,15,35);
echartsP3([{name:'在线设备1',value:[116.355208, 39.891832]}],[{name:'故障设备1',value:[116.355208, 40.891832]}])
echartsP4(35,22);*/