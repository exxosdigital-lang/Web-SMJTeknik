import { ArrowLeft, ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'

const categoryPath = '/safety-equipment/protective-footwear'
const pdfPath = '/documents/KingPowerDetail2026.pdf'

export default function KingPowerDetail() {
  return (
    <section className="product-detail-page cheetah-detail-page">
      <div className="site-container">
        <Link to={categoryPath} className="detail-back-link">
          <ArrowLeft size={16} aria-hidden="true" /> Back to Protective Footwear
        </Link>

        <header className="cheetah-detail-header">
          <p className="catalog-eyebrow">Protective Footwear</p>
          <h1>KING POWER</h1>
          <p>Product details and information</p>
        </header>

        <div className="cheetah-pdf-frame">
          <iframe
            src={pdfPath}
            title="King Power Product Detail PDF"
            className="cheetah-pdf-viewer"
          />
        </div>

        <a
          href={pdfPath}
          className="cheetah-pdf-link"
          target="_blank"
          rel="noreferrer"
        >
          Open or download PDF <ArrowUpRight size={16} aria-hidden="true" />
        </a>
      </div>
    </section>
  )
}
