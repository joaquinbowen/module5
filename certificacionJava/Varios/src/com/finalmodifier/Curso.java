package com.finalmodifier;

import java.util.ArrayList;

public class Curso {
	private ArrayList<String> estudiantes;
	private String nombre;
	
	public Curso(String nombre) {
		estudiantes=new ArrayList<String>();
		this.nombre=nombre;
	}

	public ArrayList<String> getEstudiantes() {
		return estudiantes;
	}

	public String getNombre() {
		return nombre;
	}

	public void setEstudiantes(ArrayList<String> estudiantes) {
		this.estudiantes = estudiantes;
	}

	public void setNombre(String nombre) {
		this.nombre = nombre;
	}
}
