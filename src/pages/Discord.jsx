import React from 'react';
import PropTypes from 'prop-types';

import { view } from 'react-easy-state';

import Seo from '../components/Seo';

class Discord extends React.Component {
  componentDidMount() {
    window.location.replace('https://discord.gg/QHBTnpt');
  }

  render() {
    const {
      props: {
        content: {
          name,
          url,

          seo: {
            discord: {
              description,
              image,
              keywords,
              title,
            },
          },
        },
      },
    } = this;


    return (
      <Seo
        description={description}
        image={image}
        keywords={keywords}
        name={name}
        title={title}
        url={url}
      >
        <h1>Redirecting to discord...</h1>
      </Seo>
    );
  }
}

Discord.propTypes = {
  content: PropTypes.shape({
    name: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,

    seo: PropTypes.shape({
      discord: PropTypes.shape({
        description: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        keywords: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
      }).isRequired,
    }).isRequired,
  }).isRequired,
};


export default view(Discord);
