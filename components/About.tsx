import React from 'react';
import Section from './Section';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, Legend } from 'recharts';
import { RESEARCH_DATA, BP_DATA } from '../constants';

const About: React.FC = () => {
  return (
    <Section id="about" className="bg-stone-50">
      <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
        <div>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-sage-700 mb-6">什麼是超覺靜坐？</h2>
          <p className="text-gray-700 leading-loose text-lg mb-6">
            超覺靜坐 (Transcendental Meditation, TM) 是源自古老吠陀傳統的簡易技術。
            它不是宗教，不是哲學，也不需要改變生活方式。
          </p>
          <p className="text-gray-700 leading-loose text-lg mb-6">
            這是一種毫不費力的過程，讓活躍的心智自然地平靜下來，體驗到一種深度的寧靜與警覺狀態，
            我們稱之為「超越」。這種深度休息所帶來的修復力，遠超過一般的睡眠。
          </p>
          <ul className="space-y-3 mt-4">
            <li className="flex items-center text-gray-700">
              <span className="w-2 h-2 bg-sage-500 rounded-full mr-3"></span>
              簡單易學，適合所有年齡層
            </li>
            <li className="flex items-center text-gray-700">
              <span className="w-2 h-2 bg-sage-500 rounded-full mr-3"></span>
              每天練習兩次，每次 20 分鐘
            </li>
            <li className="flex items-center text-gray-700">
              <span className="w-2 h-2 bg-sage-500 rounded-full mr-3"></span>
              科學實證最豐富的冥想技術
            </li>
          </ul>
        </div>
        <div className="rounded-2xl overflow-hidden shadow-2xl transform md:rotate-2 hover:rotate-0 transition-transform duration-500">
          <img src="https://picsum.photos/600/400?random=4" alt="Meditation peace" className="w-full h-full object-cover" />
        </div>
      </div>

      <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm">
        <h3 className="text-2xl md:text-3xl font-serif font-bold text-center text-sage-700 mb-12">
          科學實證的力量
        </h3>
        
        <div className="grid md:grid-cols-2 gap-12">
          {/* Chart 1: Stress Reduction */}
          <div className="flex flex-col items-center">
            <h4 className="text-lg font-bold text-gray-800 mb-4">顯著降低焦慮與壓力</h4>
            <div className="w-full h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={RESEARCH_DATA}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} />
                  <XAxis dataKey="name" tick={{fill: '#4b5563'}} />
                  <YAxis hide />
                  <Tooltip 
                    cursor={{fill: 'transparent'}}
                    contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' }} 
                  />
                  <Bar dataKey="value" fill="#7C9473" radius={[10, 10, 0, 0]} barSize={60} />
                </BarChart>
              </ResponsiveContainer>
            </div>
            <p className="text-sm text-gray-500 mt-4 text-center">資料來源：獨立醫學研究期刊 meta-analysis</p>
          </div>

          {/* Chart 2: Blood Pressure */}
          <div className="flex flex-col items-center">
            <h4 className="text-lg font-bold text-gray-800 mb-4">改善血壓健康</h4>
            <div className="w-full h-64">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={BP_DATA}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} />
                  <XAxis dataKey="name" tick={{fill: '#4b5563'}} />
                  <YAxis domain={[60, 160]} />
                  <Tooltip contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' }} />
                  <Legend />
                  <Line type="monotone" dataKey="systolic" name="收縮壓" stroke="#E0A96D" strokeWidth={3} dot={{r: 4}} />
                  <Line type="monotone" dataKey="diastolic" name="舒張壓" stroke="#7C9473" strokeWidth={3} dot={{r: 4}} />
                </LineChart>
              </ResponsiveContainer>
            </div>
            <p className="text-sm text-gray-500 mt-4 text-center">長期練習者的心血管健康指標追蹤</p>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default About;