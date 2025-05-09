
import React from 'react';
import { Github, ExternalLink } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

type Technology = {
  name: string;
  color?: string;
};

type Project = {
  title: string;
  description: string;
  technologies: Technology[];
  githubUrl: string;
  liveUrl?: string;
  imageUrl?: string;
};

const projects: Project[] = [
  {
    title: 'Loot Mart',
    description: 'An e-commerce platform with advanced features including authentication, product filtering, and a responsive shopping cart.',
    technologies: [
      { name: 'React.js' },
      { name: 'Node.js' },
      { name: 'Firebase' },
      { name: 'CSS' },
    ],
    githubUrl: 'https://github.com/ayushkaushik/loot-mart',
    liveUrl: 'https://loot-mart.example.com',
  },
  {
    title: 'Geotracking and IN System',
    description: 'A comprehensive solution for tracking and managing geolocation data with real-time updates and interactive maps.',
    technologies: [
      { name: 'Express.js' },
      { name: 'Leaflet.js' },
      { name: 'Node.js' },
      { name: 'JavaScript' },
    ],
    githubUrl: 'https://github.com/ayushkaushik/geotracking-system',
    liveUrl: 'https://geotracking.example.com',
  },
  {
    title: 'Gearvault',
    description: 'An inventory management system built with Java Swing for efficient tracking and organization of equipment and assets.',
    technologies: [
      { name: 'Java' },
      { name: 'Swing' },
      { name: 'Maven' },
    ],
    githubUrl: 'https://github.com/ayushkaushik/gearvault',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 relative bg-portfolio-dark/50">
      <div className="absolute inset-0 bg-gradient-radial from-portfolio-teal/5 via-transparent to-transparent opacity-20" />
      
      <div className="section-container">
        <h2 className="section-title">My Projects</h2>
        
        <div className="projects-grid">
          {projects.map((project) => (
            <div 
              key={project.title}
              className="glass-card overflow-hidden flex flex-col h-full group animate-scale-in"
            >
              <div className="h-48 bg-portfolio-purple/10 relative">
                {project.imageUrl ? (
                  <img 
                    src={project.imageUrl} 
                    alt={project.title} 
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <span className="text-portfolio-purple/50 text-lg font-medium">{project.title}</span>
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-portfolio-dark to-transparent opacity-0 group-hover:opacity-70 transition-opacity duration-300" />
              </div>
              
              <div className="p-6 flex-grow">
                <h3 className="text-xl font-semibold mb-2 text-white group-hover:text-portfolio-purple transition-colors">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <Badge 
                      key={tech.name} 
                      variant="secondary"
                      className="bg-portfolio-purple/10 text-portfolio-purple hover:bg-portfolio-purple hover:text-white"
                    >
                      {tech.name}
                    </Badge>
                  ))}
                </div>
              </div>
              
              <div className="flex border-t border-white/10">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    "flex-1 py-3 flex items-center justify-center gap-2 transition-colors",
                    "text-white hover:bg-portfolio-purple hover:text-white"
                  )}
                >
                  <Github size={18} />
                  <span>Code</span>
                </a>
                
                {project.liveUrl && (
                  <>
                    <div className="w-px bg-white/10" />
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={cn(
                        "flex-1 py-3 flex items-center justify-center gap-2 transition-colors",
                        "text-white hover:bg-portfolio-teal hover:text-white"
                      )}
                    >
                      <ExternalLink size={18} />
                      <span>Live Demo</span>
                    </a>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
