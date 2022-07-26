import React, {Fragment, useState} from "react";
import Formulario from "./componentes/Formularios";
import Cita from "./componentes/Cita";

function App() {
  //Arreglo de citas
  const [citas, guardarCitas] = useState([]);

  const crearCita = cita =>{
    guardarCitas([
      ...citas, cita
    ])
  }  

  //función eliminar cita
  const eliminarCita = id => {
    const nuevasCitas = citas.filter(cita => cita.id !== id)
    guardarCitas(nuevasCitas)
  }
//  Cuando mo hay citas mostrar agregar nueva Cita
const titulo = citas.length ===0? 'No hay Citas' : 'Administrar tus citas'

  return (
    <Fragment>
       <div className="App">
      <h2>Administrador de Pacientes</h2>

      <div className="container">
      <div className="row">
        <div className="one-half column">
          <Formulario
          crearCita={crearCita}
          />
        </div>
        <div className="one-half column">
          <h2>{titulo}</h2>
          {citas.map(cita => (
            <Cita 
            key = {cita.id}
            cita = {cita}
            eliminarCita = {eliminarCita}
            />
          ))}
        </div>
        
      </div>
    </div>


    </div>

    </Fragment>
   
    
  );
}

export default App;
