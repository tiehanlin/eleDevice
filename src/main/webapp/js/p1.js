function echartsP1(online, offline,allCount) {
	var myChart = echarts.init(document.getElementById('P1'));
	var text="{aa|设备总数量"+allCount+"台}"
	var ten='10'
	if(window.innerWidth<1518)
	{
		ten='-10'
	}
	var option = {
		backgroundColor: 'rgba(18,37,78,0.8)',
		title: {
			text: text,
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
			data: ['在线设备', '离线设备']
		},
		series: [{
			name: '访问来源',
			type: 'pie',
			radius: ['50%', '70%'],
			avoidLabelOverlap: false,
			color: ['#0ff253', "#f3683e"],
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
					value: online,
					name: '在线设备'
				},
				{
					value: offline,
					name: '离线设备'
				}
			]
		}]
	};
	myChart.setOption(option);
}