import styled from 'styled-components';
import detailsIllustration from 'assets/illustrations/method-rectangle-v4.svg';

export const Wrapper = styled.div`
  background-image: url(${detailsIllustration});
  background-size: contain;
  background-position: left top;
  background-repeat: no-repeat;
`;

export const SkillsWrapper = styled.div`
  padding: 4rem 0;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

export const Details = styled.div`
  flex: 1;
  padding-left: 2rem;

  @media (max-width: 960px) {
    padding-left: unset;
    width: 100%;
  }

  h3 {
    margin-bottom: 2rem;
    font-size: 1.8rem;

    @media (max-width: 960px) {
      mix-blend-mode: ${({ theme }) => (theme === 'light' ? 'unset' : 'difference')};
    }
  }

  p {
    font-size: 1.2rem;
    font-weight: normal;
    line-height: 1.4;
    color: ${({ theme }) => (theme === 'dark' ? '#c7c7c7' : '#707070')};

    @media (max-width: 960px) {
      font-size: 1.1rem;
      line-height: 1.3;
      mix-blend-mode: ${({ theme }) => (theme === 'light' ? 'unset' : 'difference')};
    }
  }
`;

export const Thumbnail = styled.div`
  flex: 1;

  @media (max-width: 960px) {
    width: 100%;
    margin-bottom: 2rem;
  }

  img {
    width: 100%;
  }
`;

/* export const SkillsIcons = styled.div`
  display: flex;
  margin-bottom: 3.5rem;
`; */

export const SkillIcon = styled.svg`
  fill: ${({ theme }) => (theme === 'dark' ? '#fff' : '#212121')};
  width: 2.5rem;
  height: 2.5rem;
  margin-right: 1rem;

  &:last-child {
    margin-right: 0;
  }
`;
