import React, { useEffect, useState } from 'react';
import { portfolioData } from '../data'; // Corrected path to import from index.ts in data folder
import Prism from 'prismjs';
import 'prismjs/themes/prism-tomorrow.css';

const CodeShowcase: React.FC = () => {
  const { codeSnippets } = portfolioData;
  const [languagesLoaded, setLanguagesLoaded] = useState(false);
  const [loadingError, setLoadingError] = useState<string | null>(null); // New state to track errors

  useEffect(() => {
    const loadLanguages = async () => {
      try {
        // Create a unique set of languages to load
        const uniqueLanguages = Array.from(
          new Set(codeSnippets.map((snippet) => snippet.language.toLowerCase()))
        );

        // Dynamically import the necessary Prism components for each language
        await Promise.all(
          uniqueLanguages.map(async (lang) => {
            try {
              await import(`prismjs/components/prism-${lang}.js`); // Dynamically load Prism language components
            } catch (error) {
              console.warn(`Prism: Unable to load language "${lang}"`, error);
            }
          })
        );

        // Trigger code highlighting after languages have loaded
        Prism.highlightAll();
        setLanguagesLoaded(true); // Set languages as loaded
      } catch (error) {
        console.error('Error loading Prism components:', error);
        setLoadingError('Error loading code snippets or language components.');
      }
    };

    loadLanguages();
  }, [codeSnippets]); // Re-run effect if codeSnippets changes

  return (
    <section id="code-showcase" className="py-20 bg-dark text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-4 text-center">Code Showcase</h2>
        <p className="text-lg text-gray-300 text-center mb-12 max-w-3xl mx-auto">
          Sample code demonstrating expertise in various technologies relevant to financial systems.
        </p>

        <div className="space-y-16">
          {loadingError ? (
            <p className="text-center text-red-500">{loadingError}</p> // Display error message if something goes wrong
          ) : languagesLoaded ? (
            codeSnippets.map(({ id, title, description, language, code }) => (
              <div key={id} className="bg-gray-900 rounded-xl overflow-hidden shadow-md">
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
                  <p className="text-gray-300 mb-4">{description}</p>
                  <div className="overflow-x-auto bg-[#2d2d2d] rounded-lg">
                    <pre className="p-4 m-0 text-sm leading-relaxed">
                      <code className={`language-${language.toLowerCase()}`}>
                        {code.trim()}
                      </code>
                    </pre>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-400">Loading code snippets...</p> // Loading state while Prism languages are loading
          )}
        </div>
      </div>
    </section>
  );
};

export default CodeShowcase;