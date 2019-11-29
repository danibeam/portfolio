/**
 *
 * SimpleSection
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

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

const Headline = styled.h3`
  color: #e2e2e2;
  font-style: italic;
`;

const Content = styled.p`
  text-align: justify;
`;

function SimpleSection(props) {
  return (
    <section>
      <Title>{props.title}</Title>
      <Headline>{props.headline}</Headline>
      <Content>{props.content}</Content>
    </section>
  );
}

SimpleSection.propTypes = {
  title: PropTypes.string,
  headline: PropTypes.string,
  content: PropTypes.string,
};

export default SimpleSection;
