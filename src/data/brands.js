export const brands = [
  {
    name: 'CHEETAH',
    slug: 'cheetah',
    image: '/images/safety-equipment/Cheetah.jpg',
    pdf: '/documents/Product_Cheetah.pdf',
  },
  {
    name: 'COMFORTA KING INDO',
    slug: 'comforta-king-indo',
    image: '/images/safety-equipment/COMFORTA KING INDO.jpg',
    pdf: '/documents/Product_ComportaKingIndo.pdf',
  },
  {
    name: 'GOSAVE',
    slug: 'gosave',
    image: '/images/safety-equipment/GoSave.jpg',
    pdf: '/documents/Product_Gosave.pdf',
  },
  {
    name: 'KING POWER',
    slug: 'king-power',
    image: '/images/safety-equipment/KING POWER.jpg',
    pdf: '/documents/Product_KPR.pdf',
  },
  {
    name: 'SIMON',
    slug: 'simon',
    image: '/images/safety-equipment/Simon.jpg',
    pdf: '/documents/Product_Simon.pdf',
  },
]

export function getBrandBySlug(slug) {
  return brands.find((brand) => brand.slug === slug)
}
