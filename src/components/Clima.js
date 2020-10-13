import React from 'react';
import PropTypes from 'prop-types';

const Clima = ({ resultado }) => {
    
    const  { name, main, sys } = resultado;
    
    if(!name) return null;

    const kelvin = 273.15;

    return ( 
        
        <div className="card-panel white col s12">
            <div className="black-text glass">
                <h2>{name}, {sys.country}  </h2>
                <p className="temperatura">
                    {Number.parseFloat(main.temp -  kelvin).toFixed(1)} <span> &#x2103;</span>
                </p>
                <p>
                    T. Máxima:&nbsp; &nbsp; 
                    <span  className="maxima">{Number.parseFloat(main.temp_max -  kelvin).toFixed(1)}  &#x2103;</span>
                </p>
                <p className="temp_minima">
                    T. Mínima:&nbsp; &nbsp;
                    <span  className="minima">{Number.parseFloat(main.temp_min -  kelvin).toFixed(1)}  &#x2103;</span>
                </p>
            </div>
        </div>

     );
}
 
Clima.propTypes = {
    resultado: PropTypes.object.isRequired
}

export default Clima;