import React, { useContext } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { ThemeContext } from 'providers/ThemeProvider';
import { Container, Card } from 'components/common';
import Star from 'components/common/Icons/Star';
import Fork from 'components/common/Icons/Fork';
import { Wrapper, Grid, Item, Content, Stats, ImageContainer } from './styles';

export const Projects = () => {
  const { theme } = useContext(ThemeContext);
  const {
    github: {
      viewer: {
        pinnedItems: { edges },
      },
    },
  } = useStaticQuery(
    graphql`
      {
        github {
          viewer {
            pinnedItems(first: 3) {
              edges {
                node {
                  ... on GitHub_Repository {
                    id
                    name
                    url
                    homepageUrl
                    description
                    openGraphImageUrl
                    stargazers {
                      totalCount
                    }
                    forkCount
                  }
                }
              }
            }
          }
        }
      }
    `
  );

  return (
    <Wrapper as={Container} id="projects">
      <h3>Projects</h3>
      <Grid>
        {edges.map(({ node }) => (
          <Item key={node.id} theme={theme}>
            <Card theme={theme}>
              <Content>
                <h4>{node.name}</h4>
                <p>{node.description}</p>
                <a href={node.homepageUrl} target="_blank" rel="noopener noreferrer">
                  <strong>Demo </strong>
                </a>
                <span> | </span>
                <a href={node.url} target="_blank" rel="noopener noreferrer">
                  <strong> Github</strong>
                </a>
              </Content>
              <Stats theme={theme}>
                <div>
                  <Star color={theme === 'light' ? '#000' : '#fff'} />
                  <span>{node.stargazers.totalCount}</span>
                </div>
                <div>
                  <Fork color={theme === 'light' ? '#000' : '#fff'} />
                  <span>{node.forkCount}</span>
                </div>
              </Stats>
            </Card>
            <ImageContainer>
              <a href={node.homepageUrl} target="_blank" rel="noopener noreferrer">
                <img src={node.openGraphImageUrl} alt="thumbnail" />
              </a>
            </ImageContainer>
          </Item>
        ))}
      </Grid>
    </Wrapper>
  );
};
