import React from 'react';
import { Layout, SEO } from 'components/common';
import { Hero, Skills, Contact, Projects } from 'components/landing';

export default () => (
  <Layout>
    <SEO />
    <Hero />
    <Projects />
    <Skills />
    <Contact />
  </Layout>
)