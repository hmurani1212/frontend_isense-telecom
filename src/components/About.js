import React from 'react';

const About = () => {
  return (
    <section id="about" className="relative py-24 min-h-screen flex items-center overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src="/about-video.mp4" type="video/mp4" />
      </video>
      
      <div className="absolute top-0 left-0 w-full h-full bg-black/60"></div>
      <div className="absolute top-0 left-0 w-full h-full bg-hero-radial"></div>

      <div className="relative z-10 container-page py-20 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="mb-6">
              <span className="section-kicker">
                <span className="h-2 w-2 rounded-full bg-brand-500"></span>
                About I-SENSE TELECOM
              </span>
            </div>

            <h2 className="text-white text-3xl md:text-4xl font-bold tracking-tight mb-6">
              Built for call centers, businesses, and high-volume traffic.
            </h2>

            <p className="text-lg text-white/85 leading-relaxed mb-8">
              <span className="font-semibold text-white">I-SENSE TELECOM</span> is an innovative solution for call centers, call shops, and business traffic. With more than{" "}
              <span className="font-semibold text-white">15 years of experience</span>, we help customers optimize quality and costs with dependable routing and hands-on support.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href="/contact" className="btn-primary text-center">Talk to Sales</a>
              <a href="/services" className="btn-ghost text-center">What we offer</a>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-2xl overflow-hidden shadow-glow">
                <img src="/center-image.jpg" alt="Network Equipment" className="h-48 w-full object-cover md:h-64" />
              </div>
              <div className="grid gap-4">
                <div className="rounded-2xl overflow-hidden shadow-soft">
                  <img src="/left-image.jpg" alt="Phone" className="h-24 w-full object-cover md:h-32" />
                </div>
                <div className="rounded-2xl overflow-hidden shadow-soft">
                  <img src="/right-image.jpg" alt="Network Diagram" className="h-24 w-full object-cover md:h-32" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
