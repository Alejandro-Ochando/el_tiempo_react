import React, { Fragment, useState, useEffect } from 'react';
import Header from './components/Header';
import Formulario from './components/Formulario';

function App() {

  const [ busqueda, guardarBusqueda ] = useState({
    ciudad: '',
    pais: ''
  });

  const [ consultar, guardarConsultar ] = useState(false);

  const { ciudad, pais } = busqueda;

  useEffect( () => {
    const consultarAPi = async () => {
      if(consultar) {
        const appId = '1609cc4d15db13d4f1d32c2a279deb59';
        const url = `http://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${appId}`
        const respuesta = await fetch(url);
        const resultado = await respuesta.json();

        console.log(resultado);
      }
      
    }
    consultarAPi();
  },[consultar]);



  return (
    <Fragment>
      <Header 
        titulo='El Tiempo App'
      />

      <div className="contenedor-form">
        <div className="container">
            <div className="row">
              <div className="col m6 s12">
                <Formulario 
                  busqueda={busqueda}
                  guardarBusqueda={guardarBusqueda}
                  guardarConsultar={guardarConsultar}
                />
              </div>
              <div className="col m6 s12">
                2
              </div>
            </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
