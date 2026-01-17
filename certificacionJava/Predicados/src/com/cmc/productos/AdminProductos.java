package com.cmc.productos;

import java.util.ArrayList;
import java.util.List;

public class AdminProductos {
	private List<Producto> listaProductos;
	
	public AdminProductos() {
		listaProductos=new ArrayList<Producto>();
	}
	
	public void agregarProducto(Producto producto) {
		listaProductos.add(producto);
	}
	
	public void mostrarProductos() {
		System.out.println(listaProductos);
	}
	
	public void cambiarEstado(ValidarEstado ve) {
		for(Producto p:listaProductos) {
			if(ve.validar(p)) {
				p.setEstado(true);
			}
		}
	}
	
}
