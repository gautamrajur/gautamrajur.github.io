import React from 'react';

const education = [
  {
    id: 1,
    degree: 'Master of Science',
    field: 'Computer Science',
    institution: 'Northeastern University',
    period: 'Sep 2024 – May 2026',
    gpa: '3.8 / 4.0',
    coursework: 'Programming Design Paradigms, Mobile App Development, Machine Learning Operations, Cloud Computing, Distributed Systems',
    logo: '/logos/northeastern.png',
    logoAlt: 'Northeastern University',
  },
  {
    id: 2,
    degree: "Bachelor's of Engineering",
    field: 'Computer Science',
    institution: 'Visvesvaraya Technology University',
    period: 'Aug 2016 – Jul 2020',
    gpa: '8.05 / 10.0',
    coursework: 'Computer Networks, Artificial Intelligence, Data Structures, Data Mining',
    logo: '/logos/vtu.png',
    logoAlt: 'Visvesvaraya Technology University',
  },
];

const EducationSection: React.FC = () => {
  return (
    <section id="education" className="bg-[#F5EDE8] py-24">
      <div className="max-w-5xl mx-auto px-6">

        <div className="text-center mb-16">
          <h2 className="font-serif text-5xl text-[#1C1C1E]">Education</h2>
          <div className="w-12 h-px bg-[#1C1C1E]/20 mx-auto mt-4" />
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {education.map((edu) => (
            <div
              key={edu.id}
              className="bg-white rounded-2xl overflow-hidden border border-[#1C1C1E]/6 hover:shadow-xl transition-shadow"
            >
              {/* Logo area — fixed height so both cards match */}
              <div className="h-52 flex items-center justify-center px-8 border-b border-[#1C1C1E]/6">
                <img
                  src={edu.logo}
                  alt={edu.logoAlt}
                  className="h-full max-h-40 w-auto object-contain"
                />
              </div>

              {/* Content */}
              <div className="p-8 text-center">
                <h3 className="font-serif text-2xl text-[#1C1C1E] leading-tight">{edu.degree}</h3>
                <p className="text-[#E8A250] font-semibold text-base mt-1">{edu.field}</p>
                <p className="text-[#1C1C1E]/65 font-medium text-sm mt-1">{edu.institution}</p>

                <div className="w-8 h-px bg-[#1C1C1E]/15 mx-auto my-5" />

                <div className="flex items-center justify-center gap-4 text-xs font-mono text-[#1C1C1E]/50">
                  <span>{edu.period}</span>
                  <span className="w-1 h-1 rounded-full bg-[#1C1C1E]/20" />
                  <span>GPA: {edu.gpa}</span>
                </div>

                <p className="text-[#1C1C1E]/75 text-sm mt-4 leading-relaxed">
                  <span className="text-[#1C1C1E]/50 text-[10px] uppercase tracking-wider font-mono block mb-1">
                    Relevant Coursework
                  </span>
                  {edu.coursework}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default EducationSection;
