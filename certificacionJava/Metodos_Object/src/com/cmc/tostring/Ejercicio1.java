package com.cmc.tostring;

public class Ejercicio1 {
	public static void main(String[] args) {
		Persona persona=new Persona("Juan","Perez");
		System.out.println(persona);
		System.out.println(persona.getClass().getCanonicalName());
		System.out.println(persona.hashCode());
	}
}
