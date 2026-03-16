import React from 'react';

const testimonials = [
  {
    id: 1,
    name: 'Josh Bell',
    title: 'Senior Software Engineer / DevOps',
    company: 'Ancestry',
    relationship: 'Direct Manager · Ancestry Co-op',
    quote:
      'Gautam took full ownership of a Blue-Green Deployment project and independently designed, built, and executed the entire thing. He discovered features that even experienced architects and principal engineers were unaware of. Any team would be lucky to have Gautam. He shows up, figures it out, and makes everyone around him better.',
    photo: '/testimonials/josh-bell.jpg',
    initials: 'JB',
  },
  {
    id: 2,
    name: 'Neethu Thampy',
    title: 'Software QA Engineer',
    company: 'Apple',
    relationship: 'Direct Manager · Apple',
    quote:
      'Gautam is exceptional in his field. His expertise and attention to detail are truly impressive, and he consistently delivers high-quality results. Beyond his technical skills, he is a fantastic team player who brings positive energy and collaboration to any project.',
    photo: '/testimonials/neethu-thampy.jpg',
    initials: 'NT',
  },
  {
    id: 3,
    name: 'Usha Siddareddygari',
    title: 'Lead Quality Assurance',
    company: 'Syniverse',
    relationship: 'Direct Manager · Syniverse',
    quote:
      'Working with Gautam has been an inspiring experience — he brings incredible enthusiasm and energy to every project. His structured, detail-oriented style ensures tasks are completed with high quality. What truly stands out is his eagerness to learn new technologies. Gautam is a true asset to any team.',
    photo: '/testimonials/usha-siddareddygari.jpg',
    initials: 'US',
  },
];

const TestimonialsSection: React.FC = () => {
  return (
    <section id="testimonials" className="bg-[#F5EDE8] py-24 border-t border-[#1C1C1E]/8">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">
          <h2 className="font-serif text-5xl text-[#1C1C1E]">Testimonials</h2>
          <div className="w-12 h-px bg-[#1C1C1E]/20 mx-auto mt-4" />
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {testimonials.map((t) => (
            <div key={t.id} className="flex flex-col items-center text-center">
              {/* Photo / Fallback avatar */}
              <div className="w-24 h-24 rounded-full overflow-hidden mb-5 shadow-lg ring-4 ring-[#1C1C1E]/5 shrink-0">
                <img
                  src={t.photo}
                  alt={t.name}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    // Fallback: hide img, show initials div
                    const target = e.currentTarget;
                    target.style.display = 'none';
                    const fallback = target.nextElementSibling as HTMLElement;
                    if (fallback) fallback.style.display = 'flex';
                  }}
                />
                {/* Initials fallback — hidden by default */}
                <div
                  className="w-full h-full bg-[#1C1C1E] items-center justify-center hidden"
                  aria-hidden="true"
                >
                  <span className="font-serif text-[#F5EDE8] text-2xl">{t.initials}</span>
                </div>
              </div>

              {/* Name + title */}
              <h3 className="font-semibold text-[#1C1C1E] text-base leading-snug">{t.name}</h3>
              <p className="text-[#1C1C1E]/50 text-sm mt-0.5 italic">{t.title}</p>
              <p className="text-[#E8A250] text-xs font-mono font-medium mt-1.5 mb-6 tracking-wide">
                {t.relationship}
              </p>

              {/* Quote */}
              <div className="relative px-2">
                <span className="text-[#1C1C1E]/10 font-serif text-6xl absolute -top-4 -left-1 leading-none select-none pointer-events-none">
                  "
                </span>
                <p className="text-[#1C1C1E]/60 text-sm leading-relaxed relative z-10">
                  {t.quote}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default TestimonialsSection;
