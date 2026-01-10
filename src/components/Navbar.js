import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="fixed w-full z-50 border-b border-white/10 bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 shadow-soft">
      <div className="container-page">
        <div className="flex justify-between items-center h-24">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <img 
                src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=768,fit=crop,q=95/YBgjGrWaMqF0kNZW/fulllogo_transparent-AQEeBylZ1DHDe8QB.png" 
                alt="I-SENSE TELECOM" 
                className="h-20 w-auto object-contain md:h-24"
              />
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className={`link-nav rounded-full px-4 py-2 ${location.pathname === '/' ? 'bg-white/10 text-white' : 'text-white/75 hover:text-white hover:bg-white/5'}`}
            >
              Home
            </Link>
            <Link
              to="/services"
              className={`link-nav rounded-full px-4 py-2 ${location.pathname === '/services' ? 'bg-white/10 text-white' : 'text-white/75 hover:text-white hover:bg-white/5'}`}
            >
              Services
            </Link>
            <Link
              to="/pricing"
              className={`link-nav rounded-full px-4 py-2 ${location.pathname === '/pricing' ? 'bg-white/10 text-white' : 'text-white/75 hover:text-white hover:bg-white/5'}`}
            >
              Pricing
            </Link>
            <Link
              to="/contact"
              className={`link-nav rounded-full px-4 py-2 ${location.pathname === '/contact' ? 'bg-white/10 text-white' : 'text-white/75 hover:text-white hover:bg-white/5'}`}
            >
              Contact
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <a 
              href="https://www.linkedin.com/in/usama-butt-isense-telecom/" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/70 hover:text-white transition"
              aria-label="Visit our LinkedIn profile"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>
            <a 
              href="https://teams.live.com/dl/launcher/launcher.html?url=%2F_%23%2Fl%2Finvite%2FFEA_vU2NvlnIPTUnBM%3Fv%3Dg1&type=invite&deeplinkId=ac972766-2121-4a37-bfa8-fcc319047b38&directDl=true&msLaunch=true&enableMobilePage=true&suppressPrompt=true" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/70 hover:text-white transition"
              aria-label="Join us on Microsoft Teams"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 2228.833 2073.333">
                <path fill="#5059C9" d="M1554.637 777.5h575.713c54.391 0 98.483 44.092 98.483 98.483v524.398c0 199.901-162.051 361.952-361.952 361.952h0-1.711c-199.901.028-361.975-162-362.004-361.901V828.971c.001-28.427 23.045-51.471 51.471-51.471z"/>
                <circle fill="#5059C9" cx="1943.75" cy="440.583" r="233.25"/>
                <circle fill="#7B83EB" cx="1218.083" cy="336.917" r="336.917"/>
                <path fill="#7B83EB" d="M1667.323 777.5H717.01c-53.743 1.33-96.257 45.931-95.01 99.676v598.105c-7.505 322.519 247.657 590.16 570.167 598.053 322.51-7.893 577.671-275.534 570.167-598.053V877.176c1.245-53.745-41.268-98.346-95.011-99.676z"/>
                <path opacity=".1" d="M1244 777.5v838.145c-.258 38.435-23.549 72.964-59.09 87.598-11.316 4.787-23.478 7.254-35.765 7.257H667.613c-6.738-17.105-12.958-34.21-18.142-51.833a631.287 631.287 0 01-27.472-183.49V877.02c-1.246-53.659 41.198-98.19 94.855-99.52H1244z"/>
                <path opacity=".2" d="M1192.167 777.5v889.978a91.84 91.84 0 01-7.257 35.765c-14.634 35.541-49.163 58.833-87.598 59.09H691.975c-8.812-17.105-17.105-34.21-24.362-51.833-7.257-17.623-12.958-34.21-18.142-51.833a631.282 631.282 0 01-27.472-183.49V877.02c-1.246-53.659 41.198-98.19 94.855-99.52h475.313z"/>
                <path opacity=".2" d="M1192.167 777.5v786.312c-.395 52.223-42.632 94.46-94.855 94.855h-447.84c-8.812-17.105-17.105-34.21-24.362-51.833-7.257-17.623-12.958-34.21-18.142-51.833a631.282 631.282 0 01-27.472-183.49V877.02c-1.246-53.659 41.198-98.19 94.855-99.52h517.816z"/>
                <path opacity=".2" d="M1140.333 777.5v786.312c-.395 52.223-42.632 94.46-94.855 94.855H649.472c-8.812-17.105-17.105-34.21-24.362-51.833-7.257-17.623-12.958-34.21-18.142-51.833a631.282 631.282 0 01-27.472-183.49V877.02c-1.246-53.659 41.198-98.19 94.855-99.52h465.982z"/>
                <path opacity=".1" d="M1244 509.522v163.275c-8.812.518-17.105 1.037-25.917 1.037s-17.105-.518-25.917-1.037c-17.496-1.161-34.848-3.937-51.833-8.293a336.92 336.92 0 01-233.25-198.003 288.02 288.02 0 01-16.587-51.833h258.648c52.305.198 94.657 42.549 94.856 94.854z"/>
                <path opacity=".2" d="M1192.167 561.355v111.442a880.15 880.15 0 01-77.75-8.293c-17.496-1.161-34.848-3.937-51.833-8.293a336.92 336.92 0 01-233.25-198.003h268.978c52.305.198 94.657 42.549 94.855 94.147z"/>
                <path opacity=".2" d="M1192.167 561.355v111.442a880.15 880.15 0 01-77.75-8.293c-17.496-1.161-34.848-3.937-51.833-8.293a336.92 336.92 0 01-233.25-198.003h268.978c52.305.198 94.657 42.549 94.855 94.147z"/>
                <path opacity=".2" d="M1140.333 561.355v103.148c-17.496-1.161-34.848-3.937-51.833-8.293a336.92 336.92 0 01-233.25-198.003h190.228c52.304.198 94.656 42.55 94.855 94.148z"/>
                <path fill="#FFF" d="M1667.323 1258.833h-576.23c-52.305-.198-94.656-42.549-94.855-94.855V828.971c.198-52.305 42.549-94.656 94.855-94.855h576.23c52.305.198 94.656 42.549 94.855 94.855v335.007c-.199 52.306-42.55 94.657-94.855 94.855z"/>
                <path fill="#5059C9" d="M1244 509.522v163.275c-8.812.518-17.105 1.037-25.917 1.037s-17.105-.518-25.917-1.037c-17.496-1.161-34.848-3.937-51.833-8.293a336.92 336.92 0 01-233.25-198.003 288.02 288.02 0 01-16.587-51.833h258.648c52.305.198 94.657 42.549 94.856 94.854z"/>
                <path fill="#7B83EB" d="M1192.167 561.355v111.442a880.15 880.15 0 01-77.75-8.293c-17.496-1.161-34.848-3.937-51.833-8.293a336.92 336.92 0 01-233.25-198.003h268.978c52.305.198 94.657 42.549 94.855 94.147z"/>
                <path fill="#FFF" d="M1667.323 1258.833h-576.23c-52.305-.198-94.656-42.549-94.855-94.855V828.971c.198-52.305 42.549-94.656 94.855-94.855h576.23c52.305.198 94.656 42.549 94.855 94.855v335.007c-.199 52.306-42.55 94.657-94.855 94.855z"/>
                <path fill="#5059C9" d="M1244 777.5v1.037c-.518 8.812-1.037 17.105-1.037 25.917v163.275c-8.812.518-17.105 1.037-25.917 1.037s-17.105-.518-25.917-1.037c-17.496-1.161-34.848-3.937-51.833-8.293a336.92 336.92 0 01-233.25-198.003 288.02 288.02 0 01-16.587-51.833h258.648c52.305.198 94.657 42.549 94.893 94.9z"/>
                <path fill="#FFF" d="M1244 777.5v1.037c-.518 8.812-1.037 17.105-1.037 25.917v163.275c-8.812.518-17.105 1.037-25.917 1.037s-17.105-.518-25.917-1.037c-17.496-1.161-34.848-3.937-51.833-8.293a336.92 336.92 0 01-233.25-198.003 288.02 288.02 0 01-16.587-51.833h258.648c52.305.198 94.657 42.549 94.893 94.9z"/>
              </svg>
            </a>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white/90 hover:text-white focus:outline-none"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-slate-950 border-t border-white/10">
          <div className="container-page py-4 space-y-1">
            <Link to="/" className={`block rounded-lg px-3 py-2 ${location.pathname === '/' ? 'text-white bg-white/10' : 'text-white/80 hover:bg-white/10'} `} onClick={() => setIsOpen(false)}>
              Home
            </Link>
            <Link to="/services" className={`block rounded-lg px-3 py-2 ${location.pathname === '/services' ? 'text-white bg-white/10' : 'text-white/80 hover:bg-white/10'} `} onClick={() => setIsOpen(false)}>
              Services
            </Link>
            <Link to="/pricing" className={`block rounded-lg px-3 py-2 ${location.pathname === '/pricing' ? 'text-white bg-white/10' : 'text-white/80 hover:bg-white/10'} `} onClick={() => setIsOpen(false)}>
              Pricing
            </Link>
            <Link to="/contact" className={`block rounded-lg px-3 py-2 ${location.pathname === '/contact' ? 'text-white bg-white/10' : 'text-white/80 hover:bg-white/10'} `} onClick={() => setIsOpen(false)}>
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
