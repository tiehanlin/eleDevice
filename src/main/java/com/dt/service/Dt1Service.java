package com.dt.service;

import java.util.ArrayList;
import java.util.List;

import org.elasticsearch.action.search.SearchResponse;
import org.elasticsearch.client.transport.TransportClient;
import org.elasticsearch.index.query.Operator;
import org.elasticsearch.index.query.QueryBuilder;
import org.elasticsearch.index.query.QueryBuilders;
import org.elasticsearch.search.SearchHit;
import org.elasticsearch.search.SearchHits;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.dt.mapper.Dt1Mapper;
import com.dt.pojo.Dt1;
import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;
@Service
public class Dt1Service {
	@Autowired
	private Dt1Mapper dt1Mapper;
	@Autowired
	private TransportClient client;
	public List<Dt1> queryList() {
		List<Dt1> dt1List=dt1Mapper.selectAll();
		return dt1List;
	}
	

	public Integer selcount1() {
		return dt1Mapper.selectCount1();
	}

	public Integer selcount2() {
		return dt1Mapper.selectCount2();
	}

	public Integer selcount3() {
		return dt1Mapper.selectCount3();
	}

	public Integer selcount4() {
		return dt1Mapper.selectCount4();
	}

	public Integer selcount5(String areaName) {
		return dt1Mapper.selectCount5(areaName);
	}
	public List<Dt1> search(String areaName,Integer page) {
		if(page==null) {
			page=1;
		}
		Integer rows=15;
		QueryBuilder query=
				QueryBuilders.matchQuery("area", areaName).
				operator(Operator.AND);
		SearchResponse response = client.prepareSearch("02dt").setQuery(query).
		setFrom((page-1)*rows).setSize(rows).get();
		SearchHits hits = response.getHits();
		List<Dt1> dt1Lists=new ArrayList<Dt1>();
		for (SearchHit hit : hits) {
			Dt1 dt1 = new Dt1();
			dt1.setId((int)hit.getSource().get("id"));
			dt1.setArea((String)hit.getSource().get("area"));
			dt1.setCommunity((String)hit.getSource().get("community"));
			dt1.setCity((String)hit.getSource().get("city"));
			dt1.setStatus((int)hit.getSource().get("status"));
			dt1.setName((String)hit.getSource().get("name"));
			dt1.setError((int)hit.getSource().get("error"));
			dt1.setLocation((String)hit.getSource().get("location"));
			dt1.setType((String)hit.getSource().get("type"));
			dt1Lists.add(dt1);
		}
		return dt1Lists;
	}
	public List<Dt1> Dt1List(Integer page,Integer rows) {
		if(page==null) {
			page=1;
		}
		PageHelper.startPage(page,15);
		//select * from tb_item limits (page-1)*rows，rows
		//封装count select count(*) from tb_item
		//返回的对象是Page对象，继承了ArrayList
		List<Dt1> dt1List=dt1Mapper.selectAll();
		//从itemList中获取真正的list，和totalCount封装EasyUIResult
		//用pageInfo对象封装包裹itemList（Page类型）
		PageInfo<Dt1> pageInfo=new PageInfo<Dt1>(dt1List);
		Integer total = (int) pageInfo.getTotal();
		List<Dt1> listEasyUI=pageInfo.getList();
		return listEasyUI;
	}
	
}
