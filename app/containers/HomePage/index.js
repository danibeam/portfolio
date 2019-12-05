/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Container } from 'react-grid-system';
import { Fade } from 'react-reveal';

import styled from 'styled-components';
import Repositories from 'containers/Repositories';
import Skills from 'containers/Skills';
import Footer from 'components/Footer';
import Button from 'components/Button';

import A from 'components/A';
import messages from './messages';
import Header from '../../components/Header';
import SimpleSection from '../../components/SimpleSection';

const Cover = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  margin: auto;
  padding: 1em;
  font-size: 1.5em;
  color: #fafafa;
  background-color: #1d1b1b;
`;

const Content = styled.p`
  vertical-align: middle;
  margin: auto;
  text-align: center;
  text-align: center;
  font-weight: 300;
  & button {
    margin: 2em;
  }
`;

const Title = styled.span`
  font-size: 2em;
  font-weight: 200;
`;

export default function HomePage() {
  return (
    <React.Fragment>
      <Header />
      <Cover>
        <Content>
          <Title>Daniel Belmonte Portfolio</Title>
          <br />
          Frontend & Javascript Full Stack developer
          <br />
          <Button hash="/home#container">
            <FormattedMessage {...messages.get_started} />
          </Button>
        </Content>
      </Cover>
      <Container id="container">
        {/* <h1>
          <FormattedMessage {...messages.header} />
        </h1> */}
        <Fade>
          <SimpleSection
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
        </Fade>
        <Fade>
          <Skills />
        </Fade>
        <Fade>
          <Repositories />
        </Fade>
      </Container>
      <Footer />
    </React.Fragment>
  );
}
