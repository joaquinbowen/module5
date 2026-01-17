package com.cmc.tratamiento;

import com.cmc.lanzar.Ejercicio4;

public class Ejercicio5 {
	public void metodo5() {
		Ejercicio4 ej4=new Ejercicio4();
		try {
			ej4.metodo1(10);
		} catch (Exception ex) {
			ex.printStackTrace();
		}
	}
	
	
	public void metodo6() throws Exception {
		Ejercicio4 ej4=new Ejercicio4();
		ej4.metodo1(10);
	}
	
	public void metodo7() {
		try {
			metodo6();
		} catch (Exception e) {
			e.printStackTrace();
		}
	}
}
