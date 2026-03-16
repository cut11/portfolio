import React from 'react';

function App() {
  return (
    <div
      className="relative w-full min-h-screen flex items-center justify-center bg-cover bg-center overflow-hidden pt-24 bg-[#0a0a0a]"
      style={{ backgroundImage: "url('/imagesea(10).jpg')" }}
    >
      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20 py-12 flex flex-col md:flex-row items-center justify-between gap-12 text-white">

        {/* Left Side: Personal Image */}
        <div className="relative w-full md:w-[45%] lg:w-1/2 flex justify-center mt-8 md:mt-0 order-2 md:order-1">
          <div className="relative w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] lg:w-[480px] lg:h-[480px] shrink-0">
            {/* The white circular border frame */}
            <div className="w-full h-full rounded-full border-[6px] lg:border-[8px] border-white overflow-hidden shadow-2xl bg-gray-800 flex items-center justify-center">
              <img src="/imagesea(11).png" alt="Mezbah" className="w-full h-full object-cover object-top" />
            </div>

            {/* Decorative Dots */}
            {/* Top lime dot */}
            <div className="absolute top-[0%] left-[20%] w-12 h-12 lg:w-16 lg:h-16 rounded-full bg-[#cceb00] shadow-md z-10 hidden sm:block animate-float"></div>
            {/* Bottom green dot */}
            <div className="absolute bottom-[2%] left-[65%] w-12 h-12 lg:w-16 lg:h-16 rounded-full bg-[#22c55e] shadow-md z-10 hidden sm:block animate-float-delayed"></div>
          </div>
        </div>

        {/* Right Side: Text Content */}
        <div className="w-full md:w-[55%] lg:w-1/2 flex flex-col items-start text-left z-10 order-1 md:order-2">
          <span className="text-[#cceb00] font-bold text-lg md:text-xl lg:text-2xl mb-2 lg:mb-4 tracking-wide">Hello I'm Mohamed Tarek</span>

          <h1 className="text-white text-5xl sm:text-6xl lg:text-[76px] font-[900] leading-[1.05] mb-6 uppercase">
            Creative<br />Designer Based<br />In USA
          </h1>

          <p className="text-gray-300 text-base md:text-lg lg:text-xl max-w-lg mb-10 leading-relaxed font-light">
            As a passionate UI/UX Designer, I thrive on creating beautiful and intuitive digital experiences that delight users.
          </p>

          <div className="flex flex-wrap items-center gap-4 lg:gap-6">
            <button className="flex items-center gap-2 px-6 lg:px-8 py-3 lg:py-4 bg-[#cceb00] hover:bg-[#b8d400] text-black font-extrabold uppercase tracking-widest text-[13px] lg:text-sm transition-colors cursor-pointer rounded-sm shadow-lg">
              DOWNLOAD CV
              <svg className="w-4 h-4 lg:w-5 lg:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path>
              </svg>
            </button>

            <button className="flex items-center gap-3 lg:gap-4 px-6 lg:px-8 py-3 lg:py-4 bg-[#14150f]/60 hover:bg-[#1d2012]/80 backdrop-blur-sm text-white font-extrabold uppercase tracking-widest text-[13px] lg:text-sm transition-colors cursor-pointer rounded-sm border border-white/5 hover:border-[#cceb00]/30 shadow-lg group">
              <div className="w-5 h-5 lg:w-6 lg:h-6 rounded-full bg-[#cceb00] flex items-center justify-center text-black group-hover:scale-110 transition-transform">
                <svg className="w-2.5 h-2.5 lg:w-3 lg:h-3 ml-[2px]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M5 3l14 9-14 9V3z" />
                </svg>
              </div>
              WATCH THE VIDEO
            </button>
          </div>
        </div>

      </div>
    </div>
  )
}

export default App
