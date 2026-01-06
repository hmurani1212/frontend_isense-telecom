import React from 'react';

const ServicesPreview = () => {
  return (
    <section className="relative py-20 min-h-screen flex items-center overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src="/services-bg-video.mp4" type="video/mp4" />
      </video>
      
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            S<span className="text-red-500">ervices</span>
          </h2>
          <p className="text-lg text-red-500 leading-relaxed max-w-3xl mx-auto">
            Working with us, you obtain a full range of services for successful work with your clients. We follow trends and continually improve our product so you can get the maximum benefit of our services.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition duration-300">
            <img 
              src="/office-room.jpg" 
              alt="Office Room" 
              className="w-full h-80 object-cover"
            />
          </div>
          
          <div className="rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition duration-300">
            <img 
              src="/team-meeting.jpg" 
              alt="Team Meeting" 
              className="w-full h-80 object-cover"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white bg-opacity-10 backdrop-blur-sm p-8 rounded-2xl border border-white border-opacity-20 hover:bg-opacity-20 transition duration-300">
            <h3 className="text-2xl font-bold text-red-500 mb-4">SIP Trunks</h3>
            <p className="text-white leading-relaxed">
              I-SENSE TELECOM providing A-Z voice termination at standard and Premium quality. We terminate wholesale traffic, retail traffic, business traffic, call center traffic, IVR traffic.
            </p>
          </div>

          <div className="bg-white bg-opacity-10 backdrop-blur-sm p-8 rounded-2xl border border-white border-opacity-20 hover:bg-opacity-20 transition duration-300">
            <h3 className="text-2xl font-bold text-red-500 mb-4">VoIP</h3>
            <p className="text-white leading-relaxed">
              I-SENSE TELECOM specializes in providing high-quality telecommunications services. We will quickly install the necessary software, as accurately as possible integrating it into the individual characteristics of your business. Why choose us among wholesale VoIP providers Competition in the modern market has always existed and will continue to exist.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesPreview;
