/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React from 'react';
import { Helmet } from 'react-helmet';

import { FormattedMessage } from 'react-intl';
import { Container } from 'react-grid-system';
import { Fade, Slide } from 'react-reveal';
import ParticlesBg from 'particles-bg';

import styled from 'styled-components';
import Repositories from 'containers/Repositories';
import Skills from 'containers/Skills';
import Button from 'components/Button';

import A from 'components/A';
import DownloadCv from 'components/DownloadCv';
// import ErrorBoundary from 'utils/ErrorBoundary';
import messages from './messages';
import SimpleSection from '../../components/SimpleSection';
import Offer from '../../components/Offer';

import './styles.scss';

const Cover = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  margin: auto;
  padding: 1em;
  font-size: 1.5em;
  color: #fafafa;
  background-color: rgba(0, 0, 0, 0.8);
  position: relative;
`;

const Content = styled.div`
  vertical-align: middle;
  margin: auto;
  text-align: center;
  text-align: center;
  font-weight: 300;
  z-index: 9999;
  & button {
    margin: 2em;
  }
`;

const Title = styled.span`
  font-size: 2em;
  font-weight: 200;
`;

export default function HomePage() {
  window.onerror = () => true;
  return (
    <React.Fragment>
      <Helmet>
        <title>DB. | Home</title>
        <meta
          name="description"
          author="Daniel Belmonte"
          description={<FormattedMessage {...messages.SEODescription} />}
          content="Daniel Belmonte Home Portfolio developer frontend full stack javascript"
        />
      </Helmet>
      <div style={{ position: 'relative' }}>
        <Cover>
          <Content>
            <Title>Daniel Belmonte</Title>
            <br />
            Frontend & Javascript Full Stack developer
            <br />
            {/* <Button hash="/home#container"> */}
            <Button href="/home#container">
              <FormattedMessage {...messages.get_started} />
            </Button>
          </Content>
        </Cover>
        {/* <Particles /> */}
        {/* // @ts-ignore */}
        <ParticlesBg
          className="particles"
          color="black"
          num={200}
          type="lines"
          bg
        />
      </div>
      <Container id="container">
        {/* <h1>
          <FormattedMessage {...messages.header} />
        </h1> */}
        <Fade>
          <SimpleSection
            profile
            title={<FormattedMessage {...messages.profile.header} />}
            headline={<FormattedMessage {...messages.profile.headline} />}
            content={
              <FormattedMessage
                {...messages.profile.content}
                values={{
                  contact: (
                    <A href="/contact">
                      <FormattedMessage id="app.common.get_touch" />
                    </A>
                  ),
                }}
              />
            }
          />
          <div className="divider div-transparent" />
          <Offer />
        </Fade>
        <Slide right>
          <DownloadCv />
        </Slide>
        <Fade>
          <Skills />
        </Fade>
        <Fade>
          <Repositories />
        </Fade>
      </Container>
    </React.Fragment>
  );
}
