import React from 'react';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-white/10 bg-black text-white">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 py-6 flex items-center justify-center">
        <p className="text-sm md:text-base text-white/70 tracking-wide text-center">
          Copyright © {year} Mohamed Tarek. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
