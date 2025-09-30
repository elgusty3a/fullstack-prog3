const url = "https://fakestoreapi.com/products";

//--------------------------todo dentro de la funcion-----------------------//

// const productos = async (url) => {
//   const RESPUESTA = await fetch(url);
//   const DATOS = await RESPUESTA.json();
//   console.log(DATOS);
//   DATOS.map((p)=>{
//     console.log(`-------------------`);
//     console.log(`Nombre: ${p.title}`);
//     console.log(`Precio: ${p.price}`);
//   });
//   const FILTRADO = DATOS.filter((p)=>p.price > 100);
//   console.log(FILTRADO);
// };

// productos(url);


//------------------ o bien fuera de la funcion productos---------------------------//
const obtenerProductos = async (url) => {
  const RESPUESTA = await fetch(url);
  const DATOS = await RESPUESTA.json();
  return DATOS;
};

const datosMap = async() => {
  const respuesta = await obtenerProductos(url);
  respuesta.map((p)=>{
    console.log(`-------------------`);
    console.log(`Nombre: ${p.title}`);
    console.log(`Precio: ${p.price}`);
  });
};

datosMap();


const datosFilter = async() => {
  const respuesta = await obtenerProductos(url);

  console.log(respuesta.filter((p)=>p.price > 100));

}

datosFilter();