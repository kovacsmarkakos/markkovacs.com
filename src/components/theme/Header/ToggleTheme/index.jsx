import React, { useContext } from 'react';
import { ThemeContext } from 'providers/ThemeProvider';
import lightIcon from 'assets/icons/brightness_light.svg';
import darkIcon from 'assets/icons/brightness_dark.svg';
import { Wrapper } from './styles';

const ToggleTheme = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <Wrapper type="button" onClick={toggleTheme}>
      <img src={theme === 'light' ? darkIcon : lightIcon} alt={theme} />
    </Wrapper>
  );
};

export default ToggleTheme;
