/**
 *
 * Experience
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
import makeSelectExperience from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

export function Experience() {
  useInjectReducer({ key: 'experience', reducer });
  useInjectSaga({ key: 'experience', saga });

  return (
    <div>
      <Helmet>
        <title>Experience</title>
        <meta name="description" content="Description of Experience" />
      </Helmet>
      <FormattedMessage {...messages.header} />
    </div>
  );
}

Experience.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  experience: makeSelectExperience(),
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

export default compose(withConnect)(Experience);
