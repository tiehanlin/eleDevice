package emailtest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
 
public class MailController {
	
	@Autowired
	JavaMailSender jms;
	
	@RequestMapping("/gua")
	@ResponseBody
	public String send(){
		//建立邮件消息
		SimpleMailMessage mainMessage = new SimpleMailMessage();
		//发送者
		mainMessage.setFrom("tiehanlin@163.com");
		//接收者
		mainMessage.setTo("476494344@qq.com");
		//发送的标题
		mainMessage.setSubject("嗨喽");
		//发送的内容
		String yzm="1234";//生成4位数
		mainMessage.setText("你的验证码为:"+yzm);
		//存入缓存
		jms.send(mainMessage);
		return "1";
	}
}

