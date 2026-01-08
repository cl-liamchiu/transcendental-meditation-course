import React from 'react';
import Section from './Section';
import { Award, Star } from 'lucide-react';
import { CONTACT_INFO } from '../constants';

const Teacher: React.FC = () => {
  return (
    <Section id="teacher" className="bg-stone-50">
      <div className="bg-white rounded-3xl overflow-hidden shadow-xl max-w-5xl mx-auto">
        <div className="grid md:grid-cols-5">
          {/* Photo Column */}
          <div className="md:col-span-2 relative h-96 md:h-auto">
            <img 
              src="https://picsum.photos/800/1000?random=5" 
              alt="Teacher Profile" 
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-sage-700/80 to-transparent md:hidden flex items-end p-6">
              <h3 className="text-3xl font-serif font-bold text-white">游老師</h3>
            </div>
          </div>

          {/* Content Column */}
          <div className="md:col-span-3 p-8 md:p-12 flex flex-col justify-center">
            <div className="hidden md:block mb-6">
              <h3 className="text-3xl font-serif font-bold text-sage-700">游老師 (Teacher Yu)</h3>
              <p className="text-gold-500 font-medium tracking-wide uppercase mt-2">認證超覺靜坐導師</p>
            </div>

            <p className="text-gray-600 leading-relaxed text-lg mb-8">
              「我曾是一名在高壓環境工作的工程師，長期的焦慮讓我精疲力竭。直到遇見 TM，我才真正體會到大腦『關機』休息的滋味。」
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">
              這段轉變的旅程促使我前往泰國與歐洲接受完整的師資培訓。至今已教學超過 5 年，協助數百位學員找回內在的平靜。我的教學風格講求科學與邏輯，希望能讓現代人在忙碌生活中，找到簡單有效的身心安頓之道。
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              <div className="flex items-center p-4 bg-sage-50 rounded-lg">
                <Award className="text-sage-600 mr-3 flex-shrink-0" size={24} />
                <span className="text-sm font-medium text-sage-800">國際 TM 組織認證導師</span>
              </div>
              <div className="flex items-center p-4 bg-sage-50 rounded-lg">
                <Star className="text-sage-600 mr-3 flex-shrink-0" size={24} />
                <span className="text-sm font-medium text-sage-800">5 年以上教學經驗</span>
              </div>
            </div>

            <div className="text-center md:text-left">
              <a 
                href={CONTACT_INFO.lineLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-gold-400 hover:bg-gold-500 text-white font-bold py-3 px-8 rounded-full transition-colors shadow-md"
              >
                預約一對一諮詢
              </a>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Teacher;