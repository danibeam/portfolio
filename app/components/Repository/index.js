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
import {
  FaBalanceScale,
  FaCalendarDay,
  FaCodeBranch,
  FaGithub,
  FaHome,
  FaStar,
} from 'react-icons/fa';
import { FormattedDate } from 'react-intl';
// import Button from 'components/Button';

const Card = styled.div`
  margin: 0.5em 0;
  padding: 1em;
  border-radius: 0.5em;
  box-shadow: 7px 6px 9px 0px rgba(0, 0, 0, 0.75);
`;

const Truncated = styled.div`
  margin: 1em 0;
  overflow: hidden;
  position: relative;
  line-height: 1.5em;
  ////max-height: 3em;
  height: 3em;
  text-align: left;
  ////margin-right: -1em;
  padding-right: 1em;
`;

const License = styled.div`
  text-align: center;
  margin-top: 1.5em;
`;

const Actions = styled.div`
  width: 100%;
  text-align: center;
  & a {
    font-size: 1.5em;
    margin: 0 0.5em;
  }
`;

const RepoFeatures = styled.span`
  position: absolute;
  right: 0;
`;

function Repository({ repo }) {
  return (
    <Col xs={12} sm={6} md={6} lg={4}>
      <Card>
        <Container>
          <Row>
            <A href={repo.html_url} target="blank" rel="noreferrer noopener">
              {repo.name}
            </A>

            <RepoFeatures>
              {repo.fork ? <FaCodeBranch title="Forked" /> : ''}
              {repo.stargazers_count > 0 ? <FaStar title="Stars given" /> : ''}
            </RepoFeatures>
          </Row>
          <Row>
            <Truncated>{repo.description}</Truncated>
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
            <A
              href={repo.html_url}
              target="blank"
              rel="noreferrer noopener"
              title="GitHub"
            >
              <FaGithub />
            </A>
            {repo.homepage !== null ? (
              <A
                href={repo.homepage}
                target="blank"
                rel="noreferrer noopener"
                title="Demo"
              >
                <FaHome />
              </A>
            ) : (
              ''
            )}

            {/* <Button external href={repo.url}>
              <FaGithub />
            </Button>
            {repo.homepage !== null ? (
              <Button external href={repo.homepage}>
                Demo
              </Button>
            ) : (
              ''
            )} */}
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
    fork: PropTypes.bool,
    stargazers_count: PropTypes.number,
  }).isRequired,
};

export default Repository;
