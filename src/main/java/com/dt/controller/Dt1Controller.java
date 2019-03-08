package com.dt.controller;

import java.util.ArrayList;
import java.util.List;

import javax.websocket.server.PathParam;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.web.PageableDefault;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.dt.common.vo.SysResult;
import com.dt.pojo.Dt1;
import com.dt.pojo.Example;
import com.dt.service.Dt1Service;


@Controller
public class Dt1Controller {
	@Autowired
	private Dt1Service dt1Service;	
	@RequestMapping("/device/searchDeviceCount")
	@ResponseBody
	public SysResult queryDt1(){
		List<Dt1> dt1List = dt1Service.queryList();
		Integer count1=dt1Service.selcount1();
		Integer count2=dt1Service.selcount2();
		Integer count3=dt1Service.selcount3();
		Integer count4=dt1Service.selcount4();
		Example ex = new Example();
		ex.setList(dt1List);
		ex.setOfflineCount(count1);
		ex.setOnlineCount(count2);
		ex.setErrorCount(count3);
		ex.setNormalCount(count4);
		return SysResult.oK(ex);
	}
	@RequestMapping("/device/searchDevice")
	@ResponseBody
	public SysResult queryDt2() {
		List<Dt1> dt2List = dt1Service.queryList();
		return SysResult.oK(dt2List);
	}
	@RequestMapping("/device/searchDeviceWithAreaName")
	@ResponseBody
	public SysResult searchDt1(String areaName, Integer page) {
		List<Dt1> dt2List = new ArrayList<Dt1>();
		if("区".equals(areaName)){
			dt2List = dt1Service.Dt1List(page, 15);
		}else{
			dt2List=dt1Service.search(areaName,page);			
		}
		//model.addAttribute("query",areaName);
		Integer searchCount=dt1Service.selcount5(areaName);
		if(searchCount==0){
			searchCount=dt1Service.queryList().size();
		}
		Example ex = new Example();
		ex.setList(dt2List);
		ex.setPageCount(searchCount);
		return SysResult.oK(ex);
		
	}
	
}
