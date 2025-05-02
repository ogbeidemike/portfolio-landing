import React from 'react';
import { skills } from '../data';
import { 
  Network, 
  Code,
  Database, 
  BarChart, 
  Bitcoin
} from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
  network: <Network size={36} className="text-primary-600" />,
  code: <Code size={36} className="text-primary-600" />,
  database: <Database size={36} className="text-primary-600" />,
  'bar-chart': <BarChart size={36} className="text-primary-600" />,
  bitcoin: <Bitcoin size={36} className="text-primary-600" />
};

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-4 text-center text-primary-800">Skills & Services</h2>
        <p className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto">
          Specialized expertise in financial systems and technology integration,
          focusing on automation, data analysis, and modern solutions.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill) => (
            <div 
              key={skill.id}
              className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden border border-gray-100"
            >
              <div className="p-8">
                <div className="mb-4">{iconMap[skill.icon]}</div>
                <h3 className="text-xl font-bold text-primary-800 mb-3">{skill.title}</h3>
                <p className="text-gray-600">{skill.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;