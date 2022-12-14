import React from "react";
import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import Layout from "../components/Layout";
import SEO from "../components/SEO";
import ApsisFormEmbed from "../components/ApsisFormEmbed";




const ContactPageTemplate = ({ meta, title, hero}) => {

  const heroImage = getImage(hero.image)


 



  return (
    <div className="mt-6" style={{marginTop:"98px"}}>

      <SEO title={title} description={meta.description} slug="" />
      

      {/*form and text section*/}
   <div className="section has-background-warning">
       <div className="container has-circle py-6">
    
         <div className="columns is-variable is-8-desktop py-3">
           <div className="column is-4-desktop is-offset-1-desktop is-10-mobile is-offset-1-mobile is-offset-1-tablet">
             <h1 className="is-size-3 mb-4" dangerouslySetInnerHTML={{ __html: hero.headline }}></h1>
             <p className="has-text-white is-uppercase mb-4" dangerouslySetInnerHTML={{ __html: hero.subtext }}></p>
             <p className="has-text-white mb-4" dangerouslySetInnerHTML={{ __html: hero.subtext2 }}></p>
             <a class="button is-link has-text-weight-bold is-uppercase" href='mailto:ramisklassikern@ramundberget.se'>Kontakta oss</a>
           </div>
          
           <div className="column is-8-desktop">
          
       </div>
       
    
         </div>
         {/* <GatsbyImage image={heroImage} alt={hero.imagealt} /> */}
       </div>
       
   </div>
   
    

      



  

    </div>
  )
}



const ContactPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <ContactPageTemplate
        meta={frontmatter.meta}
        title={frontmatter.title}
        hero={frontmatter.hero}
       

      />
    </Layout>
  )
}
export default ContactPage


export const ContactPageQuery = graphql`
query RotorStartTemplate {
  markdownRemark(frontmatter: {templateKey: {eq: "contact-page"}}) {
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
        image {
          childImageSharp {
            gatsbyImageData(quality: 100, width: 1920, layout: FULL_WIDTH, transformOptions: { fit: OUTSIDE, cropFocus: ENTROPY })
          }
        }
        imagealt

      }

      
      
    }
  }
}
`;