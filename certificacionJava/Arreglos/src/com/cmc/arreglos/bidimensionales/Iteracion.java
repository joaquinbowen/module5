package com.cmc.arreglos.bidimensionales;

public class Iteracion {
	public static void main(String[] args) {
		int arreglo4 [][]= {{2,3},{1},{4,5,6},{1}};
		
		for(int i =0;i<arreglo4.length;i++) {
			for(int j=0;j<arreglo4[i].length;j++) {
				System.out.println(arreglo4[i][j]);
			}
		}
		
		for(int[] arr:arreglo4) {
			for(int val:arr) {
				System.out.println(val);
			}
		}
		for(int i =0;i<arreglo4.length;i++) {
			System.out.println(">>>>>>>");
			for(int val:arreglo4[i]) {
				System.out.println(val);
			}
		}
	}
}
