import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

import inotebookImage from '@/images/inotebook.jpg';
import neatmeetImage from '@/images/neatmeet.jpg';
import imageProcessingImage from '@/images/imageprocessing.jpg';

const projects = [
  {
    id: 1,
    title: 'iNoteBook',
    description:
      'A micro-services cloud-based note-taking platform built with React, REST API, and MongoDB using Prisma ORM. Includes Terraform scripts for AWS infrastructure and Prometheus & Grafana for monitoring.',
    category: 'Full Stack & DevOps',
    image: inotebookImage,
  },
  {
    id: 2,
    title: 'NeatMeet',
    description:
      'An iOS app developed with Swift, SwiftUI, and Firebase, enabling users to create and RSVP to events in real-time. Optimized Firestore queries with 30% faster data retrieval.',
    category: 'Mobile Development',
    image: neatmeetImage,
  },
  {
    id: 3,
    title: 'Image Processing Application',
    description:
      'An MVC-based image processing app with improved processing speed through algorithm upgrades and multi-threading. Created GUI using Swing with Command/Factory patterns.',
    category: 'Desktop Application',
    image: imageProcessingImage,
  },
];

const ProjectsSection: React.FC = () => {
  return (
    <section id="projects" className="py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="section-title mb-4">Selected Projects</h2>
          <p className="description-text mx-auto">
            A showcase of my recent work spanning various technologies and domains.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Card
              key={project.id}
              className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="w-full aspect-[4/3] bg-black relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="relative z-10 flex items-center justify-center w-full h-full bg-black/20">
                  {/* <div className="text-3xl font-bold text-white/20">{project.title}</div> */}
                </div>
              </div>
              <CardContent className="p-6">
                <div className="text-sm text-apple-darkgray mb-2">{project.category}</div>
                <h3 className="text-xl font-medium mb-2">{project.title}</h3>
                <p className="text-muted-foreground">{project.description}</p>
                <a
                  href="https://github.com/gautamrajur"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-4 text-apple-blue hover:underline"
                >
                  View on GitHub →
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
