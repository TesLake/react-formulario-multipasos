import React from "react";

const Confirmar = props => {
  return (
    <div>
      <h1 className="py-2">Confirmar datos:</h1>
      <br />
      <h6>Datos del usuario:</h6>
      <hr />
      <p>Nombre: {props.valores.nombre}</p>
      <p>Apellido:{props.valores.apellido}</p>
      <p>Usuario: {props.valores.usuario}</p>
      <br />
      <h6>Datos de direccion:</h6>
      <hr />
      <p>Calle: {props.valores.calle}</p>
      <p>Colonia: {props.valores.colonia}</p>
      <p>Ciudad:{props.valores.ciudad}</p>
      <p>Estado: {props.valores.estado}</p>

      <div className="text-right">
        <button
          className="btn btn-primary m-2 px-4"
          onClick={props.pasoAnterior}
        >
          Atras
        </button>
        <button className="btn btn-primary m-2" onClick={props.pasoSiguiente}>
          Siguiente
        </button>
      </div>
    </div>
  );
};

export default Confirmar;
