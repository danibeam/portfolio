/**
 *
 * Repository
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Col, Row, Container } from 'react-grid-system';
import A from 'components/A';
import { FaBalanceScale, FaCalendarDay } from 'react-icons/fa';
import { FormattedDate } from 'react-intl';
import Button from 'components/Button';

const Card = styled.div`
  margin: 0.5em 0;
  padding: 1em;
  border-radius: 0.5em;
  box-shadow: 7px 6px 9px 0px rgba(0, 0, 0, 0.75);
  min-height: 250px;
`;

const License = styled.div`
  text-align: center;
  margin-top: 1.5em;
`;

const Actions = styled.div`
  width: 100%;
  text-align: center;
`;

function Repository({ repo }) {
  return (
    <Col xs={12} sm={6} md={6} lg={6}>
      <Card>
        <Container>
          <Row>
            <A href={repo.html_url} target="blank" rel="noreferrer noopener">
              {repo.name}
            </A>
          </Row>
          <Row>
            <p>{repo.description}</p>
          </Row>
          <Row>
            <FaCalendarDay />
            &nbsp;
            <FormattedDate
              value={new Date(repo.updated_at)}
              year="numeric"
              month="long"
              day="2-digit"
            />
          </Row>
          <Row>
            <Col md={12}>
              <License>
                {repo.license ? (
                  <p>
                    <FaBalanceScale /> {repo.license.name}
                  </p>
                ) : (
                  <p>No license provided</p>
                )}
              </License>
            </Col>
          </Row>
          <Actions>
            {repo.homepage !== null ? (
              <Button external href={repo.homepage}>
                Demo
              </Button>
            ) : (
              ''
            )}
          </Actions>
        </Container>
      </Card>
    </Col>
  );
}

Repository.propTypes = {
  repo: PropTypes.shape({
    name: PropTypes.string,
    url: PropTypes.string,
    description: PropTypes.string,
    license: PropTypes.object,
    updated_at: PropTypes.string,
    homepage: PropTypes.string,
  }).isRequired,
};

export default Repository;
