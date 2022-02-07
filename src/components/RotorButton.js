import * as React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";
import "./all.sass";

const RotorButton = ({buttonText, buttonLink}) => {
return ( 
<div className="rotor-button-container">
<Link className="rotor-button" to={buttonLink}>{buttonText} </Link>
</div>
)
};


RotorButton.propTypes = {
buttonText: PropTypes.string,
buttonLink : PropTypes.string,
};

export default RotorButton;