import React from "react";
import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { useRef } from "react";
import Layout from "../components/Layout";
import SEO from "../components/SEO";
import Faq from "../components/Faq";




const InfoPageTemplate = ({ meta, title, hero, challenge, vanligafragor, solution, rules }) => {

  const heroImage = getImage(hero.image)


  const challengeImage = getImage(challenge.image)
  const solutionImage1 = getImage(solution.image1)
  const solutionImage2 = getImage(solution.image2)
  const solutionImage3 = getImage(solution.image3)
  
  const boendeAnchor = useRef(null);
  const utrustningAnchor = useRef(null);
  const faqAnchor = useRef(null)
  const reglerAnchor = useRef(null)

  const scrollIntoViewWithOffset = (selector, offset) => {
    window.scrollTo({
      behavior: 'smooth',
      top:
        selector.current?.getBoundingClientRect().top -
        document.body.getBoundingClientRect().top -
        offset,
    })
  }
  
  const handleClickRef = (currentAnchor) => {
  scrollIntoViewWithOffset(currentAnchor, 95)
  };

  return (
    <div>

      <SEO title={title} description={meta.description} slug="" />
      {/*hero section*/}

      <div className="has-background-info" style={{marginTop:"115px"}}>

          <div className="is-flex is-flex-wrap-wrap is-justify-content-center">
            <div className="">
              <GatsbyImage image={heroImage} alt={hero.imagealt} />
            </div>
            <div className="is-offset-1-mobile has-text-white mt-4 mx-5 has-text-centered">
              <h1 className="is-size-2 mb-4 has-text-link is-uppercase"dangerouslySetInnerHTML={{ __html: hero.headline }}></h1>
              <p className="has-text-weight-bold" dangerouslySetInnerHTML={{ __html: hero.subtext }}></p>
              <div className="container is-flex is-flex-direction-column mt-4">
                <button className="button is-link mb-3 has-text-black is-uppercase has-text-weight-bold" onClick={()=>handleClickRef(boendeAnchor)}>Boende & Resa hit</button>
                <button className="button is-link mb-3 has-text-black is-uppercase has-text-weight-bold" onClick={()=>handleClickRef(utrustningAnchor)}>Utrustning</button>
                <button className="button is-link mb-3 has-text-black is-uppercase has-text-weight-bold" onClick={()=>handleClickRef(faqAnchor)}>Vanliga frågor</button>
                <button className="button is-link mb-3 has-text-black is-uppercase has-text-weight-bold" onClick={()=>handleClickRef(reglerAnchor)}>Tävlingsregler</button>
              </div>
            </div>
            
          </div>
          
    </div>
    
    {/*solution section boende&resa*/}

    <div ref={boendeAnchor} ></div>


    <div className="section has-text-white mt-6">
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





    <div className="section has-text-white mb-6">
        <div className="container">
          <div className="columns is-variable is-8-desktop">
           
            <div className="column is-7-desktop">
              <h2 className="is-size-2 mb-4" dangerouslySetInnerHTML={{ __html: solution.headline2 }}></h2>
              <p dangerouslySetInnerHTML={{ __html: solution.text2 }}></p>
             
            </div>
            <div className="column has-text-centered">
              <GatsbyImage image={solutionImage2} alt={challenge.imagealt} />
            </div>
          </div>
        </div>
      </div>


      


      {/*challenge section utrustning accordion section*/}
      <div ref={utrustningAnchor} ></div>
     <div className="section has-background-warning">
       <div className="container">
      
         <div className="columns">
           <div className="column is-8-tablet is-offset-2-tablet is-12-mobile has-text-centered">
           
             <h2 className="is-size-2 mb-4" dangerouslySetInnerHTML={{ __html: challenge.headline }}></h2>
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
      
                <div className="list-container" dangerouslySetInnerHTML={{ __html: rules.text }}></div>
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
        subtext
        subtext2
        imagealt
        image {
          childImageSharp {
            gatsbyImageData(quality: 100, height:500, layout: CONSTRAINED, transformOptions: { fit: COVER, cropFocus: ENTROPY })
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
            gatsbyImageData(quality: 50, width:500)
          }
        }
        imagealt2
        image2 {
          childImageSharp {
            gatsbyImageData(quality: 50, width: 500)
          }
        }
        text2
        
 

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
     
      
    }
  }
}
`;