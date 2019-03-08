package com.dt.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.dt.mapper.UpdateMapper;
import com.dt.pojo.deviceInfo;

@Service 
public class UpdateService {
	@Autowired 
	private UpdateMapper updateMapper;
	

	public deviceInfo findOne(deviceInfo device) {
		return (deviceInfo)updateMapper.selectByPrimaryKey(device);
	}


	public void updateOne(deviceInfo device) {
		updateMapper.updateByPrimaryKeySelective(device);
	}

}
