import { ShieldIcon, ClockIcon, LayoutIcon } from 'lucide-react';
import type { Service } from './type';

export const services: Service[] = [
  {
    id: 'pvc-membrane',
    title: 'Монтаж ПВХ мембраны',
    description: 'Профессиональная укладка современных ПВХ мембран с высокой устойчивостью к УФ-излучению и механическим повреждениям.',
    icon: ShieldIcon,
    imageUrl: '/montag-pvx.jpg',
    link: '/services/pvc-membrane',
  },
  {
    id: 'pvc-membrane',
    title: 'Ремонт кровли',
    description: 'Оперативный и качественный ремонт плоской кровли с использованием современных материалов и технологий.',
    icon: ClockIcon,
    imageUrl: '/uzel.jpg',
    link: '/services/roof-repair',
  },
  {
    id: 'pvc-membrane',
    title: 'Устройство плоских крыш',
    description: 'Полный комплекс работ по устройству плоских крыш с учетом всех технических требований и климатических особенностей.',
    icon: LayoutIcon,
    imageUrl: '/roof-tight.jpg',
    link: '/services/flat-roof',
  },
];