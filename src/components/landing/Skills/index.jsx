import React, { useContext } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { ThemeContext } from 'providers/ThemeProvider';
import { Container, Button } from 'components/common';
import dev from 'assets/illustrations/pixeltrue-web-development.svg';
import { Wrapper, SkillsWrapper, Details, Thumbnail, SkillsIcons } from './styles';

export const Skills = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <Wrapper id="about">
      <SkillsWrapper as={Container}>
        <Thumbnail>
          <img src={dev} alt="About section illustration" />
        </Thumbnail>
        <Details theme={theme}>
          <h1>More about me</h1>
          <p>
          I'm a developer, because I love building and improving things.
          I strive to build efficient, fast and aesthetically pleasing applications.
          To achieve this goal, I like to learn and use the latest and greatest tools and technologies.
          </p>
          <p>I'm currently looking for an opportunity to work 
          with <strong>JavaScript</strong> and <strong>React</strong>, and in the future
          I would also like to work with mobile applications,
          and learn more things like VueJS and UX design.
          </p>
          <p>
          When I'm not busy building apps, you can find me 
          tinkering with my car, hiking somewhere, or playing videogames.
          </p>
          <p>Languages and tools:</p>
          <SkillsIcons>

          </SkillsIcons>
          <Button as={AnchorLink} href="#contact">
            Hire me
          </Button>
        </Details>
      </SkillsWrapper>
    </Wrapper>
  );
};
