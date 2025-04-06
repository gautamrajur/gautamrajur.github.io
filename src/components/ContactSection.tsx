
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, MapPin, Github, Linkedin } from 'lucide-react';

const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="section-title mb-4">Get in Touch</h2>
          <p className="description-text mx-auto">
            Have a project in mind or want to discuss potential collaborations? Feel free to reach out.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <h3 className="text-2xl font-medium mb-4">Contact Information</h3>
            <p className="text-muted-foreground mb-6">
              Currently based in Boston, MA. Available for software development roles and collaborative projects.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-apple-blue/10 flex items-center justify-center text-apple-blue mr-4">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Phone</p>
                  <p className="font-medium">+1-857-370-2790</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-apple-blue/10 flex items-center justify-center text-apple-blue mr-4">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <p className="font-medium">raju.ga@northeastern.edu</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-apple-blue/10 flex items-center justify-center text-apple-blue mr-4">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Location</p>
                  <p className="font-medium">Boston, MA</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-apple-blue/10 flex items-center justify-center text-apple-blue mr-4">
                  <Github size={20} />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">GitHub</p>
                  <a href="https://github.com/gautamrajur" target="_blank" rel="noopener noreferrer" className="font-medium hover:text-apple-blue transition-colors">
                    github.com/gautamrajur
                  </a>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-apple-blue/10 flex items-center justify-center text-apple-blue mr-4">
                  <Linkedin size={20} />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">LinkedIn</p>
                  <a href="https://linkedin.com/in/gautam-raju" target="_blank" rel="noopener noreferrer" className="font-medium hover:text-apple-blue transition-colors">
                    linkedin.com/in/gautam-raju
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-medium mb-6">Send a Message</h3>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-apple-darkgray mb-2">
                  Your Name
                </label>
                <Input id="name" placeholder="John Doe" className="w-full" />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-apple-darkgray mb-2">
                  Email Address
                </label>
                <Input id="email" type="email" placeholder="john@example.com" className="w-full" />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-apple-darkgray mb-2">
                  Message
                </label>
                <Textarea id="message" placeholder="Your message..." className="w-full min-h-[120px]" />
              </div>
              
              <Button className="w-full bg-apple-blue hover:bg-blue-500 text-white rounded-full">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
