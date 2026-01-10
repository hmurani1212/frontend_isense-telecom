import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  const [displayedText, setDisplayedText] = useState('');
  const fullText = 'We provide international voice telephony at low rates.';
  const typingSpeed = 50;
  const pauseDuration = 2000;

  useEffect(() => {
    let currentIndex = 0;
    let isDeleting = false;
    let timeoutId;

    const type = () => {
      if (!isDeleting && currentIndex <= fullText.length) {
        setDisplayedText(fullText.slice(0, currentIndex));
        currentIndex++;
        timeoutId = setTimeout(type, typingSpeed);
      } else if (!isDeleting && currentIndex > fullText.length) {
        isDeleting = true;
        timeoutId = setTimeout(type, pauseDuration);
      } else if (isDeleting && currentIndex > 0) {
        currentIndex--;
        setDisplayedText(fullText.slice(0, currentIndex));
        timeoutId = setTimeout(type, typingSpeed / 2);
      } else if (isDeleting && currentIndex === 0) {
        isDeleting = false;
        timeoutId = setTimeout(type, typingSpeed);
      }
    };

    type();

    return () => clearTimeout(timeoutId);
  }, []);

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
      
      <div className="absolute top-0 left-0 w-full h-full bg-black/55"></div>
      <div className="absolute top-0 left-0 w-full h-full bg-hero-radial"></div>

      <div className="relative z-10 container-page py-20 w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="mb-6">
              <span className="section-kicker">
                <span className="h-2 w-2 rounded-full bg-accent-500"></span>
                Trusted Voice & VoIP Partner
              </span>
            </div>

            <h1 className="text-3xl md:text-4xl font-bold text-white leading-tight mb-6 h-[5.5rem] md:h-[6.5rem]">
              {displayedText}<span className="animate-pulse">|</span>
            </h1>
            <p className="text-lg text-white/90 mb-6 leading-relaxed">
              <span className="font-semibold text-white">I-SENSE TELECOM</span> provides A-Z voice termination with per-second billing, SIP trunks, and routes built for business and call centers.
            </p>
            <p className="text-base text-white/70 mb-10 leading-relaxed">
              Clear quality, strong coverage, and responsive support — optimized for your traffic profile.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="btn-primary text-center"
              >
                Get Started
              </Link>
              <Link
                to="/services"
                className="btn-ghost text-center"
              >
                Explore Services
              </Link>
            </div>

            <div className="mt-10 grid grid-cols-3 gap-4 max-w-lg">
              <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-white">
                <div className="text-2xl font-bold">15+</div>
                <div className="text-xs text-white/70">Years experience</div>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-white">
                <div className="text-2xl font-bold">A–Z</div>
                <div className="text-xs text-white/70">Termination</div>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-white">
                <div className="text-2xl font-bold">24/7</div>
                <div className="text-xs text-white/70">NOC support</div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="card-glass">
              <h3 className="text-2xl font-bold text-accent-400 mb-3">VoIP</h3>
              <p className="text-white/90">Affordable per-second billing.</p>
              <p className="text-white/90">Global calling made easy.</p>
              <p className="text-white/90">Reliable SIP trunk services.</p>
            </div>

            <div className="card-glass">
              <h3 className="text-2xl font-bold text-accent-400 mb-3">SIP Trunks</h3>
              <p className="text-white/90">Stable, scalable SIP trunking for your business.</p>
            </div>

            <div className="card-glass">
              <h3 className="text-2xl font-bold text-accent-400 mb-3">Callback</h3>
              <p className="text-white/90">Optimized routing for high-answer traffic.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
