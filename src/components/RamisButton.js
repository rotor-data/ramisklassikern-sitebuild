import React from "react"
import { Link } from "gatsby"


const RamisButton = ({buttonText, buttonLink}) => {

return (

    <div>
<button className="button is-link has-text-black"><Link className="has-text-black is-family-secondary has-text-weight-bold is-uppercase" to={buttonLink}>{buttonText}</Link></button>
    </div>
)

}

export default RamisButton

