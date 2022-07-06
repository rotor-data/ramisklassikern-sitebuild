import React from "react"
import { Link } from "gatsby"
import { StaticQuery, graphql } from "gatsby"

const MenuItems = () => (
  <StaticQuery
    query={graphql`
      {
        allMarkdownRemark(
          limit: 1000
          filter: {frontmatter: {templateKey: {eq: "tools"}}}
        ) {
          edges {
            node {
              frontmatter {
                path
                title
                subtitle
              }
            }
          }
        }
      }
    `}
    
    render={data =>  
        
    <div className="navbar-start">
      {/* <pre>{JSON.stringify(data.allMarkdownRemark.edges[0].node.frontmatter.title, null, 4)}</pre> */}
    <Link className="navbar-item navbar-hover-line" to="/about">
      Om oss
    </Link>
    
    <Link className="navbar-item navbar-hover-line" to="/contact">
      Kontakt
    </Link>
   <div className="navbar-item has-dropdown is-hoverable">
    <Link className="navbar-link is-hoverable" to="/contact/examples">
      Verktygslådan
    </Link>
    <div className="navbar-dropdown is-boxed">
    {data.allMarkdownRemark.edges.map ((tool) => 

      <Link className="navbar-item is-flex-direction-column is-align-items-start" to={tool.node.frontmatter.path}>
     <h3 className="is-size-5 is-uppercase mb-1">{tool.node.frontmatter.title} </h3>
      <p className="is-family-secondary" >{tool.node.frontmatter.subtitle}</p>
    </Link>

    )}
   
  </div>
  </div> 
  </div>
  }
  ></StaticQuery>
)

export default MenuItems

