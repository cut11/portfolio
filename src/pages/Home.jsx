import React, { useEffect, useState } from 'react';

function Home() {
  const galleryImages = [
    '/imagesea(16).jpg',
    '/imagesea(15).jpg',
    '/imagesea(16).jpg',
    '/imagesea(15).jpg',
    '/imagesea(16).jpg',
    '/imagesea(15).jpg'
  ];
  const [galleryIndex, setGalleryIndex] = useState(0);

  const maxGalleryIndex = galleryImages.length > 1 ? galleryImages.length - 2 : 0;

  const handlePrevGallery = () => {
    setGalleryIndex((prev) => (prev === 0 ? maxGalleryIndex : prev - 1));
  };

  const handleNextGallery = () => {
    setGalleryIndex((prev) => (prev >= maxGalleryIndex ? 0 : prev + 1));
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-y-0');
            entry.target.classList.remove('opacity-0', 'translate-y-12');

            // Animate progress bars
            const progressBars = entry.target.querySelectorAll('.progress-bar-fill');
            progressBars.forEach(bar => {
              bar.style.width = bar.getAttribute('data-width');
            });

            // Animate tooltips
            const tooltips = entry.target.querySelectorAll('.progress-tooltip');
            tooltips.forEach(tooltip => {
              tooltip.style.left = tooltip.getAttribute('data-left');
              tooltip.style.opacity = '1';
            });
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
        style={{ background: "linear-gradient(105deg, #3B82F6 45%, #000000 45%)" }}
      >ss
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
                <div className="absolute -top-5 lg:-top-5 left-1/2 -translate-x-1/2 w-12 h-12 lg:w-12 lg:h-12 rounded-full bg-[#3B82F6] shadow-lg border border-white/20"></div>
                {/* Black dot */}
                <div className="absolute -bottom-5 lg:-bottom-5 left-1/2 -translate-x-1/2 w-12 h-12 lg:w-12 lg:h-12 rounded-full bg-black shadow-lg border-2 border-black"></div>
              </div>
            </div>
          </div>

          {/* Right Side: Text Content */}
          <div className="w-full md:w-[55%] lg:w-1/2 flex flex-col items-start text-left z-10 order-1 md:order-2">
            <span className="text-[#3B82F6] font-bold text-lg md:text-xl lg:text-2xl mb-2 lg:mb-4 tracking-wide">Hello I'm Mohamed Tarek</span>

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
          <span className="text-[#3B82F6] font-bold text-[11px] md:text-sm tracking-widest uppercase mb-4 md:mb-6 animate-on-scroll opacity-0 translate-y-12 transition-all duration-1000 ease-out">ABOUT ME</span>

          <h2 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-[60px] font-black leading-[1.05] mb-6 md:mb-10 uppercase animate-on-scroll opacity-0 translate-y-12 transition-all duration-1000 ease-out delay-100">
            VISUAL JOURNEY<br />THROUGH MY<br />PORTFOLIO
          </h2>

          <p className="text-[#a0a0a0] text-sm md:text-base leading-relaxed max-w-lg mb-8 md:mb-12 font-light animate-on-scroll opacity-0 translate-y-12 transition-all duration-1000 ease-out delay-200">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
            doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illonge inventore
            veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam
          </p>

          <div className="mt-8 flex items-center justify-start w-full animate-on-scroll opacity-0 translate-y-12 transition-all duration-1000 ease-out delay-300">
            <span className="text-[#3B82F6] font-bold text-xs tracking-widest uppercase cursor-pointer hover:text-white transition-colors"></span>
          </div>
        </div>

        {/* Right Side: Image */}
        <div className="w-full md:w-1/2 p-6 md:p-12 lg:p-16 flex relative animate-on-scroll opacity-0 translate-y-12 transition-all duration-1000 ease-out delay-500">
          <div className="hover-cursor-target w-full relative shadow-2xl overflow-hidden h-[260px] sm:h-[360px] md:h-auto md:aspect-[3/4] lg:aspect-[4/5] max-h-[680px]">
            <div
              className="absolute inset-0 w-full h-full bg-cover bg-center"
              style={{ backgroundImage: "url('/imagesea(11).jpg')" }}
            ></div>
          </div>

          {/* Faint circular border */}
          <div className="absolute -left-10 bottom-20 w-32 h-32 rounded-full border border-white/5 pointer-events-none hidden md:block z-10"></div>
        </div>


      </section>

      {/* Services Section */}
      <section className="w-full bg-[#0a0a0a] py-16 md:py-24 px-6 md:px-12 lg:px-24 flex flex-col items-center">
        {/* Header */}
        <div className="text-center mb-16 space-y-4 animate-on-scroll opacity-0 translate-y-12 transition-all duration-1000 ease-out">
          <span className="text-[#3B82F6] font-bold text-[11px] md:text-sm tracking-widest uppercase">My Service</span>
          <h2 className="text-white text-3xl md:text-4xl lg:text-[46px] font-black uppercase max-w-3xl mx-auto leading-[1.1]">
            Pushing Boundaries: My Portfolio of Limitless Ideas
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 w-full max-w-[1400px]">
          {/* Card 1 */}
          <div className="flex flex-col group cursor-pointer bg-transparent animate-on-scroll opacity-0 translate-y-12 transition-all duration-1000 ease-out delay-100">
            <div className="hover-cursor-target relative w-full aspect-[4/3] overflow-hidden mb-6">
              <img src="/imagesea(12).jpg" alt="Website Design" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              {/* Yellow Icon Badge */}
              <div className="absolute top-0 left-6 md:left-8 w-14 h-14 md:w-16 md:h-16 bg-[#3B82F6] flex items-center justify-center shadow-lg">
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
            <div className="hover-cursor-target relative w-full aspect-[4/3] overflow-hidden mb-6">
              <img src="imagesea(14).jpg" alt="Logo Design" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              {/* Yellow Icon Badge */}
              <div className="absolute top-0 left-6 md:left-8 w-14 h-14 md:w-16 md:h-16 bg-[#3B82F6] flex items-center justify-center shadow-lg">
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
            <div className="hover-cursor-target relative w-full aspect-[4/3] overflow-hidden mb-6">
              <img src="/imagesea(13).jpg" alt="Apps Development" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              {/* Yellow Icon Badge */}
              <div className="absolute top-0 left-6 md:left-8 w-14 h-14 md:w-16 md:h-16 bg-[#3B82F6] flex items-center justify-center shadow-lg">
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

      {/* My Skills Section */}
      <section className="w-full bg-[#0a0a0a] py-16 md:py-24 px-6 md:px-12 lg:px-24 flex flex-col items-center">
        {/* Header */}
        <div className="text-center mb-16 md:mb-20 space-y-4 animate-on-scroll opacity-0 translate-y-12 transition-all duration-1000 ease-out">
          <span className="text-[#3B82F6] font-bold text-[11px] md:text-sm tracking-widest uppercase">My Skills</span>
          <h2 className="text-white text-3xl md:text-4xl lg:text-[46px] font-black uppercase max-w-3xl mx-auto leading-[1.1]">
            Crafting Ideas Building Dreams My Creative Portfolio
          </h2>
        </div>

        {/* Timeline List */}
        <div className="w-full max-w-[1200px] flex flex-col relative animate-on-scroll opacity-0 translate-y-12 transition-all duration-1000 ease-out delay-200">
          
          {/* Item 1 */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 relative z-10 w-full mb-12 items-start">
            
            {/* Left: Role Info */}
            <div className="md:col-span-3 flex flex-col space-y-2">
              <h3 className="text-white text-2xl font-black">2019 - Present</h3>
              <span className="text-white text-[10px] md:text-xs font-bold tracking-widest uppercase mt-3">Creative Agency</span>
              <span className="text-[#3B82F6] text-sm font-semibold">Framer Designer & Developer</span>
            </div>

            {/* Middle: Description */}
            <div className="md:col-span-5 flex items-start md:items-center">
              <p className="text-[#a0a0a0] text-sm leading-relaxed font-light mt-1 md:mt-0">
                Nemo enim ipsam voluptatem designr quia voluptas sit aspernatur aut odit aut fugit sed thisnquia consequuntur magni dolores eos qUI Designe ratione
              </p>
            </div>

            {/* Right: Progress Bar */}
            <div className="md:col-span-4 flex flex-col justify-center">
              <div className="relative w-full mt-6 md:mt-0">
                <span className="text-white text-xs font-medium block mb-8">Performance</span>
                
                {/* Bar */}
                <div className="w-full h-1.5 bg-[#ffffff33] relative">
                  <div 
                    className="progress-bar-fill absolute top-0 left-0 h-full bg-[#3B82F6] transition-all duration-[1500ms] ease-out w-0" 
                    data-width="70%"
                  ></div>
                  
                  {/* Tooltip */}
                  <div 
                    className="progress-tooltip absolute bottom-3 flex flex-col items-center transition-all duration-[1500ms] ease-out opacity-0"
                    style={{ left: '0%', transform: 'translateX(-50%)' }}
                    data-left="70%"
                  >
                    <div className="border border-white/20 text-white text-[10px] font-bold py-1 px-3 rounded-full bg-[#0a0a0a] relative z-10">
                      70%
                    </div>
                    {/* Tick/Arrow */}
                    <div className="w-1.5 h-1.5 bg-[#0a0a0a] border-b border-r border-white/20 rotate-45 -mt-1 relative z-0"></div>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Divider Line with Circle */}
          <div className="relative w-full py-8 md:py-12 hidden md:block">
             <div className="absolute top-1/2 left-0 w-full h-[1px] bg-white/10 -translate-y-1/2"></div>
             {/* The circle on the line */}
             <div className="absolute top-1/2 left-[25%] -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full border border-white/10 bg-[#0a0a0a]"></div>
          </div>

          {/* Item 2 */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 relative z-10 w-full mt-8 md:mt-0 items-start">
            
            {/* Left: Role Info */}
            <div className="md:col-span-3 flex flex-col space-y-2">
              <h3 className="text-white text-2xl font-black">2014 - 2018</h3>
              <span className="text-white text-[10px] md:text-xs font-bold tracking-widest uppercase mt-3">Samsung Tech</span>
              <span className="text-[#3B82F6] text-sm font-semibold">Web Application Manager</span>
            </div>

            {/* Middle: Description */}
            <div className="md:col-span-5 flex items-start md:items-center">
              <p className="text-[#a0a0a0] text-sm leading-relaxed font-light mt-1 md:mt-0">
                Nemo enim ipsam voluptatem designr quia voluptas sit aspernatur aut odit aut fugit sed thisnquia consequuntur magni dolores eos qUI Designe ratione
              </p>
            </div>

            {/* Right: Progress Bar */}
            <div className="md:col-span-4 flex flex-col justify-center">
              <div className="relative w-full mt-6 md:mt-0">
                <span className="text-white text-xs font-medium block mb-8">Performance</span>
                
                {/* Bar */}
                <div className="w-full h-1.5 bg-[#ffffff33] relative">
                  <div 
                    className="progress-bar-fill absolute top-0 left-0 h-full bg-[#3B82F6] transition-all duration-[1500ms] ease-out w-0" 
                    data-width="80%"
                  ></div>
                  
                  {/* Tooltip */}
                  <div 
                    className="progress-tooltip absolute bottom-3 flex flex-col items-center transition-all duration-[1500ms] ease-out opacity-0"
                    style={{ left: '0%', transform: 'translateX(-50%)' }}
                    data-left="80%"
                  >
                    <div className="border border-white/20 text-white text-[10px] font-bold py-1 px-3 rounded-full bg-[#0a0a0a] relative z-10">
                      80%
                    </div>
                    {/* Tick/Arrow */}
                    <div className="w-1.5 h-1.5 bg-[#0a0a0a] border-b border-r border-white/20 rotate-45 -mt-1 relative z-0"></div>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Divider Line (No Circle) */}
          <div className="relative w-full py-8 md:py-12">
             <div className="absolute top-1/2 left-0 w-full h-[1px] bg-white/10 -translate-y-1/2"></div>
          </div>

          {/* Item 3 */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 relative z-10 w-full mt-8 md:mt-0 items-start">
            
            {/* Left: Role Info */}
            <div className="md:col-span-3 flex flex-col space-y-2">
              <h3 className="text-white text-2xl font-black">2008-2013</h3>
              <span className="text-white text-[10px] md:text-xs font-bold tracking-widest uppercase mt-3">METAVERSE</span>
              <span className="text-[#3B82F6] text-sm font-semibold">Framer Designer & Developer</span>
            </div>

            {/* Middle: Description */}
            <div className="md:col-span-5 flex items-start md:items-center">
              <p className="text-[#a0a0a0] text-sm leading-relaxed font-light mt-1 md:mt-0">
                Nemo enim ipsam voluptatem designr quia voluptas sit aspernatur aut odit aut fugit sed thisnquia consequuntur magni dolores eos qUI Designe ratione
              </p>
            </div>

            {/* Right: Progress Bar */}
            <div className="md:col-span-4 flex flex-col justify-center">
              <div className="relative w-full mt-6 md:mt-0">
                <span className="text-white text-xs font-medium block mb-8">Performance</span>
                
                {/* Bar */}
                <div className="w-full h-1.5 bg-[#ffffff33] relative">
                  <div 
                    className="progress-bar-fill absolute top-0 left-0 h-full bg-[#3B82F6] transition-all duration-[1500ms] ease-out w-0" 
                    data-width="90%"
                  ></div>
                  
                  {/* Tooltip */}
                  <div 
                    className="progress-tooltip absolute bottom-3 flex flex-col items-center transition-all duration-[1500ms] ease-out opacity-0"
                    style={{ left: '0%', transform: 'translateX(-50%)' }}
                    data-left="90%"
                  >
                    <div className="border border-white/20 text-white text-[10px] font-bold py-1 px-3 rounded-full bg-[#0a0a0a] relative z-10">
                      90%
                    </div>
                    {/* Tick/Arrow */}
                    <div className="w-1.5 h-1.5 bg-[#0a0a0a] border-b border-r border-white/20 rotate-45 -mt-1 relative z-0"></div>
                  </div>
                </div>
              </div>
            </div>

          </div>

          <div className="h-12 w-full"></div> {/* Spacer at bottom */}

        </div>
      </section>

      {/* Latests Portfolio Gallery Section */}
      <section className="w-full bg-[#0a0a0a] py-16 md:py-32 px-6 md:px-12 lg:px-24 flex flex-col items-center relative border-t border-white/5">
        <div className="w-full max-w-[1400px] flex flex-col lg:flex-row items-center gap-12 lg:gap-24 relative z-10">
          
          {/* Left Side: Images */}
          <div className="w-full lg:w-[55%] animate-on-scroll opacity-0 translate-y-12 transition-all duration-1000 ease-out">
            <div className="w-full overflow-hidden">
              <div 
                className="flex transition-transform duration-700 ease-in-out [--slide-shift:0.5rem] md:[--slide-shift:0.75rem]"
                style={{ transform: `translateX(calc(-${galleryIndex} * (50% + var(--slide-shift))))` }}
              >
                {galleryImages.map((src, idx) => (
                  <div 
                    key={idx} 
                    className="hover-cursor-target group flex-shrink-0 aspect-square overflow-hidden bg-[#111] relative mr-4 md:mr-6 w-[calc(50%-0.5rem)] md:w-[calc(50%-0.75rem)]"
                  >
                    <img 
                      src={src} 
                      alt={`Portfolio ${idx + 1}`} 
                      className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" 
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Side: Content */}
          <div className="w-full lg:w-[45%] flex flex-col items-start text-left animate-on-scroll opacity-0 translate-y-12 transition-all duration-1000 ease-out delay-200">
            <span className="text-[#3B82F6] font-bold text-xs tracking-widest uppercase mb-4 md:mb-6">Gallery</span>
            
            <h2 className="text-white text-4xl sm:text-5xl lg:text-[60px] font-black leading-[1.05] mb-6 uppercase">
              Latests<br />Portfolio
            </h2>
            
            <p className="text-[#a0a0a0] text-sm md:text-base leading-relaxed max-w-lg mb-10 font-light">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem design accusantium doloremque laudantium<br />
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem design accusantium doloremque laudantium
            </p>
            
            {/* Slider Navigation Buttons */}
            <div className="flex items-center gap-4">
              <button 
                onClick={handlePrevGallery} 
                className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center bg-[#111] border border-white/5 hover:bg-[#3B82F6] text-[#3B82F6] hover:text-black transition-all group"
              >
                <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="square" strokeLinejoin="miter" d="M15 19l-7-7 7-7"></path>
                </svg>
              </button>
              <button 
                onClick={handleNextGallery} 
                className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center bg-[#111] border border-white/5 hover:bg-[#3B82F6] text-[#3B82F6] hover:text-black transition-all group"
              >
                <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="square" strokeLinejoin="miter" d="M9 5l7 7-7 7"></path>
                </svg>
              </button>
            </div>

          </div>

        </div>

        {/* Faint circle layout decoration at bottom center */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full border border-white/10 hidden md:block"></div>
        

      </section>

    </>
  )
}

export default Home
