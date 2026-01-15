import React from 'react';
import { Mail, Github, Linkedin, MapPin, Send } from 'lucide-react';

const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="section-padding relative overflow-hidden">
      {/* Creative background */}
      <div className="absolute inset-0 bg-gradient-mesh" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="floating-shape w-80 h-80 bg-primary/20 -bottom-40 -right-40" />
      <div className="floating-shape w-48 h-48 bg-primary/10 top-20 -left-24" />
      
      <div className="container-narrow relative z-10">
        <div className="max-w-2xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <p className="text-primary font-mono text-base tracking-wider uppercase mb-3">Contact</p>
            <h2 className="text-4xl md:text-5xl font-serif text-foreground mb-4">
              Let's Connect
            </h2>
            <p className="text-muted-foreground text-lg">
              Open to opportunities in AI/ML engineering, full-stack development, and cloud architecture.
            </p>
          </div>
          
          {/* Contact Card */}
          <div className="p-8 md:p-10 rounded-3xl bg-card border border-border shadow-xl relative overflow-hidden">
            {/* Decorative gradient */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-primary/10 to-transparent rounded-full -translate-y-1/2 translate-x-1/2" />
            
            <div className="relative z-10 space-y-8">
              {/* Email CTA */}
              <div className="text-center">
                <a 
                  href="mailto:raju.ga@northeastern.edu"
                  className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-primary text-primary-foreground text-lg font-medium hover:bg-primary/90 transition-all shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 hover:-translate-y-0.5"
                >
                  <Send size={22} />
                  <span>raju.ga@northeastern.edu</span>
                </a>
              </div>
              
              {/* Divider */}
              <div className="flex items-center gap-4">
                <div className="flex-1 h-px bg-border" />
                <span className="text-muted-foreground text-sm">or find me on</span>
                <div className="flex-1 h-px bg-border" />
              </div>
              
              {/* Social Links */}
              <div className="flex justify-center gap-4">
                <a 
                  href="https://github.com/gautamrajur" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-3 rounded-full bg-secondary border border-border hover:border-primary hover:text-primary transition-all"
                >
                  <Github size={20} />
                  <span className="font-medium">GitHub</span>
                </a>
                <a 
                  href="https://linkedin.com/in/gautam-raju" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-3 rounded-full bg-secondary border border-border hover:border-primary hover:text-primary transition-all"
                >
                  <Linkedin size={20} />
                  <span className="font-medium">LinkedIn</span>
                </a>
              </div>
              
              {/* Location */}
              <div className="flex items-center justify-center gap-2 text-muted-foreground">
                <MapPin size={16} />
                <span>Boston, MA</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
