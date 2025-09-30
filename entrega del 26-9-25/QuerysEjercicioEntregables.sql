
-- 1. Mostrar todos los clientes registrados en la base de datos. 

SELECT * FROM E01_CLIENTE;

-- 2. Listar solo el nombre y apellido de todos los clientes. 

SELECT nombre, apellido FROM E01_CLIENTE;

-- 3. Mostrar todos los productos con sus precios y stock. 

SELECT nombre, precio, stock FROM E01_PRODUCTO;

-- 4. Mostrar el nombre, apellido y dirección de los clientes que tengan un valor de activo mayor a 100. 

SELECT nombre, apellido, direccion FROM E01_CLIENTE WHERE activo > 100;

-- 5. Listar todos los productos cuyo precio sea mayor a 800. 

SELECT * FROM E01_PRODUCTO WHERE precio < 800;

-- 6. Mostrar todos los clientes cuyo apellido comience con la letra M. 

SELECT * FROM E01_CLIENTE WHERE apellido like "M%";

-- 7. Mostrar los productos cuyo nombre contenga la palabra meat. 

SELECT * FROM E01_PRODUCTO WHERE nombre like "%meat%";

-- 8. Obtener las diferentes marcas de productos (sin repetir). 

SELECT DISTINCT marca FROM E01_PRODUCTO;

-- 9. Mostrar todos los clientes cuyo valor de activo esté entre 50 y 100.

SELECT * FROM E01_PRODUCTO WHERE precio BETWEEN 50 AND 100;

-- 10. Listar los productos cuyo precio sea mayor a 500 y su stock mayor a 400. 

SELECT * FROM E01_PRODUCTO WHERE precio < 500 AND stock > 400;

-- 11. Listar los clientes cuyo apellido sea “Rose” o “Allen”. 

SELECT * FROM E01_CLIENTE WHERE apellido = "Rose" OR apellido = "Allen";

-- 12. Mostrar los clientes cuyo nombre contenga la letra a en cualquier posición.

SELECT * FROM E01_CLIENTE WHERE nombre LIKE "%A%";

-- 13. Listar los productos cuyo precio esté entre 200 y 600. 

SELECT * FROM E01_PRODUCTO WHERE precio BETWEEN 200 AND 600;

-- 14. Mostrar los productos que tengan un stock menor a 100. 

SELECT * FROM E01_PRODUCTO WHERE stock < 100;

-- 15. Listar todos los clientes cuya dirección contenga la palabra Avenida. 

SELECT * FROM E01_CLIENTE WHERE direccion LIKE "%Avenida%";

-- 16. Mostrar los productos que tengan en el campo descripcion la palabra Nulla. 

SELECT * FROM E01_PRODUCTO WHERE descripcion LIKE "%Nulla%";

-- 17. Obtener todos los productos con precio menor a 300 o stock mayor a 900. 

SELECT * FROM E01_PRODUCTO WHERE precio < 300 AND stock > 900;

-- 18. Listar los clientes cuyo campo activo sea igual a 0, 50 o 100. 

SELECT * FROM E01_CLIENTE WHERE activo = 0 OR activo = 50 OR activo = 100;
SELECT * FROM E01_CLIENTE WHERE activo IN (0 , 50 , 100);

-- 19. Mostrar los productos cuya marca termine con la palabra Company. 

SELECT * FROM E01_PRODUCTO WHERE marca LIKE "% Company";

-- 20. Listar los clientes cuyo nombre empiece con “C” y su activo sea mayor a 80. 

SELECT * FROM E01_CLIENTE WHERE nombre LIKE "C%" AND activo > 80;

-- 21. Mostrar los productos ordenados por precio de mayor a menor. 

SELECT * FROM E01_PRODUCTO ORDER BY precio DESC;

-- 22. Mostrar los 10 primeros clientes ingresados en la tabla. 

SELECT * FROM E01_CLIENTE LIMIT 10;

-- 23. Obtener el producto más caro y el más barato. 

SELECT MAX(precio) from E01_PRODUCTO; -- me trajo precio maximo
SELECT MIN(precio) from E01_PRODUCTO; -- me trajo precio minimo
SELECT * from E01_PRODUCTO WHERE precio = (SELECT MAX(precio) from E01_PRODUCTO) OR precio = (SELECT MIN(precio) from E01_PRODUCTO);

-- 24. Contar cuántos clientes están registrados en la base de datos. 

SELECT COUNT(*) FROM E01_CLIENTE;

-- 25. Contar cuántos productos tienen un precio mayor a 500. 

SELECT COUNT(*) FROM E01_PRODUCTO WHERE precio > 500;

-- 26. Calcular el promedio de los precios de todos los productos. 
SELECT AVG(precio) FROM E01_PRODUCTO;

-- 27. Calcular el stock total disponible de todos los productos. 

SELECT SUM(stock) FROM E01_PRODUCTO;

-- 28. Insertar dos clientes nuevos en la tabla E01_CLIENTE. 

SELECT COUNT(*) FROM E01_CLIENTE;
INSERT INTO E01_CLIENTE (nombre,apellido,direccion,activo) VALUES ("Gustavo", "Arias", "Tierra del Fuego 946", 50);
SELECT * FROM E01_CLIENTE WHERE nombre = "Gustavo";

-- 29. Insertar dos productos nuevos en la tabla E01_PRODUCTO. 

SELECT COUNT(*) FROM E01_PRODUCTO;
INSERT INTO E01_PRODUCTO (marca,nombre,descripcion,precio,stock) VALUES ("Fender","Stratocaster","Guitarra",2000000,3);
SELECT * FROM E01_PRODUCTO WHERE nombre = "Stratocaster";

-- 30. Actualizar la dirección de un cliente (a elección). 

UPDATE E01_CLIENTE SET direccion = "Lamadrid 741" WHERE nombre = "Gustavo" AND apellido = "Arias";
SELECT * FROM E01_CLIENTE WHERE nombre = "Gustavo";

-- 31. Actualizar el stock de un producto restando 10 unidades. 

SELECT stock FROM E01_PRODUCTO WHERE codigo_producto = 100;
UPDATE E01_PRODUCTO set stock = stock-10 WHERE codigo_producto = 100;

-- 32. Subir un 10% el precio de todos los productos de una marca específica. 

SELECT * FROM E01_PRODUCTO WHERE codigo_producto = 101;
UPDATE E01_PRODUCTO set precio = precio * 1.1 WHERE codigo_producto = 101;

-- 33. Eliminar un cliente (a elección). 

DELETE FROM E01_CLIENTE WHERE nro_cliente = 101;

-- 34. Eliminar un producto (a elección).

DELETE FROM E01_PRODUCTO WHERE codigo_producto = 101;
