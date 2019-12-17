/**
 *
 * CareerInNumbers
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

function CareerInNumbers() {
  return (
    <div>
      <FormattedMessage {...messages.header} />
    </div>
  );
}

CareerInNumbers.propTypes = {};

export default CareerInNumbers;
