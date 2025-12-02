import { LucideIcon } from 'lucide-react';

export interface NavItem {
  label: string;
  path: string;
}

export interface Benefit {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface ROIItem {
  systemSize: string;
  annualGeneration: string;
  annualSavings: string;
  lifetimeSavings: string; // 25 years
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface Testimonial {
  name: string;
  role: string;
  location: string;
  quote: string;
  rating: number;
}

export interface ServiceItem {
  title: string;
  slug: string;
  description: string;
  longDescription: string;
  icon: LucideIcon;
  features: string[];
}