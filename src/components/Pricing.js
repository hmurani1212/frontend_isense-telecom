import React, { useState } from 'react';

const Pricing = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: ''
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!formData.email.trim()) {
      setStatus({ type: 'error', message: 'Email is required' });
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      setStatus({ type: 'error', message: 'Please enter a valid email address' });
      return;
    }

    setLoading(true);
    setStatus({ type: '', message: '' });

    try {
      const response = await fetch('https://builder-backend.hostinger.com/u1/data/v3/post/mp84wvjqewtW4NKEg3XVA165Ze1dZavj', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          elementId: "ai-Gcb3S7",
          formData: {
            Email: {
              value: formData.email,
              type: "email"
            }
          }
        }),
      });

      if (response.ok || response.status === 200) {
        setStatus({ 
          type: 'success', 
          message: 'Submission successful! We will contact you soon.' 
        });
        setFormData({ name: '', email: '' });
      } else {
        setStatus({ 
          type: 'error', 
          message: 'Submission failed. Please try again.' 
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
        
        <div className="absolute top-0 left-0 w-full h-full bg-black/60"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-hero-radial"></div>

        <div className="relative z-10 container-page">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/20 shadow-soft hover:shadow-glow hover:border-white/30 transition duration-300">
              <img 
                src="/cc-pricing.jpg" 
                alt="CC Pricing" 
                className="w-full h-48 object-cover"
              />
              <div className="p-8 text-center">
                <h3 className="text-3xl font-bold text-white mb-4">CC</h3>
                <p className="text-white/85 leading-relaxed mb-6">
                  The CC trunk has a good call quality. This trunk is best suited for call centers, taking into account the specifics of incoming traffic.
                </p>
                <a
                  href="mailto:support@i-sensetelecom.com"
                  className="btn-ghost"
                >
                  Details
                </a>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/20 shadow-soft hover:shadow-glow hover:border-white/30 transition duration-300">
              <img 
                src="/retail-pricing.jpg" 
                alt="Retail Pricing" 
                className="w-full h-48 object-cover"
              />
              <div className="p-8 text-center">
                <h3 className="text-3xl font-bold text-white mb-4">Retail</h3>
                <p className="text-white/85 leading-relaxed mb-6">
                  Retail trunk can be used for clean local business traffic nationwide. You will get high quality routes with the best rates in the market.
                </p>
                <a
                  href="mailto:support@i-sensetelecom.com"
                  className="btn-ghost"
                >
                  Details
                </a>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/20 shadow-soft hover:shadow-glow hover:border-white/30 transition duration-300">
              <img 
                src="/lowcost-pricing.jpg" 
                alt="Low Cost Pricing" 
                className="w-full h-48 object-cover"
              />
              <div className="p-8 text-center">
                <h3 className="text-3xl font-bold text-white mb-4">Low cost</h3>
                <p className="text-white/85 leading-relaxed mb-6">
                  Low cost trunk is our special offer. This trunk provides connection to the networks of the largest telecom operators with good callback at the best possible rate.
                </p>
                <a
                  href="mailto:support@i-sensetelecom.com"
                  className="btn-ghost"
                >
                  Details
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-20 overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-brand-950">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMiI+PHBhdGggZD0iTTM2IDE0YzYuNjI3IDAgMTIgNS4zNzMgMTIgMTJzLTUuMzczIDEyLTEyIDEyLTEyLTUuMzczLTEyLTEyIDUuMzczLTEyIDEyLTEyem0wIDJ2MmMtNC40MTggMC04IDMuNTgyLTggOHMzLjU4MiA4IDggOCA4LTMuNTgyIDgtOC0zLjU4Mi04LTgtOHYtMnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-30"></div>
        
        <div className="relative z-10 container-page">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Pricing Plans</h2>
            <p className="text-lg text-white/70 mb-8">
              Affordable voice solutions for everyone
            </p>

            {status.message && (
              <div className={`mb-6 p-4 rounded-xl border ${
                status.type === 'success' 
                  ? 'bg-green-500/10 text-green-300 border-green-500/30' 
                  : 'bg-red-500/10 text-red-300 border-red-500/30'
              }`}>
                {status.message}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-left text-white font-medium mb-2">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  className="w-full px-6 py-4 bg-white/5 border border-white/20 rounded-xl text-white placeholder-white/40 focus:bg-white/10 focus:border-accent-500/50 focus:ring-2 focus:ring-accent-500/20 outline-none transition-all"
                  disabled={loading}
                />
              </div>

              <div>
                <label className="block text-left text-white font-medium mb-2">
                  Email Address <span className="text-accent-400">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  className="w-full px-6 py-4 bg-white/5 border border-white/20 rounded-xl text-white placeholder-white/40 focus:bg-white/10 focus:border-accent-500/50 focus:ring-2 focus:ring-accent-500/20 outline-none transition-all"
                  required
                  disabled={loading}
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="btn-ghost px-12 py-4 disabled:bg-gray-600 disabled:cursor-not-allowed flex items-center justify-center mx-auto"
              >
                {loading ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Submitting...
                  </>
                ) : (
                  'Submit'
                )}
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Pricing;
