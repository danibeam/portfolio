/**
 *
 * Footer
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

const Wrapper = styled.footer`
  background-color: #556393;
  color: #fafafa;
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
  padding: 1rem;
  text-align: center;
  width: 100%;
`;

function Footer() {
  return (
    <Wrapper>
      <h3>
        <FormattedMessage {...messages.header} />
      </h3>
      <p>
        <FormattedMessage {...messages.license} />
      </p>
    </Wrapper>
  );
}

Footer.propTypes = {};

export default Footer;
