package com.dt;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class IndexController {
	@RequestMapping("page/{pageName}")
	public String goPage(@PathVariable String pageName){
		return pageName;
	}
	@RequestMapping("index")
	public String goIndex(){
		System.out.println("index");
		return "index";
	}
}
