import React from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
  const { categoriaId } = useParams();

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

  const productosFiltrados = productos.filter(
    (producto) => producto.categoria == categoriaId
  );
  console.log(productosFiltrados);

  return (
    <div>
      {categoriaId ? (
        <ItemList productos={productosFiltrados} />
      ) : (
        <ItemList productos={productos} />
      )}
    </div>
  );
};

export default ItemListContainer;
