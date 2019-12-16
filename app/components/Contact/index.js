/**
 *
 * Contact
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

function Contact() {
  return (
    <div>
      <FormattedMessage {...messages.header} />
    </div>
  );
}

Contact.propTypes = {};

export default Contact;
