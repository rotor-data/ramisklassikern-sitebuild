import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Layout from "../components/Layout";
import Content, { HTMLContent } from "../components/Content";
import { StaticImage } from "gatsby-plugin-image"
import StarDivider from "../components/Star-divider";


// eslint-disable-next-line
export const AboutPageTemplate = ({ title, content, contentComponent, hero, why, us }) => {
  const PageContent = contentComponent || Content;
  const heroImage = getImage(hero.image)

  return (
    <div>
    <div style={{ display: "grid", position: "relative" }}>
    <GatsbyImage image={heroImage} alt={hero.imagealt} style={{
          gridArea: "1/1",
         
          // You can set a maximum height for the image, if you wish.
          // maxHeight: 600,
        }}/>
        <div
        style={{
          // By using the same grid area for both, they are stacked on top of each other
          gridArea: "1/1",
          position: "absolute",
          width: "100%",
          left:"0%",
          bottom:"5%",
          // This centers the other elements inside the hero component
          placeItems: "center",
          display: "grid",
        }}
      >
        {/* Any content here will be centered in the component */}
        <h2 className="has-text-white mx-auto has-text-centered has-text-weight-bold has-tight-spacing is-size-3 is-size-5-mobile p-3"> 
        {hero.text}
        </h2>
      </div>
      </div>
    
{/*why section*/}
<div className="hero-body has-background-white">
        <div className="columns">

          <div className="column has-background-primary is-8-desktop is-offset-2-desktop is-8-tablet is-offset-2-tablet">
            <div className="columns is-flex-direction-column p-3">
              <StarDivider customClass="column is-full mb-3" />
              <div className="column is-8 is-offset-2 is-10-mobile is-offset-1-mobile">
                <h2 className="is-size-2 mb-4">{why.headline}</h2>
                <p className="content" dangerouslySetInnerHTML={{ __html: why.text }}></p>
                

              </div>

              <StarDivider customClass="column is-full mt-3" />
            </div>
          </div>

        </div>
      </div>

{/*us section*/}
<div className="hero-body has-background-white">
        <div className="columns">

          <div className="column has-background-primary is-8-desktop is-offset-2-desktop is-8-tablet is-offset-2-tablet">
            <div className="columns is-flex-direction-column p-3">
              <StarDivider customClass="column is-full mb-3" />
              <div className="column is-8 is-offset-2 is-10-mobile is-offset-1-mobile">
                <h2 className="is-size-2 mb-4">{us.headline}</h2>
                <p className="content" dangerouslySetInnerHTML={{ __html: us.text }}></p>
                

              </div>

              <StarDivider customClass="column is-full mt-3" />
            </div>
          </div>

        </div>
      </div>


    </div>


  );
};

AboutPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
};

const AboutPage = ({ data }) => {
  const { markdownRemark: post } = data;
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <AboutPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        content={post.html}
        hero={frontmatter.hero}
        why={frontmatter.why}
        us={frontmatter.us}
      />
    </Layout>
  );
};

AboutPage.propTypes = {
  data: PropTypes.object.isRequired,
};

export default AboutPage;

export const aboutPageQuery = graphql`
  query AboutPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        hero {
          text
          image {
            childImageSharp {
              gatsbyImageData(
                quality: 100, 
                
                height:800,
                transformOptions: { fit: OUTSIDE, cropFocus: NORTH }
                
                )
            }
          }
        }
        why {
          headline
          text
        }
        us {
          headline
          text
        }
          
      }
    }
  }
`;
