package com.cmc.estaticos;

public class Test {
	
	int valor;
	static int y;
	public static void main(String[] args) {
		//valor=3;//error porque el main es estatico
		y=10; //al ser estatico si puedo accder desde el statico
	}
}
