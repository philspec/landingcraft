import { Variants } from "framer-motion";

// Common animation props
export interface BaseAnimationProps {
  initial?: string | object;
  animate?: string | object | {
    backgroundPosition?: string[];
    opacity?: number[];
    scale?: number[];
    rotate?: number[];
  };
  exit?: string | object;
  transition?: {
    duration?: number;
    delay?: number;
    ease?: string;
    type?: string;
    stiffness?: number;
    damping?: number;
    mass?: number;
    repeat?: number | "Infinity";
    repeatType?: "loop" | "reverse" | "mirror";
  };
}

// Feature section types
export interface Feature {
  title: string;
  description: string;
  icon: string;
}

// Testimonial section types
export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  rating: number;
  image: string;
}

// FAQ section types
export interface FAQ {
  question: string;
  answer: string;
}

// Pricing section types
export interface PricingPlan {
  name: string;
  price: string;
  description: string;
  features: string[];
}

// Comparison section types
export interface ComparisonItem {
  feature: string;
  landingcraft: string;
  competitorA: string;
  competitorB: string;
}

// Footer section types
export interface FooterLink {
  name: string;
  href: string;
}

export interface SocialIcon extends FooterLink {
  icon: JSX.Element;
}

// Animation variants
export interface AnimationVariants {
  container: Variants;
  item: Variants;
  button: Variants;
  content: Variants;
  background: Variants;
}

// Component props
export interface SectionProps {
  className?: string;
  children?: React.ReactNode;
}

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
}

export interface IconProps {
  className?: string;
  size?: number;
  color?: string;
} 