//查找设备显示在页面上
var areaName="区";
function searchDeviceWithAreaName(page){
	if(page<1||page==""){
		alert("页码有误")
		return
	}
	$.ajax({
		type: "get",
		//url: "https://tiehanlin.quarkioe.cn/
		url: "/device/searchDeviceWithAreaName",
		data:{
			areaName:areaName,
			page:page
		},
		success: function(data) {
			console.log("su");
			console.log(data);
			if(data.status==200){
				var deviceAll=data.data.list;
				var total=data.data.pageCount;
				var tag="";
				$("#totalPage").text(Math.ceil(total/15));
				//所有设备和错误设备
				var deviceListOn=[]
				var deviceListOff=[]
				for(var i=0;i<deviceAll.length;i++){
					var status=deviceAll[i].status==1?"正常":"故障";
					tag+="<tr>";
					tag +="<td>"+deviceAll[i].name+"</td>";
					tag +="<td>"+deviceAll[i].type+"</td>";
					tag +="<td>"+deviceAll[i].area+"</td>";
					tag +="<td>"+status+"</td>";
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
					echartsP3(deviceListOn,deviceListOff)
				}
				$("#tbody").html(tag)
			}
		},
		error: function(data) {
			console.log("error");
			console.log(data);
		}
	});
}
	searchDeviceWithAreaName(1)
	$("#goPageIndex").click(function(){
		searchDeviceWithAreaName($("#pageIndex").val())
	})