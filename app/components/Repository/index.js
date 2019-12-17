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

import JSlogo from 'images/Javascript.png';
import TSlogo from 'images/Typescript.png';
import HTMLlogo from 'images/html.jpg';

// import Button from 'components/Button';

const Card = styled.div`
  margin: 0.5em 0;
  padding: 1em;
  border-radius: 0.5em;
  box-shadow: 0 0px 2.2px rgba(0, 0, 0, 0.02), 0 0px 5.3px rgba(0, 0, 0, 0.028),
    0 0px 10px rgba(0, 0, 0, 0.035), 0 0px 17.9px rgba(0, 0, 0, 0.042),
    0 0px 33.4px rgba(0, 0, 0, 0.05), 0 0px 80px rgba(0, 0, 0, 0.07);
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
  font-size: 1.2em;
  & img {
    width: 1em;
    height: auto;
  }
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
              {repo.language === 'JavaScript' ? (
                // <FaJsSquare title="Javascript" color="yellow" />
                <img src={JSlogo} alt="Javascript" title="Javascript" />
              ) : (
                ''
              )}
              {repo.language === 'TypeScript' ? (
                // <FaJsSquare title="Javascript" color="yellow" />
                <img src={TSlogo} alt="Typescript" title="Typescript" />
              ) : (
                ''
              )}
              {repo.language === 'HTML' ? (
                // <FaJsSquare title="Javascript" color="yellow" />
                <img src={HTMLlogo} alt="HTML" title="HTML" />
              ) : (
                ''
              )}
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
    language: PropTypes.string,
  }).isRequired,
};

export default Repository;
