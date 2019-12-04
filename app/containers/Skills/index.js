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
import './toggle.scss';

import { Container } from 'react-grid-system';
import styled from 'styled-components';

import { useInjectReducer } from 'utils/injectReducer';
import Slick from 'components/Slick';
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
  padding: 1em 0;
  -webkit-transition: background-color 500ms linear;
  -ms-transition: background-color 500ms linear;
  transition: background-color 500ms linear;
  ${props =>
    props.theme === 'default'
      ? `
      background-color: #4CA5FF;
      color: #FFF0D8;
    `
      : ``}
  ${props =>
    props.theme === 'dark'
      ? `
          background-color: #1d1b1b;
          color: #fafafa;
        `
      : ``}
  ${props =>
    props.theme === 'dracula'
      ? `
          background-color: #3c4556;
          color: #FF79C6;
        `
      : ``}  
`;

const themeOptions = [
  {
    displayName: '💤',
    value: 'default',
    background: '',
    color: '#fafafa',
  },
  {
    displayName: '🌙',
    value: 'dark',
    background: '#1d1b1b',
    color: '#fafafa',
  },
  {
    displayName: '🧛‍♂️',
    value: 'dracula',
    background: '#3c4556',
    color: '#FF79C6',
  },
];

export function Skills(props) {
  useInjectReducer({ key: 'skills', reducer });

  const handleChangeTheme = theme => {
    props.dispatch({ type: CHANGE_THEME_ACTION, theme });
    localStorage.setItem('theme', theme);
  };

  return (
    <StyledWrapper theme={props.skills.theme}>
      <Container>
        <h2>
          <FormattedMessage {...messages.core} />
        </h2>
        <p>
          <FormattedMessage {...messages.headline} />
        </p>
        <Slick />
        <MultiToggle
          options={themeOptions}
          selectedOption={props.skills.theme}
          onSelectOption={handleChangeTheme}
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
