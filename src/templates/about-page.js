import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Layout from "../components/Layout";
import Content, { HTMLContent } from "../components/Content";
import { StaticImage } from "gatsby-plugin-image"


// eslint-disable-next-line
export const AboutPageTemplate = ({ title, content, contentComponent, hero }) => {
  const PageContent = contentComponent || Content;
  const heroImage = getImage(hero.image)

  return (
    <div>
    <div style={{ display: "grid" }}>
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
          left:"50%",
          bottom:"25%",
          // This centers the other elements inside the hero component
          placeItems: "center",
          display: "grid",
        }}
      >
        {/* Any content here will be centered in the component */}
        <h2 className="has-text-white has-text-weight-bold has-tight-spacing is-size-4 is-size-5-mobile"> Hero text</h2>
      </div>
      </div>
    <section className="section section--gradient">
      
      <div className="container">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <div className="section">
              <h2 className="title is-size-3 has-text-weight-bold is-bold-light">
                {title}
              </h2>
              <PageContent className="content" content={content} />
            </div>
          </div>
        </div>
      </div>
    </section>
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
          image {
            childImageSharp {
              gatsbyImageData(
                quality: 100, 
                width: 1600,
                layout: FULL_WIDTH
                )
            }
          }
        }
      }
    }
  }
`;
