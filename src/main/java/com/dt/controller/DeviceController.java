package com.dt.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.dt.common.vo.EasyUIResult;
import com.dt.common.vo.SysResult;
import com.dt.pojo.Device;
import com.dt.service.DeviceService;
@Controller
public class DeviceController {
	@Autowired
	private DeviceService deviceService;
	//查询设备信息
	/*@RequestMapping("device/searchDevice")
	@ResponseBody
	public SysResult selectAll(){
		List<Device> devices = deviceService.selectAll();
		return SysResult.oK(devices);
	}*/
	@RequestMapping("device/delDeviceSearchWithPageIndex")
	@ResponseBody
	public EasyUIResult queryItemList(Integer page){
		//调用service方法查询所有商品信息的list
		Integer rows = 15;
		EasyUIResult result=deviceService.DeviceList(page,rows);
		return result;
	}
	@RequestMapping("/device/addDevice")
	@ResponseBody
	public SysResult saveItem(String name,String type,String lng,String lat,String areaName){
		try{
			System.out.println(name+type);
			deviceService.saveItem(name,type,lng,lat,areaName);
			return SysResult.oK();//{"status":200,"msg":"ok","data":null}
		}catch(Exception e){
			return SysResult.build(201, e.getMessage());//{status:201,msg:异常信息，data:null}
		}
	}
}
