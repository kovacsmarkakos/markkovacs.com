import React, { useContext } from 'react';
import { ThemeContext } from 'providers/ThemeProvider';
import NavbarLinks from '../NavbarLinks';
import { Wrapper } from './styles';

const Sidebar = ({ isSidebarOn, setIsSidebarOn }) => {
  const { theme } = useContext(ThemeContext);
  
  return (
  <Wrapper active={isSidebarOn} onClick={setIsSidebarOn} theme={theme}>
    <NavbarLinks />
  </Wrapper>
  )
};

export default Sidebar;