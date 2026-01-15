import React from 'react';
import { Mail, Github, Linkedin, MapPin } from 'lucide-react';

const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="section-padding bg-dark-light/50">
      <div className="container-narrow">
        <div className="max-w-md mx-auto text-center">
          <p className="text-linkedin font-mono text-xs tracking-wider uppercase mb-2">Contact</p>
          <h2 className="text-2xl font-bold text-cream mb-3">Let's Connect</h2>
          <p className="text-sm text-muted-foreground mb-4">
            Open to AI/ML engineering, full-stack development, and cloud architecture opportunities.
          </p>
          
          <a 
            href="mailto:raju.ga@northeastern.edu"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-linkedin text-white text-sm font-medium hover:bg-linkedin-dark transition-colors"
          >
            <Mail size={16} />
            raju.ga@northeastern.edu
          </a>
          
          <div className="flex items-center justify-center gap-4 mt-4">
            <span className="flex items-center gap-1 text-xs text-muted-foreground">
              <MapPin size={12} />
              Boston, MA
            </span>
            <a 
              href="https://github.com/gautamrajur" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 rounded-lg hover:bg-dark-lighter transition-colors"
            >
              <Github size={16} className="text-muted-foreground hover:text-linkedin" />
            </a>
            <a 
              href="https://linkedin.com/in/gautam-raju" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 rounded-lg hover:bg-dark-lighter transition-colors"
            >
              <Linkedin size={16} className="text-muted-foreground hover:text-linkedin" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
