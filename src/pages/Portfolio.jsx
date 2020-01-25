import React from 'react';
import PropTypes from 'prop-types';

import { view } from 'react-easy-state';

import AWPDetail from '../components/AWPDetail';
import Seo from '../components/Seo';
// import TransactionsTable from '../components/TransactionsTable';

const Portfolio = (props) => {
  const {
    content: {
      name,
      url,

      seo: {
        description,
        image,
        keywords,
      },
    },
  } = props;

  return (
    <div className="app">
      <Seo
        name="Portfolio"
        title={name}
        description={description}
        url={url}
        image={image}
        keywords={keywords}
      />
      <AWPDetail {...props} />
    </div>
  );
};

Portfolio.propTypes = {
  content: PropTypes.shape({
    name: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,

    seo: PropTypes.shape({
      description: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      keywords: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default view(Portfolio);
