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
    <div style={{marginTop:"98px"}}>

      <SEO title={title} description={meta.description} slug="" />
      {/*hero section*/}

      <GatsbyImage style={{minHeight:"400px"}} image={heroImage} loading="eager" />
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
            <div className="column has-text-centered">
              <GatsbyImage image={solutionImage1} alt={challenge.imagealt} />
            </div>
            <div className="column is-7-desktop">
              <h2 className="is-size-2 mb-4" dangerouslySetInnerHTML={{ __html: solution.headline1 }}></h2>
              <p dangerouslySetInnerHTML={{ __html: solution.text1 }}></p>
              
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
            <div className="column has-text-centered">
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
            gatsbyImageData(quality: 50, width: 500)
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