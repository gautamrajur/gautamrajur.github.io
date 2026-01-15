import React from 'react';
import { Mail, Github, Linkedin, MapPin } from 'lucide-react';

const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="section-padding bg-secondary/30">
      <div className="container-narrow">
        <div className="max-w-2xl mx-auto text-center space-y-8">
          {/* Header */}
          <div>
            <p className="text-sage font-mono text-base tracking-wider uppercase mb-3">Contact</p>
            <h2 className="text-4xl md:text-5xl font-serif text-foreground mb-4">
              Let's Connect
            </h2>
            <p className="text-muted-foreground text-lg">
              Open to opportunities in AI/ML engineering, full-stack development, and cloud architecture.
            </p>
          </div>
          
          {/* Email CTA */}
          <div className="py-6">
            <a 
              href="mailto:raju.ga@northeastern.edu"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-sage text-white text-lg font-medium hover:bg-sage-dark transition-colors"
            >
              <Mail size={22} />
              <span>raju.ga@northeastern.edu</span>
            </a>
          </div>
          
          {/* Location & Social Links */}
          <div className="flex flex-col items-center gap-6">
            <div className="flex items-center gap-2 text-muted-foreground text-lg">
              <MapPin size={18} />
              <span>Boston, MA</span>
            </div>
            
            <div className="flex items-center gap-4">
              <a 
                href="https://github.com/gautamrajur" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 rounded-full border border-border hover:border-sage hover:text-sage transition-colors"
                aria-label="GitHub"
              >
                <Github size={22} />
              </a>
              <a 
                href="https://linkedin.com/in/gautam-raju" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 rounded-full border border-border hover:border-sage hover:text-sage transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={22} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
