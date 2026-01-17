package com.cmc.lanzar;

import com.cmc.tipos.AnotherException;
import com.cmc.tipos.ToxicaException;

public class Ejercicio4 {
	public void metodo1(int x) throws Exception {
		if(x<0) {
			throw new Exception();
		}
	}
	
	public void metodo2(int y) {
		if(y<0) {
			throw new RuntimeException();
		}
	}
	
	public void metodo3(int y) throws RuntimeException {
		if(y<0) {
			throw new RuntimeException();
		}
	}
	
	public void metodo6() throws Exception{
		throw new ToxicaException();
	}
	
	public void metodo7() {
		throw new AnotherException();
	}
}
