/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React from 'react';
import { FormattedMessage } from 'react-intl';

import styled from 'styled-components';
import Footer from 'components/Footer';

import messages from './messages';

const Wrapper = styled.div`
  width: 90%;
  margin: 0 auto;
`;

export default function HomePage() {
  return (
    <React.Fragment>
      <Wrapper>
        <h1>
          <FormattedMessage {...messages.header} />
        </h1>
      </Wrapper>
      <Footer />
    </React.Fragment>
  );
}
