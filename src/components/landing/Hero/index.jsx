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
        <Details theme={theme}>
          <h1>Hello There!</h1>
          <h4>I’m Mark and I’m a Web Developer!</h4>
          <Button as={AnchorLink} href="#contact">
            Hire me
          </Button>
        </Details>
      </HeroWrapper>
    </Wrapper>
  );
};
