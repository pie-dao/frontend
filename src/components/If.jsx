/* eslint react/forbid-prop-types: 0 */
import React from 'react';
import PropTypes from 'prop-types';

import { view } from 'react-easy-state';

const If = ({ children, condition }) => <>{ condition ? children : '' }</>;

If.defaultProps = {
  children: '',
  condition: false,
};

If.propTypes = {
  children: PropTypes.any,
  condition: PropTypes.any,
};

export default view(If);
