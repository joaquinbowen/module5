package com.cmc.predicados;

import java.util.function.Predicate;

public class AdminProducto {
	public void ejecutar(Predicate<String> predicate) {
		if(predicate.test("hola mundo")) {
			System.out.println("cadena correcta");
		}
	}
}
