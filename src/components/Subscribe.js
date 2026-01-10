import React, { useState } from 'react';

const Subscribe = () => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({ type: '', message: '' });

  const handleSubmit = async (e) => {
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
        message: 'Network error. Please check your connection and try again.' 
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-20 bg-white">
      <div className="container-page">
        <div className="max-w-2xl mx-auto text-center">
          <div className="mb-6 flex justify-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-slate-700">
              <span className="h-2 w-2 rounded-full bg-brand-600"></span>
              Newsletter
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Subscribe Now</h2>
          <p className="text-lg text-gray-600 mb-8">
            Join i-sense telecom for seamless calling.
          </p>

          {status.message && (
            <div className={`mb-6 p-4 rounded-lg ${
              status.type === 'success' 
                ? 'bg-green-100 text-green-700 border border-green-300' 
                : 'bg-red-100 text-red-700 border border-red-300'
            }`}>
              {status.message}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-left text-gray-700 font-medium mb-2">
                Email Address
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full px-6 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none transition text-gray-700"
                disabled={loading}
                required
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="btn-primary px-12 py-4 disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center justify-center mx-auto"
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
  );
};

export default Subscribe;
