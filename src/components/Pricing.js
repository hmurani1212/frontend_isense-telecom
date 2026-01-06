import React from 'react';

const Pricing = () => {
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
          <source src="https://videos.pexels.com/video-files/3943962/3943962-uhd_4096_2160_25fps.mp4" type="video/mp4" />
        </video>
        
        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition duration-300">
              <img 
                src="/cc-pricing.jpg" 
                alt="CC Pricing" 
                className="w-full h-48 object-cover"
              />
              <div className="p-8 text-center">
                <h3 className="text-3xl font-bold text-red-500 mb-4">CC</h3>
                <p className="text-gray-700 leading-relaxed mb-6">
                  The CC trunk has a good call quality. This trunk is best suited for call centers, taking into account the specifics of incoming traffic.
                </p>
                <a
                  href="mailto:support@i-sensetelecom.com"
                  className="inline-block bg-red-600 text-white px-10 py-3 rounded-full hover:bg-red-700 transition duration-300 font-semibold"
                >
                  Details
                </a>
              </div>
            </div>

            <div className="bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition duration-300">
              <img 
                src="/retail-pricing.jpg" 
                alt="Retail Pricing" 
                className="w-full h-48 object-cover"
              />
              <div className="p-8 text-center">
                <h3 className="text-3xl font-bold text-red-500 mb-4">Retail</h3>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Retail trunk can be used for clean local business traffic. You will get high quality routes with the best rates in the market.
                </p>
                <a
                  href="mailto:support@i-sensetelecom.com"
                  className="inline-block bg-red-600 text-white px-10 py-3 rounded-full hover:bg-red-700 transition duration-300 font-semibold"
                >
                  Details
                </a>
              </div>
            </div>

            <div className="bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition duration-300">
              <img 
                src="/lowcost-pricing.jpg" 
                alt="Low Cost Pricing" 
                className="w-full h-48 object-cover"
              />
              <div className="p-8 text-center">
                <h3 className="text-3xl font-bold text-red-500 mb-4">Low cost</h3>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Low cost trunk is our special offer. This trunk provides connection to the networks of the largest telecom operators with good callback at the best possible rate.
                </p>
                <a
                  href="mailto:support@i-sensetelecom.com"
                  className="inline-block bg-red-600 text-white px-10 py-3 rounded-full hover:bg-red-700 transition duration-300 font-semibold"
                >
                  Details
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Pricing Plans
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Affordable voice solutions for everyone
          </p>

          <form className="space-y-6">
            <div>
              <label className="block text-left text-gray-700 font-medium mb-2">
                Name
              </label>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full px-6 py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition text-gray-700"
              />
            </div>

            <button
              type="submit"
              className="bg-black text-white px-12 py-4 rounded-full font-semibold hover:bg-gray-800 transition duration-300 shadow-lg"
            >
              Submit
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default Pricing;
