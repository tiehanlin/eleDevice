package com.dt.service;

import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.dt.mapper.DeviceMapper;
import com.dt.pojo.Device;
import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;
import com.dt.common.vo.EasyUIResult;


@Service
public class DeviceService {
	//查询所有设备信息
	@Autowired
	private DeviceMapper deviceMapper;
	public List<Device> selectAll() {
		List<Device> devices = deviceMapper.selectAll();
		return devices;
	}
	public EasyUIResult DeviceList(Integer page, Integer rows) {
		//pageHelper分页查询工具，开启分页查询之后，mybatis的拦截器
		//一旦开启分页查询，接收页数，和条数的参数，然后对下边第一个查询语句进行
		//分页的拼接，
		if(page==null) {
			page=1;
		}
		PageHelper.startPage(page,rows);
		//select * from tb_item limits (page-1)*rows，rows
		//封装count select count(*) from tb_item
		//返回的对象是Page对象，继承了ArrayList
		List<Device> deviceList=deviceMapper.selectAll();
		//从itemList中获取真正的list，和totalCount封装EasyUIResult
		//用pageInfo对象封装包裹itemList（Page类型）
		PageInfo<Device> pageInfo=new PageInfo<Device>(deviceList);
		Integer total = (int) pageInfo.getTotal();
		List<Device> listEasyUI=pageInfo.getList();
		EasyUIResult result=new EasyUIResult();
		result.setTotal(total);
		result.setRows(listEasyUI);
		return result;
	}
	public void saveItem(String name,String type,String lng,String lat,String areaName) {
		   Device device =new Device();
		   device.setCreated(new Date());
		   device.setCity("北京");
		   device.setArea(areaName);
		   device.setCommunity("123");
		   device.setUpdated(device.getCreated());
		   device.setError(0);
		   device.setStatus(0);
		   device.setName(name);
		   device.setType(type);
		   device.setLocation(lng+","+lat);
		   deviceMapper.insert(device);
		   
		}
}
