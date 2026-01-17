package com.cmc.herencia;

public class TestSobreescritura {
	public static void main(String[] args) {
		Perro p=new Perro();
		p.dormir();
		
		Animal a=new Perro();
		a.dormir();
	}
}
