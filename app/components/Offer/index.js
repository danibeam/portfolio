/**
 *
 * Offer
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

function Offer() {
  return (
    <div>
      <FormattedMessage {...messages.header} />
    </div>
  );
}

Offer.propTypes = {};

export default Offer;
