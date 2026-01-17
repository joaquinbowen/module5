package com.cmc.tostring;

public class Ejercicio2 {
	public static void main(String[] args) {
		Persona [] personas=new Persona[2];
		personas[0]=new Persona("n1","a1");
		personas[1]=new Persona("n2","a2");
		
		System.out.println(personas);
		System.out.println(personas[0]);
	}
}
