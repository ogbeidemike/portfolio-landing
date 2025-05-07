import React from 'react';
import { skills } from '../data'; // Ensure this points to your updated portfolioData.ts
import {
  Network,
  Code,
  Database,
  BarChart3, // BarChart3 for Google Analytics
  Bitcoin,
  Coffee,    // Coffee for Java
} from 'lucide-react';  // Import necessary icons from lucide-react
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons'; // For Google Analytics

// Icon mapping
const iconMap: Record<string, React.ReactNode> = {
  activity: <BarChart3 size={36} className="text-primary-600" />, // For Google Analytics
  terminal: <Coffee size={36} className="text-primary-600" />,  // For Java
  network: <Network size={36} className="text-primary-600" />,
  code: <Code size={36} className="text-primary-600" />,
  database: <Database size={36} className="text-primary-600" />,
  'bar-chart': <BarChart3 size={36} className="text-primary-600" />,  // BarChart3 for Google Analytics
  bitcoin: <Bitcoin size={36} className="text-primary-600" />,
  google: <FontAwesomeIcon icon={faGoogle} size="2x" className="text-primary-600" />,
};

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 bg-gray-50 scroll-mt-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-4 text-center text-primary-800">
          Skills & Services
        </h2>
        <p className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto">
          Specialized expertise in financial systems and technology integration,
          focusing on automation, data analysis, and modern solutions.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill) => (
            <div
              key={skill.id}
              className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg transition-shadow duration-300 p-8"
            >
              <div className="mb-5">
                {iconMap[skill.icon] || (
                  <div className="w-9 h-9 rounded-full bg-primary-100 flex items-center justify-center text-primary-600 font-bold text-lg">
                    ?
                  </div>
                )}
              </div>
              <h3 className="text-xl font-semibold text-primary-800 mb-2">
                {skill.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">{skill.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
