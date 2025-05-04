import React from 'react';
import { Mail, Linkedin, Github, ArrowUp } from 'lucide-react';
import { Link } from 'react-scroll';

const Contact: React.FC = () => {
  return (
    <footer id="contact" className="bg-primary-800 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Get In Touch</h2>
          <p className="text-primary-100 max-w-2xl mx-auto">
            Interested in working together or have questions about ERP system implementation? 
            Feel free to reach out through any of the channels below.
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-6 mb-12">
          <a 
            href="mailto:osamudiamen@example.com"
            className="flex items-center gap-2 bg-primary-700 hover:bg-primary-600 px-6 py-3 rounded-lg transition-colors duration-300"
          >
            <Mail size={20} />
            <span>ogbeidemike038@gmail.com</span>
          </a>
          
          <a 
            href="https://www.linkedin.com/in/ogbeidemike"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-[#0077B5] hover:bg-[#0066a1] px-6 py-3 rounded-lg transition-colors duration-300"
          >
            <Linkedin size={20} />
            <span>LinkedIn</span>
          </a>
          
          <a 
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-[#333] hover:bg-[#222] px-6 py-3 rounded-lg transition-colors duration-300"
          >
            <Github size={20} />
            <span>GitHub</span>
          </a>
        </div>
        
        <div className="text-center pt-8 border-t border-primary-700">
          <p className="text-primary-200 mb-4">
            &copy; {new Date().getFullYear()} Osamudiamen Ogbeide. All rights reserved.
          </p>
          <Link
            to="hero"
            spy={true}
            smooth={true}
            duration={500}
            className="inline-flex items-center gap-2 text-primary-300 hover:text-white transition-colors duration-300 cursor-pointer"
          >
            <ArrowUp size={16} />
            <span>Back to Top</span>
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Contact;