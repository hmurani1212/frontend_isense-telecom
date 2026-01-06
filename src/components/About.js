import React from 'react';

const About = () => {
  return (
    <section id="about" className="relative py-20 min-h-screen flex items-center overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src="/about-video.mp4" type="video/mp4" />
      </video>
      
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-60"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
        <div className="flex justify-center items-center mb-12 relative">
          <div className="absolute left-0 md:left-20 top-0">
            <img 
              src="/left-image.jpg" 
              alt="Phone" 
              className="w-48 md:w-64 h-auto rounded-lg shadow-2xl transform hover:scale-105 transition duration-300"
            />
          </div>
          
          <div className="z-10">
            <img 
              src="/center-image.jpg" 
              alt="Network Equipment" 
              className="w-56 md:w-72 h-auto rounded-lg shadow-2xl transform hover:scale-105 transition duration-300"
            />
          </div>
          
          <div className="absolute right-0 md:right-20 top-0">
            <img 
              src="/right-image.jpg" 
              alt="Network Diagram" 
              className="w-48 md:w-64 h-auto rounded-lg shadow-2xl transform hover:scale-105 transition duration-300"
            />
          </div>
        </div>

        <div className="text-center mt-64 md:mt-48">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            <span className="text-red-500">About</span> Us
          </h2>
          <p className="text-lg text-white leading-relaxed max-w-4xl mx-auto mb-8">
            <span className="font-semibold text-blue-400">I-SENSE TELECOM</span> is an innovative solution for Call Centers, Call Shops and Business traffic. We have more than <span className="font-semibold text-blue-400">15 years of expirience</span> in working with all possible kind of clients and fulfilling all their needs. Our skilled managers will meet your needs and exceed your expectations.Our NOC is always on duty to assist you.Our aggressive pricing strategy allows you to make more.Our representatives in <span className="font-semibold text-blue-400">6 countries</span> will work for you and your business.
          </p>
          <a
            href="/"
            className="inline-block bg-transparent border-2 border-white text-white px-10 py-3 rounded-full font-semibold hover:bg-white hover:text-gray-900 transition duration-300"
          >
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
