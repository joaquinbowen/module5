package com.cmc.genericos;

import java.util.ArrayList;
import java.util.List;

public class TestGenericos {
	public static void main(String[] args) {
		List<String> cadenas=new ArrayList<String>();
		cadenas.add("uno");
		cadenas.add("dos");
		String resultado=cadenas.get(0);
		System.out.println(resultado);
		
		List<Integer> enteros=new ArrayList<Integer>();
		enteros.add(10);
		enteros.add(20);
		enteros.add(30);
		
		Integer res=enteros.get(0);
		System.out.println(res);
	}
	
}
