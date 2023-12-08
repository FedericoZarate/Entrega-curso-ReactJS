import React from "react";
import NavBar from "./components/navbar";
import ItemListContainer from "./components/ItemListContainer";

const App = () => {
  return (
    <div>
      <NavBar />
      <ItemListContainer greeting={"Bienvenidos a TiendaMate"} />
    </div>
  );
};

export default App;
