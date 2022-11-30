import React from "react";
import { useLocation } from "@reach/router" // this helps tracking the location
import { initializeAndTrack } from 'gatsby-plugin-gdpr-cookies'
import { useState } from "react";
import CookieConsent, { Cookies, getCookieConsentValue } from "react-cookie-consent";
import SimpleModal from "./SimpleModal";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";


const CookieNotice = () => {

    const cookieCategories = [
        {
            title: "Nödvändiga",
            cookies: [],
            description: "Nödvändiga cookies gör så att du kan använda webbplatsen på ett bra sätt, tex funktioner som sidnavigering och skyddade delar av webbplatsen. Utan dessa cookies funkar inte webbplatsen bra och kan därför inte väljas bort."
        },
        {
            title: "Statistik",
            cookies: ['gatsby-gdpr-google-analytics', 'gatsby-gdpr-hotjar', 'gatsby-gdpr-google-tagmanager', 'gatsby-gdpr-facebook-pixel','gatsby-gdpr-tiktok-pixel', 'gatsby-gdpr-linked-in'],
            description: "Statistik-cookies hjälper oss att förstå hur besökare interagerar med webbplatser. De samlar in och rapporterar in helt anonymt."
        },
        {
            title: "Marknadsföring",
            cookies: [],
            description: "Cookies för marknadsföring används för att spåra besökare på webbplatser. Poängen är att kunna visa relevanta annonser för dig och det du är intresserad av, vilket såklart också är intressant för tredjeparts-annonsörer."

        }];
    
 const allCookies = cookieCategories.map(category => category.cookies).flat();


    // array of states for each cookie

    const [checkedState, setCheckedState] = useState(
        new Array(cookieCategories.length).fill(false)
    );
    const updatedCheckedState = checkedState.map((item) => item);
    const handleOnChange = (position) => {
        !updatedCheckedState[position] ? updatedCheckedState[position] = true : updatedCheckedState[position] = false;
        setCheckedState(updatedCheckedState);

    }
//set cookies for all selected optional categories
    const initializeCookies = () => {

        cookieCategories.forEach((item, index) =>
            item.cookies.map(cookie => Cookies.set(cookie, updatedCheckedState[index]))
        )
        // activeCookies.map((cookie, index) => Cookies.set(cookie, updatedCheckedState[index]));
        initializeAndTrack(location);
        console.log(getCookieConsentValue());
        setShow(false);
        setBannerVisible("hidden")
    }

    const location = useLocation();
    const [show, setShow] = useState(false);
    const handleClick = () => {

        setShow(true);

    };
   const [bannerVisible, setBannerVisible] = useState("byCookieValue");

    const cookieImage = ''

    return (
        <div>

            {/* optional cookies modal */}
            <SimpleModal show={show} setShow={setShow}>
                <div className="columns" style={{ height: "100%", borderRadius: "40px" }}>
                    <div className="column has-background-info is-10 is-offset-1 p-6 has-text-white ">

                        {cookieCategories.map((category, index) =>
                            
                            <div className="mb-4">
                                <label className="toggle-switch">
                                    <input
                                        type="checkbox"
                                        id={`category-${index}`}
                                        name={category}
                                        value={category}
                                        checked={index === 0 ? true : checkedState[index]}
                                        onChange={() => handleOnChange(index)}
                                    />

                                    <span className="switch" />
                                    <p className="is-family-secondary is-size-5 has-text-weight-bold pl-6">{category.title}</p>
                                </label>
                                <p className="is-size-6 pl-6">{category.description}</p>

                            </div>
                        )}
                        

                        <div className="columns has-text-centered mt-3">
                            <div className="column">
                                <button
                                    className="button is-warning is-medium mt-3 is-family-secondary has-text-weight-bold"
                                    onClick={() => initializeCookies()}
                                >Spara val
                                </button>
                                
                            </div>
                            <div className="column">
                                <button
                                    className="button is-link is-medium mt-3 is-family-secondary has-text-weight-bold"
                                    onClick={() => {
                                        allCookies.map(cookie => Cookies.set(cookie, true))
                                        initializeAndTrack(location)
                                        setShow(false)
                                        setBannerVisible("hidden")
                                    }}
                                >Godkänn alla
                                </button>
                                
                            </div>
                        </div>

                    </div>
                </div>
            </SimpleModal>


            <CookieConsent
             
                disableStyles={true}
                visible={bannerVisible}
                location="bottom"
                buttonText="Acceptera alla cookies"
                cookieName="gatsby-gdpr-google-analytics"
                expires={150}
                onAccept={() => {
                    allCookies.map(cookie => Cookies.set(cookie, true))
                    initializeAndTrack(location)
                    setBannerVisible("hidden")
                }}
                containerClasses="cookie-container"
                buttonClasses="cookie-button"
                buttonWrapperClasses="cookie-button-wrapper"
                contentClasses="cookie-content"


            >   
                <p className="is-family-secondary has-text-weight-bold mb-4">Vi använder <Link className="has-text-link" to="/kontakta oss">cookies</Link> för att förbättra din upplevelse</p>
                <button className="cookie-customize is-size-6" onClick={() => handleClick()}>Anpassa cookies</button>
                <StaticImage src={cookieImage} style={{width:"150px", position:"absolute", left:"10%", top:"-19%", zIndex:"-1"}}/>
            </CookieConsent>



        </div>
    )
}

export default CookieNotice

