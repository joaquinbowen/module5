package com.cmc.lanzar;

import static java.lang.Math.random;

public class EjercicioRandom {
	public void metodo1() throws Exception {
		double resultado=random()*10;
		Exception ex=(resultado<5)?new Exception():new RuntimeException();
		throw ex;
	}
	
	public void metodo2() throws Exception {
		double resultado=random()*10;
		throw (resultado<5)?new Exception():new RuntimeException();
		
	}
}
