import { useState } from 'react'
import { ArrowRight, ChevronDown, Drill, Glasses, RotateCcw, SlidersHorizontal, Footprints, Sparkles, Wrench } from 'lucide-react'
import { Link } from 'react-router-dom'
import { catalogCategories, products } from '../data/products.js'
import ProductImage from './ProductImage.jsx'

function BrandFilter({ brands, productsInCategory, selectedBrands, onBrandChange, onClear }) {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <aside className="catalog-filter">
      <button
        type="button"
        className="catalog-filter-toggle"
        aria-expanded={mobileOpen}
        onClick={() => setMobileOpen(!mobileOpen)}
      >
        <span><SlidersHorizontal size={18} aria-hidden="true" /> Filter by Brand</span>
        <span className="catalog-filter-toggle-end">
          {selectedBrands.length > 0 && <span className="filter-count">{selectedBrands.length}</span>}
          <ChevronDown size={18} className={mobileOpen ? 'filter-chevron-open' : ''} aria-hidden="true" />
        </span>
      </button>

      <div className={`catalog-filter-panel${mobileOpen ? ' catalog-filter-panel-open' : ''}`}>
        <div className="catalog-filter-heading">
          <h2>MEREK</h2>
          {selectedBrands.length > 0 && (
            <button type="button" className="filter-clear" onClick={onClear}>
              <RotateCcw size={13} aria-hidden="true" /> Clear
            </button>
          )}
        </div>
        {brands.length > 0 ? (
          <ul className="brand-filter-list">
            {brands.map((brand) => {
              const count = productsInCategory.filter((product) => product.brand === brand).length
              return (
                <li key={brand}>
                  <label className="brand-filter-option">
                    <input
                      type="checkbox"
                      checked={selectedBrands.includes(brand)}
                      onChange={() => onBrandChange(brand)}
                    />
                    <span>{brand}</span>
                    <span className="brand-filter-count">{count}</span>
                  </label>
                </li>
              )
            })}
          </ul>
        ) : (
          <p className="filter-empty">Brand filters will be available when product information is added for this category.</p>
        )}
      </div>
    </aside>
  )
}

function ProductCard({ product }) {
  const customProductRoute = product.category === 'protective-footwear'
    ? {
        CHEETAH: '/protective-footwear/cheetah',
        'KING POWER': '/protective-footwear/king-power',
        SIMON: '/protective-footwear/simon',
        'COMFORTA KING INDO': '/protective-footwear/comforta-king-indo',
      }[product.brand]
    : null
  const isCustomProduct = Boolean(customProductRoute)
  const productRoute = customProductRoute ?? `/product/${product.id}`
  const cardContent = (
    <>
      {isCustomProduct ? (
        <div className="product-card-image-link">
          <ProductImage product={product} />
        </div>
      ) : (
        <Link to={productRoute} className="product-card-image-link" aria-label={`View ${product.brand} ${product.name}`}>
          <ProductImage product={product} />
        </Link>
      )}
      <div className="product-card-content">
        <p className="product-brand">{product.brand}</p>
        <h3>{product.name}</h3>
        {product.isSample && <p className="product-sample-label">Sample catalog entry</p>}
        <p className="product-description">{product.description}</p>
        {product.productCode && <p className="product-code">Code: {product.productCode}</p>}
        {isCustomProduct ? (
          <span className="product-detail-link">
            View Detail <ArrowRight size={16} aria-hidden="true" />
          </span>
        ) : (
          <Link to={productRoute} className="product-detail-link">
            View Detail <ArrowRight size={16} aria-hidden="true" />
          </Link>
        )}
      </div>
    </>
  )

  return isCustomProduct ? (
    <Link
      to={productRoute}
      className="product-card product-card-whole-link"
      aria-label={`View ${product.brand} product details`}
    >
      {cardContent}
    </Link>
  ) : (
    <article className="product-card">{cardContent}</article>
  )
}

function ProductGrid({ items, category }) {
  if (items.length === 0) {
    const CategoryIcon = {
      'protective-footwear': Footprints,
      'safety-glass': Glasses,
      'hand-tools': Wrench,
      'power-tools': Drill,
      cleaning: Sparkles,
    }[category] ?? Footprints
    return (
      <div className="catalog-empty" role="status">
        <span className="catalog-empty-icon"><CategoryIcon size={26} aria-hidden="true" /></span>
        <h3>No products to display yet</h3>
        <p>Product information for this category is being prepared. Please check back soon or contact our team for assistance.</p>
      </div>
    )
  }

  return (
    <div className="product-grid">
      {items.map((product) => <ProductCard key={product.id} product={product} />)}
    </div>
  )
}

export default function ProductCatalog({ category }) {
  const categoryConfig = catalogCategories[category]
  const categoryProducts = products.filter((product) => product.category === category)
  const brands = categoryConfig.brands
  const [selectedBrands, setSelectedBrands] = useState([])
  const visibleProducts = selectedBrands.length === 0
    ? categoryProducts
    : categoryProducts.filter((product) => selectedBrands.includes(product.brand))

  const toggleBrand = (brand) => {
    setSelectedBrands((current) =>
      current.includes(brand)
        ? current.filter((selected) => selected !== brand)
        : [...current, brand],
    )
  }

  return (
    <section className="catalog-page">
      <div className="site-container">
        <header className="catalog-header">
          <p className="catalog-eyebrow">{category.startsWith('safety') ? 'Safety Equipment' : 'Tools'}</p>
          <h1>{categoryConfig.title}</h1>
          <p>{categoryConfig.description}</p>
        </header>

        <div className="catalog-layout">
          <BrandFilter
            brands={brands}
            productsInCategory={categoryProducts}
            selectedBrands={selectedBrands}
            onBrandChange={toggleBrand}
            onClear={() => setSelectedBrands([])}
          />
          <div className="catalog-results">
            <div className="catalog-results-heading">
              <p><strong>{visibleProducts.length}</strong> {visibleProducts.length === 1 ? 'product' : 'products'}</p>
              {selectedBrands.length > 0 && <p>Filtered by {selectedBrands.join(', ')}</p>}
            </div>
            <ProductGrid items={visibleProducts} category={category} />
          </div>
        </div>
      </div>
    </section>
  )
}
