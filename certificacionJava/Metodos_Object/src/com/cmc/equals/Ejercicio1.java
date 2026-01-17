package com.cmc.equals;

import com.cmc.tostring.Persona;

public class Ejercicio1 {
	public static void main(String[] args) {
		Persona p1=new Persona("Aurelia","Cha");
		Persona p2=new Persona("Aurelia","Cha");
	
		if(p1==p2) {//dos referencias son iguales (==) si solo si apuntan al mismo objeto
			System.out.println("iguales");//esto es falso
		}else {
			System.out.println("diferentes");
		}
		
		if(p1.equals(p2)) {               //el equals esta prgramado de object para hacer lo mismo que ==
			System.out.println("iguales");
		}else{
			System.out.println("diferentes");
		}
	}
}
