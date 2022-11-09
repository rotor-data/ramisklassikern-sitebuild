import React from "react";
import { graphql } from "gatsby";
import { GatsbyImage, getImage, withArtDirection } from "gatsby-plugin-image"
import Layout from "../components/Layout";
import SEO from "../components/SEO";
import RamisButton from "../components/RamisButton";


const MarketingAutomationTemplate = ({ path, title, meta, hero, challenge, goal }) => {

  const goalImage = getImage(goal.image)
  const challengeImage = getImage(challenge.image)
  // const heroImage = getImage(hero.image)

  const heroImage = withArtDirection(getImage(hero.image), [
    {
      media: "(max-width: 1024px)",
      image: getImage(hero.imagesmall)
    }
  ])

  return (
    <div style={{marginTop:"98px"}}>
      <SEO title={title} description={meta.description} slug={path} />
      {/*hero section*/}

      <GatsbyImage style={{minHeight:"400px"}} image={heroImage} loading="eager" />
      

        {/* challenge section */}
  

    <div className="section has-background-primary has-text-white">
       <div className="container">
      
         <div className="columns">
           <div className="column is-8-tablet is-offset-2-tablet is-12-mobile">
           
             <h2 className="is-size-2 mb-4" dangerouslySetInnerHTML={{ __html: challenge.headline }}></h2>
           
             
              <div>
          
                <p className="has-text-white mb-4" dangerouslySetInnerHTML={{ __html: challenge.text1 }}></p>
                <p class="has-yellow-border has-yellow-star" dangerouslySetInnerHTML={{ __html: challenge.text2 }}></p>
                <p dangerouslySetInnerHTML={{ __html: challenge.text3 }}></p>
              </div>
            
            


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
        <div className="column is-8-desktop is-offset-2-desktop is-10-tablet is-offset-1-tablet has-text-centered">
          <p className="is-size-5-tablet is-size-5-mobile has-text-white my-3" dangerouslySetInnerHTML={{__html: hero.cta.text}}></p>
          <a class="button is-link has-text-weight-bold is-uppercase" href={`mailto:${hero.cta.buttonLink}?subject=Jag har genomfört grenen ${title}&body=Hej! Jag bifogar här bildbevis i form av ett foto eller skärmdump på min sportklocka eller aktivitetsapp. Min tid för grenen var: (fyll i om du vill, helt valfritt)`}>{hero.cta.buttonText}</a>
          <p className="is-size-6-tablet is-size-6-mobile has-text-white my-3 is-italic mb-4" dangerouslySetInnerHTML={{__html: hero.cta.text2}}></p>
          
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
          imagesmall {
            childImageSharp {
              gatsbyImageData(quality: 100, width: 1920, layout: CONSTRAINED, transformOptions: { fit: COVER,  cropFocus: EAST })
            }
          }
          
          cta {
            option
            text
            text2
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