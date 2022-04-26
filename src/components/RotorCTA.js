import * as React from "react";
import RotorButton from "../components/RotorButton"
import { Link } from "gatsby";


const RotorCTA = ({buttonText, buttonLink, headline, text}) => {
  
    return ( 
    <div className="columns">
      <div className="rotor-cta p-3 column is-three-fifths is-offset-one-fifth">
        <h2 className="has-text-weight-bold is-size-3 has-tight-spacing has-tight-height mb-3">{headline}</h2>
        <p>{text}</p>
        <Link className="rotor-button" to={buttonLink}>{buttonText} </Link>
      
      </div>
    </div>
    
    )
    };
export default RotorCTA