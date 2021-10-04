import React from "react";
import "./styles/Footer.css";

const PieDePagina = () => {
  return (
    <footer className="encabezado">
      <p>
        Sin derechos reservados 2021-2021. Republica Argentina. <br />
        Lima 319; Código Postal: C1073AAG, CABA; República Argentina
      </p>
      <a href="/">
        <img className="linkEncabezado" src="http://cine.ar/img/logo-cinear.svg"/>
      </a>
      <a href="/">
        <img className="linkEncabezado" src="http://cine.ar/img/logo-arsat.svg"/>
      </a>
      <a href="/">
        <img className="linkEncabezado" src="http://cine.ar/img/logo-incaa.svg"/>
      </a>
    </footer>
  );
};

export default PieDePagina;
