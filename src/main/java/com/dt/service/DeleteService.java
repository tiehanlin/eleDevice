package com.dt.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.dt.mapper.DeleteMapper;
import com.dt.pojo.DT;

@Service
public class DeleteService {
	@Autowired
	private DeleteMapper deleteMapper;
	
	public void deleteDt(int id) {
		DT dt=new DT();
		dt.setId(id);
		deleteMapper.delete(dt);
	}

}
