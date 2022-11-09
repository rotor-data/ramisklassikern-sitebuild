import React from "react";
import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import Layout from "../components/Layout";
import SEO from "../components/SEO";
import { Link } from "gatsby";
import ApsisFormEmbed from "../components/ApsisFormEmbed";




const AnmalanPageTemplate = ({ meta, title, hero, rules }) => {

  const heroImage = getImage(hero.image)


 



  return (
    <div style={{marginTop:"98px"}}>

      <SEO title={title} description={meta.description} slug="" />
      

      {/*form and text section*/}
   <div className="has-background-warning">
       <div className="container py-6">
    
         <div className="columns is-variable is-8-desktop">
           <div className="column section is-4-desktop is-offset-1-desktop is-10-mobile is-offset-1-mobile is-offset-1-tablet">
             <h2 className="is-size-2 mb-4" dangerouslySetInnerHTML={{ __html: hero.headline }}></h2>
             <p className="has-text-white is-uppercase mb-4" dangerouslySetInnerHTML={{ __html: hero.subtext }}></p>
             <p className="has-text-white mb-4" dangerouslySetInnerHTML={{ __html: hero.subtext2 }}></p>
     
           </div>
          
           <div className="column is-8-desktop">
        <ApsisFormEmbed url="https://form.apsis.one/qgJh68vvTwH9A" />
       </div>
       
    
         </div>
       </div>
   </div>
   <div className="has-background-warning has-text-white pb-6">
        <div className="container is-fluid">
            <div className="columns is-variable is-8 is-mobile is-flex-wrap-wrap-reverse">
              
              <div className="column is-8-desktop is-offset-2-desktop is-10-mobile is-offset-1-mobile is-10-tablet is-offset-1-tablet framedbox">
                
                  <h2 className="is-size-2 mb-4" dangerouslySetInnerHTML={{ __html: rules.headline }}></h2>
      
                <div className="list-container" dangerouslySetInnerHTML={{ __html: rules.text }}></div>
              </div>
             
            </div>
          </div>
    </div>
      
      

      



  

    </div>
  )
}



const AnmalanPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <AnmalanPageTemplate
        meta={frontmatter.meta}
        title={frontmatter.title}
        hero={frontmatter.hero}
        rules={frontmatter.rules}
        challenge={frontmatter.challenge}
        solution={frontmatter.solution}
        model={frontmatter.model}
        customers={frontmatter.customers}
        who={frontmatter.who}

      />
    </Layout>
  )
}
export default AnmalanPage


export const AnmalanPageQuery = graphql`
query RotorStartTemplate {
  markdownRemark(frontmatter: {templateKey: {eq: "anmalan-page"}}) {
    frontmatter {
      title
      path
      meta {
        description
      }
      hero {
        headline
        subtext
        subtext2
        imagealt

      }
      rules {
        headline
        text
      }
      
      
    }
  }
}
`;