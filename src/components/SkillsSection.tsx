
import React from 'react';
import { cn } from '@/lib/utils';

const skills = [
  { name: 'UI/UX Design', level: 95 },
  { name: 'Frontend Development', level: 90 },
  { name: 'React & React Native', level: 85 },
  { name: 'Backend Development', level: 80 },
  { name: 'Product Strategy', level: 85 },
  { name: 'Visual Design', level: 90 },
];

const tools = [
  'Figma', 'Adobe XD', 'Photoshop', 'Illustrator', 
  'React', 'TypeScript', 'Node.js', 'HTML/CSS',
  'Tailwind CSS', 'Express', 'MongoDB', 'PostgreSQL'
];

const SkillsSection: React.FC = () => {
  return (
    <section id="skills" className="py-24 px-4 bg-apple-gray">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="section-title mb-4">Skills & Expertise</h2>
          <p className="description-text mx-auto">
            My technical skills and areas of expertise in design and development.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <h3 className="text-2xl font-medium mb-8">Core Competencies</h3>
            <div className="space-y-6">
              {skills.map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium">{skill.name}</span>
                    <span>{skill.level}%</span>
                  </div>
                  <div className="w-full bg-white rounded-full h-1.5">
                    <div 
                      className="bg-apple-blue h-1.5 rounded-full"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-medium mb-8">Tools & Technologies</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {tools.map((tool, index) => (
                <div 
                  key={index}
                  className={cn(
                    "bg-white rounded-xl p-4 text-center shadow-sm hover:shadow-md transition-shadow",
                    "hover:text-apple-blue cursor-default"
                  )}
                >
                  {tool}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
