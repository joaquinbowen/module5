package com.cmc.localdate;

import java.time.LocalDate;

public class Operaciones {
	public static void main(String[] args) {
		LocalDate localDate=LocalDate.now();
		System.out.println(localDate);
		
		LocalDate modificado=localDate.plusDays(20);
		System.out.println(localDate);
		System.out.println(modificado);
	}
}
