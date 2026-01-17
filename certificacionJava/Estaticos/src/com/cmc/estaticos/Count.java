package com.cmc.estaticos;

public class Count {
	int valor;
	static int valorStatic;
	
	public void add() {
		valor++;
		valorStatic++;
	}
	
	public static void addStatic() {
		valorStatic++;
	}
}
