/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Container } from 'react-grid-system';
// import { Fade } from 'react-reveal';

// import styled from 'styled-components';
import Footer from 'components/Footer';

import A from 'components/A';
import messages from './messages';
import Header from '../../components/Header';
import SimpleSection from '../../components/SimpleSection';

export default function HomePage() {
  return (
    <React.Fragment>
      <Header />
      <Container>
        {/* <h1>
          <FormattedMessage {...messages.header} />
        </h1> */}
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
      </Container>
      <Footer />
    </React.Fragment>
  );
}
