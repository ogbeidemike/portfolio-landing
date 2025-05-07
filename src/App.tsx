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
      {/* Site Header */}
      <Header />

      {/* Hero / Intro Section */}
      <Hero />

      {/* Personal Summary / About Me */}
      <Summary />

      {/* Skills Showcase */}
      <Skills />

      {/* Code Demos or GitHub Showcase */}
      <CodeShowcase />

      {/* Work Experience Timeline */}
      <Experience />

      {/* ✅ Projects Portfolio Section */}
      <Projects />

      {/* Contact / Footer */}
      <Contact />
    </Layout>
  );
}

export default App;
