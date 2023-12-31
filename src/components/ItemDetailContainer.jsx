import React from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
  const { productoId } = useParams();

  const productos = [
    {
      id: 1,
      titulo: "Mate",
      descripcion: "esto es un mate",
      precio: 1000,
      categoria: "Mate",
    },
    {
      id: 4,
      titulo: "Mate1",
      descripcion: "esto es un mate",
      precio: 1000,
      categoria: "Mate",
    },
    {
      id: 2,
      titulo: "Termo",
      descripcion: "esto es un termo",
      precio: 1000,
      categoria: "Termo",
    },
    {
      id: 5,
      titulo: "Termo1",
      descripcion: "esto es un termo",
      precio: 1000,
      categoria: "Termo",
    },
    {
      id: 3,
      titulo: "Bombilla",
      descripcion: "esto es una bombilla",
      precio: 1000,
      categoria: "Bombilla",
    },
    {
      id: 6,
      titulo: "Bombilla1",
      descripcion: "esto es una bombilla",
      precio: 1000,
      categoria: "Bombilla",
    },
  ];

  const mostrarProductos = new Promise((resolve, reject) => {
    if (productos.length > 0) {
      setTimeout(() => {
        resolve(productos);
      }, 2000);
    } else {
      reject("No se encontraron productos");
    }
  });

  mostrarProductos.then((resultado) => {}).catch((error) => {});

  const productoFind = productos.find((producto) => producto.id == productoId);
  console.log(productoFind);

  return (
    <div>
      <ItemDetail producto={productoFind} />;
    </div>
  );
};

export default ItemDetailContainer;
