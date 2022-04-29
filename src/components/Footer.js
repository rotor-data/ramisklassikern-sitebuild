import * as React from "react";
import { Link } from "gatsby";

import logo from "../img/rotor-logo-dark.svg";
import facebook from "../img/social/facebook.svg";
import instagram from "../img/social/instagram.svg";
import twitter from "../img/social/twitter.svg";
import vimeo from "../img/social/vimeo.svg";
import footerBack from "../img/footer-back.svg"
import FooterMenu from "./FooterMenu";


const Footer = class extends React.Component {
  render() {
    return (
      <footer className="footer has-text-white-ter pb-6" style={{ 
        backgroundImage: `url(${footerBack})`, 
        backgroundRepeat: 'no-repeat', 
        backgroundSize: 'contain',
        backgroundColor: '#f793cb'}}>
        <div className="content has-text-centered">
        <div className="column social">
                <a title="facebook" href="https://facebook.com">
                  <img
                    src={facebook}
                    alt="Facebook"
                    style={{ width: "1em", height: "1em" }}
                  />
                </a>
                <a title="twitter" href="https://twitter.com">
                  <img
                    className="fas fa-lg"
                    src={twitter}
                    alt="Twitter"
                    style={{ width: "1em", height: "1em" }}
                  />
                </a>
                <a title="instagram" href="https://instagram.com">
                  <img
                    src={instagram}
                    alt="Instagram"
                    style={{ width: "1em", height: "1em" }}
                  />
                </a>
                <a title="vimeo" href="https://vimeo.com">
                  <img
                    src={vimeo}
                    alt="Vimeo"
                    style={{ width: "1em", height: "1em" }}
                  />
                </a>
              </div>
     {/*      <img
            src={logo}
            alt="Kaldi"
            style={{ width: "14em", height: "10em" }}
          /> */}
        </div>
        <div className="content has-text-centered has-text-white-ter">
          <div className="container has-text-white-ter">
            <div style={{ maxWidth: "100vw" }} className="columns">
              <div className="column is-4 has-background-warning">
                <section className="menu">
                  <FooterMenu/>
                 {/*  <ul className="menu-list">
                    <li>
                      <Link to="/" className="navbar-item">
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/about">
                        About
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/products">
                        Products
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/contact/examples">
                        Form Examples
                      </Link>
                    </li>
                    <li>
                      <a
                        className="navbar-item"
                        href="/admin/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Admin
                      </a>
                    </li>
                  </ul> */}
                </section>
              </div>
              <div className="column is-4">
 
              </div>
           
            </div>
          </div>
        </div>
      </footer>
    );
  }
};

export default Footer;
