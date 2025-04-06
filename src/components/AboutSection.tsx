import React from 'react';
const AboutSection: React.FC = () => {
  return <section id="about" className="py-24 px-4 bg-apple-gray">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1">
            <h2 className="section-title mb-6">About Me</h2>
            <p className="description-text mb-6">
              I'm Gautam Raju, a Software Development Engineer at Apple Inc. with expertise in React, NodeJS, and PostgreSQL. With a strong background in both front-end and back-end development, I bring a comprehensive approach to creating efficient, scalable applications.
            </p>
            <p className="description-text mb-6">
              My experience includes building cloud-native applications on AWS, optimizing database performance, implementing secure authentication systems, and automating testing processes. I'm passionate about creating digital experiences that are not only functional but also intuitive and accessible.
            </p>
            <p className="description-text">
              Currently based in Boston, MA, I hold a Master's degree in Computer Science from Northeastern University and am always seeking new challenges in software development and cloud architecture.
            </p>
          </div>
          <div className="order-1 md:order-2 flex justify-center">
            <div className="relative w-full max-w-md aspect-square rounded-2xl shadow-lg overflow-hidden">
            <img 
                src="/lovable-uploads/233d7093-ce0d-4f68-9aa1-5bc392553e05.png" 
                alt="Gautam Raju profile picture" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50 flex items-end p-6">
                <span className="text-white font-medium text-xl">
              </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default AboutSection;