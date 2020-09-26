import styled from 'styled-components';

export const Wrapper = styled.button`
  width: 22px;
  height: 22px;
  padding: 8px;
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
