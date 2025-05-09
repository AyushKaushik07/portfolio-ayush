
import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-8 border-t border-white/10 bg-portfolio-dark relative">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-portfolio-gray">
              &copy; {currentYear} Ayush Kaushik. All rights reserved.
            </p>
          </div>
          
          <div className="flex items-center space-x-4">
            <a 
              href="https://github.com/ayushkaushik" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-portfolio-gray hover:text-portfolio-purple transition-colors"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a 
              href="https://linkedin.com/in/ayushkaushik" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-portfolio-gray hover:text-portfolio-purple transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a 
              href="mailto:ayush.kaushik@example.com"
              className="text-portfolio-gray hover:text-portfolio-purple transition-colors"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
