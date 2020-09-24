import React, { useContext } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { ThemeContext } from 'providers/ThemeProvider';
import { Header } from 'components/theme';
import { Container, Button } from 'components/common';
import { Wrapper, HeroWrapper, Details, /* Thumbnail */ } from './styles';
/* import logo from 'assets/logo/kovacs-mark-svg-logo.svg'; */

export const Intro = () => {
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
        {/* <Thumbnail>
          <img src={logo} alt="Logo" />
        </Thumbnail> */}
      </HeroWrapper>
    </Wrapper>
  );
};
