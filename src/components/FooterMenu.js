import React from "react"
import { Link } from "gatsby"
import { StaticQuery, graphql } from "gatsby"

const FooterMenu = () => (
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
      <ul className="menu-list">
      <li>
                      <Link to="/">
                        Startsidan
                      </Link>
                    </li>
      <li>
                    <Link style={{pointerEvents:"none"}} to="/grenar" onClick={(e)=> e.preventDefault()}>
                        grenar
                      </Link>
                    </li>
                   
                    <ul>
                     
                    {data.allMarkdownRemark.edges.map ((tool) => 
                    <li>

                 <Link to={tool.node.frontmatter.path}>
                 {tool.node.frontmatter.title}
                 </Link>
                 </li>
                  )}
                    </ul>
                    <li>
                      <Link to="/bra-att-veta">
                        Bra att veta
                      </Link>
                    </li>
                    <li>
                      <Link to="/anders-inspirerar/hang-med-nar-anders-genomfor-ramisklassikern/">
                        Anders inspirerar
                      </Link>
                    </li>
                    {/* <li>
                      <Link to="/shop">
                        Shop
                      </Link>
                    </li> */}
                    <li>
                      <Link to="/kontakta oss">
                        Kontakta oss
                      </Link>
                    </li>
                    <li>
                      <Link to="/gdpr">
                        GDPR
                      </Link>
                    </li>
                    
                  </ul>
   

   
  
  </div> 

  }
  ></StaticQuery>
)

export default FooterMenu

