/**
 *
 * Footer
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';

import { Container, Row, Col, Visible } from 'react-grid-system';

import { FormattedMessage } from 'react-intl';
import SocialMedia from 'components/SocialMedia';
import NavigatorLink from 'components/NavigatorLink';
import A from 'components/A';
import messages from './messages';

const Wrapper = styled.footer`
  background-color: #556393;
  color: #fafafa;
  //// position: absolute;
  position: inherit;
  right: 0;
  bottom: 0;
  left: 0;
  text-align: center;
  width: 100%;
  padding: 1.5em 0;
  margin-top: 2em;
`;

function Footer() {
  return (
    <Wrapper>
      <Container>
        <h3>
          <FormattedMessage {...messages.header} />
        </h3>
        <Row>
          <Col md={3} lg={3} />

          <Col xs={12} md={3} lg={3}>
            <NavigatorLink href="/">
              <FormattedMessage {...messages.navigation_home} />
            </NavigatorLink>
            &nbsp; | &nbsp;
            <NavigatorLink href="/experience">
              <FormattedMessage {...messages.navigation_experience} />
            </NavigatorLink>
            &nbsp; | &nbsp;
            <NavigatorLink href="/contact">
              <FormattedMessage {...messages.navigation_contact} />
            </NavigatorLink>
          </Col>
          <Visible xs sm>
            <br />
            <br />
          </Visible>
          <Col xs={12} md={3} lg={3}>
            <SocialMedia />
          </Col>
          <Col md={3} lg={3} />
        </Row>
        <Row style={{ margin: '20px' }}>
          <Col sm={12}>
            <A
              href="https://github.com/danibeam/portfolio/blob/master/LICENSE.md"
              target="blank"
              rel="noopener noreferrer"
            >
              <FormattedMessage {...messages.license} />
            </A>
          </Col>
        </Row>
      </Container>
    </Wrapper>
  );
}

Footer.propTypes = {};

export default Footer;
