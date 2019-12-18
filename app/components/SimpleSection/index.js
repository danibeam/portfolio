/**
 *
 * SimpleSection
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Avatar from 'images/descarga.jpg';

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
  //// color: #e2e2e2;
  //// font-style: italic;
`;

const Content = styled.p`
  text-align: justify;
`;

const ProfileIMG = styled.span`
  @media (min-width: 767px) {
    display: grid;
  }
  & img {
    float: left;
    border-radius: 50%;
    margin: 0 1em 1em 0;
    width: 150px;
    height: auto;

    @media (min-width: 767px) {
      margin: 0.5em 40%;
    }
  }
`;

function SimpleSection(props) {
  return (
    <section>
      <Title>{props.title}</Title>
      <Headline>{props.headline}</Headline>
      {props.profile ? (
        <ProfileIMG>
          <img src={Avatar} alt="Profile" title="Profile" />
        </ProfileIMG>
      ) : (
        ''
      )}
      <Content>{props.content}</Content>
    </section>
  );
}

SimpleSection.propTypes = {
  // title: PropTypes.string,
  title: PropTypes.object,
  // headline: PropTypes.string,
  headline: PropTypes.object,
  // content: PropTypes.string,
  content: PropTypes.object,
  profile: PropTypes.bool,
};

export default SimpleSection;
