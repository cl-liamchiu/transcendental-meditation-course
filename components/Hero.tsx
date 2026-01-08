import React from 'react';
import { CONTACT_INFO } from '../constants';

const Hero: React.FC = () => {
  return (
    <div className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url("https://picsum.photos/1920/1080?grayscale&blur=2")',
          backgroundPosition: 'center 30%'
        }}
      >
        <div className="absolute inset-0 bg-sage-700/40 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-16">
        <h2 className="text-white/90 text-lg md:text-xl font-medium mb-4 tracking-widest uppercase">Transcendental Meditation</h2>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-white mb-6 leading-tight drop-shadow-lg">
          每天 20 分鐘<br />
          找回內心的平靜與力量
        </h1>
        <p className="text-white/90 text-lg md:text-xl mb-10 max-w-2xl mx-auto font-light leading-relaxed">
          全球超過 1,000 萬人學習，超過 600 篇科學實證。<br className="hidden md:block"/>
          釋放深層壓力，改善睡眠，啟發大腦潛能。
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a 
            href={CONTACT_INFO.lineLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gold-400 hover:bg-gold-500 text-white font-bold py-4 px-10 rounded-full transition-all transform hover:scale-105 shadow-lg text-lg"
          >
            免費諮詢課程
          </a>
          <a 
            href="#about"
            className="bg-white/20 hover:bg-white/30 backdrop-blur-sm border border-white/50 text-white font-medium py-4 px-10 rounded-full transition-all hover:border-white"
          >
            了解更多
          </a>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-white/70">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </div>
  );
};

export default Hero;