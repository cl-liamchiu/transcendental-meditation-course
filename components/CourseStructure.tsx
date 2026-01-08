import React from 'react';
import Section from './Section';
import { CheckCircle2, Users, BookOpen, GraduationCap } from 'lucide-react';

const CourseStructure: React.FC = () => {
  const steps = [
    {
      icon: <Users size={40} className="text-white" />,
      title: "第一步：介紹講座",
      desc: "了解 TM 的運作原理、效益與學習方式。這是一個免費的公開說明會。",
      day: "課前"
    },
    {
      icon: <CheckCircle2 size={40} className="text-white" />,
      title: "第一天：個別指導",
      desc: "1 對 1 的私人教學。老師會傳授您專屬的聲音 (Mantra)，並指導如何正確使用它。",
      day: "Day 1"
    },
    {
      icon: <BookOpen size={40} className="text-white" />,
      title: "第二、三天：確認與驗證",
      desc: "小組課程。確認您的練習是否正確，並深入了解練習過程中的各種體驗。",
      day: "Day 2-3"
    },
    {
      icon: <GraduationCap size={40} className="text-white" />,
      title: "第四天：展望與終身支持",
      desc: "完成課程。您將具備獨立練習的能力，並享有終身免費參加團體靜坐與複習的權利。",
      day: "Day 4"
    }
  ];

  return (
    <Section id="course" className="bg-white">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-sage-700 mb-6">標準四天課程</h2>
        <p className="text-gray-600 text-lg">
          循序漸進的學習架構，確保您能輕鬆掌握這項終身受用的技術。
        </p>
      </div>

      <div className="grid md:grid-cols-4 gap-8">
        {steps.map((step, index) => (
          <div key={index} className="flex flex-col items-center text-center relative">
            {/* Connector Line (Desktop only) */}
            {index < steps.length - 1 && (
              <div className="hidden md:block absolute top-8 left-1/2 w-full h-1 bg-sage-100 -z-10"></div>
            )}
            
            <div className="w-16 h-16 rounded-full bg-sage-500 flex items-center justify-center shadow-lg mb-6 z-10">
              {step.icon}
            </div>
            
            <span className="inline-block px-3 py-1 bg-sage-50 text-sage-700 text-xs font-bold uppercase tracking-wide rounded-full mb-3">
              {step.day}
            </span>
            
            <h3 className="text-xl font-bold text-gray-800 mb-3">{step.title}</h3>
            <p className="text-gray-600 leading-relaxed text-sm">
              {step.desc}
            </p>
          </div>
        ))}
      </div>
      
      <div className="mt-16 p-6 bg-sage-50 rounded-xl text-center border border-sage-100">
        <p className="text-sage-700 font-medium">
          🌟 課程包含終身後續輔導：無論您搬到世界哪個角落，都能在當地的 TM 中心獲得免費的複習與指導。
        </p>
      </div>
    </Section>
  );
};

export default CourseStructure;