package com.cmc.primitivos;

public class Ejercicio1 {
	public static void main(String[] args) {
		byte b=0;
		short s=0;
		int i=0;
		long l=0;
		
		float f=0;
		double d=0;
		
		char c='a';
		
		boolean bol=true;
		
		//b=i; mal por tamaño de tipo de dato
		i=s;
		
		f=l;
		d=l;
		
		//c=123;
		
		System.out.println(c);
		
		i=c;
		
		System.out.println(i);
		
		f=10;
		
		f=10.0f; //esto es un double por un punto flotante
		
		d=10.0;
	}
}
