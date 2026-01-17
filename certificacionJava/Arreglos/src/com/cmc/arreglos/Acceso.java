package com.cmc.arreglos;

public class Acceso {

	public static void main(String[] args) {
		int arreglo1 []=new int[3];
		String arreglo2 [] = new String[2];
		
		System.out.println("arreglo1[0]:"+arreglo1[0]);
		System.out.println("arreglo2[0]:"+arreglo2[0]);
		
		arreglo1[0]=2;
		arreglo2[0]="cartera";
		
		System.out.println("arreglo1[0]:"+arreglo1[0]);
		System.out.println("arreglo2[0]:"+arreglo2[0]);
		
		String arreglo5 [] = {"a","b","c","d"};
		System.out.println("arreglo[3]:"+arreglo5[2]);
	}

}
