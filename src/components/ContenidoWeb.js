import React from "react";
import "../estilos/Contenido-1web.css";
import Landing from "./Landing";
import Navbar from "./NavBar";
import { WhoWeR } from "./WhoWeR";
import { ProductosYservicios } from "./ProductosYservicios";
export const ContenidoWeb = () => {
  return (
    <div className="container1">
      <div>
        <Navbar/>
        <Landing />
        <WhoWeR/>
        <ProductosYservicios/>      
      </div>
    </div>
  );
};
