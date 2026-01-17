package com.cmc.arreglos.bidimensionales;

public class Declaracion {
	public static void main(String[] args) {
		int arreglo1[];
		int arreglo2[][];
		int [] arreglo3 []=new int[4][5];
		int [][] arreglo4= {{3,1},{8},{5,4}};
		
		//arreglo2=new int[][]; error al no poner la dimension del arreglo
		arreglo2=new int[4][];
		arreglo2=new int[4][5];
		
		
		System.out.println(arreglo4[1][0]);
		
		System.out.println(arreglo3[0].length);
	}
}
