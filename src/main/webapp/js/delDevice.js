function delBtn(id) {
	var modelText=""
	modelText+="<div class='myModel' id=DEL_"+id+">";		
	modelText+="<div class='delDiv'><h1>确认删除吗</h1>";
	modelText+="<button class='btn btn-default' onclick='modelHide()'>取消</button>";
	modelText+="<button class='btn btn-danger' onclick='del("+id+")'>确认</button>";
	modelText+="</div></div>";
	$("#models").html(modelText); 

}
function modelHide(){
	$("#models").html(""); 
}
function del(id){
	//删除设备
	console.log("删除"+id);
	$.ajax({
		type: "get",
		//url: "https://tiehanlin.quarkioe.cn/
		url: "/device/delDevice",
		data:{
			id:id,
		},
		success: function(data) {
			console.log("su");
			console.log(data);
			if(data.status==200){
				$("#models").html(""); 
				alert('删除成功')
				$("#breakTable #ITEM_"+id).html("")
			}else{
				$("#models").html(""); 
				alert('删除失败')
			}
			//window.location.href = '/apps/bqindex/real.html'

		},
		error: function(data) {
			console.log("error");
			console.log(data);
			alert("服务器连接错误")
		}
	});
}
//查找设备显示在页面上
var total="";
$.ajax({
	type: "get",
	//url: "https://tiehanlin.quarkioe.cn/
	url: "/device/delDeviceSearchWithPageIndex",
	success: function(data) {
		console.log(data);
		var deviceAll=data.rows
		total=data.total;
		$("#totalPage").text(Math.ceil(total/15))
		var tr="";
		for(var i=0;i<deviceAll.length;i++){
			var time=moment(deviceAll[i].created).format('YYYY-MM-DD HH:mm:ss')
			var name=deviceAll[i].name
			var type=deviceAll[i].type
			var status=deviceAll[i].status==1?"正常":"故障";
			var id=deviceAll[i].id
			var tag="<tr id='ITEM_"+id+"'>";
			tag+="<td>"+name+"</td>"
			tag+="<td>"+type+"</td>"
			tag+="<td>"+time+"</td>"
			tag+="<td>"+status+"</td>"
			tag+="<td><button class='btn btn-xs btn-danger' onclick='delBtn("+id+")'>删除</button></td>"
			tag+="</tr>";
			tr +=tag;
		}
		$("#breakTable").html(tr);
		//window.location.href = '/apps/bqindex/real.html'

	},
	error: function(data) {
		console.log("error");
		console.log(data);
	}
});
$("#goPageIndex").click(function(){
	if($("#pageIndex").val()==""){
		alert("需要页数")
	}
	$.ajax({
		type: "get",
		//url: "https://tiehanlin.quarkioe.cn/
		url: "/device/delDeviceSearchWithPageIndex",//组长
		data:{
			page:$("#pageIndex").val(),
		},
		success: function(data) {
			console.log("su");
			console.log(data);
			var deviceAll=data.rows
			total=data.total;
			$("#totalPage").text(Math.ceil(total/15))
			var tr="";
			for(var i=0;i<deviceAll.length;i++){
				var time=moment(deviceAll[i].created).format('YYYY-MM-DD HH:mm:ss')
				var name=deviceAll[i].name
				var type=deviceAll[i].type
				var status=deviceAll[i].status==1?"正常":"故障";
				var id=deviceAll[i].id
				var tag="<tr id='ITEM_"+id+"'>";
				tag+="<td>"+name+"</td>"
				tag+="<td>"+type+"</td>"
				tag+="<td>"+time+"</td>"
				tag+="<td>"+status+"</td>"
				tag+="<td><button class='btn btn-xs btn-danger' onclick='delBtn("+id+")'>删除</button></td>"
				tag+="</tr>";
				tr +=tag;
			}
			$("#breakTable").html(tr);

		},
		error: function(data) {
			console.log("error");
			console.log(data);
			alert("服务器连接错误")
		}
	});
})