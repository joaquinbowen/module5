package com.cmc.sobreescritura;

public class Persona {
	private String nombre;
	private String apellido;
	
	public Persona(String nombre, String apellido) {
		super();
		this.nombre = nombre;
		this.apellido = apellido;
	}
	
	public String toString() {
		return "nombre:"+nombre + " "+"apellido:"+apellido;
	}
	
}
