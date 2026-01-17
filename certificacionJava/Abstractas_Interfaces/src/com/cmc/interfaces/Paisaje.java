package com.cmc.interfaces;

public class Paisaje implements Dibujable,Lavable {
	public void dibujar() {
		System.out.println("dibujando paisaje");
	}
	
	public void Lavar() {
		System.out.println("Lavando paisajes");
	}
}
