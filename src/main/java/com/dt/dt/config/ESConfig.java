package com.dt.dt.config;

import java.net.InetAddress;

import org.elasticsearch.client.transport.TransportClient;
import org.elasticsearch.common.settings.Settings;
import org.elasticsearch.common.transport.InetSocketTransportAddress;
import org.elasticsearch.transport.client.PreBuiltTransportClient;
import org.springframework.beans.factory.FactoryBean;
import org.springframework.beans.factory.InitializingBean;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Configuration;

@Configuration
public class ESConfig implements FactoryBean<TransportClient>,InitializingBean{
	//框架存在后处理bean的一个框架功�?
	//可以在对象创建之后，对对象进行使用之前的操作
	@Value("${cluster-nodes}")
	private String clusterNodes;
	@Value("${cluster-name}")
	private String clusterName;
	
	private TransportClient client;
	
	//当前配置类需要框架管理TransportClient，需要在读取属�?�后
	//对对象进行初始化操作；这个方法属于InitializingBean
	@Override
	public void afterPropertiesSet() throws Exception {
		//连接对象初始�?
		Settings settings = Settings.builder().put("cluster.name", clusterName).build();
		client=new PreBuiltTransportClient(settings);
		//封装节点连接
		String[] nodes = clusterNodes.split(",");
		for (String node : nodes) {
			String[] hostAndPort = node.split(":");
			String host=hostAndPort[0];
			int port=Integer.parseInt(hostAndPort[1]);
			client.addTransportAddress(
			new InetSocketTransportAddress(
			InetAddress.getByName(host), port));
		}
	}
	//�?旦需要注入使用，框架会调用这个方法，返回对象，由框架维护
	@Override
	public TransportClient getObject() throws Exception {
		int a=1;
		return client;
	}
	//返回的对象能否正确维护，�?要利用getObjectType返回对象的类型反射对�?
	@Override
	public Class<?> getObjectType() {
		// TODO Auto-generated method stub
		return TransportClient.class;
	}
	//是否单例
	@Override
	public boolean isSingleton() {
		// TODO Auto-generated method stub
		return false;
	}
}
