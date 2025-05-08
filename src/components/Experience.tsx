import React from 'react';
import { Briefcase, CheckCircle } from 'lucide-react';

// TEMPORARY fallback data (until ../data/portfolioData.ts is added)
const experiences = [
  {
    id: 1,
    role: 'ERP Financial System Implementation Support Staff',
    company: 'NPDC/NECONDE (OML-42 AMT)',
    period: '2019 – 2022',
    description: 'Provided ERP deployment support and streamlined financial data operations to enhance automation and insight.',
    achievements: [
      'Reduced month-end reconciliation time by 40% through automated workflows.',
      'Designed executive dashboards using HTML for quick financial overviews.',
      'Led integration of ERP systems with cloud-based financial platforms.',
    ],
  },
  {
    id: 2,
    role: 'Financial Systems and Performance Analyst|Consultant/ Product Marketing Strategist/ Google Analytics Specialist/Skilled Communicator',
    company: 'NPDC/FRANK OLUBA AND SONS NIG LIMITED/ALEX FEMINI NIG LTD/TONBRAPA NIG LTD',
    period: '2022 – 2025',
    description: 'Overseeing service delivery, project execution, and digital transformation strategies.',
    achievements: [
      'Comprehensive account reconciliation across multiple enterprises utilizing advanced Excel functionalities and python-driven automation',
      'Automated regulatory compliance reporting using Python scripts.',
      'Built reusable tools in Python,Excel and SQL for automated reporting.',
      'Translated complex technical skills (e.g., ERP systems, data analysis with SQL/Python, financial software workflows) into clear, value-driven messaging for a hybrid tech/business audience.',
      'Conducted competitor benchmarking and market research to tailor positioning of tech skills (e.g. scripting, automation) on personal website to match trends in the dev tools ecosystem.',
      'Created technical case studies and code showcases to serve as developer enablement tools and storytelling aids for enterprise stakeholders.'
    ],
  },
];

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-4 text-center text-primary-800">Professional Experience</h2>
        <p className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto">
          Several years of experience implementing and optimizing financial systems.
        </p>
        
        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <div 
              key={exp.id} 
              className={`relative flex flex-col md:flex-row ${index !== experiences.length - 1 ? 'pb-12' : ''}`}
            >
              {/* Timeline Line */}
              {index !== experiences.length - 1 && (
                <div className="absolute left-8 md:left-8 top-16 bottom-0 w-0.5 bg-primary-200 hidden md:block"></div>
              )}
              
              {/* Icon */}
              <div className="flex-shrink-0 mb-4 md:mb-0 z-10">
                <div className="w-16 h-16 bg-primary-700 rounded-full flex items-center justify-center shadow-md">
                  <Briefcase size={24} className="text-white" />
                </div>
              </div>
              
              {/* Content */}
              <div className="ml-0 md:ml-8 bg-gray-50 rounded-xl p-6 shadow-sm border border-gray-100 flex-grow">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-primary-800">{exp.role}</h3>
                    <p className="text-gray-600">{exp.company}</p>
                  </div>
                  <span className="mt-2 md:mt-0 inline-block bg-primary-100 text-primary-800 px-3 py-1 rounded-full text-sm font-medium">
                    {exp.period}
                  </span>
                </div>
                
                <p className="text-gray-700 mb-4">{exp.description}</p>
                
                <h4 className="font-medium text-primary-700 mb-2">Key Achievements:</h4>
                <ul className="space-y-2">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i} className="flex items-start">
                      <CheckCircle size={18} className="text-secondary-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;



