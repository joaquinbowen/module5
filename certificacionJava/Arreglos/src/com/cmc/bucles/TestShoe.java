package com.cmc.bucles;

public class TestShoe {
	public static void main(String[] args) {
		int var1=32;
		int var2=34;
		var1=var2++;
		Shoe s1=new Shoe();
		s1.size=var1;
		s1=new Shoe();
		Shoe s2 = s1;
		s2.size=var2;
		s1.size=36;
		System.out.println(var1+" "+var2+" "+s1.size+" "+s2.size);
	}
}
