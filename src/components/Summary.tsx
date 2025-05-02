import React from 'react';

const Summary: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center text-primary-800">Professional Summary</h2>
        <div className="max-w-3xl mx-auto bg-gray-50 p-8 rounded-xl shadow-sm border border-gray-100">
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            I'm a seasoned ERP and Financial Systems Specialist with extensive experience bridging the gap between finance and technology. My expertise lies in optimizing financial processes through technological solutions, particularly in ERP systems implementation and customization.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            With a strong foundation in programming (Python, SQL, HTML), I develop automation solutions for complex financial workflows, create data-driven reports, and implement system integrations that streamline operations and improve financial visibility.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            I'm passionate about leveraging emerging technologies, particularly Web3 and blockchain, to solve traditional financial challenges and create more transparent, efficient systems for organizations.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Summary;