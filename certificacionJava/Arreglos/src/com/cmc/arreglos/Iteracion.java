package com.cmc.arreglos;

public class Iteracion {
	public static void main(String[] args) {
		int arreglo[]={4,5,6};
		for(int i=0;i<arreglo.length;i++) {
			System.out.println(arreglo[i]);
		}
		for(int item:arreglo) {
			System.out.println(item);
		}
	}
}
