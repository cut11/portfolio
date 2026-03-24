import React, { useEffect } from 'react';

function Home() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-y-0');
            entry.target.classList.remove('opacity-0', 'translate-y-12');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <div
        className="relative w-full min-h-screen flex items-center justify-center overflow-hidden pt-24 bg-black"
        style={{ background: "linear-gradient(105deg, #3b0764 45%, #000000 45%)" }}
      >
        <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20 py-12 flex flex-col md:flex-row items-center justify-between gap-12 text-white">

          {/* Left Side: Personal Image */}
          <div className="relative w-full md:w-[45%] lg:w-1/2 flex justify-center mt-8 md:mt-0 order-2 md:order-1">
            <div className="relative w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] lg:w-[480px] lg:h-[480px] shrink-0">
              {/* The white circular border frame */}
              <div className="w-full h-full rounded-full border-[6px] lg:border-8 border-white overflow-hidden shadow-2xl bg-gray-800 flex items-center justify-center">
                <img src="/WhatsApp Image 2026-03-16 at 10.18.50 PM.jpeg" alt="Mohamed Tarek" className="w-full h-full object-cover object-top" />
              </div>

              {/* Orbiting Decorative Dots */}
              <div className="absolute inset-0 z-10 hidden sm:block pointer-events-none animate-[spin_15s_linear_infinite]">
                {/* Purple dot */}
                <div className="absolute -top-5 lg:-top-5 left-1/2 -translate-x-1/2 w-12 h-12 lg:w-12 lg:h-12 rounded-full bg-[#9333ea] shadow-lg border border-white/20"></div>
                {/* Black dot */}
                <div className="absolute -bottom-5 lg:-bottom-5 left-1/2 -translate-x-1/2 w-12 h-12 lg:w-12 lg:h-12 rounded-full bg-black shadow-lg border-2 border-black"></div>
              </div>
            </div>
          </div>

          {/* Right Side: Text Content */}
          <div className="w-full md:w-[55%] lg:w-1/2 flex flex-col items-start text-left z-10 order-1 md:order-2">
            <span className="text-[#cceb00] font-bold text-lg md:text-xl lg:text-2xl mb-2 lg:mb-4 tracking-wide">Hello I'm Mohamed Tarek</span>

            <h1 className="text-white text-5xl sm:text-6xl lg:text-[76px] font-black leading-[1.05] mb-6 uppercase">
              FullStack<br />Developer<br />In Egypt
            </h1>

            <p className="text-gray-300 text-base md:text-lg lg:text-xl max-w-lg mb-10 leading-relaxed font-light">
              As a passionate FullStack Developer, I thrive on creating beautiful and intuitive digital experiences that delight users.
            </p>

          </div>

        </div>
      </div>

      {/* About Me / Portfolio Section */}
      <section className="w-full bg-[#0a0a0a] min-h-[90vh] flex flex-col md:flex-row items-stretch relative overflow-hidden mt-16">
        {/* Faint circle decoration */}
        <div className="absolute top-16 left-16 w-[120px] h-[120px] rounded-full border border-white/5 hidden md:block z-0 pointer-events-none"></div>

        {/* Left Side: Content */}
        <div className="w-full md:w-1/2 px-6 md:px-12 lg:px-24 py-16 md:py-24 flex flex-col items-start justify-center text-left relative z-10">
          <span className="text-[#cceb00] font-bold text-[11px] md:text-sm tracking-widest uppercase mb-4 md:mb-6 animate-on-scroll opacity-0 translate-y-12 transition-all duration-1000 ease-out">ABOUT ME</span>

          <h2 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-[60px] font-black leading-[1.05] mb-6 md:mb-10 uppercase animate-on-scroll opacity-0 translate-y-12 transition-all duration-1000 ease-out delay-100">
            VISUAL JOURNEY<br />THROUGH MY<br />PORTFOLIO
          </h2>

          <p className="text-[#a0a0a0] text-sm md:text-base leading-relaxed max-w-lg mb-8 md:mb-12 font-light animate-on-scroll opacity-0 translate-y-12 transition-all duration-1000 ease-out delay-200">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
            doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illonge inventore
            veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam
          </p>

          <div className="mt-8 flex items-center justify-start w-full animate-on-scroll opacity-0 translate-y-12 transition-all duration-1000 ease-out delay-300">
            <span className="text-[#cceb00] font-bold text-xs tracking-widest uppercase cursor-pointer hover:text-white transition-colors"></span>
          </div>
        </div>

        {/* Right Side: Image */}
        <div className="w-full md:w-1/2 p-6 md:p-12 lg:p-16 flex relative animate-on-scroll opacity-0 translate-y-12 transition-all duration-1000 ease-out delay-500">
          <div className="w-full min-h-[400px] md:min-h-0 relative shadow-2xl overflow-hidden">
            <div
              className="absolute inset-0 w-full h-full bg-cover bg-center"
              style={{ backgroundImage: "url('/imagesea(11).jpg')" }}
            ></div>
          </div>

          {/* Faint circular border */}
          <div className="absolute -left-10 bottom-20 w-32 h-32 rounded-full border border-white/5 pointer-events-none hidden md:block z-10"></div>
        </div>

        {/* Directional small arrow icon at the very bottom right */}
        <div className="absolute bottom-8 right-8 w-10 h-10 rounded-full border border-white/10 hidden md:flex items-center justify-center cursor-pointer hover:border-[#cceb00] transition-colors z-20 group">
          <svg className="w-4 h-4 text-white group-hover:text-[#cceb00] transition-colors rotate-45" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M5 10l7-7m0 0l7 7m-7-7v18"></path>
          </svg>
        </div>
      </section>

      {/* Services Section */}
      <section className="w-full bg-[#0a0a0a] py-16 md:py-24 px-6 md:px-12 lg:px-24 flex flex-col items-center">
        {/* Header */}
        <div className="text-center mb-16 space-y-4 animate-on-scroll opacity-0 translate-y-12 transition-all duration-1000 ease-out">
          <span className="text-[#cceb00] font-bold text-[11px] md:text-sm tracking-widest uppercase">My Service</span>
          <h2 className="text-white text-3xl md:text-4xl lg:text-[46px] font-black uppercase max-w-3xl mx-auto leading-[1.1]">
            Pushing Boundaries: My Portfolio of Limitless Ideas
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 w-full max-w-[1400px]">
          {/* Card 1 */}
          <div className="flex flex-col group cursor-pointer bg-transparent animate-on-scroll opacity-0 translate-y-12 transition-all duration-1000 ease-out delay-100">
            <div className="relative w-full aspect-[4/3] overflow-hidden mb-6">
              <img src="/imagesea(12).jpg" alt="Website Design" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              {/* Yellow Icon Badge */}
              <div className="absolute top-0 left-6 md:left-8 w-14 h-14 md:w-16 md:h-16 bg-[#cceb00] flex items-center justify-center shadow-lg">
                <svg className="w-6 h-6 md:w-8 md:h-8 text-black" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"></path>
                </svg>
              </div>
            </div>
            <div className="px-0 pb-6">
              <h3 className="text-white text-xl md:text-2xl font-bold mb-3">Website Design</h3>
              <p className="text-[#a0a0a0] text-sm leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore incididunt ut labore et dolore
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="flex flex-col group cursor-pointer bg-transparent animate-on-scroll opacity-0 translate-y-12 transition-all duration-1000 ease-out delay-300">
            <div className="relative w-full aspect-[4/3] overflow-hidden mb-6">
              <img src="imagesea(14).jpg" alt="Logo Design" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              {/* Yellow Icon Badge */}
              <div className="absolute top-0 left-6 md:left-8 w-14 h-14 md:w-16 md:h-16 bg-[#cceb00] flex items-center justify-center shadow-lg">
                <svg className="w-6 h-6 md:w-8 md:h-8 text-black" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                </svg>
              </div>
            </div>
            <div className="px-0 pb-6">
              <h3 className="text-white text-xl md:text-2xl font-bold mb-3">Logo Design</h3>
              <p className="text-[#a0a0a0] text-sm leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore incididunt ut labore et dolore
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="flex flex-col group cursor-pointer bg-transparent animate-on-scroll opacity-0 translate-y-12 transition-all duration-1000 ease-out delay-500">
            <div className="relative w-full aspect-[4/3] overflow-hidden mb-6">
              <img src="/imagesea(13).jpg" alt="Apps Development" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              {/* Yellow Icon Badge */}
              <div className="absolute top-0 left-6 md:left-8 w-14 h-14 md:w-16 md:h-16 bg-[#cceb00] flex items-center justify-center shadow-lg">
                <svg className="w-6 h-6 md:w-8 md:h-8 text-black" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"></path>
                </svg>
              </div>
            </div>
            <div className="px-0 pb-6">
              <h3 className="text-white text-xl md:text-2xl font-bold mb-3">Apps Development</h3>
              <p className="text-[#a0a0a0] text-sm leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore incididunt ut labore et dolore
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home
