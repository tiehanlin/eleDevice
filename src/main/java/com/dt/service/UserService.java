package com.dt.service;

import org.apache.commons.codec.digest.DigestUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.dt.common.redis.RedisService;
import com.dt.common.util.ObjectMapperUtils;
import com.dt.common.vo.SysResult;
import com.dt.mapper.UserMapper;
import com.dt.pojo.User;

@Service
public class UserService {
	@Autowired
	private UserMapper userMapper;
	/*@Autowired
	private RedisService redis;*/
	public SysResult doLogin(String u, String p) {
		User _user=new User();
		_user.setPassword(p);
		_user.setUsername(u);
		User user=userMapper.selectOne(_user);
		if(user!=null){//用户名正确
			//比对password
			//String tPassword=DigestUtils.md5Hex(p);
			if(p.equals(user.getPassword())){
				String ticket="guagua";//DigestUtils.md5Hex("JT_TEICKET"+System.currentTimeMillis()+u);
				 return SysResult.oK(ticket);
				 //写入缓存
				/*try{
					 //String userJson=ObjectMapperUtils.getMapper().writeValueAsString(user);
					// redis.set(ticket,userJson);
					return SysResult.oK(ticket);
				}catch(Exception e){
					return SysResult.build(201, "用户名密码不正确","");
				}*/
			}
		}
		return SysResult.build(201, "用户名密码不正确gua","");
	}
	//注册逻辑
		public void saveItem(String username, String password,String email) {
			User user =new User();
			user.setUsername(username);
			user.setPassword(password);
			user.setEmail(email);
			userMapper.insert(user);
		}
		public SysResult selectOne(String userName) {
			User user = new User();
			user.setUsername(userName);
			User selectOne = userMapper.selectOne(user);
			if(selectOne!=null){
				return SysResult.build(201, "用户名已存在");
			}else{
				return SysResult.oK("可以注册");
			}
		}
}
