package p3;

import p1.Contenedor;

public class HijoEnOtroPaquete extends Contenedor {
	public void probarAcceso() {
		Contenedor c=new Contenedor();
		c.varDefault=0;
		
		
		c.varProtected=0;//asi no se accede
		varProtected=0; // asi si se accede por herencia
		
		
		
		c.varPublic=0;
		c.varPrivate=0;
	}
}
