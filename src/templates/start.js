import React from "react";
import { Link, graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Layout from "../components/Layout";
import RotorCTA from "../components/RotorCTA";

import RotorButton from "../components/RotorButton"

export const RotorStartTemplate = ({hero, challenge, model, customers}) => {
    
  const heroImage = getImage(hero.image)
  return (
  <div>  
  <div className="hero-body">
    <div className="columns">
      <div className="column is-half">
      <h1 className="is-size-2 is-size-3-mobile has-text-weight-bold mb-4">{hero.headline}</h1>
      <h4 className="has-tight-spacing is-size-4 is-size-5-mobile">{hero.subtext}</h4>
      </div>
      <div className="column is-half">
      <GatsbyImage image={heroImage} />
     
      </div>
    </div>
    <div>
    <RotorCTA buttonText="Klicka här" buttonLink="/products/" />
    </div>
    
   
   
    </div>  
    <div className="hero-body">
      <div className="columns is-mobile">
    
        <div className="column is-half-desktop is-two-thirds-tablet">
        
          <p dangerouslySetInnerHTML={{ __html: challenge.text }}></p>
        </div>

      </div>
    </div>
     

    </div>      
    )
}

const RotorStart = ({data}) => {
  const { frontmatter } = data.markdownRemark;

  return (
      <Layout>
          <RotorStartTemplate 
          hero = {frontmatter.hero}
          challenge = {frontmatter.challenge}
          model = {frontmatter.model}
          customers = {frontmatter.customers}

          />
      </Layout>
  )
}
export default RotorStart


export const RotorStartQuery = graphql`
query RotorStartTemplate {
  markdownRemark(frontmatter: {templateKey: {eq: "start"}}) {
    frontmatter {
      path
      hero {
        headline
        subtext
        image {
          childImageSharp {
            gatsbyImageData(quality: 50, width: 400)
          }
        }
        cta {
          text
          buttonText
          headline
        }
      }
      challenge {
        text
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
        headline
      }
    }
  }
}
`;