import React from "react";
import { Link } from "gatsby";
import logo from "../img/rotor-logo-dark.svg";

const Navbar = class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
      navBarActiveClass: "",
    };
  }

  toggleHamburger() {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active,
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
              navBarActiveClass: "is-active",
            })
          : this.setState({
              navBarActiveClass: "",
            });
      }
    );
  }

  render() {
    return (
      <nav
        className="navbar is-fixed-top is-spaced is-size-5 is-size-2-touch"
        role="navigation"
        aria-label="main-navigation"
      >
        <div className="container">
          <div className="navbar-brand">
            <Link to="/" className="navbar-item" title="Logo">
              <img src={logo} alt="Rotor" style={{ width: "125px" }} />
            </Link>
            {/* Hamburger menu */}
            <div
              className={`navbar-burger burger ${this.state.navBarActiveClass}`}
              data-target="navMenu"
              role="menuitem"
              tabIndex={0}
              onKeyPress={() => this.toggleHamburger()}
              onClick={() => this.toggleHamburger()}
            >
              <span />
              <span />
              <span />
            </div>
          </div>
          <div
            id="navMenu"
            className={`navbar-menu ${this.state.navBarActiveClass}`}
          >
            <div className="navbar-start">
              <Link className="navbar-item navbar-hover-line" to="/about">
                About
              </Link>
              
              <Link className="navbar-item navbar-hover-line" to="/products">
                Products
              </Link>
              <Link className="navbar-item navbar-hover-line" to="/blog">
                Blog
              </Link>
              <Link className="navbar-item navbar-hover-line" to="/contact">
                Contact
              </Link>
              <div className="navbar-item has-dropdown is-hoverable">
              <Link className="navbar-link is-hoverable" to="/contact/examples">
                Verktygslådan
              </Link>
              <div className="navbar-dropdown is-boxed">
              <Link className="navbar-item is-flex-direction-column is-align-items-start" to="/start">
                <h3 className="is-size-5 is-uppercase mb-1">Rotor</h3>
                <p className="is-family-secondary">En ännu vassare expert</p>
              </Link>
              <Link className="navbar-item is-flex-direction-column is-align-items-start" to="/start">
                <h3 className="is-size-5 is-uppercase mb-1">Rotor</h3>
                <p className="is-family-secondary">Jobbar smartare</p>
              </Link>
              <Link className="navbar-item is-flex-direction-column is-align-items-start" to="/start">
                <h3 className="is-size-5 is-uppercase mb-1">Rotor</h3>
                <p className="is-family-secondary">En lite bättre digitalbyrå</p>
              </Link>
              </div>
              </div>
            </div>
            <div className="navbar-end has-text-centered">
            </div>
          </div>
        </div>
      </nav>
    );
  }
};

export default Navbar;