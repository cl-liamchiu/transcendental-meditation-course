import React from 'react';
import Section from './Section';
import { Calendar, MapPin, Users, ArrowRight } from 'lucide-react';
import { SCHEDULE_DATA, CONTACT_INFO } from '../constants';

const Schedule: React.FC = () => {
  return (
    <Section id="schedule" className="bg-white">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-sage-700 mb-4">近期開課資訊</h2>
        <p className="text-gray-600">
          每班名額有限，請盡早預約「介紹講座」以保留席次。
        </p>
      </div>

      <div className="max-w-4xl mx-auto space-y-4">
        {SCHEDULE_DATA.map((item) => (
          <div 
            key={item.id} 
            className="flex flex-col md:flex-row items-center bg-white border border-gray-200 p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow group"
          >
            {/* Date Block */}
            <div className="flex-shrink-0 flex items-center mb-4 md:mb-0 md:mr-8 w-full md:w-48">
              <div className="bg-sage-100 p-3 rounded-xl mr-4 group-hover:bg-sage-200 transition-colors">
                <Calendar className="text-sage-700" size={24} />
              </div>
              <div className="text-left">
                <p className="font-bold text-gray-800 text-lg">{item.date}</p>
                <p className="text-sm text-gray-500">{item.time}</p>
              </div>
            </div>

            {/* Info Block */}
            <div className="flex-grow flex flex-col sm:flex-row gap-4 w-full md:w-auto mb-4 md:mb-0">
              <div className="flex items-center text-gray-600">
                <MapPin size={18} className="mr-2 text-sage-500" />
                <span>{item.location}</span>
              </div>
              <div className="flex items-center text-gray-600">
                <Users size={18} className="mr-2 text-sage-500" />
                <span>剩餘名額: <span className="text-gold-500 font-bold">{item.seats}</span></span>
              </div>
            </div>

            {/* Action */}
            <div className="flex-shrink-0 w-full md:w-auto mt-2 md:mt-0">
               <a 
                href={CONTACT_INFO.lineLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-full md:w-auto bg-sage-600 hover:bg-sage-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
               >
                 立即報名 <ArrowRight size={18} className="ml-2" />
               </a>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 text-center">
         <p className="text-gray-500 mb-6">時間無法配合？歡迎聯繫我們安排其他時段。</p>
         <a 
            href={CONTACT_INFO.lineLink}
            className="inline-block border-2 border-gold-400 text-gold-500 font-bold py-3 px-8 rounded-full hover:bg-gold-400 hover:text-white transition-colors"
          >
            加 LINE 詢問其他時間
          </a>
      </div>
    </Section>
  );
};

export default Schedule;