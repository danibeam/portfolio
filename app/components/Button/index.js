/**
 *
 * Button
 *
 */

import React, { Children } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import './button.scss';

import A from 'components/A';

const StyledButton = styled.button`
  background-color: #556393;
  border: none;
  border-radius: 0.5em;
  cursor: pointer;
  display: inline-block;
  line-height: 2.5;
  padding: 0 12px;
  position: relative;
  text-align: center;
  color: #fafafa;
`;

const Button = props => (
  <StyledButton>
    <A href={props.href} onClick={props.onClick}>
      {Children.toArray(props.children)}
    </A>
  </StyledButton>
);

Button.propTypes = {
  // handleRoute: PropTypes.func,
  href: PropTypes.string,
  onClick: PropTypes.func,
  // content: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default Button;
