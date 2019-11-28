/**
 * NotFoundPage
 *
 * This is the page we show when the user visits a url that doesn't have a route
 *
 */

import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router-dom';

import styled from 'styled-components';
import Button from 'components/Button';

import messages from './messages';

const Wrapper = styled.div`
  text-align: center;
  margin-top: -20px;
  padding: 2em;
`;

const NotFound = () => (
  <Wrapper>
    <h1>
      <FormattedMessage {...messages.header} />
    </h1>
    <p>
      <FormattedMessage {...messages.message} />
    </p>
    <Button>
      <Link to="/" style={{ color: 'white' }}>
        <FormattedMessage {...messages.go_home} />
      </Link>
    </Button>
  </Wrapper>
);

export default NotFound;
