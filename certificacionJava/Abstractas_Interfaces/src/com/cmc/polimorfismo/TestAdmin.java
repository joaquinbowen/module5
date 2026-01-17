package com.cmc.polimorfismo;

import com.cmc.herencia.Perro;
import com.cmc.herencia.Animal;
import com.cmc.herencia.Gato;

public class TestAdmin {
	public static void main(String[] args) {
		AdminAnimal admin = new AdminAnimal();
		Animal a1=new Perro();
		a1=new Gato();
		a1=new Animal();
		
		admin.adormecer(a1);
	}
}
