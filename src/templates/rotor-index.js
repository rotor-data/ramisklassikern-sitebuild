import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Content, { HTMLContent } from "../components/Content";
import { getImage } from "gatsby-plugin-image";
import PreviewCompatibleImage from "../components/PreviewCompatibleImage";

// eslint-disable-next-line
export const RotorIndexTemplate = ({ title, content, contentComponent, image }) => {
  const PageContent = contentComponent || Content;
  const SideImage = getImage(image) || image;

  return (
    
    <section className="section section--gradient">
      <div className="container">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <div className="section">
              <h2 className="title is-size-3 has-text-weight-bold is-bold-light">
                {title}
              </h2>
              <PageContent className="content" content={content} />
              <PreviewCompatibleImage imageInfo={image} />
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

RotorIndexTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
};

const RotorIndex = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <RotorIndexTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        content={post.html}
        image={post.frontmatter.image}
      />
    </Layout>
  );
};

RotorIndex.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.shape({
    image: PropTypes.object,
    }),
  }),
};

export default RotorIndex;

export const RotorIndexQuery = graphql`
  query RotorIndex($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        image {
          childImageSharp {
            gatsbyImageData(quality: 100, layout: FULL_WIDTH)
          }}
      }
    }
  }
`;
