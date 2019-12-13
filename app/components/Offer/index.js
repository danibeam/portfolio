/**
 *
 * Offer
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Row, Col } from 'react-grid-system';
import { FaGitAlt, FaCode, FaProjectDiagram } from 'react-icons/fa';

import { FormattedMessage } from 'react-intl';
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

const OfferIcon = styled.span`
  text-align: center;
  font-size: 5em;
  transition: 0.5s;
  &:hover {
    color: #556393;
  }
`;

function Offer() {
  return (
    <div>
      <Title>
        <FormattedMessage {...messages.header} />
      </Title>
      <Row style={{ textAlign: 'center' }}>
        <Col xs={12} md={4} lg={4}>
          <OfferIcon>
            <FaCode />
          </OfferIcon>
          <br />
          <FormattedMessage {...messages.dev} />
        </Col>
        <Col xs={12} md={4} lg={4}>
          <OfferIcon>
            <FaProjectDiagram />
          </OfferIcon>
          <br />
          <FormattedMessage {...messages.architecture} />
        </Col>
        <Col xs={12} md={4} lg={4}>
          <OfferIcon>
            <FaGitAlt />
          </OfferIcon>
          <br />
          <FormattedMessage {...messages.team} />
        </Col>
      </Row>
    </div>
  );
}

Offer.propTypes = {};

export default Offer;
