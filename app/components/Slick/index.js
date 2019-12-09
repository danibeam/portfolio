/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import styled from 'styled-components';

import { CarouselProvider, Slider, Slide } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

import {
  FaReact,
  FaAngular,
  FaJsSquare,
  FaHtml5,
  FaNodeJs,
  FaSass,
} from 'react-icons/fa';

const Icon = styled.svg`
  font-size: 2.5em;
`;

const Container = styled.div`
  max-width: 50%;
  min-width: 300px;
  margin: auto;
`;

export default class extends React.Component {
  render() {
    return (
      <Container>
        <CarouselProvider
          naturalSlideWidth={100}
          naturalSlideHeight={50}
          totalSlides={6}
          dragEnabled={false}
          touchEnabled={false}
          infinite
          visibleSlides={4}
          isPlaying
          interval={2000}
        >
          <Slider>
            <Slide index={0}>
              <Icon>
                <FaReact />
              </Icon>
            </Slide>
            <Slide index={1}>
              <Icon>
                <FaAngular />
              </Icon>
            </Slide>
            <Slide index={2}>
              <Icon>
                <FaJsSquare />
              </Icon>
            </Slide>
            <Slide index={3}>
              <Icon>
                <FaNodeJs />
              </Icon>
            </Slide>
            <Slide index={4}>
              <Icon>
                <FaSass />
              </Icon>
            </Slide>
            <Slide index={5}>
              <Icon>
                <FaHtml5 />
              </Icon>
            </Slide>
          </Slider>
          {/* <ButtonBack>Back</ButtonBack>
          <ButtonNext>Next</ButtonNext> */}
        </CarouselProvider>
      </Container>
    );
  }
}
