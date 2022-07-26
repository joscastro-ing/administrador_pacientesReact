import React, { Fragment, useState } from "react";

const Formulario = () => {
    //Crear State de Citas
    const [cita, actualizarCitas] = useState({
        mascota: '',
        propietario: '',
        fecha: '',
        hora: '',
        sintomas: ''

    })
    const [error, actualizarError] = useState (false)
    //Funcion que se ejecuta cuando el usuario escribe en el Input
    const actualizarState = e=> {
        actualizarCitas({
            ...cita,
            [e.target.name]: e.target.value
        })
    }
    const {mascota, propietario, fecha, hora, sintomas} = cita
    const submitCita = e => {
        e.preventDefault();
        //Validar
        if(mascota.trim()==='' || propietario.trim()==='' || fecha.trim()==='' || hora.trim()===''|| sintomas.trim()===''){
            actualizarError(true)
            return
        }

        //Asignar ID
        console.log(cita)
    }
    return (
        <Fragment>
            <h2>Crear cita</h2>
            {error ? <p className="alerta-error">Rellene todos los campos</p>:null}
            <form
            onSubmit={submitCita}
            >
                <label>Nombre de la Mascota</label>
                <input
                    type="text"
                    name="mascota"
                    className="u-full-width"
                    placeholder="Nombre de la Mascota"
                    onChange={actualizarState}
                    value = {mascota}
                />

                <label>Propietario</label>
                <input
                    type="text"
                    name="propietario"
                    className="u-full-width"
                    placeholder="Nombre del dueño de la Mascota"
                    onChange={actualizarState}
                    value = {propietario}
                />
                <label>Fecha</label>
                <input
                    type="date"
                    name="fecha"
                    className="u-full-width"
                    onChange={actualizarState}
                    value = {fecha}
                />
                <label>Hora</label>
                <input
                    type="time"
                    name="hora"
                    className="u-full-width"
                    onChange={actualizarState}
                    value = {hora}
                />
                <label>Síntomas</label>
                <textarea className="u-full-width"
                    name="sintomas"
                    onChange={actualizarState}
                    value = {sintomas}
                ></textarea>
                <button
                    type="submit"
                    className="u-full-width button-primary"
                >Agregar la Cita</button>
            </form>
        </Fragment>


    );
}
export default Formulario;