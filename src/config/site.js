export const siteConfig = {
  companyName: 'CV. Senia Mandiri Jaya',
  displayCompanyName: 'PT. SENIA MANDIRI JAYA',
  brandName: 'SMJ Teknik',
  tagline: 'Safety Equipment & Tools',
  domain: 'www.smjteknik.com',
  address: [
    'Jl. Alam Asri V No. 19',
    'Le Jardin Elysium',
    'Lippo Cikarang',
    '17550 Bekasi, Indonesia',
  ],
  whatsappNumber: '6281318920001',
  whatsappDisplay: '0813-1892-0001',
  whatsappUrl: 'https://wa.me/6281318920001',
}

export const navigationGroups = [
  {
    label: 'Safety Equipment',
    items: [
      { label: 'Protective Footwear', to: '/safety-equipment/protective-footwear' },
      { label: 'Safety Glass', to: '/safety-equipment/safety-glass' },
    ],
  },
  {
    label: 'Tools',
    items: [
      { label: 'Hand Tools', to: '/tools/hand-tools' },
      { label: 'Power Tools', to: '/tools/power-tools' },
      { label: 'Cleaning', to: '/tools/cleaning' },
    ],
  },
]

export const categories = [
  {
    title: 'Protective Footwear',
    description: 'Foot protection for demanding work environments.',
    to: '/safety-equipment/protective-footwear',
    icon: 'boot',
  },
  {
    title: 'Safety Glass',
    description: 'Reliable eye protection for everyday work.',
    to: '/safety-equipment/safety-glass',
    icon: 'glasses',
  },
  {
    title: 'Hand Tools',
    description: 'Dependable essentials for precise tasks.',
    to: '/tools/hand-tools',
    icon: 'wrench',
  },
  {
    title: 'Power Tools',
    description: 'Tools to help keep projects moving efficiently.',
    to: '/tools/power-tools',
    icon: 'drill',
  },
  {
    title: 'Cleaning',
    description: 'Practical equipment for cleaner workspaces.',
    to: '/tools/cleaning',
    icon: 'sparkles',
  },
]
