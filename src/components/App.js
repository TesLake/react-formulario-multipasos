import React from "react";
import FormularioRegistro from "./FormularioRegistro";

const App = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-3"></div>
        <div className="col-6 mt-5 border rounded bg-light">
          <FormularioRegistro />
        </div>
        <div className="col-3"></div>
      </div>
    </div>
  );
};

export default App;
