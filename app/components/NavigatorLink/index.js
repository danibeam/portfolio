/**
 *
 * NavigatorLink
 *
 */

import React, { Children } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.span`
  text-decoration: none;
  font-weight: 500;
  &:hover {
    text-decoration: underline;
  }
`;

function NavigatorLink(props) {
  return (
    <Wrapper>
      <Link to={props.href || '#'}>{Children.toArray(props.children)}</Link>
    </Wrapper>
  );
}

NavigatorLink.propTypes = {
  href: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default NavigatorLink;
