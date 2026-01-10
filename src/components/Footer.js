import React, { useState } from 'react';

const Footer = () => {
  const phoneNumber = '+12082811117';
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({ type: '', message: '' });

  const handleEmailSubmit = async (e) => {
    e.preventDefault();
    
    if (!email.trim()) {
      setStatus({ type: 'error', message: 'Email is required' });
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setStatus({ type: 'error', message: 'Please enter a valid email address' });
      return;
    }

    setLoading(true);
    setStatus({ type: '', message: '' });

    try {
      const response = await fetch('https://builder-backend.hostinger.com/u1/data/v3/post/d95ZG1r9l2CPGngDZb3VdOp1rekYgNa7', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          elementId: "ai-jnHdd6",
          formData: {
            Email: {
              value: email,
              type: "email"
            }
          }
        }),
      });

      if (response.ok || response.status === 200) {
        setStatus({ 
          type: 'success', 
          message: 'Submission successful!' 
        });
        setEmail('');
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
        message: 'Network error. Please try again.' 
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <footer className="relative py-16 overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src="/footer-video.mp4" type="video/mp4" />
      </video>
      
      <div className="absolute top-0 left-0 w-full h-full bg-black/60"></div>
      <div className="absolute top-0 left-0 w-full h-full bg-hero-radial"></div>

      <div className="relative z-10 container-page">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div>
            <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
            <div className="space-y-3 text-white">
              <p>
                <span className="font-semibold">Tel:</span>{' '}
                <a href="tel:+12082811117" className="hover:text-white transition">
                  +1 (208) 281-1117
                </a>
              </p>
              <p>
                <span className="font-semibold">Support:</span>{' '}
                <a href="mailto:support@i-sensetelecom.com" className="hover:text-white transition">
                  support@i-sensetelecom.com
                </a>
              </p>
            </div>

            <div className="flex space-x-4 mt-8">
              <a href="#" className="w-10 h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center hover:bg-opacity-30 transition">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M13.135 6H15V3h-1.865a4.147 4.147 0 0 0-4.142 4.142V9H7v3h2v9.938h3V12h2.021l.592-3H12V6.591A.6.6 0 0 1 12.592 6h.543Z"/>
                </svg>
              </a>
              <a href="#" className="w-10 h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center hover:bg-opacity-30 transition">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.51 8.796v1.697a3.738 3.738 0 0 1 3.288-1.684c3.455 0 4.202 2.16 4.202 4.97V19.5h-3.2v-5.072c0-1.21-.244-2.766-2.128-2.766-1.827 0-2.139 1.317-2.139 2.676V19.5h-3.19V8.796h3.168ZM7.2 6.106a1.61 1.61 0 0 1-.988 1.483 1.595 1.595 0 0 1-1.743-.348A1.607 1.607 0 0 1 5.6 4.5a1.601 1.601 0 0 1 1.6 1.606Z"/>
                  <path d="M7.2 8.809H4V19.5h3.2V8.809Z"/>
                </svg>
              </a>
              <a href="#" className="w-10 h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center hover:bg-opacity-30 transition">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M13.795 10.533 20.68 2h-3.073l-5.255 6.517L7.69 2H1l7.806 10.91L1.47 22h3.074l5.705-7.07L15.31 22H22l-8.205-11.467Zm-2.38 2.95L9.97 11.464 4.36 3.627h2.31l4.528 6.317 1.443 2.02 6.018 8.409h-2.31l-4.934-6.89Z"/>
                </svg>
              </a>
            </div>
          </div>

          <div className="text-center">
            <h4 className="text-xl font-bold text-white mb-4">Support</h4>
            <p className="text-white mb-2">
              <a href="tel:+12082811117" className="hover:text-white transition">
                +1 (208) 281-1117
              </a>
            </p>
            <p className="text-white">
              <a href="mailto:support@i-sensetelecom.com" className="hover:text-white transition">
                support@i-sensetelecom.com
              </a>
            </p>
          </div>

          <div>
            <h4 className="text-xl font-bold text-white mb-4">Follow</h4>
            <p className="text-white mb-4">Email address</p>
            
            {status.message && (
              <div className={`mb-4 p-3 rounded-lg text-sm ${
                status.type === 'success' 
                  ? 'bg-green-500 bg-opacity-20 text-green-200 border border-green-500' 
                  : 'bg-red-500 bg-opacity-20 text-red-200 border border-red-500'
              }`}>
                {status.message}
              </div>
            )}

            <form onSubmit={handleEmailSubmit} className="space-y-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                className="w-full px-4 py-3 bg-white/10 border border-white/15 rounded-xl text-white placeholder-white/60 focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none backdrop-blur-sm"
                disabled={loading}
                required
              />
              <button
                type="submit"
                disabled={loading}
                className="btn-primary px-8 py-3 disabled:bg-gray-600 disabled:cursor-not-allowed flex items-center justify-center w-full sm:w-auto"
              >
                {loading ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
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

        <div className="border-t border-white border-opacity-20 pt-8 text-center">
          <p className="text-white text-sm">
            © 2025. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
