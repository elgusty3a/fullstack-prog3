1) Filtro en vivo de una lista: Se debe hacer una lista de items de lo que mas les guste, y mediante un input se deberá ir filtrando y mostrando a medida que el usuario escriba.

  sessionStorage.setItem("nombre", event.target[0].value);
  sessionStorage.setItem("password", event.target[1].value);
  sessionStorage.getItem("nombre");
  sessionStorage.removeItem("password");


2) Realizar un toggle automatico el cual cambie el fondo de la pantalla de color. Puede simular un interruptor de luz.
3) Mediante un formulario, se deberá capturar Usuario y contraseña y persistir los datos en localstorage
4) Se deberá realizar un carrito de compras el cual se deberá listar productos, se podrá agregar y eliminar productos a gusto del usuario.
5) Se deberá realizar un listado de tareas el cual se deberá mostrar en una tabla las tareas precargadas. Se podrá agregar y eliminar tareas a gusto del usuario.


Practica de children - cards

UseState
1- Crear un componente el cual muestre la variacion de un texto a medida que el usuario va escribiendo en el input.
2- Generar una tabla, la cual va a tener datos precargados y cada registro debe tener un boton que muestre por alert el registro.

UseEffect
1- Hacer uso de useEffect para consultar datos a un servicio externo y renderice en una lista. (https://thronesapi.com/swagger/index.html?urls.primaryName=Game%20of%20Thrones%20API%20v2)
2- Crear un contador con useState, este mismo debera tener un useEffect para que cada vez que el contador cambie el useEffect muestre un cartel con dicho cambio. Si el contador llega a 10, el mensaje debe ser  Llegaste a 10!.