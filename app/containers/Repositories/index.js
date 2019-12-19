/**
 *
 * Repositories
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';

import Repository from 'components/Repository';
import styled from 'styled-components';
import { Container, Row } from 'react-grid-system';
import Button from 'components/Button';

import makeSelectRepositories from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

const Title = styled.h2`
  position: relative;
  display: inline-block;
  &:after {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    top: 100%;
    margin: 10px 0;
    width: 50%;
    height: 6px;
    background: #556393;
  }
`;

const ButtonWrapper = styled.div`
  width: 100%;
  text-align: center;
  margin: 1em auto;
`;

export function Repositories(props) {
  useInjectReducer({ key: 'repositories', reducer });
  useInjectSaga({ key: 'repositories', saga });

  const { repositories } = props;

  return (
    <Container>
      <Row>
        <Title>
          <FormattedMessage {...messages.header} />
        </Title>
      </Row>
      <Row>
        <p>
          <FormattedMessage {...messages.headline} />
        </p>
      </Row>
      <Row>
        {reducer.loading ? (
          <p>Loading...</p>
        ) : (
          repositories.repos.map(repo => (
            <Repository repo={repo} key={repo.id} />
          ))
        )}
      </Row>
      <Row>
        <ButtonWrapper>
          <Button external href="https://github.com/danibeam">
            <FormattedMessage {...messages.action} />
          </Button>
        </ButtonWrapper>
      </Row>
    </Container>
  );
}

Repositories.propTypes = {
  dispatch: PropTypes.func.isRequired,
  repositories: PropTypes.object.isRequired,
};

const mapStateToProps = createStructuredSelector({
  repositories: makeSelectRepositories(),
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

export default compose(withConnect)(Repositories);
