
import React, { useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

type Skill = {
  name: string;
  level: number; // 0-100
  category: 'language' | 'framework' | 'tool';
};

const skillsData: Skill[] = [
  { name: 'C++', level: 90, category: 'language' },
  { name: 'HTML', level: 85, category: 'language' },
  { name: 'CSS', level: 80, category: 'language' },
  { name: 'JavaScript', level: 85, category: 'language' },
  { name: 'React.js', level: 80, category: 'framework' },
  { name: 'Java Swing', level: 75, category: 'framework' },
  { name: 'Node.js', level: 75, category: 'framework' },
  { name: 'Express.js', level: 70, category: 'framework' },
  { name: 'Git', level: 85, category: 'tool' },
  { name: 'GitHub', level: 85, category: 'tool' },
  { name: 'Firebase', level: 75, category: 'tool' },
  { name: 'Leaflet.js', level: 70, category: 'tool' },
];

const Skills = () => {
  const skillsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const progressBars = document.querySelectorAll('.skill-progress-bar');
            progressBars.forEach((bar, index) => {
              setTimeout(() => {
                (bar as HTMLElement).style.width = `${skillsData[index]?.level || 0}%`;
              }, index * 100);
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }

    return () => {
      if (skillsRef.current) {
        observer.unobserve(skillsRef.current);
      }
    };
  }, []);

  const categories = [
    { id: 'language', name: 'Programming Languages' },
    { id: 'framework', name: 'Frameworks & Libraries' },
    { id: 'tool', name: 'Tools & Technologies' },
  ];

  return (
    <section id="skills" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-radial from-portfolio-purple/5 via-transparent to-transparent opacity-30" />
      
      <div className="section-container" ref={skillsRef}>
        <h2 className="section-title">My Skills</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12">
          {categories.map((category) => (
            <div 
              key={category.id}
              className={cn(
                "glass-card p-6",
                category.id === 'tool' ? "lg:col-span-2" : ""
              )}
            >
              <h3 className="text-xl font-semibold mb-4 text-portfolio-purple">{category.name}</h3>
              <div className="space-y-4">
                {skillsData
                  .filter((skill) => skill.category === category.id)
                  .map((skill) => (
                    <div key={skill.name} className="group">
                      <div className="flex justify-between mb-2">
                        <span className="text-white group-hover:text-portfolio-purple transition-colors">{skill.name}</span>
                        <span className="text-portfolio-gray">{skill.level}%</span>
                      </div>
                      <div className="skill-progress">
                        <div 
                          className="skill-progress-bar" 
                          style={{ width: '0%' }}
                        />
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
