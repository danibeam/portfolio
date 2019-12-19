/**
 *
 * CareerInNumbers
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';
import CountUp from 'react-countup';
import { FormattedMessage } from 'react-intl';
import { Container, Row, Col } from 'react-grid-system';
import messages from './messages';

const Title = styled.h3`
  text-align: center;
`;

const Counter = styled.h2`
  margin: 0.5em;
  font-size: 2em;
`;

function CareerInNumbers() {
  const currentYear = new Date().getFullYear();
  const years = currentYear - 2017;
  return (
    <Container style={{ textAlign: 'center' }}>
      <Title>
        <FormattedMessage {...messages.title} />
      </Title>
      <Row>
        <Col xs={12} sm={4}>
          <FormattedMessage {...messages.years} />
          <CountUp start={0} end={years} delay={0} duration={5} suffix=" yr">
            {({ countUpRef }) => (
              <Counter>
                <span ref={countUpRef} />
              </Counter>
            )}
          </CountUp>
        </Col>
        <Col xs={12} sm={4}>
          <FormattedMessage {...messages.companies} />
          <CountUp start={0} end={3} delay={0} duration={5}>
            {({ countUpRef }) => (
              <Counter>
                <span ref={countUpRef} />
              </Counter>
            )}
          </CountUp>
        </Col>
        <Col xs={12} sm={4}>
          <FormattedMessage {...messages.projects} />
          <CountUp start={0} end={15} delay={0} duration={5} prefix="+">
            {({ countUpRef }) => (
              <Counter>
                <span ref={countUpRef} />
              </Counter>
            )}
          </CountUp>
        </Col>
      </Row>
    </Container>
  );
}

CareerInNumbers.propTypes = {};

export default CareerInNumbers;
