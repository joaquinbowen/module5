package com.cmc.localdatetime;

import java.time.LocalDate;

public class Comparaciones {
	public static void main(String[] args) {
		LocalDate ld1=LocalDate.of(2020, 11, 5);
		LocalDate ld2=LocalDate.of(2020, 11, 7);
		LocalDate ld3=LocalDate.of(2020, 11, 7);
		
		if(ld1.isAfter(ld2)) {
			System.out.println("ld1 esta despues de ld2");
		}
		if(ld1.isBefore(ld2)) {
			System.out.println("ld1 esta antes de ld2");
		}
		if(ld2.isEqual(ld3)){
			System.out.println("Son iguales");
		}
		if(ld2.equals(ld3)) {
			System.out.println("son iguales con equals sobreescrito");
		}
	}
}
