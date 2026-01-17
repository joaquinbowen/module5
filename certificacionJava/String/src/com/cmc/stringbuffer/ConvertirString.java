package com.cmc.stringbuffer;

public class ConvertirString {
	public static void main(String[] args) {
		StringBuffer sb=new StringBuffer(5);
		sb.append("hola");
		sb.append(" certii");
		
		System.out.println(sb);
		
		String cadena=sb.toString();
		System.out.println(cadena);
	}
	
}
