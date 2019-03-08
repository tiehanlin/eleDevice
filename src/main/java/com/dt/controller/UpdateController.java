package com.dt.controller;

import java.util.Date;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.dt.common.vo.SysResult;
import com.dt.pojo.deviceInfo;
import com.dt.service.UpdateService;

@Controller
public class UpdateController {
	@Autowired
	private UpdateService updateService;
	@RequestMapping("/device/{pageName}")
	public String goIndex(@PathVariable String pageName){
		return pageName;
	}

	@RequestMapping("/device/findOne")
	@ResponseBody
	//查询(回显)
	public SysResult review(int id){
		deviceInfo device=new deviceInfo();
		device.setId(id);
		deviceInfo deviceOne=updateService.findOne(device);
		return SysResult.oK(deviceOne);
	}
	
	
	@RequestMapping("/device/updateOne")
	@ResponseBody
	public SysResult updateDevice(int id,String name,String type,String lng,String lat){
		String location=lng+","+lat;
		deviceInfo device=new deviceInfo();
		device.setUpdated(new Date());
		device.setLocation(location);
		device.setName(name);
		device.setType(type);
		device.setId(id);
		
		try{
			updateService.updateOne(device);
			return SysResult.oK();
		}catch(Exception e){
			return SysResult.build(201, e.getMessage());
		}
		
		
		
	}
}
