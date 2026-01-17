package com.cmc.herencia;

public class Referencias {
	public static void main(String[] args) {
		Animal animal=new Animal();
		Perro perro=new Perro();
		
		///////////////////////////////////////
		
		Object obj=new Perro();
		Animal anm=new Perro();
		Perro perr=new Perro();
		
		//obj.ladrar(); mal error compilacion
		//obj.dormir(); mal error compilacion
		
		anm.dormir();
		anm.toString();
		//anm.ladrar(); mal error compilacion
		
		perr.dormir();
		perr.ladrar();
		perr.toString();
	}
}
