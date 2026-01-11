import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({ type: '', message: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    if (status.message) setStatus({ type: '', message: '' });
  };

  const validateForm = () => {
    if (!formData.email.trim()) {
      setStatus({ type: 'error', message: 'Email is required' });
      return false;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      setStatus({ type: 'error', message: 'Please enter a valid email address' });
      return false;
    }
    if (!formData.message.trim()) {
      setStatus({ type: 'error', message: 'Message is required' });
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setLoading(true);
    setStatus({ type: '', message: '' });

    try {
      const response = await fetch('https://backend-isense-telecom.vercel.app/api/send_email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: formData.email,
          subject: `Contact Form - ${formData.name || 'New Message'}`,
          message: formData.message
        }),
      });

      const data = await response.json();

      if (response.ok && data.STATUS === 'SUCCESSFUL') {
        setStatus({ 
          type: 'success', 
          message: 'Your message has been sent successfully! We will get back to you soon.' 
        });
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus({ 
          type: 'error', 
          message: data.MESSAGE || 'Failed to send message. Please try again.' 
        });
      }
    } catch (error) {
      console.error('Error:', error);
      setStatus({ 
        type: 'error', 
        message: 'Network error. Please check your connection and try again.' 
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Hero Section with Form */}
      <section className="relative pt-32 pb-20 min-h-screen flex items-center overflow-hidden">
        <div 
          className="absolute top-0 left-0 w-full h-full bg-cover bg-center"
          style={{ backgroundImage: "url('/contact-bg.jpg')" }}
        ></div>
        
        <div className="absolute top-0 left-0 w-full h-full bg-black/60"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-hero-radial"></div>

        <div className="relative z-10 container-page w-full">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">Let's talk.</h1>
              <p className="text-xl text-white/85 max-w-2xl mx-auto">
                Get in touch with <span className="font-semibold text-white">I-SENSE TELECOM</span> today for premium voice solutions.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {/* Contact Info Cards */}
              <div className="space-y-6">
                <div className="card-glass p-6">
                  <div className="flex items-start gap-4">
                    <div className="h-12 w-12 rounded-xl bg-accent-600/20 flex items-center justify-center flex-shrink-0">
                      <svg className="h-6 w-6 text-accent-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-white mb-2">Phone</h3>
                      <a href="tel:+12082811117" className="text-white/80 hover:text-accent-400 transition">
                        +1 (208) 281-1117
                      </a>
                    </div>
                  </div>
                </div>

                <div className="card-glass p-6">
                  <div className="flex items-start gap-4">
                    <div className="h-12 w-12 rounded-xl bg-accent-600/20 flex items-center justify-center flex-shrink-0">
                      <svg className="h-6 w-6 text-accent-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-white mb-2">Email</h3>
                      <a href="mailto:support@i-sensetelecom.com" className="text-white/80 hover:text-accent-400 transition">
                        support@i-sensetelecom.com
                      </a>
                    </div>
                  </div>
                </div>

                <div className="card-glass p-6">
                  <div className="flex items-start gap-4">
                    <div className="h-12 w-12 rounded-xl bg-accent-600/20 flex items-center justify-center flex-shrink-0">
                      <svg className="h-6 w-6 text-accent-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-white mb-2">Support Hours</h3>
                      <p className="text-white/80">24/7 NOC Available</p>
                      <p className="text-white/60 text-sm mt-1">Always here to help</p>
                    </div>
                  </div>
                </div>

                <div className="card-glass p-6">
                  <h3 className="text-lg font-bold text-white mb-4">Connect With Us</h3>
                  <div className="flex gap-3">
                    <a 
                      href="https://www.linkedin.com/in/usama-butt-isense-telecom/" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="h-10 w-10 rounded-lg bg-white/10 hover:bg-accent-600/20 border border-white/20 hover:border-accent-500/50 flex items-center justify-center transition-all"
                    >
                      <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                      </svg>
                    </a>
                    <a 
                      href="https://teams.live.com/dl/launcher/launcher.html?url=%2F_%23%2Fl%2Finvite%2FFEA_vU2NvlnIPTUnBM%3Fv%3Dg1&type=invite&deeplinkId=ac972766-2121-4a37-bfa8-fcc319047b38&directDl=true&msLaunch=true&enableMobilePage=true&suppressPrompt=true" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="h-10 w-10 rounded-lg bg-white/10 hover:bg-accent-600/20 border border-white/20 hover:border-accent-500/50 flex items-center justify-center transition-all"
                    >
                      <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19.19 8.77v3.47h-6.93V8.77zM19.19 13.69v3.47h-6.93v-3.47zM11.73 8.77v8.39h-6.92V8.77zM21.62 0H2.38A2.38 2.38 0 000 2.38v19.24A2.38 2.38 0 002.38 24h19.24A2.38 2.38 0 0024 21.62V2.38A2.38 2.38 0 0021.62 0z"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="card-glass p-8">
                <h2 className="text-2xl font-bold text-white mb-6">Send us a message</h2>
                
                {status.message && (
                  <div className={`mb-6 p-4 rounded-xl border ${
                    status.type === 'success' 
                      ? 'bg-green-500/10 text-green-300 border-green-500/30' 
                      : 'bg-red-500/10 text-red-300 border-red-500/30'
                  }`}>
                    {status.message}
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="block text-white font-medium mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl text-white placeholder-white/40 focus:bg-white/10 focus:border-accent-500/50 focus:ring-2 focus:ring-accent-500/20 outline-none transition-all"
                      disabled={loading}
                    />
                  </div>

                  <div>
                    <label className="block text-white font-medium mb-2">
                      Email Address <span className="text-accent-400">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl text-white placeholder-white/40 focus:bg-white/10 focus:border-accent-500/50 focus:ring-2 focus:ring-accent-500/20 outline-none transition-all"
                      required
                      disabled={loading}
                    />
                  </div>

                  <div>
                    <label className="block text-white font-medium mb-2">
                      Message <span className="text-accent-400">*</span>
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your VoIP requirements..."
                      rows="5"
                      className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl text-white placeholder-white/40 focus:bg-white/10 focus:border-accent-500/50 focus:ring-2 focus:ring-accent-500/20 outline-none resize-none transition-all"
                      required
                      disabled={loading}
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full btn-ghost py-3 disabled:bg-gray-600 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    {loading ? (
                      <>
                        <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 p-6 text-center hover:bg-white/15 transition-all duration-300">
                <div className="text-3xl font-bold text-white mb-2">15+</div>
                <div className="text-white/70 text-sm">Years Experience</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 p-6 text-center hover:bg-white/15 transition-all duration-300">
                <div className="text-3xl font-bold text-white mb-2">24/7</div>
                <div className="text-white/70 text-sm">Support Available</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 p-6 text-center hover:bg-white/15 transition-all duration-300">
                <div className="text-3xl font-bold text-white mb-2">A–Z</div>
                <div className="text-white/70 text-sm">Global Coverage</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 p-6 text-center hover:bg-white/15 transition-all duration-300">
                <div className="text-3xl font-bold text-white mb-2">6+</div>
                <div className="text-white/70 text-sm">Countries Served</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-white">
        <div className="container-page">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full bg-brand-50 border border-brand-200 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-brand-700 mb-6">
                <span className="h-2 w-2 rounded-full bg-brand-600"></span>
                Our Location
              </span>
              <h2 className="text-4xl font-bold text-slate-900 mb-4">Visit Our Office</h2>
              <p className="text-slate-600 mb-8 text-lg">
                Visit us for reliable voice solutions and support. Our team is ready to help you optimize your telecommunications.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 rounded-xl bg-brand-50 border border-brand-200 flex items-center justify-center flex-shrink-0">
                    <svg className="h-6 w-6 text-brand-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-1">Address</h3>
                    <p className="text-slate-600">123 Telecom Ave, City</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 rounded-xl bg-brand-50 border border-brand-200 flex items-center justify-center flex-shrink-0">
                    <svg className="h-6 w-6 text-brand-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-1">Business Hours</h3>
                    <p className="text-slate-600">Monday - Friday: 9 AM - 5 PM</p>
                    <p className="text-slate-600">24/7 NOC Support</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="h-96 rounded-2xl overflow-hidden shadow-soft border border-slate-200">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.1841312949463!2d-73.98823492346618!3d40.75889097138558!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25855c6480299%3A0x55194ec5a1ae072e!2sTimes%20Square!5e0!3m2!1sen!2sus!4v1704534000000!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Location Map"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
