function echartsP4(normal,breaks) {
	var myChart = echarts.init(document.getElementById('P4'));
	var ten='10'
	if(window.innerWidth<1518)
	{
		ten='-10'
	}
	var option = {
		backgroundColor: 'rgba(18,37,78,0.8)',
//		toolbox: {
//			right: '0',
//			top: ten,
//			itemSize: 80,
//			showTitle: false,
//			feature: {
//				restore: {
//					show: true,
//					icon: 'image://img/quanbushebeibai.png'
//				}
//			}
//		},
		title: {
			text: '{aa|设备故障比例}',
			textStyle: {
				color: '#6ff8fa',
				rich: {
					aa: {
						backgroundColor: {
							image: 'img/three.png'
						},
						height: 20,
						width: 0,
						fontSize: 20,
						padding: [0, 0, 0, 40]
					}
				},
			}
		},
		tooltip: {
			trigger: 'item',
			formatter: "{a} <br/>{b}: {c} ({d}%)"
		},
		legend: {
			orient: 'horizontal',
			x: 'center',
			y: 'bottom',
			align: 'left',
			textStyle: {
				color: '#FFFFFF',
				fontSize: 14
			},
			data: ['正常设备', '故障设备']
		},
		series: [{
			name: '访问来源',
			type: 'pie',
			radius: ['50%', '70%'],
			avoidLabelOverlap: false,
			color: ['#f1e852', "#58fbff"],
			label: {
				normal: {
					show: false,
					position: 'center'
				},
				emphasis: {
					show: true,
					textStyle: {
						fontSize: '30',
						fontWeight: 'bold'
					}
				}
			},
			labelLine: {
				normal: {
					show: false
				}
			},
			data: [{
					value: breaks,
					name: '故障设备'
				},
				{
					value: normal-breaks,
					name: '正常设备'
				}
			]
		}]
	};
	myChart.setOption(option);
}