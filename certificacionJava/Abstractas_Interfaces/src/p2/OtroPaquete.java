package p2;

import p1.Contenedor;

public class OtroPaquete {
	public void probarAcceso() {
		Contenedor c=new Contenedor();
		c.varDefault=0;
		c.varProtected=0;
		c.varPublic=0;
		c.varPrivate=0;
	}
}
