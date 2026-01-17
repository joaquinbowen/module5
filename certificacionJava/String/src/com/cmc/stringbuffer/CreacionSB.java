package com.cmc.stringbuffer;

public class CreacionSB {
	public static void main(String[] args) {
		String g="abc";
		
		
		StringBuffer sb1= new StringBuffer();
		System.out.println(sb1);
		System.out.println(sb1.length());
		System.out.println(sb1.capacity());
		
		
		StringBuffer sb2= new StringBuffer("hola mundo");
		System.out.println(sb2);
		System.out.println(sb2.length());
		System.out.println(sb2.capacity());
		
		
		StringBuffer sb3=new StringBuffer(5);
		System.out.println(sb3);
		System.out.println(sb3.length());
		System.out.println(sb3.capacity());
		
	}
}
