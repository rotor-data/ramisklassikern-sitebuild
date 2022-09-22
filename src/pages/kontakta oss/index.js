import * as React from "react";
import { navigate } from "gatsby-link";
import Layout from "../../components/Layout";


function encode(data) {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
}

export default class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isValidated: false };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": form.getAttribute("name"),
        ...this.state,
      }),
    })
      .then(() => navigate(form.getAttribute("action")))
      .catch((error) => alert(error));
  };



  render() {
  

    return (
      <Layout>
        <section className="section">

          <div className="container mt-3">
          <div className="has-text-centered">
                 <h1 className="is-size-2">Kontakta oss här</h1>
               </div>
              <div className="columns">
                <form
                  name="contact"
                  method="post"
                  action="/kontakta oss/tack/"
                  data-netlify="true"
                  data-netlify-honeypot="bot-field"
                  onSubmit={this.handleSubmit}
                  className="column is-8-tablet is-offset-2-tablet"
                >
                  {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
                  <input type="hidden" name="form-name" value="contact" />
                  <div hidden>
                    <label>
                      Don’t fill this out:{" "}
                      <input name="bot-field" onChange={this.handleChange} />
                    </label>
                  </div>
                  <div className="field">
                    <label className="label" htmlFor={"name"}>
                      Namn
                    </label>
                    <div className="control">
                      <input
                        className="input"
                        type={"text"}
                        name={"name"}
                        onChange={this.handleChange}
                        id={"name"}
                        required={true}
                      />
                    </div>
                  </div>
                  <div className="field">
                    <label className="label" htmlFor={"email"}>
                      E-postadress
                    </label>
                    <div className="control">
                      <input
                        className="input"
                        type={"email"}
                        name={"email"}
                        onChange={this.handleChange}
                        id={"email"}
                        required={true}
                      />
                    </div>
                  </div>
                  <div className="field">
                    <label className="label" htmlFor={"message"}>
                      Skriv ett meddelande
                    </label>
                    <div className="control">
                      <textarea
                        className="textarea"
                        name={"message"}
                        onChange={this.handleChange}
                        id={"message"}
                        required={true}
                      />
                    </div>
                  </div>
                  <div className="field has-text-centered">
                    <button className="button is-link" type="submit">
                      Skicka
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <div className="container has-text-centered mt-6">
               <div>
                 <h2 className="is-size-3 is-family-secondary mb-3">Hitta till oss</h2>
               </div>
               <img src='/img/karta rotor st eriksgatan 72.png'></img>
               <p>Rotor</p>
               <p>S:t Eriksgatan 72</p>
               <p>121 30 Stockholm</p>
               <p>Tunnelbana: S:t Eriksplan</p>
        
               <div className="my-3">
                 <a href="https://www.google.com/maps/@59.3384965,18.0370273,19.35z">Här hittar du oss på Google maps</a>
               </div>
                 <div>
                   <a href="https://maps.apple.com/?address=Sankt%20Eriksgatan%2072,%20113%2020%20Stockholm,%20Sverige&ll=59.338647,18.036162&q=Sankt%20Eriksgatan%2072&_ext=EiYpFEmqlsWqTUAx61HLtgAHMkA5kh7Q8uurTUBBVWCkJoMLMkBQBA%3D%3D">Här hittar du oss i Apple kartor</a>
                 </div>
        
              
                 </div>
        </section>
      </Layout>
    );
  }
}
