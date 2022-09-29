import React from "react";
import { useLocation } from "@reach/router" // this helps tracking the location
import { initializeAndTrack } from 'gatsby-plugin-gdpr-cookies'
import { useState } from "react";
import CookieConsent, { Cookies, getCookieConsentValue } from "react-cookie-consent";
import SimpleModal from "./SimpleModal";
import { Link } from "gatsby";


const CookieNotice = () => {

    const activeCookies = ['gatsby-gdpr-google-analytics', 'gatsby-gdpr-hotjar'];

    // array of states for each cookie
    
    const [checkedState, setCheckedState] = useState(
        new Array(activeCookies.length).fill(true)
      );
      const updatedCheckedState = checkedState.map((item) => item);
      const handleOnChange = (position) => {
        !updatedCheckedState[position]?updatedCheckedState[position]=true:updatedCheckedState[position]=false;
        setCheckedState(updatedCheckedState);
        console.log("state"+updatedCheckedState);

      }

    const initializeCookies = () => {
        activeCookies.map((cookie, index) => Cookies.set(cookie, updatedCheckedState[index]));
        initializeAndTrack(location);
        console.log(getCookieConsentValue());
        console.log("clicked save");
        setShow(false); 
      }
    
    const location = useLocation();
    const [show, setShow] = useState(false);
    const handleClick = () => {
  
      setShow(true);
     
      
      console.log("clicked")
    };
   
    
    return (
        <div>

            {/* optional cookies modal */}
        <SimpleModal show={show} setShow={setShow}>
        <div className="columns has-background-info p-6" style={{height:"100%",borderRadius:"40px"}}>
        <div className="column is-12 has-text-white ">
          {activeCookies.map ((cookie, index) => 
            <div>
              <input
              className="checkbox"
              checked={checkedState[index]}
              onChange={() => handleOnChange(index)} 
              type="checkbox" 
              id={`cookie-${index}`} 
              name={cookie.slice(12,cookie.length)} 
              value={cookie}/>

              <label 
              for="vehicle1" 
              style={{textTransform:"capitalize"}}> {cookie.slice(12,cookie.length).replace('-',' ')}
              </label>
              
            </div>
            )}
          <button
          className="button is-link is-medium mt-3 is-family-secondary has-text-weight-bold"
          onClick={()=>initializeCookies()}
          >Save</button>
          </div>
        </div>
        </SimpleModal>

         
      <CookieConsent
  disableStyles={true}
  location="bottom"
  buttonText="Ge mig kakor"
  cookieName="gatsby-gdpr-google-analytics"
  expires={150}
  onAccept={() => {
    activeCookies.map(cookie => Cookies.set(cookie, true))
    initializeAndTrack(location) 
  }}
  containerClasses ="cookie-container"
  buttonClasses = "cookie-button"
  buttonWrapperClasses ="cookie-button-wrapper"
  contentClasses = "cookie-content"

 
>
  <p className="is-family-secondary">Vi använder <Link className="has-text-link" to="/kontakta oss">cookies</Link> för att förbättra din upplevelse</p>
  <a className="cookie-customize" onClick={() => handleClick()}>Anpassa kakor</a>
</CookieConsent>



        </div>
    )
}

export default CookieNotice

