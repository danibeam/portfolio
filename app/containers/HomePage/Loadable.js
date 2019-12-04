/**
 * Asynchronously loads the component for HomePage
 */
import React from 'react';
import loadable from 'utils/loadable';
import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';
import messages from './messages';

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  margin: auto;
  text-align: center;
  font-weight: 300;
  font-size: 2em;
  color: #fafafa;
  background-color: #1d1b1b;
  vertical-align: middle;
  padding
`;

const P = styled.p`
  margin: auto;
  text-align: center;
`;

export default loadable(() => import('./index'), {
  fallback: (
    <Wrapper>
      <P>
        <FormattedMessage {...messages.loading_portfolio} />
      </P>
    </Wrapper>
  ),
});
