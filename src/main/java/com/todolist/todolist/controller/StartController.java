package com.todolist.todolist.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@Controller
public class StartController {
	/**
	 * 계산기 화면 출력
	 * @return
	 */
	@RequestMapping(value = "/todolist", method = RequestMethod.GET)
	public String goCalculator() {
		return "index";
	}
}
