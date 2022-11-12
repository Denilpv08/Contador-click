import React from "react";
import '../css/Boton.css';

function Boton ({ texto, click, manejarClick }){
    return(
      <button className={ click ? "boton-click" : "boton-reiniciar" }
      onClick={manejarClick}>
        { texto }
      </button>
    );
}

export default Boton;