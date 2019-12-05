/* eslint-disable react/no-unused-prop-types */
/**
 *
 * Button
 *
 */

import React, { Children } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import './button.scss';

const StyledButton = styled.button`
  background-color: ${props =>
    props.background ? props.background : `#556393`};
  border: none;
  border-radius: 0.3em;
  cursor: pointer;
  display: inline-block;
  line-height: 2.5;
  padding: 0 2em;
  position: relative;
  text-align: center;
  -webkit-text-decoration: none;
  text-decoration: none;
  text-transform: uppercase;
  font-weight: bold;
  color: ${props => (props.color ? props.color : `#fafafa`)};

  &:focus {
    outline: 0;
  }
  &:a {
    text-decoration: none;
  }
  & a:visited {
    color: white;
  }
`;

const Button = props => (
  <StyledButton onClick={props.onClick}>
    {props.hash ? (
      <Link
        smooth
        to={props.hash}
        // scroll={el => el.scrollIntoView({ behavior: 'instant', block: 'end' })}
      >
        {Children.toArray(props.children)}
      </Link>
    ) : (
      <Link to={props.href}>{Children.toArray(props.children)}</Link>
    )}
  </StyledButton>
);

Button.propTypes = {
  // handleRoute: PropTypes.func,
  hash: PropTypes.string,
  href: PropTypes.string,
  onClick: PropTypes.func,
  background: PropTypes.string,
  color: PropTypes.string,
  // content: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default Button;
