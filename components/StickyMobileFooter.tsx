import React, { useState, useEffect } from 'react';
import { Phone, MessageCircle } from 'lucide-react';
import { CONTACT_INFO } from '../constants';

const StickyMobileFooter: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show only after scrolling down a bit (past Hero usually)
      setIsVisible(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // On very small screens, use sticky footer. On larger screens, this is hidden via CSS class 'md:hidden'.
  return (
    <div className={`fixed bottom-0 left-0 w-full bg-white shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] z-40 md:hidden transition-transform duration-300 ${isVisible ? 'translate-y-0' : 'translate-y-full'}`}>
      <div className="grid grid-cols-2 h-16 divide-x divide-gray-200">
        <a 
          href={`tel:${CONTACT_INFO.phone}`} 
          className="flex items-center justify-center space-x-2 text-sage-700 active:bg-sage-50"
        >
          <Phone size={20} />
          <span className="font-bold">電話諮詢</span>
        </a>
        <a 
          href={CONTACT_INFO.lineLink} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="flex items-center justify-center space-x-2 bg-[#06C755] text-white active:bg-[#05b64d]"
        >
          <MessageCircle size={20} />
          <span className="font-bold">LINE 諮詢</span>
        </a>
      </div>
      {/* Safe area for iPhone home bar */}
      <div className="h-safe-bottom bg-white"></div>
    </div>
  );
};

export default StickyMobileFooter;