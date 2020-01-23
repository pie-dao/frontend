import React from 'react';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';

import { view } from 'react-easy-state';

const getSchemaOrgJSONLD = ({ name, url, title }) => [
  {
    '@context': 'http://schema.org',
    '@type': 'WebSite',
    url,
    name: title,
    alternateName: name,
  },
];

const fbAppID = '@NAME-HERE';
const twitter = '@NAME-HERE';

const Seo = ({
  description,
  image,
  keywords,
  name,
  title,
  url,
}) => {
  const pageTitle = `${title} - ${name}`;

  const schemaOrgJSONLD = getSchemaOrgJSONLD({
    name,
    url,
    title,
  });

  return (
    <Helmet>
      {/* General tags */}
      {/* <title>{pageTitle}</title> */}
      <meta name="description" content={description} />
      <meta name="image" content={image} />
      <meta name="keywords" content={keywords} />

      {/* Schema.org tags */}
      <script type="application/ld+json">
        {JSON.stringify(schemaOrgJSONLD)}
      </script>

      {/* OpenGraph tags */}
      <meta property="og:url" content={url} />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="fb:app_id" content={fbAppID} />

      {/* Twitter Card tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content={twitter} />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  );
};

Seo.propTypes = {
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  keywords: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default view(Seo);
