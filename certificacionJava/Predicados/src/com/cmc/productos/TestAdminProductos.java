package com.cmc.productos;

import java.time.LocalDate;

public class TestAdminProductos {
	public static void main(String[] args) {
		AdminProductos admin=new AdminProductos();
		admin.agregarProducto(new Producto("papitas",0.50,10,LocalDate.of(2025, 3, 21)));
		admin.agregarProducto(new Producto("doritos",0.50,20,LocalDate.of(2025, 2, 10)));
		admin.agregarProducto(new Producto("manicho",0.45,15,LocalDate.of(2025, 2, 12)));
		
		admin.mostrarProductos();
		
		admin.cambiarEstado(miProducto->{
			return miProducto.getFechaCaducidad().isAfter(LocalDate.now());
		});
		admin.mostrarProductos();
	}
}
