import React, { Component } from 'react';
import Helmet from 'react-helmet';
import styled from '@emotion/styled';
import Link from 'gatsby-link';

import { fadeInBottom } from '../css/animations';

import ImageShift from '../components/ImageShift';
import FourOhFour from '../images/404.jpeg';

const Container = styled.div`
  max-width: 100%;
  transform: translateY(16px) scale(0.99);
  transform-origin: 50% 0;
  opacity: 0;
  animation: ${fadeInBottom} 0.3s cubic-bezier(0.39, 0.575, 0.565, 1) both;
`;

const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  transition: transform 175ms ease-in-out;
  &:hover {
    transform: scale(1.075);
  }
`;

const Header = styled.h1`
  color: white;
  padding: 1rem 2rem;
  position: absolute;
  z-index: 2;
  font-size: 72px;
  text-transform: uppercase;
  text-align: center;
  line-height: 96px;
  pointer-events: none;
`;

const Description = styled.p`
  font-size: 0.9rem;
  position: absolute;
  bottom: 8px;
  left: 0;
  right: 0;
  color: rgba(255, 255, 255, 0.8);
  z-index: 2;
  text-align: center;
  font-style: italic;
`;

const Image = styled(ImageShift)`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`;

export default class OhNoFourOhFour extends Component {
  render() {
    return (
      <React.Fragment>
        <Helmet>
          <title>404 - Not Found</title>
        </Helmet>
        <Container>
          <Link to="/">
            <ImageContainer>
              <Header>Oh no! 404!</Header>
              <Description>(Click this to go back to Home)</Description>
              <Image src={FourOhFour} />
            </ImageContainer>
          </Link>
        </Container>
      </React.Fragment>
    );
  }
}