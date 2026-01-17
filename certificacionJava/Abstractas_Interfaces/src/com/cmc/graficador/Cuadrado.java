package com.cmc.graficador;

public class Cuadrado extends Figura {
	private int lado;
	
	public Cuadrado(int lado,String color) {
		super(color);
		this.lado=lado;
	}
	
	public double calcularPerimetro() {
		return 4*lado;
	}
}
