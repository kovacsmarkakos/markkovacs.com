import React, { useState } from 'react';
import Navbar from './Navbar';
import Hamburger from './Hamburger';
import Sidebar from './Sidebar';
import { Wrapper, Overlay } from './styles';

export const Header = () => {
  const [isSidebarOn, setIsSidebarOn] = useState(false);

  return (
    <Wrapper>
      <Overlay isSidebarOn={isSidebarOn} onClick={() => setIsSidebarOn(!isSidebarOn)} />
      <Navbar />
      <Hamburger isSidebarOn={isSidebarOn} setIsSidebarOn={setIsSidebarOn} />
      <Sidebar isSidebarOn={isSidebarOn} setIsSidebarOn={setIsSidebarOn} />
    </Wrapper>
  );
};
