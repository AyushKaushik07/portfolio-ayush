
import React from 'react';
import { Briefcase, Calendar } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';

type ExperienceItem = {
  title: string;
  company: string;
  period: string;
  description: string;
  achievements: string[];
  technologies: string[];
};

const experiences: ExperienceItem[] = [
  {
    title: 'Student Intern',
    company: 'C-DAC',
    period: 'May 2023 - July 2023',
    description: 'Worked on enhancing geofencing systems and implementing real-time notification features.',
    achievements: [
      'Implemented real-time notification system reducing alert time by 40%',
      'Enhanced geofencing accuracy by implementing improved algorithms',
      'Collaborated with senior developers to optimize system performance'
    ],
    technologies: ['JavaScript', 'Node.js', 'Express.js', 'Leaflet.js'],
  },
  {
    title: 'Web Development Intern',
    company: 'Bharat Intern',
    period: 'June 2023 - August 2023',
    description: 'Focused on improving cross-device adaptability and performance optimization of web applications.',
    achievements: [
      'Enhanced cross-device adaptability for mobile and tablet users',
      'Added smooth animations improving user engagement metrics by 25%',
      'Optimized website performance reducing load time by 35%'
    ],
    technologies: ['HTML', 'CSS', 'JavaScript', 'React.js'],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-radial from-portfolio-orange/5 via-transparent to-transparent opacity-20" />
      
      <div className="section-container">
        <h2 className="section-title">My Experience</h2>
        
        <div className="mt-12 space-y-12">
          {experiences.map((exp, index) => (
            <div 
              key={`${exp.company}-${index}`}
              className="glass-card p-6 md:p-8 relative overflow-hidden group animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="absolute top-0 left-0 h-full w-1 bg-portfolio-purple transform scale-y-0 group-hover:scale-y-100 origin-top transition-transform duration-500" />
              
              <div className="flex flex-col md:flex-row md:items-start gap-6">
                <div className="md:w-1/4">
                  <div className="flex items-center gap-2 text-portfolio-gray mb-2">
                    <Calendar size={16} />
                    <span>{exp.period}</span>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-white group-hover:text-portfolio-purple transition-colors">{exp.title}</h3>
                  <div className="flex items-center gap-2 text-portfolio-purple mt-1">
                    <Briefcase size={16} />
                    <span className="font-medium">{exp.company}</span>
                  </div>
                </div>
                
                <div className="md:w-3/4">
                  <p className="text-gray-300 mb-4">{exp.description}</p>
                  
                  <h4 className="text-lg font-medium text-white mb-2">Key Achievements:</h4>
                  <ul className="space-y-2 mb-6">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="text-portfolio-purple mt-1">•</span>
                        <span className="text-gray-300">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <Badge 
                        key={tech} 
                        variant="secondary"
                        className="bg-portfolio-purple/10 text-portfolio-purple hover:bg-portfolio-purple hover:text-white"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
