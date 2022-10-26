import * as React from "react";

import facebook from "../img/social/facebook.svg";
import instagram from "../img/social/instagram.svg";
import twitter from "../img/social/twitter.svg";
import vimeo from "../img/social/vimeo.svg";
import youtube from "../img/social/youtube.svg";
import linkedin from "../img/social/linkedin.svg"
import footerBack from "../img/footer-back.svg"
import FooterMenu from "./FooterMenu";
import { useStaticQuery, graphql } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";



const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          company
          socialLinks {
            facebook
            twitter
            linkedin
            instagram
            vimeo
            youtube
            tiktok
          }
        }
      }
      favicon: file(name: { eq: "favicon" }) {
        publicURL
      }
    }
  `);
  const socialMedia = data.site.siteMetadata.socialLinks;
  const selectImage = (name) => {
    if (name === "facebook") {
      return facebook
    }
    if (name === "linkedin") {
      return linkedin
    }
    if (name === "twitter") {
      return twitter
    }
    if (name === "instagram") {
      return instagram
    }
    if (name === "vimeo") {
      return vimeo
    }
    if (name === "youtube") {
      return youtube
    }
  }

  return (
    <footer className="footer has-text-white-ter" style={{
      backgroundImage: ``,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'contain',
      background: ''
    }}>
      <div className="content has-text-centered">


        <div className="column social">


          {Object.entries(socialMedia).map(entry =>
            entry[1] !== "" ? <a
              title={entry[0]} href={entry[1]}
              target="_blank"
              rel="noreferrer">

              <img
                src={selectImage(entry[0])}
                alt={entry[0]}
                style={{ width: "1.2em", height: "1.2em" }}
              />

            </a> : null
          )


          }

        </div>

      </div>
      <div className="has-text-centered has-text-white-ter is-family-secondary has-text-weight-bold">
        <div className="container has-text-white-ter">
          <div style={{ maxWidth: "100vw" }} className="columns mx-1netl">
            <div className="column is-6">
              <section className="menu content">
                <FooterMenu />

              </section>
            </div>
            <div className="column is-4">
           <StaticImage src="../img/Cykel_gul.png" height={400}/>
            </div>

          </div>
        </div>
      </div>
      <p className="mb-0 has-text-centered mt-6 is-supersmall has-text-white is-family-secondary">
        © {data.site.siteMetadata.company} {new Date().getFullYear()}
      </p>
    </footer>
  );

};

export default Footer;
