
import React from 'react';
import { Github, Linkedin, Mail, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { cn } from '@/lib/utils';

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real implementation, this would connect to a backend
    console.log("Form submitted");
  };
  
  return (
    <section id="contact" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-radial from-portfolio-purple/10 via-transparent to-transparent opacity-20" />
      
      <div className="section-container">
        <h2 className="section-title">Get In Touch</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
          <div className="animate-slide-in">
            <h3 className="text-2xl font-semibold mb-4 text-white">Contact Information</h3>
            <p className="text-gray-300 mb-8">
              Feel free to reach out if you're looking for a developer, have a question, or just want to connect.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full flex items-center justify-center bg-portfolio-purple/20 text-portfolio-purple">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-sm text-portfolio-gray">Email</p>
                  <a href="mailto:ayush.kaushik@example.com" className="text-white hover:text-portfolio-purple transition-colors">
                    ayush.kaushik@example.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full flex items-center justify-center bg-portfolio-purple/20 text-portfolio-purple">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="text-sm text-portfolio-gray">Phone</p>
                  <a href="tel:+1234567890" className="text-white hover:text-portfolio-purple transition-colors">
                    +1 (234) 567-890
                  </a>
                </div>
              </div>
              
              <div className="pt-6">
                <p className="text-sm text-portfolio-gray mb-4">Social Media</p>
                <div className="flex gap-4">
                  <a 
                    href="https://github.com/ayushkaushik" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className={cn(
                      "w-12 h-12 rounded-full flex items-center justify-center transition-colors",
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
                      "w-12 h-12 rounded-full flex items-center justify-center transition-colors",
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
          
          <div>
            <form onSubmit={handleSubmit} className="glass-card p-6 md:p-8 animate-scale-in">
              <h3 className="text-2xl font-semibold mb-6 text-white">Send Me a Message</h3>
              
              <div className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm text-portfolio-gray">
                      Your Name
                    </label>
                    <Input 
                      id="name"
                      placeholder="John Doe"
                      className="bg-white/5 border-white/10 focus:border-portfolio-purple text-white"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm text-portfolio-gray">
                      Your Email
                    </label>
                    <Input 
                      id="email"
                      type="email"
                      placeholder="john@example.com"
                      className="bg-white/5 border-white/10 focus:border-portfolio-purple text-white"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm text-portfolio-gray">
                    Subject
                  </label>
                  <Input 
                    id="subject"
                    placeholder="How can I help you?"
                    className="bg-white/5 border-white/10 focus:border-portfolio-purple text-white"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm text-portfolio-gray">
                    Your Message
                  </label>
                  <Textarea 
                    id="message"
                    placeholder="Write your message here..."
                    className="bg-white/5 border-white/10 focus:border-portfolio-purple text-white min-h-[120px]"
                  />
                </div>
                
                <Button
                  type="submit"
                  className="w-full bg-portfolio-purple hover:bg-portfolio-purple/90 text-white"
                >
                  Send Message
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
