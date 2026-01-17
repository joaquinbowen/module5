package com.cmc.graficador;

public class Graficador {
	public void graficar(Figura f) {
		System.out.println("Color:"+f.getColor());
		System.out.println("Perimetro:"+f.calcularPerimetro());
	}
}
