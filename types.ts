export interface ServiceItem {
  id: number;
  title: string;
  image: string;
  size: 'large' | 'tall' | 'standard';
}

export interface NavLink {
  label: string;
  href: string;
}

export interface StatItem {
  value: string;
  label: string;
  subLabel?: string;
}