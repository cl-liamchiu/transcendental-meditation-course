import React, { useState } from 'react';
import Section from './Section';
import { Plus, Minus } from 'lucide-react';
import { FAQ_ITEMS } from '../constants';

const FAQ: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>('1');

  const toggle = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <Section id="faq" className="bg-stone-50">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-center text-sage-700 mb-12">常見問題</h2>
        
        <div className="space-y-4">
          {FAQ_ITEMS.map((item) => (
            <div key={item.id} className="bg-white rounded-xl overflow-hidden shadow-sm">
              <button
                className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                onClick={() => toggle(item.id)}
              >
                <span className={`text-lg font-medium ${openId === item.id ? 'text-sage-700' : 'text-gray-800'}`}>
                  {item.question}
                </span>
                {openId === item.id ? (
                  <Minus className="text-sage-500 flex-shrink-0 ml-4" />
                ) : (
                  <Plus className="text-gray-400 flex-shrink-0 ml-4" />
                )}
              </button>
              
              <div 
                className={`transition-all duration-300 ease-in-out overflow-hidden ${
                  openId === item.id ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="p-6 pt-0 text-gray-600 leading-relaxed border-t border-gray-50">
                  {item.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default FAQ;