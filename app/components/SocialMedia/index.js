/**
 *
 * SocialMedia
 *
 */

import React from 'react';
import { IconContext } from 'react-icons';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

import { FaBeer } from 'react-icons/fa';

function SocialMedia() {
  return (
    <IconContext.Provider value={{ color: 'white' }}>
      <FaBeer />
    </IconContext.Provider>
  );
}

SocialMedia.propTypes = {};

export default SocialMedia;
