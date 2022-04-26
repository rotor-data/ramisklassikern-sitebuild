import React from "react";
import RotorButton from "./RotorButton";
import CtaBackground from "../svg/large-cta-background.svg"
import { GatsbyImage } from "gatsby-plugin-image";


const LargeCTA = () => {

    return (
        <div className="columns hero-body" style={{position: 'relative', zIndex: '1'}}>
            <div style={{
               objectFit: 'cover',
               zIndex:'-1',
               objectPosition: '50% 50%',

           }} >
            <CtaBackground />
            </div>
             
            <div className="column is-6 is-offset-3 has-text-white is-vcentered py-6" /* style={{
            backgroundImage: `url(${ctaBackground})`, 
            backgroundRepeat: 'no-repeat', 
            backgroundSize: 'cover',
            backgroundPosition:'center', 
            textAlign: 'center',
            minHeight:'700px'
          }} */>
          
              <div>
                  <div className="p-6">
                <h2 className="is-size-2 mb-3">
                Därför ska du välja en digitalbyrå som kan mer än ett verktyg
                </h2>
                <p className="mb-6">
                Ja, vi kallar dem verktyg – SEO, annonsering på Google, Facebook, Instagram, Linked In, marketing automation etc.
                För precis som ett verktyg finns de till för att bygga något större.
                Och de hänger ihop. Allt handlar om att hitta de verktyg som passar dig just nu.
                En SEO-byrå kommer att tycka att SEO är det verktyget.
                En Facebook-byrå kommer att rekommendera – ja gissa – Facebook.
                Och så vidare.
                Vi tror inte på den lösningen.
                Därför att rätt verktyg för dig är det som skapar intäkter på kort eller lång sikt, på effektivast möjliga sätt.
                Oavsett vad verktyget kallas. 
                Vi kan verktygen. Men framför allt har vi en plattform för att bygga ditt eget säljande system, med de verktyg du behöver för ökad lönsamhet.
                Vill du veta vad Rotor Uplift kan vara för dig?
                </p>
                <RotorButton buttonText="Klicka här" buttonLink="/kontakt"/>
                <div style={{height:'100px'}}>
                </div>
                </div>
                </div>
            </div>

        </div>


    )
};

export default LargeCTA