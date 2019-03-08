package com.dt.mapper;

import com.dt.pojo.Dt1;
import com.dt.common.mapper.MyMapper;

public interface Dt1Mapper extends MyMapper<Dt1>{

	Integer selectCount1();

	Integer selectCount2();

	Integer selectCount3();

	Integer selectCount4();
	
	Integer selectCount5(String areaName);

}
