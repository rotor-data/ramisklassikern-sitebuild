import React from "react";
import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import Layout from "../components/Layout";
import SEO from "../components/SEO";
import ApsisFormEmbed from "../components/ApsisFormEmbed";




const ShopPageTemplate = ({ meta, title, hero}) => {

  const heroImage = getImage(hero.image)


 



  return (
    <div className="has-background-warning" style={{marginTop:"98px"}}>

      <SEO title={title} description={meta.description} slug="" />
      

      {/*form and text section*/}
   <div className="section pb-6">
       <div className="">
    
         <div className="columns is-variable is-8-desktop">
           <div className="column is-4-desktop is-offset-1-desktop is-offset-1-tablet">
             <h1 className="is-size-2 mb-4">{hero.headline}</h1>
             <p className="has-text-white mb-4" dangerouslySetInnerHTML={{ __html: hero.subtext }}></p>
       
     
           </div>
           <div className="column">
           <GatsbyImage image={heroImage} alt={hero.imagealt} />
       </div>
          
       
    
         </div>
       
       </div>
       
   </div>
   
    

      



  

    </div>
  )
}



const ShopPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <ShopPageTemplate
        meta={frontmatter.meta}
        title={frontmatter.title}
        hero={frontmatter.hero}
   

      />
    </Layout>
  )
}
export default ShopPage


export const ShopPageQuery = graphql`
query RotorStartTemplate {
  markdownRemark(frontmatter: {templateKey: {eq: "shop-page"}}) {
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
            gatsbyImageData(quality: 100, width: 500, layout: CONSTRAINED, transformOptions: { fit: OUTSIDE, cropFocus: ENTROPY })
          }
        }
        imagealt

      }

      
      
    }
  }
}
`;