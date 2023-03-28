import React from 'react';
import PropTypes from 'prop-types';
import { Link as ReactRouterLink } from 'react-router-dom';
import { Image } from '../ImageC/Image';
import './logo.css';

/**
 * Primary UI component for user interaction
 */

export const Logo = ({ width, height, path }) => {
  return (
    <ReactRouterLink to={'/my_monstera'}>
      <Image width={width} height={height} path={path} />
    </ReactRouterLink>
  );
};

Logo.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  path: PropTypes.string.isRequired,
};

Logo.defaultProps = {
  width: 188.4,
  height: 44.37,
};
