function echartsP3(devicesOn,devicesOff) {
	var myChart = echarts.init(document.getElementById('P3'));
	var option = {
		backgroundColor: 'rgba(18,37,78,0.8)',
		title: {
			text: '设备地图总览',
			left: 'center',
			textStyle: {
				color: '#6ff8fa'
			}
		},
		tooltip: {
			trigger: 'item'
		},
		legend: {
			orient: 'vertical',
			y: 'top',
			x: 'right',
			data: ['在线设备','离线设备'],
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
			/*label: {
				normal: {
						show: false
					},
				emphasis: {
					show: false
				}
			},*/
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
				name: '在线设备',
				type: 'effectScatter',
				coordinateSystem: 'geo',
				data: devicesOn,
				symbolSize:5,
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
		},{
				name: '离线设备',
				type: 'scatter',
				coordinateSystem: 'geo',
				data: devicesOff,
				symbolSize:5,
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