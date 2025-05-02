import React from 'react';
import Layout from './components/Layout';
import Header from './components/Header';
import Hero from './components/Hero';
import Summary from './components/Summary';
import Skills from './components/Skills';
import CodeShowcase from './components/CodeShowcase';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <Layout>
      <Header />
      <Hero />
      <Summary />
      <Skills />
      <CodeShowcase />
      <Experience />
      <Projects />
      <Contact />
    </Layout>
  );
}

export default App;