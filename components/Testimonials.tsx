import React from 'react';
import Section from './Section';
import { Quote } from 'lucide-react';
import { TESTIMONIALS } from '../constants';

const Testimonials: React.FC = () => {
  return (
    <Section id="testimonials" className="bg-sage-700 text-white">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">學員見證</h2>
        <p className="text-sage-100 max-w-2xl mx-auto">
          來自不同職業與背景的學員分享，TM 如何改變他們的生活。
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {TESTIMONIALS.map((item) => (
          <div key={item.id} className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/10 hover:bg-white/15 transition-colors duration-300">
            <Quote className="text-gold-400 mb-6 opacity-80" size={40} />
            <p className="text-lg leading-relaxed text-sage-50 mb-8 italic">
              "{item.content}"
            </p>
            <div className="flex items-center">
              <img 
                src={item.avatarUrl} 
                alt={item.name} 
                className="w-12 h-12 rounded-full object-cover mr-4 border-2 border-gold-400"
              />
              <div>
                <h4 className="font-bold text-white">{item.name}</h4>
                <p className="text-sm text-sage-200">{item.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Testimonials;