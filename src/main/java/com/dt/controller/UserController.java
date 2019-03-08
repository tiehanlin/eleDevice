package com.dt.controller;

import java.util.Random;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.dt.service.UserService;
import com.dt.common.redis.RedisService;
import com.dt.common.vo.SysResult;

@Controller
public class UserController {
	@Autowired
	UserService userService;
	
	@GetMapping(value = "/login")
	@ResponseBody
	public SysResult doLogin(String username,String password){
		System.out.println(username+password);
		SysResult result=userService.doLogin(username,password);
		//result 中data有值
		System.out.println(result.getStatus());
		return result;
	}
	@Autowired
	JavaMailSender jms;
	@Autowired
	private RedisService redis;
	@GetMapping(value = "/user/sendEmail")
	@ResponseBody
	public String send(String email){
		SimpleMailMessage mainMessage = new SimpleMailMessage();
		//发送者
		mainMessage.setFrom("tiehanlin@163.com");
		//接收者
		mainMessage.setTo(email);
		//发送的标题
		mainMessage.setSubject("嗨喽");
		//发送的内容
		Random ra =new Random();
		String yzm=ra.nextInt(1000)+1+"";//生成4位数
		mainMessage.setText("你的验证码为:"+yzm);
		
		System.out.println("当前email的redis"+redis.get(email));
		System.out.println("yzm"+yzm);
		redis.set(email,yzm);
		jms.send(mainMessage);
		return "1";
	}
	@RequestMapping("/user/registe")
	@ResponseBody
	public SysResult saveItem(String username,String password,String password2,String email){
		try{
			if(username==null || "".equals(username)){
				return SysResult.build(201, "用户名不能为空");	
			}
			if(password==null || "".equals(password)){
				return SysResult.build(201, "密码不能为空");	
			}
			if(password2==null || "".equals(password2)){
				return SysResult.build(201, "重复输入密码不能为空");
			}
			if(!password.equals(password2)){
				return SysResult.build(201, "俩次密码不一致");
			}
			if(email==null || "".equals(email)){
				return SysResult.build(201, "重复输入密码不能为空");	
			}
			String regex = "^\\w+@\\w+(\\.\\w+)+$";
			
			if(!email.matches(regex)){
				return SysResult.build(201, "重复输入密码不能为空");	
			}
			
			
			System.out.println(username+password);
			userService.saveItem(username,password,email);
			redis.del(email);
			return SysResult.oK();//{"status":200,"msg":"ok","data":null}
		}catch(Exception e){
			return SysResult.build(201, e.getMessage());//{status:201,msg:异常信息，data:null}
		}
	}
	//验证码判断逻辑
	@RequestMapping("/user/yzm")
	@ResponseBody
	public SysResult yzm(String yzm,String email){
		String y = redis.get(email);
		 if(!y.equals(yzm)){
			   return SysResult.build(201, "验证码有误");
		   }
		 else{
			return SysResult.oK();//{"status":200,"msg":"ok","data":null}
		 }
	}
	@RequestMapping("user/usernamejugement")
	@ResponseBody
	public SysResult UserEquel(String username){
		return userService.selectOne(username);
	}
}
