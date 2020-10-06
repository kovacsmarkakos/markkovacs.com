import React, { useContext } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { ThemeContext } from 'providers/ThemeProvider';
import { Header } from 'components/theme';
import { Container, Button } from 'components/common';
import { Wrapper, HeroWrapper, Details } from './styles';

export const Hero = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <Wrapper>
      <Header />
      <HeroWrapper as={Container}>
        <Details theme={theme} animate="visible">
          <h1>Hello There, I'm Mark!</h1>
          <h2>I’m a Web Developer!</h2>
          <Button as={AnchorLink} href="#contact">
            Hire me
          </Button>
        </Details>
      </HeroWrapper>
    </Wrapper>
  );
};
