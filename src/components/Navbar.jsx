import React from 'react';

const Navbar = () => {
  return (
    <nav className="absolute top-0 left-0 z-50 flex items-center justify-between px-10 py-5 bg-transparent text-white w-full">
      {/* Background shape on left */}
      <div className="absolute top-0 left-0 h-full w-[45%] bg-transparent z-0"></div>

      <div className="relative z-10 flex items-center gap-2">
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-white" aria-hidden="true">
          <path d="M11 2L7 11h4v11l8-14h-5z" />
        </svg>
        <span className="text-3xl font-bold tracking-tight">iSti</span>
      </div>

      <div className="relative z-10 flex items-center gap-8 text-[13px] font-bold tracking-wider uppercase">
        <a href="#" className="flex items-center text-[#cceb00] hover:text-[#e4ff1a] transition-colors cursor-pointer">
          HOME
          <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7"></path>
          </svg>
        </a>
        <a href="#" className="hover:text-[#cceb00] transition-colors cursor-pointer">ABOUTUS</a>
        <a href="#" className="hover:text-[#cceb00] transition-colors cursor-pointer">SERVICES</a>
        <a href="#" className="hover:text-[#cceb00] transition-colors cursor-pointer">PROJECTS</a>
        <a href="#" className="flex items-center hover:text-[#cceb00] transition-colors cursor-pointer">
          BLOG
          <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7"></path>
          </svg>
        </a>
        <a href="#" className="hover:text-[#cceb00] transition-colors cursor-pointer">CONTACT</a>
      </div>
    </nav>
  );
};

export default Navbar;
