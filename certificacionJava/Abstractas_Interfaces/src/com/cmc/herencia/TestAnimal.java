package com.cmc.herencia;

public class TestAnimal {
	public static void main(String[] args) {
		Animal animal=new Animal();
		animal.dormir();
		System.out.println(animal.hashCode());
		
		Perro perro= new Perro();
		perro.dormir();
		perro.ladrar();
		System.out.println(perro.hashCode());
	}
}
