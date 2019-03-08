var myChart = echarts.init(document.getElementById('deviceMap'));
function echartsP3(devicesOn, devicesOff) {
	
	var option = {
		backgroundColor: 'rgba(18,37,78,0.8)',
		title: {
			text: '电梯地图总览',
			left: 'center',
			textStyle: {
				color: '#6ff8fa',
				fontSize:40
			}
		},
		tooltip: {
			trigger: 'item'
		},
		legend: {
			orient: 'vertical',
			y: 'top',
			x: 'right',
			data: ['正常电梯', '故障电梯'],
			textStyle: {
				color: '#fff'
			}
		},
		geo: {
			map: '北京',
			mapType: '北京',
			label: {
				normal: {
					show: true,
					color: '#ffffff'
					//需要在js里改一下区文字的位置
				},
				emphasis: {
					show: true
				}
			},
			roam: true,
			itemStyle: {
				normal: {
					areaColor: 'rgba(0,0,0,0)',
					borderColor: 'rgb(98,160,236)'
				},
				emphasis: {
					areaColor: 'rgba(98,160,236,0.5)'
				}
			}
		},
		series: [{
			name: '正常电梯',
			type: 'effectScatter',
			coordinateSystem: 'geo',
			data: devicesOn,
			symbolSize: 9,
			showEffectOn: 'render',
			label: {
				normal: {
					position: 'right',
					show: false
				},
				emphasis: {
					show: false
				}
			},
			itemStyle: {
				normal: {
					color: '#0ff253',
				}
			}
		}, {
			name: '故障电梯',
			type: 'scatter',
			coordinateSystem: 'geo',
			data: devicesOff,
			symbolSize: 13,
			label: {
				normal: {
					position: 'right',
					show: false
				},
				emphasis: {
					show: false
				}
			},
			itemStyle: {
				normal: {
					color: '#f3683e'
				}
			}
		}]
	};
	myChart.setOption(option);
		
}
myChart.on('click', function(params){
    console.log(params.name);//此处写点击事件内容
    areaName=params.name
    searchDeviceWithAreaName(1)
})