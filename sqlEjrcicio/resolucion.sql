use facturacion_1;
-- Obtener todos los datos de todos los clientes
select * from e01_clientes;

-- Obtener solo los nombres y apellidos de todos los clientes
select nombre, apellido from e01_clientes;

-- Obtener los nombres de los diferentes productos
select distinct nombre from e01_producto;

-- Obtener los diferentes códigos de área de los teléfonos
select distinct codigo_area from e01_telefono;

