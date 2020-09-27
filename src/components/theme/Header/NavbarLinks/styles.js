import styled from 'styled-components';

export const Wrapper = styled.div`
  a {
    display: inline-block;
    position: relative;
    text-decoration: none;
    width: fit-content;
    color: ${({ theme }) => (theme === 'light' ? '#000' : '#fff')};

    &:after {
      position: absolute;
      content: '';
      top: 92%;
      left: 10%;
      width: 80%;
      height: 3px;
      background: #33666c;
      opacity: 0.6;
      transform: scaleX(0);
      transform-origin: right;
      transition: transform 0.4s;
    }

    &:hover:after {
      transform: scaleX(1);
      transform-origin: left;
    }
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
				padding: 8px;

				&:last-child {
					margin-right: unset;
				}
			}
		`
      : `
			padding: 6rem 2.5rem;
			display: flex;
			flex-direction: column;

			a {
				margin-bottom: 2rem;
				padding: 8px;

				&:last-child {
					margin-bottom: unset;
				}
			}
	`}
`;
