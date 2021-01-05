import React from "react";
import { Helmet } from "react-helmet";

const SEO = ({ title, lang }) => {
  const metaDescription = "A forex and crypto trading investment company that gives access to the opportunities of trading without any technical skills, and minimum of time.";
  const siteTitle = "MyDHPBTC";
  const author = "@DhpBTC";

  return (
    <Helmet
      title={title}
      titleTemplate={`%s | ${siteTitle}`}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: author,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
      ]}
    />
  );
};

export default SEO;
