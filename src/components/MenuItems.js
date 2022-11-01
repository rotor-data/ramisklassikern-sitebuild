import React from "react"
import { Link } from "gatsby"
import { StaticQuery, graphql } from "gatsby"
import { useState} from "react"



const MenuItems = ({mobile}) => {


  const [subActive, setSubActive] = useState(false);
  const handleClick = (e) => {
  e.preventDefault();
  setSubActive(!subActive);

 
  };


  return (

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
    
    <div className="navbar-item has-dropdown is-hoverable">
    <div className="navbar-link is-hoverable"
    role="menubar"
    onClick={handleClick}
    onKeyPress ={handleClick}
    tabIndex="0"
    >
      Grenarna
    </div>
    
    <div
    
    className={`
    navbar-dropdown is-boxed has-background-primary
    ${subActive && mobile === 'is-active'?'submenu-active':''}
    ${!subActive && mobile === 'is-active'?'submenu':''}
    `} 
    >
    
  
  
    {data.allMarkdownRemark.edges.map ((tool,i) => 
      <Link className="navbar-item is-flex-direction-column is-align-items-start" to={tool.node.frontmatter.path}>
     <h3 className="is-size-6-desktop is-size-6-mobile is-uppercase mb-1">{tool.node.frontmatter.title} </h3>
      <p className="is-family-secondary is-size-7" >{tool.node.frontmatter.subtitle}</p>
   
    </Link>

    )}
   
   
  </div>
  
  </div> 

    <Link className="navbar-item navbar" to="/bra-att-veta">
     Bra att veta
    </Link>
    
    <Link className="navbar-item navbar" to="/shop">
      Shop
    </Link>
    <Link className="navbar-item navbar" to="/anders-inspirerar/hang-med-nar-anders-genomfor-ramisklassikern/">
      Anders inspirerar
    </Link>

 
  </div>
  }
  ></StaticQuery>

)}

export default MenuItems

