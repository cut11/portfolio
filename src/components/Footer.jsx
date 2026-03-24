import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full border-t border-white/10 bg-black text-white">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 py-5 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2">
          <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-white" aria-hidden="true">
            <path d="M11 2L7 11h4v11l8-14h-5z" />
          </svg>
          <span className="text-3xl font-bold tracking-tight">MMW</span>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-8 text-[13px] font-bold tracking-wider uppercase">
          <a href="#" className="flex items-center text-[#3B82F6] hover:text-[#e4ff1a] transition-colors">
            Home
            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7"></path>
            </svg>
          </a>
          <a href="#" className="hover:text-[#3B82F6] transition-colors">Aboutus</a>
          <a href="#" className="hover:text-[#3B82F6] transition-colors">Services</a>
          <a href="#" className="hover:text-[#3B82F6] transition-colors">Projects</a>
          <a href="#" className="hover:text-[#3B82F6] transition-colors">Contact</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
