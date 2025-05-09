
import React from 'react';
import { Github, Linkedin, Mail, Phone } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-10 border-t border-white/10 bg-gradient-to-b from-portfolio-dark to-black/80 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-portfolio-purple/30 to-transparent"></div>
      
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-2xl font-bold mb-2 text-white">
              Ayush<span className="text-portfolio-purple">K.</span>
            </h3>
            <p className="text-portfolio-gray max-w-md">
              B.Tech Computer Science Student at SRM Institute of Science and Technology.
            </p>
          </div>
          
          <div className="flex flex-col items-center md:items-end">
            <div className="flex items-center space-x-4 mb-4">
              <a 
                href="tel:+1234567890" 
                className="text-portfolio-gray hover:text-portfolio-purple transition-colors w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10"
                aria-label="Phone"
              >
                <Phone size={18} />
              </a>
              <a 
                href="mailto:ayush.kaushik@example.com"
                className="text-portfolio-gray hover:text-portfolio-purple transition-colors w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10"
                aria-label="Email"
              >
                <Mail size={18} />
              </a>
              <a 
                href="https://github.com/ayushkaushik" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-portfolio-gray hover:text-portfolio-purple transition-colors w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10"
                aria-label="GitHub"
              >
                <Github size={18} />
              </a>
              <a 
                href="https://linkedin.com/in/ayushkaushik" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-portfolio-gray hover:text-portfolio-purple transition-colors w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
            </div>
            <p className="text-portfolio-gray text-sm">
              &copy; {currentYear} Ayush Kaushik. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
