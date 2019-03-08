package com.dt.pojo;

import java.util.List;

public class Example {
	private List<Dt1> list;
	private Integer offlineCount;
	private Integer onlineCount;
	private Integer errorCount;
	private Integer normalCount;
	private Integer pageCount;
	public List<Dt1> getList() {
		return list;
	}
	public Integer getOfflineCount() {
		return offlineCount;
	}
	public void setOfflineCount(Integer offlineCount) {
		this.offlineCount = offlineCount;
	}
	public Integer getOnlineCount() {
		return onlineCount;
	}
	public void setOnlineCount(Integer onlineCount) {
		this.onlineCount = onlineCount;
	}
	public Integer getErrorCount() {
		return errorCount;
	}
	public void setErrorCount(Integer errorCount) {
		this.errorCount = errorCount;
	}
	public Integer getNormalCount() {
		return normalCount;
	}
	public void setNormalCount(Integer normalCount) {
		this.normalCount = normalCount;
	}
	public void setList(List<Dt1> list) {
		this.list = list;
	}
	public Integer getPageCount() {
		return pageCount;
	}
	public void setPageCount(Integer pageCount) {
		this.pageCount = pageCount;
	}
	
	
}