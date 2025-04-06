
import React from 'react';
import { cn } from '@/lib/utils';

const skills = [
  { name: 'Frontend Development', level: 95 },
  { name: 'Backend Development', level: 90 },
  { name: 'Cloud & DevOps', level: 90 },
  { name: 'Mobile Development', level: 85 },
  { name: 'Database Management', level: 85 },
  { name: 'Machine Learning / AI', level: 80 },
];

const frontendTools = [
  'React', 'Next.js', 'Angular', 'TypeScript', 'JavaScript',
  'HTML5', 'CSS3', 'Material-UI', 'Bootstrap', 'Tailwind CSS'
];

const backendTools = [
  'Node.js', 'Express.js', 'Spring Boot', 'Java', 'PostgreSQL', 
  'MongoDB', 'Redis', 'GraphQL', 'SQL', 'Go'
];

const devopsTools = [
  'AWS', 'Azure', 'Docker', 'Kubernetes', 'Terraform', 
  'Jenkins', 'GitHub Actions', 'CI/CD', 'Ansible', 'Kafka'
];

const aiTools = [
  'Python', 'NumPy', 'PyTorch', 'Keras', 'Matplotlib',
  'LangChain', 'Groq', 'RAG'
];

const SkillsSection: React.FC = () => {
  return (
    <section id="skills" className="py-24 px-4 bg-apple-gray">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="section-title mb-4">Skills & Expertise</h2>
          <p className="description-text mx-auto">
            My technical skills and areas of expertise in software development and cloud technologies.
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
            
            <h4 className="font-medium text-lg mb-3">Frontend</h4>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-2 mb-6">
              {frontendTools.map((tool, index) => (
                <div 
                  key={index}
                  className={cn(
                    "bg-white rounded-xl p-2 text-center text-sm shadow-sm hover:shadow-md transition-shadow",
                    "hover:text-apple-blue cursor-default"
                  )}
                >
                  {tool}
                </div>
              ))}
            </div>
            
            <h4 className="font-medium text-lg mb-3">Backend</h4>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-2 mb-6">
              {backendTools.map((tool, index) => (
                <div 
                  key={index}
                  className={cn(
                    "bg-white rounded-xl p-2 text-center text-sm shadow-sm hover:shadow-md transition-shadow",
                    "hover:text-apple-blue cursor-default"
                  )}
                >
                  {tool}
                </div>
              ))}
            </div>
            
            <h4 className="font-medium text-lg mb-3">DevOps & Cloud</h4>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-2 mb-6">
              {devopsTools.map((tool, index) => (
                <div 
                  key={index}
                  className={cn(
                    "bg-white rounded-xl p-2 text-center text-sm shadow-sm hover:shadow-md transition-shadow",
                    "hover:text-apple-blue cursor-default"
                  )}
                >
                  {tool}
                </div>
              ))}
            </div>
            
            <h4 className="font-medium text-lg mb-3">AI & Machine Learning</h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
              {aiTools.map((tool, index) => (
                <div 
                  key={index}
                  className={cn(
                    "bg-white rounded-xl p-2 text-center text-sm shadow-sm hover:shadow-md transition-shadow",
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
