/**
 *
 * Footer
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';

import { Container, Row, Col } from 'react-grid-system';

import { FormattedMessage } from 'react-intl';
import SocialMedia from 'components/SocialMedia';
import messages from './messages';

const Wrapper = styled.footer`
  background-color: #556393;
  color: #fafafa;
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
  text-align: center;
  width: 100%;
`;

function Footer() {
  return (
    <Wrapper>
      <Container>
        <h3>
          <FormattedMessage {...messages.header} />
        </h3>
        <Row>
          <Col xs={6}>Footer navigation here!</Col>
          <Col xs={6}>
            <SocialMedia />
          </Col>
        </Row>
        <Row>
          <Col sm={12}>
            <p>
              <FormattedMessage {...messages.license} />
            </p>
          </Col>
        </Row>
      </Container>
    </Wrapper>
  );
}

Footer.propTypes = {};

export default Footer;
