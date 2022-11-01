import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { useState } from "react"


const Faq = () => {
  const data = useStaticQuery(graphql`
    {
      allMarkdownRemark(filter: {frontmatter: {templateKey: {eq: "faq"}}}) {
        edges {
          node {
            id
            frontmatter {
              title
              templateKey
              faq {
                answer
                question
              }
            }
          }
        }
      }
    }
  `)
 
  const faqItems = data.allMarkdownRemark.edges[0].node.frontmatter.faq;
  const [activeId, setActiveId] = useState(null);

  const openClose = (index) => {
  
  activeId===index?setActiveId(null):setActiveId(index)
  }
  return (
  
  <div className="faq-container has-text-left">

<div>{faqItems.map((item, index) =>
   <div  className="faq-wrapper my-3 is-flex is-flex-direction-row" tabIndex="0" role="tablist" onClick={()=>openClose(index)} onKeyDown={()=>openClose(index)} id={`question-${index}`}>
    <div className={`question-${activeId}`===`question-${index}`?"minussign":"plussign triangle-right" } ></div>
   <div className="ml-3 has-text-weight-bold has-text-link is-uppercase pt-4 pb-3"> {item.question} 
   <div className={`question-${activeId}`===`question-${index}`?"faq-item-show mt-3 faq-item":"faq-item-hide" } dangerouslySetInnerHTML={{ __html: item.answer }}></div>
   </div>
   </div>
    )}
   
</div>

  </div>
  )
}

export default Faq