import React, { useState } from 'react';
import { StaticImage } from "gatsby-plugin-image"

import Triangle from "../img/rounded-triangle.svg"

const Accordion = ({text, explanation}) => {
  
  const [isActive, setIsActive] = useState(false);
  return (
    <React.Fragment>

      <div className="accordion columns" onClick={() => setIsActive(!isActive)}>
  <div onMouseLeave={() => setIsActive(false)} className={isActive ? 'accordion-active accordion-item column p-5 has-background-info has-text-white' : 'accordion-item column p-5' } >
    <div
      className="accordion-title is-size-5"
      
      
    >
      <h3>{text}</h3>
      <div className={isActive ? 'active-triangle': 'inactive-triangle'}></div>
    </div>
    <div className="accordion-content" aria-expanded={isActive}><br></br>{explanation}</div>
  </div>
</div>
    </React.Fragment>
  );
};



export default Accordion;