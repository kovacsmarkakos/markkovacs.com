import React, { useContext } from 'react';
import { ThemeContext } from 'providers/ThemeProvider';
import { Container } from 'components/common';
import { Wrapper, Flex, Links, Details } from './styles';
import social from './social.json';
import socialLight from './socialLight.json'

export const Footer = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <Wrapper>
      <Flex as={Container}>
        <Details theme={theme}>
          <h2>markkovacs.com</h2>
          <span>
            © All rights are reserved | {new Date().getFullYear()} | Made by{' '}
            <a href="https://markkovacs.com" rel="noopener noreferrer" target="_blank">
              Mark Kovacs
            </a>
          </span>
        </Details>
        <Links>
          {theme === 'dark' ? 
            socialLight.map(({ id, name, link, icon }) => (
              <a key={id} href={link} target="_blank" rel="noopener noreferrer" aria-label={`follow me on ${name}`}>
                <img width="24" src={icon} alt={name} />
              </a>
            ))
          :
            social.map(({ id, name, link, icon }) => (
              <a key={id} href={link} target="_blank" rel="noopener noreferrer" aria-label={`follow me on ${name}`}>
                <img width="24" src={icon} alt={name} />
              </a>
            ))
          }
        </Links>
      </Flex>
    </Wrapper>
  );
}