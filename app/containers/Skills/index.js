/**
 *
 * Skills
 *
 */

// import React, { useState, useEffect } from 'react';
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import MultiToggle from 'react-multi-toggle';

import { Container } from 'react-grid-system';
import styled from 'styled-components';

import { useInjectReducer } from 'utils/injectReducer';
import makeSelectSkills from './selectors';
import reducer from './reducer';
import messages from './messages';
import { CHANGE_THEME_ACTION } from './constants';

const StyledWrapper = styled.div`
  width: 100vw;
  position: relative;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
  background-color: red;
`;

const themeOptions = [
  {
    displayName: 'Default',
    value: 'default',
  },
  {
    displayName: 'Dark',
    value: 'dark',
  },
  {
    displayName: 'Dracula',
    value: 'dracula',
  },
];

export function Skills(props) {
  useInjectReducer({ key: 'skills', reducer });

  const handleChangeTheme = theme => {
    props.dispatch({ type: CHANGE_THEME_ACTION, theme });
    localStorage.setItem('theme', theme);
  };

  return (
    <StyledWrapper>
      <Container>
        <h2>
          <FormattedMessage {...messages.header} />
        </h2>
        <h3>{props.skills.theme}</h3>
        <MultiToggle
          options={themeOptions}
          selectedOption={props.skills.theme}
          onSelectOption={handleChangeTheme}
          label="Select Theme"
        />
      </Container>
    </StyledWrapper>
  );
}

Skills.propTypes = {
  dispatch: PropTypes.func.isRequired,
  skills: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  skills: makeSelectSkills(),
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

export default compose(withConnect)(Skills);
