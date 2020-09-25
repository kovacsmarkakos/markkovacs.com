import React, {useContext} from 'react';
import { ThemeContext } from 'providers/ThemeProvider';
import { Wrapper, Bar } from './styles';

const Hamburger = ({ isSidebarOn, setIsSidebarOn }) => {

  const { theme } = useContext(ThemeContext);
  
  return (
    <Wrapper isSidebarOn={isSidebarOn} onClick={() => setIsSidebarOn(!isSidebarOn)}>
      <Bar top isSidebarOn={isSidebarOn} theme={theme}/>
      <Bar mid isSidebarOn={isSidebarOn} theme={theme} />
      <Bar bottom isSidebarOn={isSidebarOn} theme={theme} />
    </Wrapper>
  )
};

export default Hamburger;
