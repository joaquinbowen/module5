package com.cmc.ocjp.constructores;

public class Hijo extends Padre {
	public Hijo() {
		//super() llama a constructor padre implicitamente
		System.out.println("Ejecuta constructor hijo");
	}
}
