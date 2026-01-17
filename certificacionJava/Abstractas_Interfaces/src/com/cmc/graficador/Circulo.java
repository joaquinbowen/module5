package com.cmc.graficador;

public class Circulo extends Figura{
	private int radio;
	
	public Circulo(String color,int radio) {
		super(color);
		this.radio=radio;
	}
	
	public double calcularPerimetro() {
		return 2*Math.PI*radio;
	}
}
