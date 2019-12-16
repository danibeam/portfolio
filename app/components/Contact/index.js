/**
 *
 * Contact
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import { Container } from 'react-grid-system';

import messages from './messages';

const Title = styled.h2`
  position: relative;
  display: inline-block;
  &:after {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    top: 100%;
    margin: 10px 0;
    width: 50%;
    height: 6px;
    background: #556393;
  }
`;

const Methods = styled.ul`
  list-style: none;
`;

function Contact() {
  return (
    <Container id="container">
      <Title>
        <FormattedMessage {...messages.title} />
      </Title>
      <h3>
        <FormattedMessage {...messages.header} />
      </h3>
      <Methods>
        <li>Mail</li>
        <li>Phone</li>
        <li>LinkedIn</li>
        <li>Twitter</li>
      </Methods>
    </Container>
  );
}

Contact.propTypes = {};

export default Contact;
