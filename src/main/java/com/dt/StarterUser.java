package com.dt;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;


@SpringBootApplication
@MapperScan("com.dt.mapper")
public class StarterUser {
	public static void main(String[] args) {
		SpringApplication.run(StarterUser.class, args);
	}
} 
