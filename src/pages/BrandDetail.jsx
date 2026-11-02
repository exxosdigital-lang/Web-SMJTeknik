import { ArrowLeft } from 'lucide-react'
import { Link, useParams } from 'react-router-dom'
import { getBrandBySlug } from '../data/brands.js'
import NotFound from './NotFound.jsx'

export default function BrandDetail() {
  const { brandSlug } = useParams()
  const brand = getBrandBySlug(brandSlug)

  if (!brand) {
    return <NotFound />
  }

  return (
    <section className="product-detail-page">
      <div className="site-container">
        <Link to="/brands" className="detail-back-link">
          <ArrowLeft size={16} aria-hidden="true" /> Back to Brands
        </Link>

        <header className="cheetah-detail-header">
          <p className="catalog-eyebrow">BRAND</p>
          <h1>{brand.name}</h1>
          <p>Product catalog and information</p>
        </header>

        <div className="cheetah-pdf-frame">
          <iframe
            src={brand.pdf}
            title={`${brand.name} Product Catalog`}
            className="cheetah-pdf-viewer"
          />
        </div>
      </div>
    </section>
  )
}
