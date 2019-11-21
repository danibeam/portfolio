/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Container, Row, Col } from 'react-grid-system';

// import styled from 'styled-components';
import Footer from 'components/Footer';

import messages from './messages';

export default function HomePage() {
  return (
    <React.Fragment>
      <Container>
        <h1>
          <FormattedMessage {...messages.header} />
        </h1>
        <Row>
          <Col sm={6}>
            <p>
              Aliqua exercitation exercitation proident proident incididunt non
              exercitation labore. Anim pariatur do aliquip proident excepteur
              consequat pariatur. Qui ut est minim sunt consectetur sint dolore
              do eiusmod labore laborum proident.
            </p>
          </Col>
          <Col sm={6}>
            <p>
              Aliqua exercitation exercitation proident proident incididunt non
              exercitation labore. Anim pariatur do aliquip proident excepteur
              consequat pariatur. Qui ut est minim sunt consectetur sint dolore
              do eiusmod labore laborum proident.
            </p>
          </Col>
        </Row>
      </Container>
      <Footer />
    </React.Fragment>
  );
}
