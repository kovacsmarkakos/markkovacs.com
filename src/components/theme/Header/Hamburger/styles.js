import styled from 'styled-components';

export const Wrapper = styled.div`
  z-index: 5;
  top: 1.6rem;
  right: 1.8rem;
  display: none;
  cursor: pointer;
  transition: left 500ms cubic-bezier(0.6, 0.05, 0.28, 0.91);
  position: absolute;

  @media (max-width: 960px) {
    display: block;
  }

  ${({ isSidebarOn }) =>
    isSidebarOn &&
    `
			right: 1.8rem;
			top: 1.4rem;
		
			@media (max-width: 960px) {
				right: 1.8rem;
				position: fixed;
			}
		
			@media (max-width: 600px) {
				right: 1.8rem;
			}
	`}
`;

export const Bar = styled.div`
	width: 1.6rem;
	height: .15rem;
	margin-bottom: .3rem;
	background-color: #212121;
	transition: transform 500ms cubic-bezier(0.6, 0.05, 0.28, 0.91),
	opacity 500ms,
	box-shadow 250ms,
	background-color 500ms;

	@media (max-width: 600px){
		width: 1.6rem;
	}

	${({ top, isSidebarOn, theme }) =>
    top &&
    isSidebarOn &&
    `
		background-color: ${theme === 'light' ? '#212121' : '#fff'};
		transform: translateY(8px) rotate(-135deg);
		
	`}

	${({ mid, isSidebarOn }) =>
    mid &&
    isSidebarOn &&
    `
		transform: scale(0);
		`}

	${({ bottom, isSidebarOn, theme }) =>
    bottom &&
    isSidebarOn &&
    `
			background-color: ${theme === 'light' ? '#212121' : '#fff'};
			transform: translateY(-6px) rotate(-45deg);
	`}
`;
