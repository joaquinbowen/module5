package com.cmc.localdatetime;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

public class Format {
	public static void main(String[] args) {
		LocalDateTime ld=LocalDateTime.now();
		String cadena=ld.format(DateTimeFormatter.ISO_DATE_TIME);
		System.out.println(cadena);
		
		
		DateTimeFormatter f1=DateTimeFormatter.ofPattern("dd/MM/yyyy HH:mm:ss");
		String cadena22=ld.format(f1);
		System.out.println(cadena22);
	}
}
