import styled from 'styled-components';

export const Wrapper = styled.button`
  width: 24px;
  height: 24px;
  padding: 0;
  background: none;
  border: none;
  cursor: pointer;
  transition: 0.3s all;

  &:focus {
    outline: none;
    transition: 0.3s all;
  }

  @media (max-width: 960px) {
    margin-top: 1rem;
    text-align: left;
  }

  img {
    margin-bottom: unset;
  }
`;
