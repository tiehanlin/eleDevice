package com.dt.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.dt.service.DeleteService;
import com.dt.common.vo.SysResult;

@Controller
public class DeleteController {
	@Autowired
	private DeleteService deleteService;
	
	@RequestMapping("/device/delDevice")
	@ResponseBody
	public SysResult deleteDt(int id){
		deleteService.deleteDt(id);
		return SysResult.oK("删除成功");
	}
}
