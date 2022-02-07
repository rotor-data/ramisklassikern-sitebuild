import * as React from "react";
import RotorButton from "../components/RotorButton"


const RotorCTA = ({buttonText, buttonLink}) => {
  
    return ( 
    <div className="columns">
      <div className="rotor-cta p-3 column is-three-fifths is-offset-one-fifth">
        <h2 className="has-text-weight-bold is-size-3 has-tight-spacing has-tight-height mb-3">Vad gör dina konkurrenter?</h2>
        <p>Hur mycket spenderar de på sin annonsering? Och hur mycket trafik drar de in?</p>
        <RotorButton buttonText={buttonText} buttonLink={buttonLink} />
      </div>
    </div>
    
    )
    };
export default RotorCTA