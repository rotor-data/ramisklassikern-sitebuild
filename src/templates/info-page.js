import React from "react";
import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { useRef } from "react";
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
import Faq from "../components/Faq";




const InfoPageTemplate = ({ meta, title, hero, challenge, vanligafragor, solution, rules, who, model, customers }) => {

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

  const boendeAnchor = useRef(null);
  const utrustningAnchor = useRef(null);
  const faqAnchor = useRef(null)
  const reglerAnchor = useRef(null)
  const handleClickRef = (currentAnchor) => {
  currentAnchor.current?.scrollIntoView({behavior: 'smooth', inline:'nearest'});
  };

  return (
    <div>

      <SEO title={title} description={meta.description} slug="" />
      {/*hero section*/}

      <div className="has-background-info" style={{marginTop:"115px"}}>

          <div className="columns is-variable is-8">
            <div className="column is-7 has-text-centered">
              <GatsbyImage image={heroImage} alt={hero.imagealt} />
            </div>
            <div className="column is-4-desktop is-10-mobile is-offset-1-mobile has-text-white">
              <h1 className="is-size-2 mb-4 has-text-link is-uppercase"dangerouslySetInnerHTML={{ __html: hero.headline }}></h1>
              <p className="has-text-weight-bold" dangerouslySetInnerHTML={{ __html: hero.subtext }}></p>
              <div className="container is-flex is-flex-direction-column">
                <button className="button is-link mb-3" onClick={()=>handleClickRef(boendeAnchor)}></button>
                <button className="button is-link mb-3" onClick={()=>handleClickRef(utrustningAnchor)}></button>
                <button className="button is-link mb-3" onClick={()=>handleClickRef(faqAnchor)}></button>
                <button className="button is-link mb-3" onClick={()=>handleClickRef(reglerAnchor)}></button>
              </div>
            </div>
            
          </div>
          
    </div>
    
    {/*solution section boende&resa*/}

    <div ref={boendeAnchor} ></div>


        <div className="container is-fluid mt-6">
          <div className="columns is-variable is-8">
            <div className="column">
              <GatsbyImage image={solutionImage1} alt={challenge.imagealt} />
            </div>
            <div className="column is-7-desktop">
              <h2 className="is-size-2 mb-4">{solution.headline1}</h2>
              <p dangerouslySetInnerHTML={{ __html: solution.text1 }}></p>
            </div>
          </div>
        </div>

  
        <div className="container is-fluid my-6">
          <div className="columns is-variable is-8 is-mobile is-flex-wrap-wrap-reverse">
            
            <div className="column is-7-desktop is-12-mobile">
              <h2 className="is-size-2 mb-4">{solution.headline2}</h2>
              <p dangerouslySetInnerHTML={{ __html: solution.text2 }}></p>
            </div>
            <div className="column">
              <GatsbyImage image={solutionImage1} alt={challenge.imagealt} />
            </div>
          </div>
        </div>


      


      {/*challenge section utrustning accordion section*/}
      <div ref={utrustningAnchor} ></div>
     <div className="section has-background-warning">
       <div className="container">
      
         <div className="columns">
           <div className="column is-8-tablet is-offset-2-tablet is-12-mobile has-text-centered">
           
             <h2 className="is-size-2 mb-4">{challenge.headline}</h2>
             <GatsbyImage image={challengeImage} alt={challenge.imagealt} />
             <p className="has-text-white p-3" dangerouslySetInnerHTML={{ __html: challenge.text }}></p>
             <Faq/>
           </div>
           
         </div>
         
       </div>
     </div>

     {/*vanligafragor section*/}
     <div ref={faqAnchor} ></div>
     <div className="section has-background-primary">
       <div className="container">
      
         <div className="columns">
           <div className="column is-8-tablet is-offset-2-tablet is-11-mobile is-offset-1-mobile">
           
             <h2 className="is-size-2 mb-4">{vanligafragor.headline}</h2>
             {vanligafragor.questions.map( q => 
             
              <div>
                <h3 className="has-text-white mb-2">{q.question}</h3>
                <p className="has-text-white mb-4" dangerouslySetInnerHTML={{ __html: q.answer }}></p>
              </div>
            
              
              )}


           </div>
           
         </div>
         
       </div>
     </div>



      


      {/*rules section */}
      <div ref={reglerAnchor} ></div>
    <div className="section has-background-warning has-text-white">
        <div className="container is-fluid my-6">
            <div className="columns is-variable is-8 is-mobile is-flex-wrap-wrap-reverse">
              
              <div className="column is-8-desktop is-offset-2-desktop is-12-mobile framedbox">
                
                  <h2 className="is-size-2 mb-4" dangerouslySetInnerHTML={{ __html: rules.headline }}></h2>
      
                <p className="list-container" dangerouslySetInnerHTML={{ __html: rules.text }}></p>
              </div>
             
            </div>
          </div>
    </div>
  

    </div>
  )
}



const InfoPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <InfoPageTemplate
        meta={frontmatter.meta}
        title={frontmatter.title}
        hero={frontmatter.hero}
        challenge={frontmatter.challenge}
        vanligafragor={frontmatter.vanligafragor}
        solution={frontmatter.solution}
        rules={frontmatter.rules}
        model={frontmatter.model}
        customers={frontmatter.customers}
        who={frontmatter.who}

      />
    </Layout>
  )
}
export default InfoPage


export const IndexPageQuery = graphql`
query InfoPageTemplate {
  markdownRemark(frontmatter: {templateKey: {eq: "info-page"}}) {
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
            gatsbyImageData(quality: 100, width: 1000, layout: FULL_WIDTH, transformOptions: { fit: OUTSIDE, cropFocus: ENTROPY })
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
            gatsbyImageData(quality: 50, width:500, aspectRatio:1.3, transformOptions: { fit: COVER,  cropFocus: CENTER })
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
      vanligafragor {
        headline
        questions {
          question
          answer
        }
      }

      rules {
        headline
        text
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