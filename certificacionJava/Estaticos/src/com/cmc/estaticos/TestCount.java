package com.cmc.estaticos;

public class TestCount {
	public static void main(String[] args) {
		Count c1=new Count();
		Count c2=new Count();
		
		Count.valorStatic=12;
		
		c1.valor=20;
		
		c2.valor=15;
		
		
		System.out.println(c1.valorStatic);//no se debe hacer asi pero si funciona
		System.out.println(c2.valorStatic);
		
		
		c1.add();
		c2.add();
		System.out.println(c1.valor);
		System.out.println(c2.valor);
	}
}
