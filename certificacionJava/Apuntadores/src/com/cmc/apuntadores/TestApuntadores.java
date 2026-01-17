package com.cmc.apuntadores;

public class TestApuntadores {

	public static void main(String[] args) {
		Persona p1=new Persona();
		p1.nombre="Juan";
		p1.estatura=170;
		
		Persona p2 = new Persona();
		p2.nombre="Mario";
		p2.estatura=180;
		
		System.out.println("p1:"+p1.hashCode());
		System.out.println("p2:"+p2.hashCode());
		
		p2=p1;
		
		System.out.println("p1:"+p1.hashCode());
		System.out.println("p2:"+p2.hashCode());
		
		System.out.println(p1.estatura);
		System.out.println(p2.estatura);
		
		p2.estatura=700;
		
		System.out.println(p1.estatura);
		System.out.println(p2.estatura);
	}

}
