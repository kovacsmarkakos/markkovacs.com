import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 18rem 0 4rem 0;

  @media (max-width: 1960px) {
    padding: 8rem 0 4rem;
  }
`;

export const Flex = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 680px) {
    flex-direction: column;
    text-align: center;
    align-items: center;
  }
`;

export const Links = styled.div`
  display: flex;
  align-items: center;

  a {
    margin: 0 0.5rem;
    padding: 6px;
    transition: all 0.2s;

    img {
      margin: 0;
      max-width: 100%;
    }

    &:first-child,
    &:last-child {
      margin: 0;
    }

    &:hover {
      opacity: 0.8;
      transform: translateY(-2px);
    }
  }
`;

export const Details = styled.div`
  h2,
  a,
  span {
    color: ${({ theme }) => (theme === 'light' ? '#212121' : '#fff')};
  }

  @media (max-width: 680px) {
    margin-bottom: 2rem;
  }
`;
