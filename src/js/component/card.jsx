import React from "react";

function Card(){
    return <div className="card m-3 text-center" style={{width : "18rem"}}>
    <img src="https://images.ecestaticos.com/FVdcvD11qPRi-JWDH3USTiXDmeQ=/0x0:2120x1414/1200x900/filters:fill(white):format(jpg)/f.elconfidencial.com%2Foriginal%2F47b%2F328%2F963%2F47b3289639713b8e80c8d682d219fba7.jpg" className="card-img-top" alt="..."/>
    <div className="card-body">
      <h5 className="card-title">Card title</h5>
      <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      <a href="#" className="btn btn-primary">Go somewhere</a>
    </div>
  </div>
}

export default Card;

//los mandamientos de react
// mandamiento nro1: toda etiqueta que se abre se debe cerrar
// mandamiento nro2: toda etiqueta de style en linea se comporta como si fuera un OBJETO EN JS

//mandamiento nro3: toda pallabra class se reemplaza por className