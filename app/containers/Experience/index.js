/**
 *
 * Experience
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { Timeline, TimelineItem } from 'vertical-timeline-component-for-react';
import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import { Container } from 'react-grid-system';
import styled from 'styled-components';
import A from 'components/A';
import makeSelectExperience from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import CareerInNumbers from '../../components/CareerInNumbers';
import './styles.scss';

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

const TagWrapper = styled.p`
  font-weight: bold;
  font-size: 1.2em;
`;

export function Experience(props, context) {
  useInjectReducer({ key: 'experience', reducer });
  useInjectSaga({ key: 'experience', saga });

  return (
    <Container id="container">
      <Helmet>
        <title>DB. | Experience</title>
        <meta
          name="description"
          author="Daniel Belmonte"
          description={<FormattedMessage {...messages.SEODescription} />}
          content="Daniel Belmonte Home Portfolio developer frontend full stack javascript"
        />
      </Helmet>
      <Title>
        <FormattedMessage {...messages.header} />
      </Title>

      <CareerInNumbers />

      <div className="divider div-transparent" />

      <Timeline lineColor="#ddd">
        <TimelineItem
          key="001"
          dateText={`05/2019 - ${context.intl.formatMessage(messages.present)}`}
          dateInnerStyle={{ background: '#556393', color: '#fafafa' }}
          style={{ color: '#556393' }}
        >
          <h3>
            Business & Integration Architecture Analyst,{' '}
            <A
              href="https://www.accenture.com"
              target="blank"
              rel="noopener noreferrer"
            >
              Accenture
            </A>
          </h3>
          <h4>Alicante, {context.intl.formatMessage(messages.spain)}</h4>
          <p>
            Est incididunt sint eu minim dolore mollit velit velit commodo ex
            nulla exercitation. Veniam velit adipisicing anim excepteur nostrud
            magna nostrud aliqua dolor. Sunt aute est duis ut nulla officia
            irure reprehenderit laborum fugiat dolore in elit. Adipisicing do
            qui duis Lorem est.
          </p>
          <p>
            Est incididunt sint eu minim dolore mollit velit velit commodo ex
            nulla exercitation. Veniam velit adipisicing anim excepteur nostrud
            magna nostrud aliqua dolor. Sunt aute est duis ut nulla officia
            irure reprehenderit laborum fugiat dolore in elit. Adipisicing do
            qui duis Lorem est.
          </p>
          <p>
            Est incididunt sint eu minim dolore mollit velit velit commodo ex
            nulla exercitation. Veniam velit adipisicing anim excepteur nostrud
            magna nostrud aliqua dolor. Sunt aute est duis ut nulla officia
            irure reprehenderit laborum fugiat dolore in elit. Adipisicing do
            qui duis Lorem est.
          </p>
          <TagWrapper>#Consulting #Angular #React #Redux</TagWrapper>
        </TimelineItem>
        <TimelineItem
          key="002"
          dateText="10/2018 – 04/2018"
          dateInnerStyle={{ background: '#556393', color: '#fafafa' }}
        >
          <h3>
            Software Developer,{' '}
            <A
              href="https://www.cyient.com"
              target="blank"
              rel="noopener noreferrer"
            >
              Cyient
            </A>
          </h3>
          <h4>
            Reading (Berkshire), {context.intl.formatMessage(messages.uk)}
          </h4>
          <p>
            Est incididunt sint eu minim dolore mollit velit velit commodo ex
            nulla exercitation. Veniam velit adipisicing anim excepteur nostrud
            magna nostrud aliqua dolor. Sunt aute est duis ut nulla officia
            irure reprehenderit laborum fugiat dolore in elit. Adipisicing do
            qui duis Lorem est.
          </p>
          <p>
            Est incididunt sint eu minim dolore mollit velit velit commodo ex
            nulla exercitation. Veniam velit adipisicing anim excepteur nostrud
            magna nostrud aliqua dolor. Sunt aute est duis ut nulla officia
            irure reprehenderit laborum fugiat dolore in elit. Adipisicing do
            qui duis Lorem est.
          </p>
          <TagWrapper>#Geospatial #Angular #NodeJS #PostgreSQL #AWS</TagWrapper>
        </TimelineItem>
        <TimelineItem
          key="004"
          dateText="11/2017 – 10/2018"
          dateInnerStyle={{ background: '#556393' }}
        >
          <h3>
            Jr Frontend Developer,{' '}
            <A
              href="https://www.nitsnets.com"
              target="blank"
              rel="noopener noreferrer"
            >
              NitsNets
            </A>
          </h3>
          <h4>Alicante, {context.intl.formatMessage(messages.spain)}</h4>
          <p>
            Est incididunt sint eu minim dolore mollit velit velit commodo ex
            nulla exercitation. Veniam velit adipisicing anim excepteur nostrud
            magna nostrud aliqua dolor. Sunt aute est duis ut nulla officia
            irure reprehenderit laborum fugiat dolore in elit. Adipisicing do
            qui duis Lorem est.
          </p>
          <p>
            Est incididunt sint eu minim dolore mollit velit velit commodo ex
            nulla exercitation. Veniam velit adipisicing anim excepteur nostrud
            magna nostrud aliqua dolor. Sunt aute est duis ut nulla officia
            irure reprehenderit laborum fugiat dolore in elit. Adipisicing do
            qui duis Lorem est.
          </p>
          <TagWrapper>#Ecommerce #B2B #B2C #Angular #NGRX</TagWrapper>
        </TimelineItem>
      </Timeline>
    </Container>
  );
}

Experience.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

Experience.contextTypes = {
  intl: PropTypes.object.isRequired,
};

const mapStateToProps = createStructuredSelector({
  experience: makeSelectExperience(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(Experience);
