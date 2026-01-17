package com.cmc.strings;

public class TestString2 {
	public static void main(String[] args) {
		String x="abc";
		x.concat("z");
		System.out.println(x);
		
		StringBuffer sb= new StringBuffer("abc");
		sb.append("z");
		System.out.println(sb);
	}
}
