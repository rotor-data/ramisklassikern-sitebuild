import { GatsbyImage, getImage } from "gatsby-plugin-image";
import * as React from "react";


import "./all.sass";


const TeamBox = ({ name, title, image }) => {
    const currImage = getImage(image);
    return (
        <div>
          <div className="card has-star-border" style={{height:'500px',width:'400px'}}>
  <div>
    <div className="pt-6 has-text-centered">
    <GatsbyImage image={currImage} />
    </div>
  </div>
  <div className="card-content">
    <div className="media">
      <div className="media-left">
       
      </div>
      <div className="media-content has-text-centered mt-3">
        <p className="title is-4 " >{name}</p>
        <p className="subtitle is-6">{title}</p>
      </div>
    </div>

  </div>
</div>

        </div>
    );
}
export default TeamBox;