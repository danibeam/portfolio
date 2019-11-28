/**
 *
 * ColoredLine
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ColoredLine = ({ color }) => {
  const StyledLine = styled.hr`
    color: ${color};
    background-color: ${color};
    border: none;
    height: 2px;
    width: 60%;
  `;
  return <StyledLine />;
};

ColoredLine.propTypes = {
  color: PropTypes.string,
};

export default ColoredLine;
