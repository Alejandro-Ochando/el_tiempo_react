import React, { useState } from 'react';
import Error from './Error';

const Formulario = ({ busqueda, guardarBusqueda, guardarConsultar }) => {
    
    const [ error, guardarError ] = useState(false);
    
    const { ciudad, pais } = busqueda;
    
    //Funcion que coloca los elementos en el State
    const handleChange = e => {
        //Actualizar el state
        guardarBusqueda({
            ...busqueda,
            [e.target.name]:e.target.value
        })
    }
    
    //Cuando el usuario envia el formulario
    const handleSubmit = e =>{
        e.preventDefault();

        //Validacion
        if(ciudad.trim() === '' || pais.trim() === '' ){
            guardarError(true);
            return;
        }
        //Mensaje de error
        guardarError(false);

        //Pasar al componente principal
        guardarConsultar(true)
        
        
    }


    return ( 
        <form
            onSubmit={handleSubmit}
        >
            {error ? <Error mensaje="Ambos campos son obligatorios" /> : null}
            <div className="input-field col s12">
                <input
                    type="text"
                    name="ciudad"
                    id="ciuedad"
                    value={ciudad}
                    onChange={handleChange}
                />
                <label htmlFor="ciudad">Ciudad: </label>   
            </div>
            <div className="input-field col s12">
                <select
                    name="pais"
                    id="pais"
                    value={pais}
                    onChange={handleChange}
                >
                    <option value="">-- Elige --</option>
                    <option value="ES">España</option>
                    <option value="US">Estados Unidos</option>
                    <option value="MX">México</option>
                    <option value="AR">Argentina</option>
                    <option value="CO">Colombia</option>

                </select>
                <label htmlFor="pais">Pais: </label>
            </div>
            <div className="input-field col s12">
                <button
                    type="submit"
                    value="Buscar"
                    className="waves-effect waves-light btn-large btn-block yellow accent-4 btn-letra col s12"
                >Buscar
                </button>
            </div>
        </form>
     );
}
 
export default Formulario;