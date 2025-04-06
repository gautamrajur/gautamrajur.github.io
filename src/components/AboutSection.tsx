
import React from 'react';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-24 px-4 bg-apple-gray">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1">
            <h2 className="section-title mb-6">About Me</h2>
            <p className="description-text mb-6">
              I'm a passionate designer and developer with a keen eye for detail and a commitment to creating elegant, user-focused digital experiences. With a background in both design and development, I bring a holistic approach to every project.
            </p>
            <p className="description-text mb-6">
              My philosophy is simple: create digital experiences that are not just beautiful but also intuitive and accessible. Every pixel, every interaction, and every line of code serves a purpose.
            </p>
            <p className="description-text">
              When I'm not crafting digital experiences, you can find me exploring new design trends, experimenting with new technologies, or seeking inspiration in art, architecture, and nature.
            </p>
          </div>
          <div className="order-1 md:order-2 flex justify-center">
            <div className="relative w-full max-w-md aspect-square bg-gradient-to-br from-blue-100 to-blue-50 rounded-2xl shadow-lg overflow-hidden">
              {/* Placeholder for profile image or about visual */}
              <div className="absolute inset-0 flex items-center justify-center text-apple-blue text-6xl font-bold opacity-10">
                ABOUT
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
