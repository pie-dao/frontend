/* eslint react/forbid-prop-types: 0 */
import React from 'react';
import PropTypes from 'prop-types';

import { view } from 'react-easy-state';

const Unless = ({ children, condition }) => <>{ condition ? '' : children }</>;

Unless.defaultProps = {
  children: '',
  condition: false,
};

Unless.propTypes = {
  children: PropTypes.any,
  condition: PropTypes.any,
};

export default view(Unless);
