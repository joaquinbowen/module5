package com.cmc.graficador;

public class TestGraficador {
	public static void main(String[] args) {
		Graficador g=new Graficador();
		g.graficar(new Cuadrado(10,"Rojo"));
		g.graficar(new Triangulo(4,5,6,"Azul"));
		g.graficar(new Circulo("Amarillo",1));
		
		//Figura f1=new Figura("rosado"); no se puede instanciar una clase abstracta
	}
}
