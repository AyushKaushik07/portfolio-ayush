
import React from 'react';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';
import { Card, CardContent } from '@/components/ui/card';
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card';

type Technology = {
  name: string;
  color?: string;
};

type Project = {
  title: string;
  description: string;
  technologies: Technology[];
  githubUrl: string;
  imageUrl: string;
};

const projects: Project[] = [
  {
    title: 'Loot Mart',
    description: 'Loot Mart is an e-commerce platform designed to provide users with a seamless shopping experience. Built with modern web technologies, Loot Mart allows users to browse, select, and purchase products efficiently. The platform features a clean UI, real-time product updates, and smooth interactions. Key functionalities include product listing, user authentication, and order management. The project also focuses on responsive design to ensure it works seamlessly across all devices.',
    technologies: [
      { name: 'React.js' },
      { name: 'Node.js' },
      { name: 'Express.js' },
      { name: 'MongoDB' },
      { name: 'HTML' },
      { name: 'CSS' },
      { name: 'JavaScript' },
    ],
    githubUrl: 'https://github.com/AyushKaushik07/LootMart',
    imageUrl: '/lovable-uploads/1d6e7ad2-98cf-44e8-8db7-1c67a9c25a49.png',
  },
  {
    title: 'Geotracking and IN System',
    description: 'The Geotracking and IN System is a web application designed to provide real-time geotracking and location-based services. Developed using Express.js, Leaflet.js, and Node.js, the system supports real-time updates for users, providing accurate location tracking and geofencing features. The application also includes role-based access control (RBAC) for managing users and permissions securely. It\'s optimized for use in environments where tracking and location management are essential, like large buildings or outdoor events.',
    technologies: [
      { name: 'Express.js' },
      { name: 'Leaflet.js' },
      { name: 'Node.js' },
      { name: 'MongoDB' },
      { name: 'EJS' },
      { name: 'JavaScript' },
      { name: 'HTML' },
      { name: 'CSS' },
    ],
    githubUrl: 'https://github.com/AyushKaushik07/Gearvault1',
    imageUrl: '/lovable-uploads/ae46e1aa-238e-405e-ad18-4f91a3b585ed.png',
  },
  {
    title: 'Gearvault',
    description: 'Gearvault is an inventory management system specifically designed for managing car inventories. Built using Java and Swing, Gearvault offers an intuitive graphical user interface (GUI) for adding, updating, and managing vehicle records. It supports multiple operations, such as sorting, filtering, and searching vehicle data, while ensuring a smooth user experience. The project emphasizes modular design, which allows for easy scalability and future feature enhancements.',
    technologies: [
      { name: 'Java' },
      { name: 'Swing' },
      { name: 'Maven' },
    ],
    githubUrl: 'https://github.com/AyushKaushik07/geotracking',
    imageUrl: '/lovable-uploads/5f973d43-bd67-483e-8051-d63c3b42d61c.png',
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
            <Card 
              key={project.title}
              className="glass-card overflow-hidden flex flex-col h-full group animate-scale-in border-none"
            >
              <div className="h-48 bg-portfolio-purple/10 relative">
                {project.imageUrl && (
                  <img 
                    src={project.imageUrl} 
                    alt={project.title} 
                    className="w-full h-full object-contain p-4 bg-white rounded-t-xl"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-portfolio-dark to-transparent opacity-0 group-hover:opacity-70 transition-opacity duration-300" />
              </div>
              
              <CardContent className="p-6 flex-grow">
                <h3 className="text-xl font-semibold mb-2 text-white group-hover:text-portfolio-purple transition-colors">{project.title}</h3>
                <p className="text-gray-300 mb-4 line-clamp-3">{project.description}</p>
                
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
                
                <div className="mt-auto">
                  <HoverCard>
                    <HoverCardTrigger asChild>
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={cn(
                          "flex items-center justify-center gap-2 transition-colors px-4 py-2 rounded-md",
                          "text-white bg-portfolio-purple hover:bg-portfolio-purple/80 w-full"
                        )}
                      >
                        <span>View on GitHub</span>
                      </a>
                    </HoverCardTrigger>
                    <HoverCardContent className="bg-portfolio-dark/90 border-portfolio-purple/30">
                      <p className="text-sm text-gray-300">View the full source code and details on GitHub</p>
                    </HoverCardContent>
                  </HoverCard>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
