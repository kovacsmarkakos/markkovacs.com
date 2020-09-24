import React from 'react';
import { Wrapper, Details, Thumbnail } from './styles';
import { Container } from 'components/common';
import ContactForm from './ContactForm';
import contact from 'assets/illustrations/pixeltrue-business-meeting.svg';

export const Contact = () => (
  <Wrapper as={Container} id="contact">
    <Details>
      <ContactForm />
    </Details>
    <Thumbnail>
      <img src={contact} alt="I’m Mark and I’m a Web Developer!" />
    </Thumbnail>
  </Wrapper>
);
