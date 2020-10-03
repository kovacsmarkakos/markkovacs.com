import React, { useContext } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { ThemeContext } from 'providers/ThemeProvider';
import ToggleTheme from 'components/theme/Header/ToggleTheme';
import { Wrapper } from './styles';

const NavbarLinks = ({ desktop, isSidebarOn, setIsSidebarOn }) => {
  const { theme } = useContext(ThemeContext);

  function handleClick() {
    // eslint-disable-next-line no-unused-expressions
    !desktop ? setIsSidebarOn(!isSidebarOn) : null;
  }

  return (
    <Wrapper desktop={desktop} theme={theme} animate="visible">
      <AnchorLink onClick={handleClick} href="#projects">
        Projects
      </AnchorLink>
      <AnchorLink onClick={handleClick} href="#about">
        About
      </AnchorLink>
      <AnchorLink onClick={handleClick} href="#contact">
        Contact
      </AnchorLink>
      <ToggleTheme />
    </Wrapper>
  );
};

export default NavbarLinks;
