package com.cmc.sobreescritura;

import com.cmc.herencia.Animal;
import com.cmc.herencia.Gato;
import com.cmc.herencia.Perro;

public class TestApuntadores {
	public static void main(String[] args) {
		Animal a=new Perro();
		a.dormir();
		
		a=new Gato();
		a.dormir();
	}
}
