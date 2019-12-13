/**
 *
 * Contact
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectContact from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

export function Contact() {
  useInjectReducer({ key: 'contact', reducer });
  useInjectSaga({ key: 'contact', saga });

  return (
    <div>
      <Helmet>
        <title>Contact</title>
        <meta name="description" content="Description of Contact" />
      </Helmet>
      <FormattedMessage {...messages.header} />
    </div>
  );
}

Contact.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  contact: makeSelectContact(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(Contact);
