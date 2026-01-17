package com.cmc.wrappers;

public class Unboxing {
	public static void main(String[] args) {
		Integer i1=100; //Integer i1=new Integer(100);
		
		int i2=i1;//unboxing int i2=i1.intValue();
		
		int i3=i1.intValue();
		
		Wrappers w=new Wrappers();
		//double d1=w.dw; //w.dw.doublevalue(); dw es null
		
		System.out.println(i1>10?"esmayor":"esmenor");
	}
}
