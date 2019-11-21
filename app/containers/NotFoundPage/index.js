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
import NavigatorLink from '../../components/NavigatorLink';

const Wrapper = styled.div`
  text-align: center;
`;

const NotFound = () => (
  <Wrapper>
    <h1>
      <FormattedMessage {...messages.header} />
    </h1>
    <p>
      <FormattedMessage {...messages.message} />
      <NavigatorLink>
        <FormattedMessage {...messages.message} />
      </NavigatorLink>
    </p>
    <Button>
      <Link to="/" style={{ color: 'white' }}>
        <FormattedMessage {...messages.go_home} />
      </Link>
    </Button>
  </Wrapper>
);

export default NotFound;
