import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { label: 'HOME', active: true },
    { label: 'ABOUTUS' },
    { label: 'SERVICES' },
    { label: 'PROJECTS' },
    { label: 'CONTACT' },
  ];

  return (
    <nav className="absolute top-0 left-0 z-50 w-full bg-transparent text-white">
      {/* Background shape on left */}
      <div className="absolute top-0 left-0 h-full w-[45%] bg-transparent z-0"></div>

      <div className="relative z-10 flex items-center justify-between px-6 md:px-10 py-5">
        <div className="flex items-center gap-2">
          <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-white" aria-hidden="true">
            <path d="M11 2L7 11h4v11l8-14h-5z" />
          </svg>
          <span className="text-3xl font-bold tracking-tight">MMW</span>
        </div>

        <button
          type="button"
          className="md:hidden inline-flex items-center justify-center w-10 h-10 border border-white/20 hover:border-[#3B82F6] transition-colors"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12"></path>
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M4 7h16M4 12h16M4 17h16"></path>
            )}
          </svg>
        </button>

        <div className="relative z-10 hidden md:flex items-center gap-8 text-[13px] font-bold tracking-wider uppercase">
          {links.map((link) => (
            <a
              key={link.label}
              href="#"
              className={
                link.active
                  ? 'flex items-center text-[#3B82F6] hover:text-[#e4ff1a] transition-colors cursor-pointer'
                  : 'hover:text-[#3B82F6] transition-colors cursor-pointer'
              }
            >
              {link.label}
              {link.active ? (
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7"></path>
                </svg>
              ) : null}
            </a>
          ))}
        </div>
      </div>

      <div
        className={`md:hidden px-6 pb-5 transition-all duration-300 overflow-hidden ${
          isOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0 pb-0'
        }`}
      >
        <div className="bg-black/90 border border-white/10 backdrop-blur-sm">
          {links.map((link) => (
            <a
              key={link.label}
              href="#"
              className={`w-full px-4 py-3 block text-[13px] font-bold tracking-wider uppercase transition-colors ${
                link.active ? 'text-[#3B82F6] hover:text-[#e4ff1a]' : 'text-white hover:text-[#3B82F6]'
              }`}
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
