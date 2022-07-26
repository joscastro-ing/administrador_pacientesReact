import React, {Fragment} from "react";
import Formulario from "./componentes/Formularios";

function App() {
  return (
    <Fragment>
       <div className="App">
      <h2>Administrador de Pacientes</h2>

      <div className="container">
      <div className="row">
        <div className="one-half column">
          <Formulario/>
        </div>
        <div className="one-half column">
        </div>
        
      </div>
    </div>


    </div>

    </Fragment>
   
    
  );
}

export default App;
