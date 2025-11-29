create table contactos(
	id serial not null,
	nombre varchar(50) not null,
	apellido varchar(50) not null,
	celular varchar(20) not null,
	constraint contactos_pk primary key(id)
	
);

insert into contactos(nombre,apellido,celular)
values ('Juan','Perez','0995531173');
insert into contactos(nombre,apellido,celular)
values ('Maria','Real','0995532273');

select * from contactos;