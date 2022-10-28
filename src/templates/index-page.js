import React from "react";
import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { useState } from "react";
import Layout from "../components/Layout";
import SEO from "../components/SEO";
import RamisSportLinks from "../components/RamisSportLinks";
import { Link } from "gatsby";
import RamisButton from "../components/RamisButton";
import ApsisFormEmbed from "../components/ApsisFormEmbed";
import SimpleModal from "../components/SimpleModal";



const IndexPageTemplate = ({ meta, title, hero, challenge, solution }) => {

  const heroImage = getImage(hero.image)
  const headlineImage = getImage(hero.headlineimg)

  const challengeImage = getImage(challenge.image)
  const solutionImage1 = getImage(solution.image1)
  const solutionImage2 = getImage(solution.image2)
  const solutionImage3 = getImage(solution.image3)


  const [show, setShow] = useState(false);

  return (
    <div>

      <SEO title={title} description={meta.description} slug="" />
      {/*hero section*/}

      <div style={{ display: "grid", position: "relative", height: '550px' }}>
        <GatsbyImage image={heroImage} loading="eager" alt={hero.imagealt} style={{
          gridArea: "1/1",

          // You can set a maximum height for the image, if you wish.
          // maxHeight: 600,
        }} />
        <div
          style={{
            // By using the same grid area for both, they are stacked on top of each other
            gridArea: "1/1",
            position: "absolute",
            width: "100%",
            left: "0%",
            top: "10%",
            // This centers the other elements inside the hero component
            placeItems: "center",
            display: "grid",
          }}
        >
          {/* Any content here will be centered in the component */}

          <div className="mt-1 has-text-white mx-auto has-text-centered has-text-weight-bold has-tight-spacing is-size-3 is-size-5-mobile p-3">
            <h1 className="has-text-white has-text-weight-bold has-tight-spacing is-size-4 is-size-5-mobile">Rotor Digitalbyrå</h1>

            <div>
              <GatsbyImage image={headlineImage} alt={hero.imagealt} />

              {/*<h2 className="has-rainbow is-ultralarge is-size-1-mobile has-text-weight-bold mb-4 has-tight-height">{hero.headline}</h2>*/}
            </div>
            <h3 className="column is-6-desktop is-offset-3-desktop has-text-white has-text-weight-bold has-tight-spacing is-size-4 is-size-5-mobile my-3">{hero.subtext}</h3>
            {/* <h3 className="column is-6-desktop is-offset-3-desktop has-text-white has-tight-spacing is-size-5 is-size-6-mobile"><i>{hero.subtext2}</i></h3> */}

          </div>
          {hero.text}
        </div>
      </div>

      {/*challenge section*/}
      <div className="container is-fluid has-circle my-6">

        <div className="columns is-variable is-8-desktop">
          <div className="column is-7-desktop is-offset-1-desktop is-11-mobile is-offset-1-mobile">
            <h2 className="is-size-2 mb-4">{challenge.headline}</h2>
            <p className="has-text-white" dangerouslySetInnerHTML={{ __html: challenge.text }}></p>
           
          </div>
          <div className="column has-text-centered mt-6">

          </div>

        </div>
      </div>

      {/*Internal links till grensidor*/}
      <div className="section has-background-warning">
        <RamisSportLinks />
      </div>
      {/*solution section1  Varför Ramisklassikern*/}
   
    <div className="section">
        <div className="container">
          <div className="columns is-variable is-8-desktop">
            <div className="column has-text-centered mt-6">
              <GatsbyImage image={solutionImage1} alt={challenge.imagealt} />
            </div>
            <div className="column is-7-desktop">
              <h2 className="is-size-2 mb-4" dangerouslySetInnerHTML={{ __html: solution.headline1 }}></h2>
              <p dangerouslySetInnerHTML={{ __html: solution.text1 }}></p>
              <button className="simplebutton is-size-5" type="button" onClick={() => setShow(true)}>
        Klicka
      </button>
            </div>
          </div>
        </div>
    </div>

      {/*solution section2*/}
      <div className="section has-background-warning has-text-white">
        <div className="container">
          <div className="columns is-variable is-8-desktop">
           
            <div className="column is-7-desktop">
              <h2 className="is-size-2 mb-4">{solution.headline2}</h2>
              <p dangerouslySetInnerHTML={{ __html: solution.text2 }}></p>
              <div className="mt-4">
                <RamisButton buttonText="Anmäl dig här" buttonLink="/anmalan"/>
              </div>
            </div>
            <div className="column has-text-centered mt-6">
              <GatsbyImage image={solutionImage1} alt={challenge.imagealt} />
            </div>
          </div>
        </div>
      </div>


      {/*who section not active*/}

  

    </div>
  )
}


const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <IndexPageTemplate
        meta={frontmatter.meta}
        title={frontmatter.title}
        hero={frontmatter.hero}
        challenge={frontmatter.challenge}
        solution={frontmatter.solution}

      />
    </Layout>
  )
}
export default IndexPage


export const IndexPageQuery = graphql`
query RotorStartTemplate {
  markdownRemark(frontmatter: {templateKey: {eq: "index-page"}}) {
    frontmatter {
      title
      path
      meta {
        description
      }
      hero {
        headline
        headlineimg {
          childImageSharp {
            gatsbyImageData(quality: 100, width: 730)
          }
        }
        subtext
        subtext2
        imagealt
        image {
          childImageSharp {
            gatsbyImageData(quality: 100, width: 1920, layout: FULL_WIDTH, transformOptions: { fit: OUTSIDE, cropFocus: ENTROPY })
          }
        }
        cta {
          text
          buttonText
          buttonLink
          headline
        }
      }
      challenge {
        headline
        text
        imagealt
        image {
          childImageSharp {
            gatsbyImageData(quality: 50, width: 250)
          }
        }
      }
      solution {
        headline1
        headline2
        text1
        imagealt1
        image1 {
          childImageSharp {
            gatsbyImageData(quality: 50, width: 200)
          }
        }
        imagealt2
        image2 {
          childImageSharp {
            gatsbyImageData(quality: 50, width: 200)
          }
        }
        text2
        imagealt3
        image3 {
          childImageSharp {
            gatsbyImageData(quality: 100, width: 400)
          }
        }
 

      }
      
      
    }
  }
}
`;