import React from 'react';

const Hero = () => {
  return (
    <section id="home" className="relative pt-20 min-h-screen flex items-center overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src="/hero-video.mp4" type="video/mp4" />
      </video>
      
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-40"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
              We <span className="text-red-500">provide international voice telephony at low rates.</span>
            </h1>
            <p className="text-lg text-white mb-8 leading-relaxed">
              <span className="font-semibold">I-SENSE Telecom</span> is strong Voice termination provider. We do A-Z Voice with per-second billing. Voice can help you in calling to any country. With our VoIp service you are getting SIP trunks, CC routes with callback and caller's telephone number transmission (CallerID).
            </p>
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              We are VoIP provider who can terminate all your voip minutes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                className="bg-transparent border-2 border-white text-white px-10 py-4 rounded-full font-semibold hover:bg-white hover:text-gray-900 transition duration-300 text-center"
              >
                Get Started
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="bg-white bg-opacity-10 backdrop-blur-sm p-8 rounded-2xl border border-white border-opacity-20 hover:bg-opacity-20 transition duration-300">
              <h3 className="text-2xl font-bold text-red-500 mb-3">VoIP</h3>
              <p className="text-white">Affordable per-second billing.</p>
              <p className="text-white">Global calling made easy.</p>
              <p className="text-white">Reliable SIP trunk services.</p>
            </div>

            <div className="bg-white bg-opacity-10 backdrop-blur-sm p-8 rounded-2xl border border-white border-opacity-20 hover:bg-opacity-20 transition duration-300">
              <h3 className="text-2xl font-bold text-red-500 mb-3">SIP Trunks</h3>
              <p className="text-white">Global calling made easy.</p>
            </div>

            <div className="bg-white bg-opacity-10 backdrop-blur-sm p-8 rounded-2xl border border-white border-opacity-20 hover:bg-opacity-20 transition duration-300">
              <h3 className="text-2xl font-bold text-red-500 mb-3">Callback</h3>
              <p className="text-white">Reliable SIP trunk services.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
