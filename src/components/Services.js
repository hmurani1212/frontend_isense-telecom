import React, { useState } from 'react';

const Services = () => {
  const [openFaq, setOpenFaq] = useState(1);

  const faqs = [
    {
      id: 1,
      question: "How do VoIP phone services for business work compared to the traditional ones?",
      answer: "Voice Over Internet Protocol (VoIP) Harnesses Your Web Connection, Allowing You To Place Phone Calls Directly Over The Internet. Instead Of Establishing A Link Over Copper Wire, VoIP Calling Services Utilize The Much More Straightforward Process Of Initiating A Connection Between Two Endpoints Via The Internet. It's Quicker And Allows For Much More Flexibility For Your Business Calls, Maximizing Your Efficiency And Bolstering Your Development."
    },
    {
      id: 2,
      question: "Can I call any phone or just people using VoIP phone services?",
      answer: "With Business VoIP Phone Service, You Can Call Any Phone You Want, Not Just Those That Also Use VoIP! This Convenient Method Does Not Limit Your Business, And You Can Reach Customers And Leads That Use VoIP Phones, Cellphones, And Landlines. VoIP Phone Service Providers Know That It's Vital For You To Contact Whomever You Need, Regardless Of What Type Of Technology They Prefer. VoIP Calling Services Give You The Freedom Your Business Requires."
    },
    {
      id: 3,
      question: "Are VoIP services better than on-site calling solutions?",
      answer: "Ultimately, It Depends On Your Business Needs. Nowadays, VoIP As A Service Generally Seems To Be The Better Choice For Businesses Of All Sizes. Whether You're Operating A Small Call Center Or A Large Enterprise, VoIP Connections Are More Cost-Effective And Offer You The Flexibility Of Working From Anywhere In The World. Moreover, With VoIP, You Can Call Anywhere In The World, Significantly Increasing Your Potential Customer Base."
    },
    {
      id: 4,
      question: "How is the call quality when I use I-SENSE TELECOM as my telecom provider?",
      answer: "The First Thing You Need To Keep In Mind When Using VoIP Phone Services For Business Is That The Call Quality Depends On The Speed Of Your Internet And How Much Bandwidth Is Available. However, Once Those Factors Are Stable, You Can Rest Assured That I-SENSE TELECOM Call Quality Is Top-Notch. I-SENSE TELECOM Gives You Access To Tier 1 Providers And Shorter Calling Routes, Ensuring Low PDD And Minimum Latency. Choppy Voices And Delays Won't Ever Be Regular Occurrences."
    },
    {
      id: 5,
      question: "Can I-SENSE TELECOM business VoIP phone service transform with my business needs?",
      answer: "Yes! With I-SENSE TELECOM, You Can Choose The Routes That Work Best For Your Business Needs, Even As They Transform Over Time. As One Of The Leading Business VoIP Providers, We Have Multiple Payment Options, Including Cryptocurrency And Stable Coins, Making Transactions A Simple, Straightforward Process. Moreover, You Can Always Count On Having Excellent Call Quality, No Matter How Your Business Changes."
    }
  ];

  const toggleFaq = (id) => {
    setOpenFaq(openFaq === id ? null : id);
  };

  const highlightBrand = (text) => {
    return text.split('I-SENSE TELECOM').map((part, index, array) => {
      if (index === array.length - 1) return part;
      return (
        <React.Fragment key={index}>
          {part}
          <span className="text-accent-600 font-semibold">I-SENSE TELECOM</span>
        </React.Fragment>
      );
    });
  };

  return (
    <>
      <section className="relative pt-32 pb-20 overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover"
        >
          <source src="/services-page-video.mp4" type="video/mp4" />
        </video>
        
        <div className="absolute top-0 left-0 w-full h-full bg-black/60"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-hero-radial"></div>

        <div className="relative z-10 container-page">
          <div className="text-center mb-16">
            <div className="mb-6 flex justify-center">
              <span className="section-kicker">
                <span className="h-2 w-2 rounded-full bg-accent-500"></span>
                Services
              </span>
            </div>
            <h2 className="section-title text-white mb-6">Services</h2>
            <p className="text-lg text-white/85 leading-relaxed max-w-3xl mx-auto">
              Working with us, you obtain a full range of services for successful work with your clients. We follow trends and continually improve our product so you can get the maximum benefit of our services.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="rounded-2xl overflow-hidden border border-white/15 bg-white/10 shadow-soft backdrop-blur-sm hover:bg-white/15 transition duration-300">
              <img 
                src="/retail-voice.jpg" 
                alt="Retail Voice" 
                className="w-full h-64 object-cover"
              />
              <div className="p-8 text-left">
                <h3 className="text-2xl font-bold text-accent-400 mb-4">Retail Voice</h3>
                <p className="text-white/85 leading-relaxed">
                  <span className="text-white font-semibold">I-SENSE TELECOM</span> Providing Premium international voice communication service for retailers at the carrier level.
                </p>
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden border border-white/15 bg-white/10 shadow-soft backdrop-blur-sm hover:bg-white/15 transition duration-300">
              <img 
                src="/wholesale-voice.jpg" 
                alt="Wholesale Voice" 
                className="w-full h-64 object-cover"
              />
              <div className="p-8 text-left">
                <h3 className="text-2xl font-bold text-accent-400 mb-4">Wholesale Voice</h3>
                <p className="text-white/85 leading-relaxed">
                  <span className="text-white font-semibold">I-SENSE TELECOM</span> specializes in providing high-quality telecommunications services. International wholesale voicetermination services.Exceptional voice quality and maximum coverage.We offer the following qualities: CLI, Non-CLI, Premium TDM.
                </p>
              </div>
            </div>
          </div>

          <div className="max-w-2xl mx-auto">
            <div className="rounded-2xl overflow-hidden border border-white/15 bg-white/10 shadow-soft backdrop-blur-sm hover:bg-white/15 transition duration-300">
              <img 
                src="/call-center.jpg" 
                alt="Call Center" 
                className="w-full h-64 object-cover"
              />
              <div className="p-8 text-center">
                <h3 className="text-2xl font-bold text-accent-400 mb-4">Call center</h3>
                <p className="text-white/85 leading-relaxed">
                  <span className="text-white font-semibold">I-SENSE TELECOM</span> We are open to cooperation and actively work with call centers and telephone offices, supplying them with high-quality termination.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-20 overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-brand-950">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMiI+PHBhdGggZD0iTTM2IDE0YzYuNjI3IDAgMTIgNS4zNzMgMTIgMTJzLTUuMzczIDEyLTEyIDEyLTEyLTUuMzczLTEyLTEyIDUuMzczLTEyIDEyLTEyem0wIDJ2MmMtNC40MTggMC04IDMuNTgyLTggOHMzLjU4MiA4IDggOCA4LTMuNTgyIDgtOC0zLjU4Mi04LTgtOHYtMnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-30"></div>
        
        <div className="relative z-10 container-page">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <span className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-white/90 mb-6">
                <span className="h-2 w-2 rounded-full bg-accent-500 animate-pulse"></span>
                Help Center
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Frequently Asked <span className="text-accent-500">Questions</span>
              </h2>
              <p className="text-white/70 text-lg max-w-2xl mx-auto">
                Quick answers about VoIP services, call quality, and business solutions
              </p>
            </div>

            <div className="space-y-4">
              {faqs.map((faq) => {
                const isOpen = openFaq === faq.id;
                return (
                  <div
                    key={faq.id}
                    className={`bg-white/10 backdrop-blur-sm rounded-2xl border transition-all duration-300 ${
                      isOpen 
                        ? 'border-accent-500/50 shadow-glow' 
                        : 'border-white/20 hover:border-white/30'
                    }`}
                  >
                    <button
                      onClick={() => toggleFaq(faq.id)}
                      className="w-full px-6 py-5 flex items-center justify-between gap-4 text-left group"
                    >
                      <div className="flex items-start gap-4 flex-1">
                        <div 
                          className={`mt-1 h-8 w-8 rounded-lg flex items-center justify-center text-sm font-bold transition-all duration-300 ${
                            isOpen 
                              ? 'bg-accent-600 text-white shadow-lg shadow-accent-600/50' 
                              : 'bg-white/10 text-white/70 group-hover:bg-white/15'
                          }`}
                        >
                          {faq.id}
                        </div>
                        <div className="flex-1">
                          <h3 className={`text-lg font-bold leading-snug transition-colors ${
                            isOpen ? 'text-white' : 'text-white/90 group-hover:text-white'
                          }`}>
                            {faq.question}
                          </h3>
                        </div>
                      </div>
                      
                      <div 
                        className={`h-8 w-8 rounded-lg border flex items-center justify-center transition-all duration-300 ${
                          isOpen 
                            ? 'border-accent-500/30 bg-accent-500/10 rotate-180' 
                            : 'border-white/20 bg-white/5 group-hover:bg-white/10'
                        }`}
                      >
                        <svg 
                          className="h-5 w-5 text-white transition-transform duration-300" 
                          fill="none" 
                          viewBox="0 0 24 24" 
                          stroke="currentColor" 
                          strokeWidth="2"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                    </button>

                    <div 
                      className={`overflow-hidden transition-all duration-300 ease-in-out ${
                        isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                      }`}
                    >
                      <div className="px-6 pb-6">
                        <div className="ml-12 pl-4 border-l-2 border-accent-500/30">
                          <p className="text-white/80 leading-relaxed">
                            {highlightBrand(faq.answer)}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-16 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 p-8 text-center">
              <h3 className="text-2xl font-bold text-white mb-3">Still have questions?</h3>
              <p className="text-white/70 mb-6 max-w-lg mx-auto">
                Our support team is available 24/7 to help you with route selection, quality testing, and technical setup.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="/contact" className="btn-primary">
                  Contact Sales
                </a>
                <a href="mailto:support@i-sensetelecom.com" className="btn-ghost">
                  Email Support
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
