import styled from 'styled-components';
import overlayIllustration from 'assets/illustrations/method-triangle-v3.svg';
import { motion } from 'framer-motion';

const variants = {
  visible: { opacity: 1, transition: { duration: 0.8 } },
  hidden: { opacity: 0 },
};

export const Wrapper = styled.div`
  padding-bottom: 4rem;
  background-image: url(${overlayIllustration});
  background-size: contain;
  background-position: right top;
  background-repeat: no-repeat;
`;

export const HeroWrapper = styled.div`
  padding: 8rem 0;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 960px) {
    flex-direction: column;
    padding: 4rem 0;
  }
`;

export const Details = styled(motion.div).attrs(() => ({
  initial: 'hidden',
  variants,
}))`
  flex: 1;

  @media (max-width: 960px) {
    width: 100%;
    margin-bottom: 2rem;
  }

  h1 {
    margin-bottom: 2rem;
    font-size: 36pt;
    color: ${({ theme }) => (theme === 'light' ? '#212121' : '#fff')};

    @media (max-width: 960px) {
      mix-blend-mode: ${({ theme }) => (theme === 'light' ? 'unset' : 'difference')};
    }

    @media (max-width: 680px) {
      font-size: 30pt;
    }
  }

  h4 {
    margin-bottom: 2.5rem;
    font-size: 32pt;
    font-weight: normal;
    color: ${({ theme }) => (theme === 'light' ? '#707070' : '#e6e6e6')};

    @media (max-width: 960px) {
      mix-blend-mode: ${({ theme }) => (theme === 'light' ? 'unset' : 'difference')};
    }

    @media (max-width: 680px) {
      font-size: 26pt;
    }
  }
`;
