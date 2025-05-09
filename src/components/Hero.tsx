
import React from 'react';
import { Github, Linkedin, Mail, Phone } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-radial from-portfolio-purple/10 via-transparent to-transparent opacity-30" />
      </div>
      
      <div className="container mx-auto px-4 z-10 animate-fade-in">
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 lg:gap-16">
          <div className="w-full lg:w-2/5 flex justify-center lg:justify-start">
            <div className="relative group">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-portfolio-purple shadow-xl">
                {/* Replace with actual image when uploaded */}
                <div className="w-full h-full bg-portfolio-purple/20 flex items-center justify-center text-white">
                  <span className="text-lg">Profile Image</span>
                </div>
              </div>
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-portfolio-purple to-portfolio-teal opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
            </div>
          </div>
          
          <div className="w-full lg:w-3/5 text-center lg:text-left">
            <h2 className="text-lg md:text-xl font-medium text-portfolio-purple mb-2">Hello, I'm</h2>
            <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white">Ayush Kaushik</h1>
            <h3 className="text-xl md:text-2xl font-semibold mb-6 text-portfolio-gray">
              Computer Science Student & Developer
            </h3>
            
            <p className="text-base md:text-lg text-gray-300 mb-8 max-w-2xl mx-auto lg:mx-0">
              Passionate about technology and coding, I'm a B.Tech Computer Science student at SRM Institute of Science and Technology. 
              I love building innovative solutions and expanding my knowledge in software development.
            </p>
            
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-8">
              <Button 
                variant="outline" 
                size="lg"
                className="border-portfolio-purple text-portfolio-purple hover:bg-portfolio-purple hover:text-white"
              >
                Download Resume
              </Button>
              <Button 
                size="lg" 
                className="bg-portfolio-purple hover:bg-portfolio-purple/90 text-white"
              >
                Contact Me
              </Button>
            </div>
            
            <div className="flex flex-wrap justify-center lg:justify-start gap-4">
              <a 
                href="tel:+1234567890" 
                className={cn(
                  "w-10 h-10 rounded-full flex items-center justify-center transition-colors",
                  "bg-white/5 hover:bg-portfolio-purple text-white"
                )}
                aria-label="Phone"
              >
                <Phone size={20} />
              </a>
              <a 
                href="mailto:ayush.kaushik@example.com" 
                className={cn(
                  "w-10 h-10 rounded-full flex items-center justify-center transition-colors",
                  "bg-white/5 hover:bg-portfolio-purple text-white"
                )}
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
              <a 
                href="https://github.com/ayushkaushik" 
                target="_blank" 
                rel="noopener noreferrer" 
                className={cn(
                  "w-10 h-10 rounded-full flex items-center justify-center transition-colors",
                  "bg-white/5 hover:bg-portfolio-purple text-white"
                )}
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a 
                href="https://linkedin.com/in/ayushkaushik" 
                target="_blank" 
                rel="noopener noreferrer" 
                className={cn(
                  "w-10 h-10 rounded-full flex items-center justify-center transition-colors",
                  "bg-white/5 hover:bg-portfolio-purple text-white"
                )}
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
