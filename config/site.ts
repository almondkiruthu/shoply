import image1 from '@/public/hero/showcase/image-1.png';
import image2 from '@/public/hero/showcase/image-2.png';
import image3 from '@/public/hero/showcase/image-3.png';
import image4 from '@/public/hero/showcase/image-4.png';
import image5 from '@/public/hero/showcase/image-5.png';
import { ShowCaseImages } from '@/types';

export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: 'Shoply',
  description: 'Your everday wear for work, home, travel and sports',
  footer: [
    { name: 'Home', href: '/' },
    { name: 'About', href: '#' },
    { name: 'Products', href: '#' },
    { name: 'Sale', href: '#' },
    { name: 'FAQ', href: '#' },
  ],
};

export const showCaseImages: ShowCaseImages = [
  { path: image1 },
  { path: image2 },
  { path: image3 },
  { path: image4 },
  { path: image5 },
];
