
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const projects = [
  {
    id: 1,
    title: 'Minimalist E-commerce',
    description: 'A clean, modern e-commerce platform with a focus on user experience and simplicity.',
    category: 'Web Design & Development',
    imageBg: 'bg-gradient-to-br from-blue-100 to-indigo-50',
  },
  {
    id: 2,
    title: 'Finance Dashboard',
    description: 'An intuitive dashboard for tracking personal finances with beautiful data visualizations.',
    category: 'UI/UX Design',
    imageBg: 'bg-gradient-to-br from-green-100 to-emerald-50',
  },
  {
    id: 3,
    title: 'Health App',
    description: 'A mobile application designed to help users track their fitness goals and maintain healthy habits.',
    category: 'Mobile Development',
    imageBg: 'bg-gradient-to-br from-red-100 to-rose-50',
  },
];

const ProjectsSection: React.FC = () => {
  return (
    <section id="projects" className="py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="section-title mb-4">Selected Projects</h2>
          <p className="description-text mx-auto">
            A showcase of my recent work spanning various industries and technologies.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Card 
              key={project.id} 
              className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div 
                className={`w-full aspect-[4/3] ${project.imageBg} flex items-center justify-center`}
              >
                <div className="text-3xl font-bold text-white/10">{project.title}</div>
              </div>
              <CardContent className="p-6">
                <div className="text-sm text-apple-darkgray mb-2">{project.category}</div>
                <h3 className="text-xl font-medium mb-2">{project.title}</h3>
                <p className="text-muted-foreground">{project.description}</p>
                <a 
                  href="#" 
                  className="inline-block mt-4 text-apple-blue hover:underline"
                >
                  View Project →
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
