import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';
import { withPrefix } from "gatsby";

const SEO = ({ title, description, slug, og={} }) => {

console.log(title)
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
          siteUrl
        }
      }
      favicon: file(name: { eq: "favicon" }) {
        publicURL
      }
    }
  `);

  //add slash to beginning of slug if it's not there
  if (slug[0]!=='/') 
  {slug="/"+slug}

  const ogimage = og.image || "img/og-image.png"
  const ogtype = og.type || "website"
  const oglocale= og.locale || "sv_SE"
  const faviconGoogle = "img/favicon-96x96.ico"

  const jsonld = 
  {
  "@context": 'https://schema.org',
  "@type": "SportsOrganization",
  "name": "Ramisklassikern",
  "url": 'https://www.ramisklassikern.se',
  "logo": "",
  "sameAs": [
    'https://www.facebook.com/Ramisklassikern-110367071883253',
    'https://www.instagram.com/ramisklassikern/',
    'https://www.ramisklassikern.se'
  ]
  }


  return (
    <Helmet
      htmlAttributes={{ lang: `sv` }}
      // titleTemplate={`%s | ${data.site.siteMetadata.title}`}
    >
      {jsonld && <script type="application/ld+json">{JSON.stringify(jsonld)}</script>}
      <title>{title}</title>
      <meta
        name='description'
        content={description || data.site.siteMetadata.description}
      />
      <link rel="shortcut icon" href={faviconGoogle}></link>
      <link rel='canonical' href={`${data.site.siteMetadata.siteUrl}${slug}`} />
      <meta property="title" content={title} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={`${data.site.siteMetadata.siteUrl}${withPrefix("/")}${ogimage}`}/>
      <meta property="og:image:width" content="1200"/>
      <meta property="og:image:height" content="630"/>
      <meta property="og:type" content={ogtype}/>
      <meta property="og:locale" content={oglocale} />
      <meta property="og:url" content={`${data.site.siteMetadata.siteUrl}${slug}`} />

      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:url" content={`${data.site.siteMetadata.siteUrl}${slug}`} />
      <meta name="twitter:image" content={`${data.site.siteMetadata.siteUrl}${withPrefix("/")}${ogimage}`} />


    </Helmet>
  );
};

SEO.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  slug: PropTypes.string,
};

export default SEO;