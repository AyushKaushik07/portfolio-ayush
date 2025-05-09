
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Experience from '@/components/Experience';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import ThemeToggle from '@/components/ThemeToggle';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const Index = () => {
  return (
    <div className="gradient-bg min-h-screen w-full">
      <ThemeToggle />
      <Navbar />
      
      <div className="absolute top-20 right-8 md:right-20 hidden md:block">
        <Avatar className="w-24 h-24 border-2 border-portfolio-purple shadow-lg">
          <AvatarImage src="/lovable-uploads/0e761044-d6b7-4b7d-9dba-62bf2f77b3ab.png" alt="Ayush Kaushik" />
          <AvatarFallback>AK</AvatarFallback>
        </Avatar>
      </div>
      
      <main>
        <section id="home">
          <Hero />
        </section>
        
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
