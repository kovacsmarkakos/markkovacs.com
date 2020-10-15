import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 2rem 0;

  h3 {
    margin-bottom: 2rem;
    font-size: 1.8rem;
  }
`;

export const Grid = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: 1fr;
  grid-template-rows: 4fr;
  gap: 1.8rem 1.8rem;
`;

export const Item = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  overflow: hidden;
  box-shadow: 0 1px 6px 0 rgba(0, 0, 0, 0.11);

  @media (max-width: 960px) {
    flex-direction: column-reverse;
  }

  h4 {
    color: ${({ theme }) => (theme === 'light' ? '#212121' : '#fff')};
  }

  p {
    color: ${({ theme }) => (theme === 'light' ? '#707070' : '#c7c7c7')};
  }

  a {
    color: ${({ theme }) => (theme === 'light' ? '#707070' : '#c7c7c7')};
    transition: 0.3s;

    &:hover {
      color: #33666c;
    }
  }
`;

export const Content = styled.div`
  padding: 1rem 0;
`;

export const Stats = styled.div`
  display: flex;
  align-items: center;
  margin-top: 0.5rem;

  div {
    display: flex;
    &:first-child {
      margin-right: 0.5rem;
    }

    svg path {
      fill: ${({ theme }) => (theme === 'light' ? '#000' : '#fff')};
    }

    span {
      color: ${({ theme }) => (theme === 'light' ? '#000' : '#fff')};
      margin-left: 0.5rem;
    }
  }
`;

export const ImageContainer = styled.div`
  flex: 2;

  img {
    max-width: 100%;
    max-height: 100%;
    margin-bottom: 0;
  }
`;
