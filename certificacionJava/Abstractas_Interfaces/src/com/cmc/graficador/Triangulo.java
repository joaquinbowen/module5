package com.cmc.graficador;

public class Triangulo extends Figura {
	private int lado1;
	private int lado2;
	private int lado3;
	
	public Triangulo(int lado1,int lado2,int lado3,String color ) {
		super(color);
		this.lado1=lado1;
		this.lado2=lado2;
		this.lado3=lado3;
	}
	
	public double calcularPerimetro() {
		return lado1+lado2+lado3;
	}
}
