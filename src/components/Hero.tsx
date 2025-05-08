import React from 'react';
import { Link } from 'react-scroll';
import { Download, Github, Mail } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      className="pt-20 md:pt-32 pb-20 bg-gradient-to-br from-primary-800 to-primary-900 text-white"
    >
      <div className="container mx-auto px-4 flex flex-col-reverse md:flex-row items-center">
        <div className="md:w-1/2 mt-8 md:mt-0 animate-slide-up">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Bridging Finance & Technology
          </h1>
          <h2 className="text-xl md:text-2xl mb-6 text-primary-100">
            Transforming ERP systems with data and code
          </h2>
          <div className="bg-primary-700/30 inline-block px-4 py-2 rounded-full mb-6">
            <span className="text-primary-50 font-medium">
            HTML | CSS | Python | SQL | Google Analytics
            </span>
          </div>
          <div className="flex flex-wrap gap-4 mt-8">
            <a
              href="/portfolio-landing/resume.pdf"
              className="flex items-center gap-2 bg-white text-primary-800 hover:bg-primary-50 px-6 py-3 rounded-lg font-medium transition-colors duration-300"
              download
            >
              <Download size={18} />
              Download Resume
            </a>
            <a
              href="https://github.com/ogbeidemike"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-primary-700 hover:bg-primary-600 px-6 py-3 rounded-lg font-medium transition-colors duration-300"
            >
              <Github size={18} />
              View GitHub
            </a>
            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="flex items-center gap-2 bg-secondary-500 hover:bg-secondary-400 text-white px-6 py-3 rounded-lg font-medium cursor-pointer transition-colors duration-300"
            >
              <Mail size={18} />
              Contact Me
            </Link>
          </div>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <div className="relative">
            <div className="w-48 h-48 md:w-64 md:h-64 bg-primary-600 rounded-full overflow-hidden border-4 border-primary-100 shadow-xl">
              <img
                src="/portfolio-landing/osamudiamen.jpg"
                alt="Osamudiamen Ogbeide"
                className="w-full h-full object-cover object-center"
                onError={(e) => {
                  e.currentTarget.src = 'https://via.placeholder.com/300x300?text=Image+Not+Found';
                }}
              />
            </div>
            <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-white text-primary-800 px-6 py-2 rounded-full font-bold shadow-lg">
              ERP & Financial Systems Specialist
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
