export const catalogCategories = {
  'protective-footwear': {
    title: 'Protective Footwear',
    description: 'Explore protective footwear from trusted brands. Select a brand to find its range.',
    path: '/safety-equipment/protective-footwear',
    brands: [
      'CHEETAH',
      'COMFORTA KING INDO',
      'GoSave',
      'KING POWER',
      'SIMON',
    ],
  },
  'safety-glass': {
    title: 'Safety Glass',
    description: 'Explore our safety glass collection. Product information will be added as it becomes available.',
    path: '/safety-equipment/safety-glass',
    brands: [],
  },
  'hand-tools': {
    title: 'Hand Tools',
    description: 'Explore our hand tools catalog. Select a brand to find its range.',
    path: '/tools/hand-tools',
    brands: ['Brand A', 'Brand B', 'Brand C'],
  },
  'power-tools': {
    title: 'Power Tools',
    description: 'Explore our power tools catalog. Select a brand to find its range.',
    path: '/tools/power-tools',
    brands: ['Brand A', 'Brand D', 'Brand E'],
  },
  cleaning: {
    title: 'Cleaning',
    description: 'Explore our cleaning equipment catalog. Select a brand to find its range.',
    path: '/tools/cleaning',
    brands: ['Brand X', 'Brand Y'],
  },
}

const footwearProductImages = {
  CHEETAH: '/images/safety-equipment/Cheetah.jpg',
  'COMFORTA KING INDO': '/images/safety-equipment/COMFORTA KING INDO.jpg',
  GoSave: '/images/safety-equipment/GoSave.jpg',
  'KING POWER': '/images/safety-equipment/KING POWER.jpg',
  SIMON: '/images/safety-equipment/Simon.jpg',
}

const footwearProducts = catalogCategories['protective-footwear'].brands.map((brand) => ({
  id: `protective-footwear-${brand.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '')}`,
  category: 'protective-footwear',
  brand,
  name: 'Protective footwear',
  description: `Contact our team for current ${brand} models, sizes, availability, and specifications.`,
  productCode: '',
  image: footwearProductImages[brand],
  specifications: [],
}))

const sampleToolProducts = [
  ...catalogCategories['hand-tools'].brands.map((brand) => ({
    id: `hand-tools-${brand.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`,
    category: 'hand-tools',
    brand,
    name: 'Example hand tool',
    description: 'Demonstration catalog entry. Replace with verified product details when available.',
    productCode: '',
    image: null,
    specifications: [],
    isSample: true,
  })),
  ...catalogCategories['power-tools'].brands.map((brand) => ({
    id: `power-tools-${brand.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`,
    category: 'power-tools',
    brand,
    name: 'Example power tool',
    description: 'Demonstration catalog entry. Replace with verified product details when available.',
    productCode: '',
    image: null,
    specifications: [],
    isSample: true,
  })),
  ...catalogCategories.cleaning.brands.map((brand) => ({
    id: `cleaning-${brand.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`,
    category: 'cleaning',
    brand,
    name: 'Example cleaning equipment',
    description: 'Demonstration catalog entry. Replace with verified product details when available.',
    productCode: '',
    image: null,
    specifications: [],
    isSample: true,
  })),
]

export const products = [...footwearProducts, ...sampleToolProducts]

export function getProductById(productId) {
  return products.find((product) => product.id === productId)
}
