/**
 * NotFoundPage
 *
 * This is the page we show when the user visits a url that doesn't have a route
 *
 */

import React from 'react';
import { FormattedMessage } from 'react-intl';

import styled from 'styled-components';

import messages from './messages';

const Wrapper = styled.div`
  text-align: center;
`;

export default function NotFound() {
  return (
    <Wrapper>
      <h1>
        <FormattedMessage {...messages.header} />
      </h1>
      <p>
        <FormattedMessage {...messages.message} />
      </p>
      <button type="button">
        <FormattedMessage {...messages.go_home} />
      </button>
    </Wrapper>
  );
}
