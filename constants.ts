import { NavItem, ScheduleItem, Testimonial, FaqItem, ResearchData } from './types';

export const CONTACT_INFO = {
  phone: "0912-345-678",
  lineId: "tm_teacher_demo",
  lineLink: "https://line.me/ti/p/demo_link", // Mock link
  address: "台北市大安區和平東路二段100號",
  mapLink: "https://goo.gl/maps/placeholder",
  email: "contact@tm-course.tw"
};

export const NAV_ITEMS: NavItem[] = [
  { label: '關於 TM', href: '#about' },
  { label: '課程介紹', href: '#course' },
  { label: '導師介紹', href: '#teacher' },
  { label: '學員見證', href: '#testimonials' },
  { label: '近期課表', href: '#schedule' },
  { label: '常見問題', href: '#faq' },
];

export const SCHEDULE_DATA: ScheduleItem[] = [
  { id: '1', date: '2024/06/15 (六)', time: '14:00 - 16:00', location: '台北大安教室', seats: 3 },
  { id: '2', date: '2024/06/22 (六)', time: '14:00 - 16:00', location: '台北大安教室', seats: 5 },
  { id: '3', date: '2024/07/06 (六)', time: '10:00 - 12:00', location: '台北大安教室', seats: 8 },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: '林小姐',
    role: '外商行銷經理',
    content: '工作壓力曾讓我長期失眠，接觸超覺靜坐後，第一週睡眠品質就明顯改善。現在面對高壓專案，我也能保持冷靜與專注。',
    avatarUrl: 'https://picsum.photos/100/100?random=1'
  },
  {
    id: '2',
    name: '張先生',
    role: '軟體工程師',
    content: '我是個很講求邏輯的人，原本以為靜坐很玄。但 TM 有完整的科學實證，練習過程也非常簡單自然，不需要用力專注，這點很適合我。',
    avatarUrl: 'https://picsum.photos/100/100?random=2'
  },
  {
    id: '3',
    name: '陳醫師',
    role: '身心科醫師',
    content: '作為醫療從業人員，我推薦我的病患嘗試 TM 作為輔助。它對於調節自律神經系統有顯著的幫助，是一種深度的休息技術。',
    avatarUrl: 'https://picsum.photos/100/100?random=3'
  }
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    id: '1',
    question: '超覺靜坐 (TM) 和其他冥想有什麼不同？',
    answer: 'TM 不需要專注、不需要控制呼吸、也不需要監控念頭。它是一種完全輕鬆自然的技術，利用聲音（Mantra）讓心智自然沉澱，即使是坐不住的人也能輕鬆學會。'
  },
  {
    id: '2',
    question: '我需要改變宗教信仰或生活方式嗎？',
    answer: '完全不需要。TM 是一種單純的心智技術，與宗教、哲學或生活型態無關。全球有數百萬來自不同背景、信仰的人都在練習 TM。'
  },
  {
    id: '3',
    question: '學習 TM 需要多久時間？',
    answer: '標準課程為期 4 天，每天約 1.5 到 2 小時。第一天為個別指導，後三天為小組確認與知識驗證。學會後，您將擁有終身練習的能力。'
  },
  {
    id: '4',
    question: '小孩也可以學習嗎？',
    answer: '是的，我們有專門針對兒童設計的「兒童靜坐」課程 (Walking Wisdom)，通常 5 歲以上的孩子就可以開始學習，有助於穩定情緒與提升專注力。'
  }
];

export const RESEARCH_DATA: ResearchData[] = [
  { name: '對照組', value: 100, label: '基準壓力' },
  { name: 'TM 練習者', value: 65, label: '壓力指數降低 35%' },
];

export const BP_DATA = [
  { name: '開始前', systolic: 140, diastolic: 90 },
  { name: '3個月後', systolic: 128, diastolic: 85 },
  { name: '6個月後', systolic: 122, diastolic: 80 },
];
