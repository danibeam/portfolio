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
    <React.Fragment>
      <FormattedMessage {...messages.header} />
    </React.Fragment>
  );
}

Contact.propTypes = {};

export default Contact;
