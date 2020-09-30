import React from 'react';
import { Layout, SEO } from 'components/common';
import { Hero, About, Contact, Projects } from 'components/landing';

export default () => (
  <Layout>
    <SEO />
    <Hero />
    <Projects />
    <About />
    <Contact />
  </Layout>
);
