import React, { useEffect, useRef } from 'react';
import { codeSnippets } from '../data';
import Prism from 'prismjs';
import 'prismjs/components/prism-python';
import 'prismjs/components/prism-sql';
import 'prismjs/components/prism-markup';

const CodeShowcase: React.FC = () => {
  const codeRefs = useRef<(HTMLElement | null)[]>([]);
  
  useEffect(() => {
    // Initialize Prism
    Prism.highlightAll();
  }, []);
  
  return (
    <section id="code" className="py-20 bg-dark text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-4 text-center">Code Showcase</h2>
        <p className="text-lg text-gray-300 text-center mb-12 max-w-3xl mx-auto">
          Sample code demonstrating expertise in various technologies relevant to financial systems
        </p>
        
        <div className="space-y-16">
          {codeSnippets.map((snippet, index) => (
            <div key={snippet.id} className="bg-gray-900 rounded-xl overflow-hidden">
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">{snippet.title}</h3>
                <p className="text-gray-300 mb-4">{snippet.description}</p>
                
                <div className="overflow-x-auto bg-[#2d2d2d] rounded-lg">
                  <pre className="p-4 m-0">
                    <code
                      ref={(el) => (codeRefs.current[index] = el)}
                      className={`language-${snippet.language}`}
                    >
                      {snippet.code}
                    </code>
                  </pre>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CodeShowcase;