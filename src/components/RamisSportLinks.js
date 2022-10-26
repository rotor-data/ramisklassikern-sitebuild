import * as React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

const RamisSportLinks = () => {
const imageWidth = 150
const boxShadow = {boxShadow: "-1px 3px 5px black",
    borderRadius: "50%"}

return (
    <div className="columns has-text-centered is-uppercase has-text-weight-bold">



    <div className="column columns is-flex-direction-column">
     <div className="column">
           <StaticImage src="../img/Ramisklassikern_langdskidor.png"
            width={imageWidth}
            style={boxShadow}/>
     </div>
        <Link to="/grenarna/langdskidor">Längdskidor</Link>
    </div>
    <div className="column columns is-flex-direction-column">
        <div className="column">
            <StaticImage src="../img/Ramisklassikern_topptur.png"
            width={imageWidth}
            style={boxShadow}/>
        </div>
        <Link to="/grenarna/topptur">Topptur</Link>
    </div>
    <div className="column columns is-flex-direction-column">
        <div className="column">
            <StaticImage src="../img/Ramisklassikern_mtb.png"
            width={imageWidth}
            style={boxShadow}/>
        </div>
        <Link to="/grenarna/mountainbike">Mountainbike</Link>
    </div>
    <div className="column columns is-flex-direction-column mb-3 has-text-bold">
        <div className="column">
            <StaticImage src="../img/Ramisklassikern_trailrunning.png"
            width={imageWidth}
            style={boxShadow}/>
        </div>
        <Link to="/grenarna/trailrunning">Trailrunning</Link>
    </div>
</div>


)
}

export default RamisSportLinks