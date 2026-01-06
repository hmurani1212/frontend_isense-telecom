import React from 'react';

const Services = () => {
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
        
        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-60"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              S<span className="text-red-500">ervices</span>
            </h2>
            <p className="text-lg text-red-500 leading-relaxed max-w-3xl mx-auto">
              Working with us, you obtain a full range of services for successful work with your clients. We follow trends and continually improve our product so you can get the maximum benefit of our services.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white rounded-2xl overflow-hidden shadow-2xl hover:shadow-3xl transition duration-300">
              <img 
                src="/retail-voice.jpg" 
                alt="Retail Voice" 
                className="w-full h-64 object-cover"
              />
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Retail Voice</h3>
                <p className="text-gray-700 leading-relaxed">
                  <span className="text-red-600 font-semibold">I-SENSE TELECOM</span> Providing Premium international voice communication service for retailers at the carrier level.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl overflow-hidden shadow-2xl hover:shadow-3xl transition duration-300">
              <img 
                src="/wholesale-voice.jpg" 
                alt="Wholesale Voice" 
                className="w-full h-64 object-cover"
              />
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Wholesale Voice</h3>
                <p className="text-gray-700 leading-relaxed">
                  <span className="text-red-600 font-semibold">I-SENSE TELECOM</span> specializes in providing high-quality telecommunications services. International wholesale voicetermination services.Exceptional voice quality and maximum coverage.We offer the following qualities: CLI, Non-CLI, Premium TDM.
                </p>
              </div>
            </div>
          </div>

          <div className="max-w-2xl mx-auto">
            <div className="bg-white rounded-2xl overflow-hidden shadow-2xl hover:shadow-3xl transition duration-300">
              <img 
                src="/call-center.jpg" 
                alt="Call Center" 
                className="w-full h-64 object-cover"
              />
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Call center</h3>
                <p className="text-gray-700 leading-relaxed text-center">
                  <span className="text-red-600 font-semibold">I-SENSE TELECOM</span> We are open to cooperation and actively work with call centers and telephone offices, supplying them with high-quality termination.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
              <span className="text-red-500">FAQ</span>s
            </h2>

            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-bold text-red-500 mb-3">
                  How do VoIP phone services for business work compared to the traditional ones?
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Voice Over Internet Protocol (VoIP) Harnesses Your Web Connection, Allowing You To Place Phone Calls Directly Over The Internet. Instead Of Establishing A Link Over Copper Wire, VoIP Calling Services Utilize The Much More Straightforward Process Of Initiating A Connection Between Two Endpoints Via The Internet. It's Quicker And Allows For Much More Flexibility For Your Business Calls, Maximizing Your Efficiency And Bolstering Your Development.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-red-500 mb-3">
                  Can I call any phone or just people using VoIP phone services?
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  With Business VoIP Phone Service, You Can Call Any Phone You Want, Not Just Those That Also Use VoIP! This Convenient Method Does Not Limit Your Business, And You Can Reach Customers And Leads That Use VoIP Phones, Cellphones, And Landlines. VoIP Phone Service Providers Know That It's Vital For You To Contact Whomever You Need, Regardless Of What Type Of Technology They Prefer. VoIP Calling Services Give You The Freedom Your Business Requires.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-red-500 mb-3">
                  Are VoIP services better than on-site calling solutions?
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Ultimately, It Depends On Your Business Needs. Nowadays, VoIP As A Service Generally Seems To Be The Better Choice For Businesses Of All Sizes. Whether You're Operating A Small Call Center Or A Large Enterprise, VoIP Connections Are More Cost-Effective And Offer You The Flexibility Of Working From Anywhere In The World. Moreover, With VoIP, You Can Call Anywhere In The World, Significantly Increasing Your Potential Customer Base.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-red-500 mb-3">
                  How is the call quality when I use <span className="text-black">I-SENSE TELECOM</span> as my telecom provider?
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  The First Thing You Need To Keep In Mind When Using VoIP Phone Services For Business Is That The Call Quality Depends On The Speed Of Your Internet And How Much Bandwidth Is Available. However, Once Those Factors Are Stable, You Can Rest Assured That <span className="text-red-500 font-semibold">I-SENSE TELECOM</span> Call Quality Is Top-Notch. <span className="text-red-500 font-semibold">I-SENSE TELECOM</span> Gives You Access To Tier 1 Providers And Shorter Calling Routes, Ensuring Low PDD And Minimum Latency. Choppy Voices And Delays Won't Ever Be Regular Occurrences.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-red-500 mb-3">
                  Can <span className="text-black">I-SENSE TELECOM</span> business VoIP phone service transform with my business needs?
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Yes! With <span className="text-red-500 font-semibold">I-SENSE TELECOM</span>, You Can Choose The Routes That Work Best For Your Business Needs, Even As They Transform Over Time. As One Of The Leading Business VoIP Providers, We Have Multiple Payment Options, Including Cryptocurrency And Stable Coins, Making Transactions A Simple, Straightforward Process. Moreover, You Can Always Count On Having Excellent Call Quality, No Matter How Your Business Changes.
                </p>
              </div>
            </div>

            <div className="mt-16 grid md:grid-cols-2 gap-0 rounded-2xl overflow-hidden shadow-2xl">
              <div className="bg-black">
                <img 
                  src="https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?auto=format&fit=crop&w=500&h=400" 
                  alt="Concert Lights" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="bg-gray-400 p-12 flex flex-col justify-center items-center text-center">
                <div className="text-white text-2xl mb-4">★★★★★</div>
                <h3 className="text-3xl font-bold text-white mb-6">Your goals</h3>
                <p className="text-white leading-relaxed mb-8">
                  <span className="font-semibold">I-SENSE TELECOM</span> offers a variety of communication services that call centers need to work effectively with their customers. Our goal is to provide the best quality at the best rates, to provide qualified support to our clients and help them optimize the cost of communication services. Below you will find a list of provided services and tariffs.
                </p>
                <div className="w-16 h-16 rounded-full bg-white bg-opacity-20 flex items-center justify-center mb-2">
                  <img 
                    src="https://ui-avatars.com/api/?name=John+D&background=4A5568&color=fff&size=64" 
                    alt="John D." 
                    className="w-full h-full rounded-full"
                  />
                </div>
                <p className="text-white font-semibold">John D.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
