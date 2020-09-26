import styled from 'styled-components';

export const Wrapper = styled.div`
  a {
    color: ${({ theme }) => (theme === 'light' ? '#000' : '#fff')};
    text-decoration: none;
  }

  ${({ desktop }) =>
    desktop
      ? `
			display: flex;
			align-items: center;

			@media (max-width: 960px) {
					display: none;
			}

			a {
					margin-right: 1rem;
					padding: .5rem;

					&:last-child {
							margin-right: unset;
					}
			}
		`
      : `
			width: fit-content;
			padding: 6rem 2.5rem;
			display: flex;
			flex-direction: column;

			a {
					margin-bottom: 2rem;
					padding: .5rem;

					&:last-child {
							margin-bottom: unset;
					}
			}
	`}
`;
