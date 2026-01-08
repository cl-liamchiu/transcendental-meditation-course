export interface NavItem {
  label: string;
  href: string;
}

export interface ScheduleItem {
  id: string;
  date: string;
  time: string;
  location: string;
  seats: number;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  avatarUrl?: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface ResearchData {
  name: string;
  value: number;
  label: string;
}