import * as React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";
import "./all.sass";

const RotorButton = ({buttonText, buttonLink, newWindow}) => {
    const internal = /^\/(?!\/)/.test(buttonLink);
    console.log("buttonlink "+internal)

return ( 
<div className="mt-6">
    <div className="rotor-button-container">
    {internal?
    <Link className="rotor-button is-size-4-tablet is-size-5-mobile is-size-5-desktop" to={buttonLink}>{buttonText} </Link>
    :
    <a target={newWindow?"_blank":""} rel={newWindow?"noreferrer":""} className="rotor-button is-size-4-tablet is-size-5-mobile is-size-5-desktop" href={buttonLink}>{buttonText} </a>
 }
    
    </div>
</div>
)
};


RotorButton.propTypes = {
buttonText: PropTypes.string,
buttonLink : PropTypes.string,
};

export default RotorButton;