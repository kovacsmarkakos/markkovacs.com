import styled from 'styled-components';

export const Card = styled.div`
  flex: 1;
  padding: 1rem;
  background: ${({ theme }) => (theme === 'light' ? '#fff' : '#181717')};
  height: 100%;
`;
