import { ArrowLeft, MessageCircle } from 'lucide-react'
import { Link, useParams } from 'react-router-dom'
import { siteConfig } from '../config/site.js'
import { catalogCategories, getProductById } from '../data/products.js'
import ProductImage from '../components/ProductImage.jsx'
import NotFound from './NotFound.jsx'

export default function ProductDetail() {
  const { productId } = useParams()
  const product = getProductById(productId)

  if (!product) {
    return <NotFound />
  }

  const categoryConfig = catalogCategories[product.category]
  const categoryPath = categoryConfig.path
  const inquiryText = `Hello, I would like to inquire about ${product.brand} ${product.name}.`
  const inquiryUrl = `${siteConfig.whatsappUrl}?text=${encodeURIComponent(inquiryText)}`

  return (
    <section className="product-detail-page">
      <div className="site-container">
        <Link to={categoryPath} className="detail-back-link"><ArrowLeft size={16} aria-hidden="true" /> Back to {categoryConfig.title}</Link>
        <div className="product-detail-layout">
          <div className="product-detail-image">
            <ProductImage product={product} large />
          </div>
          <div className="product-detail-content">
            <p className="product-brand">{product.brand}</p>
            <h1>{product.name}</h1>
            {product.isSample && <p className="product-sample-label">Sample catalog entry</p>}
            {product.productCode && <p className="detail-product-code">Product code: {product.productCode}</p>}
            <p className="detail-description">{product.description}</p>
            {product.specifications?.length > 0 && (
              <div className="detail-specifications">
                <h2>Specifications</h2>
                <ul>{product.specifications.map((specification) => <li key={specification}>{specification}</li>)}</ul>
              </div>
            )}
            <a href={inquiryUrl} className="button-primary detail-inquiry" target="_blank" rel="noreferrer">
              <MessageCircle size={18} aria-hidden="true" /> Inquire on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
