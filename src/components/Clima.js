import React from 'react';

const Clima = ({ resultado }) => {
    
    const  { name, main } = resultado;
    
    if(!name) return null;

    const kelvin = 273.15;

    return ( 
        
        <div className="card-panel white col s12">
            <div className="black-text">
                <h2>El clima de {name} es: </h2>
                <p className="temperatura">
                    {Number.parseFloat(main.temp -  kelvin).toFixed(1)} <span> &#x2103;</span>
                </p>
                <p>
                    Temperatura Máxima: 
                    {Number.parseFloat(main.temp_max -  kelvin).toFixed(1)} <span> &#x2103;</span>
                </p>
                <p>
                    Temperatura Mínima: 
                    {Number.parseFloat(main.temp_min -  kelvin).toFixed(1)} <span> &#x2103;</span>
                </p>
            </div>
        </div>

     );
}
 
export default Clima;