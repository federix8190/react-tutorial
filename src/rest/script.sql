-- Drop table

-- DROP TABLE public.usuario

CREATE TABLE public.usuario (
	id bigserial NOT NULL,
	nombre varchar(255) NULL,
	apellido varchar(255) NULL,
	alias varchar(255) NULL,
	correo varchar(255) NULL,
	"password" varchar(255) NULL,
	id_ciudad int4 NULL,
	activo bool NULL,
	fecha_eliminacion date NULL,
	fecha_creacion date NULL,
	rol int8 NULL,
	usuario_creacion int8 NULL,
	usuario_modificacion int8 NULL,
	usuario_eliminacion int8 NULL,
	fecha_modificacion date NULL,
	CONSTRAINT usuario_pk PRIMARY KEY (id),
	CONSTRAINT usuario_ciudad_fk FOREIGN KEY (id_ciudad) REFERENCES ciudad(id)
);

-- Permissions

ALTER TABLE public.usuario OWNER TO federix;
GRANT ALL ON TABLE public.usuario TO federix;



-- Drop table

-- DROP TABLE public.ciudad

CREATE TABLE public.ciudad (
	id serial NOT NULL,
	nombre varchar(255) NULL,
	fecha_creacion int8 NULL,
	fecha_eliminacion int8 NULL,
	usuario_creacion int8 NULL,
	usuario_modificacion int8 NULL,
	usuario_eliminacion int8 NULL,
	fecha_modificacion date NULL,
	activo bool NULL,
	poblacion int8 NULL,
	CONSTRAINT ciudad_pk PRIMARY KEY (id)
);

-- Permissions

ALTER TABLE public.ciudad OWNER TO federix;
GRANT ALL ON TABLE public.ciudad TO federix;



-- Drop table

-- DROP TABLE public.persona

CREATE TABLE public.persona (
	id bigserial NOT NULL,
	nombre varchar(255) NULL,
	apellido varchar(255) NULL,
	linea varchar(15) NULL,
	grupo varchar(15) NULL,
	ciudad varchar(255) NULL,
	barrio varchar(255) NULL,
	direccion varchar(255) NULL,
	fecha_nacimiento date NULL,
	cedula varchar(255) NULL
);

-- Permissions

ALTER TABLE public.persona OWNER TO federix;
GRANT ALL ON TABLE public.persona TO federix;
