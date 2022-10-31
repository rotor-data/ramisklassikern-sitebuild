import React from "react";
import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Layout from "../components/Layout";
import SEO from "../components/SEO";
import RamisButton from "../components/RamisButton";


const MarketingAutomationTemplate = ({ path, title, meta, hero, challenge, goal }) => {

  const goalImage = getImage(goal.image)
  const challengeImage = getImage(challenge.image)
  const heroImage = getImage(hero.image)

  return (
    <div style={{marginTop:"98px"}}>
      <SEO title={title} description={meta.description} slug={path} />
      {/*hero section*/}

      <GatsbyImage style={{minHeight:"400px"}} image={heroImage} loading="eager" />
      

        {/* challenge section */}
        <div className="section has-text-white">
        <div className="container">
          <div className="columns is-variable is-8-desktop">
            <div className="column has-text-centered mt-6">
              <GatsbyImage image={challengeImage} alt={challenge.imagealt} />
            </div>
            <div className="column is-7-desktop is-12-mobile">
              <h2 className="is-size-2 mb-4">{challenge.headline}</h2>
              <p dangerouslySetInnerHTML={{ __html: challenge.text1 }}></p>
              <p class="has-yellow-border has-yellow-star" dangerouslySetInnerHTML={{ __html: challenge.text2 }}></p>
              <p dangerouslySetInnerHTML={{ __html: challenge.text3 }}></p>
            </div>
          </div>
        </div>
    </div>
 

        {/* goal section (Ramis maps) */}

        <div className="section has-background-warning">
        <div className="container">
          <div className="columns">
            <div className="column has-text-centered mb-4">
            <h2 className="is-size-2 mb-4">{goal.headline}</h2>
              <GatsbyImage image={goalImage} alt={challenge.imagealt} />
            </div>
           
          </div>
        </div>
    </div>
 


      {/* when section inactive */}

      {/* promise section inactive */}






 {/* cta section registrera */}
      <div className="columns hero-body has-background-info">
        <div className="column is-8-desktop is-offset-2-desktop is-10-tablet is-offset-1-tablet pb-6 has-text-centered">
          <p className="is-size-5-tablet is-size-5-mobile has-text-white my-3" dangerouslySetInnerHTML={{__html: hero.cta.text}}></p>
          {console.log (hero.cta.buttonLink)}
          <a class="button is-link has-text-weight-bold is-uppercase" href={`mailto:${hero.cta.buttonLink}?subject=Jag har genomfört grenen ${title}&body=Jag bifogar här bildbevis i form av ett foto eller skärmdump av sportklocka eller aktivitetsapp. Jag bifogar också en bild på mig själv efter genomförd gren.`}>{hero.cta.buttonText}</a>
        </div>
      </div>

      {/* what section inactive */}
 
    </div>
  )

}

const MarketingAutomation = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <MarketingAutomationTemplate
        path={frontmatter.path}
        title={frontmatter.title}
        meta={frontmatter.meta}
        hero={frontmatter.hero}
        challenge={frontmatter.challenge}
        goal={frontmatter.goal}


      />
    </Layout>
  )
}
export default MarketingAutomation

export const MarketingAutomationQuery = graphql`
  query MarketingAutomationTemplate($id: String!) {
    markdownRemark(id: { eq: $id } ) {
      frontmatter {
        path
        title
        meta {
          description
        }
        hero {
          headline
          subtext
          image {
            childImageSharp {
              gatsbyImageData(quality: 100, width: 1920, layout: CONSTRAINED, transformOptions: { fit: COVER,  cropFocus: EAST })
            }
          }
          cta {
            option
            text
            buttonText
            buttonLink
            headline
          }
        }
        challenge {
          headline
          text1
          text2
          text3
          image {
            childImageSharp {
              gatsbyImageData(quality: 100, width: 500)
            }
          }
        }
        goal {
          headline
          text
          imagealt
          image {
            childImageSharp {
              gatsbyImageData(quality: 100, width: 500)
            }
          }
        }
        
        title
      }
    }
  }
`
  ;