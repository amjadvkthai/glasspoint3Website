import { ServiceItem, StatItem, NavLink } from './types';

export const NAV_LINKS: NavLink[] = [
  { label: 'Home', href: '#' },
  { label: 'Who We Are', href: '#who-we-are' },
  { label: 'Services', href: '#services' },
  { label: 'Projects', href: '#projects' },
];

export const STATS: StatItem[] = [
  { value: '500+', label: 'Projects Completed' },
  { value: '20+', label: 'Years Experience' },
  { value: '100%', label: 'Quality Assured' },
  { value: '#1', label: 'In Region' },
];

export const SERVICES: ServiceItem[] = [
  { 
    id: 1, 
    title: 'Precision Machine Beveling', 
    image: 'https://raw.githubusercontent.com/amjadvkthai/glasspoint3Website/refs/heads/main/assets/image1.png', 
    size: 'large' 
  },
  { 
    id: 2, 
    title: 'Custom Etching & Design', 
    image: 'https://images.unsplash.com/photo-1505691938895-1758d7feb511?q=80&w=800&auto=format&fit=crop', 
    size: 'tall' 
  },
  { 
    id: 3, 
    title: 'Glass Polishing', 
    image: 'https://raw.githubusercontent.com/amjadvkthai/glasspoint3Website/refs/heads/main/assets/image1.png', 
    size: 'standard' 
  },
  { 
    id: 4, 
    title: 'High-Strength Fitting', 
    image: 'https://images.unsplash.com/photo-1505330622279-bf7d7fc918f4?q=80&w=800&auto=format&fit=crop', 
    size: 'tall' 
  },
  { 
    id: 5, 
    title: 'Acid Work & Texturing', 
    image: 'https://raw.githubusercontent.com/amjadvkthai/glasspoint3Website/refs/heads/main/assets/image1.png', 
    size: 'standard' 
  },
  { 
    id: 6, 
    title: 'Colouring & Tinting', 
    image: 'https://images.unsplash.com/photo-1622372738946-62e02505feb3?q=80&w=800&auto=format&fit=crop', 
    size: 'standard' 
  },
];