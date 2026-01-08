import React from 'react';
import { CONTACT_INFO } from '../constants';
import { Facebook, Instagram, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-sage-700 text-white pt-16 pb-32 md:pb-16">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-serif font-bold mb-4">超覺靜坐 TM</h3>
            <p className="text-sage-100 leading-relaxed mb-6">
              幫助您釋放壓力，開發大腦潛能。<br/>
              簡單、自然、毫不費力的靜坐技術。
            </p>
            <div className="flex space-x-4">
              <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-bold mb-6 border-b border-sage-600 pb-2 inline-block">聯絡資訊</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Phone size={20} className="mr-3 text-gold-400 mt-1" />
                <a href={`tel:${CONTACT_INFO.phone}`} className="hover:text-gold-400 transition-colors">
                  {CONTACT_INFO.phone}
                </a>
              </li>
              <li className="flex items-start">
                <Mail size={20} className="mr-3 text-gold-400 mt-1" />
                <a href={`mailto:${CONTACT_INFO.email}`} className="hover:text-gold-400 transition-colors">
                  {CONTACT_INFO.email}
                </a>
              </li>
              <li className="flex items-start">
                <MapPin size={20} className="mr-3 text-gold-400 mt-1" />
                <a href={CONTACT_INFO.mapLink} target="_blank" rel="noopener noreferrer" className="hover:text-gold-400 transition-colors">
                  {CONTACT_INFO.address}
                </a>
              </li>
            </ul>
          </div>

          {/* Map Embed (Placeholder) */}
          <div className="rounded-xl overflow-hidden h-48 bg-sage-800 relative">
             <iframe 
               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3615.002746896236!2d121.5367373150066!3d25.033980983972323!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442a97d254098f1%3A0x62960f2746401015!2zMTA25Y-w5YyX5biC5aSn5a6J5Y2A5ZKM5bmz5p2x6Lev5LqM5q61MTAw6JfF!5e0!3m2!1szh-TW!2stw!4v1623312345678!5m2!1szh-TW!2stw" 
               width="100%" 
               height="100%" 
               style={{border:0}} 
               allowFullScreen={true} 
               loading="lazy"
               title="Google Map"
             ></iframe>
          </div>
        </div>
        
        <div className="border-t border-sage-600 pt-8 text-center text-sage-300 text-sm">
          <p>&copy; {new Date().getFullYear()} Transcendental Meditation Course. All Rights Reserved.</p>
          <p className="mt-2">此網站為示範用途，非官方正式網站。</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;