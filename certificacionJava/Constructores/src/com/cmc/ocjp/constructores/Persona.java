package com.cmc.ocjp.constructores;

public class Persona {
	private String nombre;
	private int edad;
	
	public Persona(String nombre) {
		this.nombre=nombre;
	}
	public Persona(String nombre,int edad) {
		this(nombre);//sobrecargar constructores:se lo llama con this y se le pasa lso parametros correspondientes
		
		
		this.nombre=nombre;
		this.edad=edad;
	}
}
