import React from "react";
import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Layout from "../components/Layout";
import RotorCTA from "../components/RotorCTA";
import StarDivider from "../components/Star-divider";
import Accordion from "../components/accordion";
import Linkify from "../components/LinkifyTools";
import SEO from "../components/SEO";
import RotorButton from "../components/RotorButton";
import RamisButton from "../components/RamisButton";


const MarketingAutomationTemplate = ({ path, title, meta, hero, challenge, goal, when, promise, what }) => {

  const goalImage = getImage(goal.image)
  const heroImage = getImage(hero.image)

  return (
    <div>
      <SEO title={title} description={meta.description} slug={path} />
      {/*hero section*/}
      <div style={{
        background: 'linear-gradient(45deg, rgba(0,126,132,1) 0%, rgba(239,185,215,1) 100%)',
      }}>
        <div className="hero-body container pb-6">
          <div className="columns is-desktop is-vcentered my-6 is-variable is-8">
            <div className="column is-half-desktop is-10-mobile is-offset-1-mobile">
              <div >
                <h1 className="has-text-white has-text-weight-bold has-tight-spacing is-size-4 is-size-5-mobile mb-4">{hero.headline}</h1>
              </div>
              <h2 className="has-text-white has-tight-height is-ultralarge is-size-1-mobile has-text-weight-bold is-uppercase ">{hero.subtext}</h2>
            </div>
            <div className="column is-half-tablet has-text-centered is-offset-one-quarter-tablet is-offset-0-desktop level-right">
              <GatsbyImage image={heroImage} loading="eager" />

            </div>
          </div>
          {/* optional CTA */}
          {hero.cta.option === true &&
            <div className="mb-6">
              <RotorCTA buttonText={hero.cta.buttonText} buttonLink="/products/" headline={hero.cta.headline} text={hero.cta.text} />
            </div>
          }








        </div>
      </div>


        {/* challenge section */}
        <div className="section">
        <div className="container hero-body">
          <div className="columns">
            <div className="column has-text-centered mt-6">
              <GatsbyImage image={goalImage} alt={challenge.imagealt} />
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
        <div className="container hero-body">
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
          <h3 className="is-size-5-tablet is-size-5-mobile has-text-white my-3" dangerouslySetInnerHTML={{__html: hero.cta.text}}></h3>
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
        when={frontmatter.when}
        promise={frontmatter.promise}
        what={frontmatter.what}

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
              gatsbyImageData(quality: 90, height:400)
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
        }
        goal {
          headline
          text
          imagealt
          image {
            childImageSharp {
              gatsbyImageData(quality: 50, width: 250)
            }
          }
        }
        when {
          texts {
            explanation
            text
          }
          headline
        }
        promise {
          headline
          text
        }
        what {
          headline
          text
        }
        title
      }
    }
  }
`
  ;