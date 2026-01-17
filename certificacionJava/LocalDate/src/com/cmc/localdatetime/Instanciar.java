package com.cmc.localdatetime;

import java.time.LocalDateTime;

public class Instanciar {
	public static void main(String[] args) {
		LocalDateTime ldt=LocalDateTime.now();
		System.out.println(ldt); //yyyy-MM-ddThh:mm:ss.ms
		
		LocalDateTime ldt2=LocalDateTime.of(2025, 3, 3, 3, 3);
		System.out.println(ldt2);
	}
}
