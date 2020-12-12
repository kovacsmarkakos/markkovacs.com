import styled from 'styled-components';

export const Wrapper = styled.div`
  background: transparent;
  width: 100%;
`;

export const Overlay = styled.div`
  position: fixed;
  background: #27373a9e;
  width: 100%;
  height: 100%;
  opacity: 0;
  z-index: -1;
  transition: all 0.4s;

  ${({ isSidebarOn }) =>
    isSidebarOn &&
    `
      opacity: 1;
			z-index: 4;	
	`}
`;
