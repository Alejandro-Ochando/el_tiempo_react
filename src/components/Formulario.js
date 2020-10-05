import React, { useState } from 'react';

const Formulario = () => {
    
    const [ busqueda, guardarBusqueda ] = useState({
        ciudad: '',
        pais: ''
    });
    
    const { ciudad, pais } = busqueda;
    
    //Funcion que coloca los elementos en el State
    const handleChange = e => {
        //Actualizar el state
        guardarBusqueda({
            ...busqueda,
            [e.target.name]:e.target.value
        })
    }
    
    return ( 
        <form>
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
        </form>
     );
}
 
export default Formulario;