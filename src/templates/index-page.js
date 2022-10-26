import React from "react";
import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Layout from "../components/Layout";
import StarDivider from "../components/Star-divider";
import RotorBox from "../components/RotorBox"
import LogoGallery from "../components/LogoGallery";
import UpwindBack from "../img/upwind-back.svg"
import LargeCTA from "../components/LargeCTA";
import SEO from "../components/SEO";
import RotorButton from "../components/RotorButton";
import RamisSportLinks from "../components/RamisSportLinks";
import { Link } from "gatsby";
import RamisButton from "../components/RamisButton";




const IndexPageTemplate = ({ meta, title, hero, challenge, solution, who, model, customers }) => {

  const heroImage = getImage(hero.image)
  const headlineImage = getImage(hero.headlineimg)

  const challengeImage = getImage(challenge.image)
  const solutionImage1 = getImage(solution.image1)
  const solutionImage2 = getImage(solution.image2)
  const solutionImage3 = getImage(solution.image3)
  const whoImage1 = getImage(who.image1)
  const customerImage1 = getImage(customers.image1)
  const customerImage2 = getImage(customers.image2)
  const bossImage1 = getImage(customers.bossimage1)
  const bossImage2 = getImage(customers.bossimage2)



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


      {/*       <div style={{
        backgroundImage: `url(${HeroBack})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover',
      }}>
       
        <div className="hero-body container pb-6">
          <div className="columns is-desktop is-vcentered my-6">
            <div className="column is-half-desktop is-10-mobile is-offset-1-mobile">
              <div className="has-rainbow-parent">
              <GatsbyImage image={headlineImage} alt={hero.imagealt} />
              
              </div>
              <h3 className="has-text-white has-text-weight-bold has-tight-spacing is-size-4 is-size-5-mobile mb-4">{hero.subtext}</h3>
              <h3 className="has-text-white has-tight-spacing is-size-4 is-size-5-mobile"><i>{hero.subtext2}</i></h3>
            </div>
            <div className="column is-half-desktop has-text-centered level-right">
     

            </div>
          </div>
          <div className="mb-6">
          <RotorCTA buttonText={hero.cta.buttonText} buttonLink={hero.cta.buttonLink} headline={hero.cta.headline} text={hero.cta.text} />
          </div>



        </div>
      </div> */}


      {/*challenge section*/}
      <div className="container hero-body has-circle">

        <div className="columns">
          <div className="column is-7-desktop is-12-mobile">
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
        <div className="container hero-body">
          <div className="columns">
            <div className="column has-text-centered mt-6">
              <GatsbyImage image={solutionImage1} alt={challenge.imagealt} />
            </div>
            <div className="column is-7-desktop is-10-mobile">
              <h2 className="is-size-2 mb-4">{solution.headline1}</h2>
              <p dangerouslySetInnerHTML={{ __html: solution.text1 }}></p>
            </div>
          </div>
        </div>
    </div>

      {/*solution section2*/}
      <div className="section has-background-warning has-text-white">
        <div className="container hero-body">
          <div className="columns">
           
            <div className="column is-7-desktop is-10-mobile">
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
        model={frontmatter.model}
        customers={frontmatter.customers}
        who={frontmatter.who}

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
      who {
        headline1
        subtext1
        text1
        headline2
        text2
        imagealt1
        image1 {
          childImageSharp {
            gatsbyImageData(quality: 50, width: 650)
          }
        }
      }
      model {
        headline
        subtext
        image {
          childImageSharp {
            id
            gatsbyImageData(quality: 100, width: 800)
          }
        }
        ctatext
      }
      customers {
        customer1
        headline1
        text1
        name1
        bossimage1 {
          childImageSharp {
            id
            gatsbyImageData(quality: 100, width: 100)
          }
        }
        image1 {
          childImageSharp {
            id
            gatsbyImageData(quality: 100, width: 800)
          }
        }
        customer2
        headline2
        text2
        name2
        bossimage2 {
          childImageSharp {
            id
            gatsbyImageData(quality: 100, width: 100)
          }
        }
        image2 {
          childImageSharp {
            id
            gatsbyImageData(quality: 100, width: 800)
          }
        }
      }
      
    }
  }
}
`;