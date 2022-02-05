import React from "react";
import Serie from "./serie";
import Serie2 from "./serie2";

function Logo(props) {
  let serieCallbacks;
  let serie2Callbacks;

  function serie2Mounted(callbacks) {
    serie2Callbacks = callbacks;
  }

  function serieMounted(callbacks) {
    serieCallbacks = callbacks;
  }

  function calcularSeries(numSerie1, numSerie2) {
    const mySerie = serieCallbacks.calcularSerie(numSerie1);
    const mySerie2 = serieCallbacks.calcularSerie(numSerie2);
    serieCallbacks.obtieneSerie(mySerie);
    serie2Callbacks.obtieneSerie(mySerie2);
  }

  return (
    <React.Fragment>
      <button onClick={() => calcularSeries(props.numSerie1, props.numSerie2)}>
        <img src={props.logo} className="App-logo" alt="Logo Juego" />
      </button>
      <Serie onMounted={callbacks => serieMounted(callbacks)} />
      <Serie2 onMounted={callbacks => serie2Mounted(callbacks)} nomSerie2={props.nomSerie2}/>
    </React.Fragment>
  );
}

export default Logo;