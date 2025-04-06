
import React from 'react';
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from '@/components/ui/table';

const experiences = [
  {
    id: 1,
    company: 'Apple Inc',
    position: 'Software Development Engineer',
    period: 'Sep 2021 - Jul 2024',
    achievements: [
      'Built cloud-native apps on AWS (EC2, S3, Lambda, API Gateway), ensuring 100M+ daily requests with zero downtime',
      'Refactored and optimized SQL queries and data pipelines, reducing query execution time by 40%',
      'Automated testing with TDD, achieving 85% coverage and saving 60+ hours/month in manual testing',
      'Developed OAuth 2.0 & JWT authentication for 100M+ users, strengthening security and maintaining Agile-driven best practices'
    ],
    technologies: 'React, NodeJS, PostgreSQL'
  },
  {
    id: 2,
    company: 'Vidcentum Research & Development',
    position: 'Technology Intern',
    period: 'Jul 2019 - Aug 2019',
    achievements: [
      'Engineered a Java-Spring Boot backend for Welfinity, improving data processing speed by 20%',
      'Conducted security audits for AWS IAM policies and access control, reducing vulnerabilities by 25%',
      'Designed a Docker & Kubernetes PoC, predicting a 38% scalability boost and reducing deployment time by 1.5 hours',
      'Led peer programming and debugging sessions, enhancing team collaboration and workflow efficiency'
    ],
    technologies: 'Java, Spring Boot, AWS, Docker, Kubernetes'
  }
];

const education = [
  {
    id: 1,
    institution: 'Northeastern University',
    degree: 'Master of Science, Computer Science',
    period: 'Sep 2024 - May 2026',
    gpa: '3.8/4.0',
    coursework: 'Programming Design Paradigms, Mobile App Development'
  },
  {
    id: 2,
    institution: 'Visvesvaraya Technology University',
    degree: 'Bachelor of Computer Science',
    period: 'Aug 2016 - Jul 2020',
    gpa: '8.05/10.0',
    coursework: 'Computer Networks, Artificial Intelligence, Data Structures, Data Mining'
  }
];

const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="section-title mb-4">Experience</h2>
          <p className="description-text">
            My professional journey and key accomplishments.
          </p>
        </div>
        
        <div className="space-y-16">
          {experiences.map((exp) => (
            <div key={exp.id} className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex flex-col md:flex-row justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-medium">{exp.position}</h3>
                  <p className="text-apple-blue font-medium">{exp.company}</p>
                </div>
                <div className="mt-2 md:mt-0 text-apple-darkgray">{exp.period}</div>
              </div>
              
              <div className="mb-4">
                <h4 className="font-medium mb-2">Key Achievements</h4>
                <ul className="list-disc pl-5 space-y-2">
                  {exp.achievements.map((achievement, index) => (
                    <li key={index} className="text-muted-foreground">{achievement}</li>
                  ))}
                </ul>
              </div>
              
              <div className="text-sm text-apple-darkgray">
                <span className="font-medium">Technologies:</span> {exp.technologies}
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-24 mb-16">
          <h2 className="section-title mb-4">Education</h2>
          <p className="description-text">
            My academic background and qualifications.
          </p>
        </div>
        
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Institution</TableHead>
                <TableHead>Degree</TableHead>
                <TableHead className="hidden md:table-cell">Period</TableHead>
                <TableHead className="hidden md:table-cell">GPA</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {education.map((edu) => (
                <TableRow key={edu.id}>
                  <TableCell className="font-medium">{edu.institution}</TableCell>
                  <TableCell>
                    <div>{edu.degree}</div>
                    <div className="text-sm text-muted-foreground md:hidden">
                      {edu.period} • GPA: {edu.gpa}
                    </div>
                    <div className="text-sm text-muted-foreground mt-1">
                      <span className="font-medium">Coursework:</span> {edu.coursework}
                    </div>
                  </TableCell>
                  <TableCell className="hidden md:table-cell">{edu.period}</TableCell>
                  <TableCell className="hidden md:table-cell">{edu.gpa}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
        
        <div className="mt-16 bg-white rounded-2xl p-8 shadow-lg">
          <h3 className="text-2xl font-medium mb-6">Certifications</h3>
          <ul className="list-disc pl-5 space-y-3">
            <li className="text-muted-foreground">Technical Essentials of AWS - Apple Edition: Issued Oct 2021</li>
            <li className="text-muted-foreground">Understanding AWS® Apple (3 modules): Issued Oct 2021</li>
            <li className="text-muted-foreground">Understanding Recommendation System Algorithms: Issued Apr 2020</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
