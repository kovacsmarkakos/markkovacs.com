import styled from 'styled-components';

export const Card = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 1.5rem 1.5rem;
  background: ${({ theme }) => (theme === 'light' ? '#fff' : '#181717')};
`;
