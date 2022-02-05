import React, { useEffect, useState } from "react";

function Serie(props) {
  const [ mySerieOrig, updateMySerieOrig ] = useState([]);
  const [ mySerie, updateMySerie ] = useState([]);
  useEffect(() => {
      props.onMounted({
        obtieneSerie: (mySerie) => obtieneSerie(mySerie),
        calcularSerie: (numSerie) => calcularSerie(numSerie)
      })
  })

  function ordenar() {
    updateMySerieOrig(mySerie.slice());
    updateMySerie(mySerie.sort((a,b) => a - b));
  }

  function desordenar() {
    updateMySerieOrig(mySerieOrig);
    updateMySerie(mySerieOrig);
    //updateMySerieOrig(mySerieOrig.slice());
  }

  function obtieneSerie(mySerie) {
    updateMySerieOrig(mySerie);
    updateMySerie(mySerie);
  }

  function calcularSerie(numSerie) {
    const howMany = numSerie[0];
    const fromNum = numSerie[1];
    const toNum = numSerie[2];
    const mySerie = [];
    let myNum;
    if (howMany > 0 && fromNum < toNum) {
      let i = 1;
      do {
        myNum = Math.floor((Math.random() * toNum) + fromNum);
        if (!mySerie.includes(myNum)) {
          mySerie.push(myNum);
          i++;
        }
      }
      while (i <= howMany);
    }
    return mySerie;
  }

  return (
    <React.Fragment>
    {mySerie.length > 0 &&
      <div className="serie"
      onMouseEnter={() => ordenar()}
      onMouseLeave={() => desordenar()}
      >
      <ol>
        {mySerie.map((x) => <li key={x}>{x}</li>)}
      </ol>
    </div>
    }
    </React.Fragment>
  );
}

export default Serie;