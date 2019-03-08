var startDate = new Date(2018, 0, 6)
var endDate = new Date();
var now = endDate - startDate;
var nowDate = parseInt(now / (1000 * 60 * 60 * 24));
$("#days").html(nowDate)
var days = moment().add(1, 'd').format('YYYY-MM-DD');

function timeFunc() {
	var times = moment().format('HH:mm');
	$("#times").html(times)
}
timeFunc()
setInterval(timeFunc, 1000);
$("#front").click(function(){
	if($("#frontUl").css("display")=="none"){
		$("#frontUl").slideDown();
	}else{
		$("#frontUl").slideUp();
	}
})