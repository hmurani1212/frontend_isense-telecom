import React from 'react';

const Subscribe = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Su<span className="text-red-500">bscribe Now</span>
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Join i-sense telecom for seamless calling.
          </p>

          <form className="space-y-6">
            <div>
              <label className="block text-left text-gray-700 font-medium mb-2">
                Your Name
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
      </div>
    </section>
  );
};

export default Subscribe;
