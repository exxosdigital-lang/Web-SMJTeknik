import { Link } from 'react-router-dom'
import { brands } from '../data/brands.js'

export default function Brands() {
  return (
    <main className="site-container" style={{ paddingTop: '2rem', paddingBottom: '3rem' }}>
      <header style={{ marginBottom: '2rem' }}>
        <p className="catalog-eyebrow">Our Brands</p>
        <h1>Brands</h1>
        <p>
          Explore our trusted brands and view their product catalogs.
        </p>
      </header>

      <div className="product-grid">
        {brands.map((brand) => (
          <Link
            key={brand.name}
            to={`/brands/${brand.slug}`}
            className="product-card product-card-whole-link"
            aria-label={`View ${brand.name} product catalog`}
          >
            <div className="product-card-media">
              <img
                src={brand.image}
                alt={`${brand.name} product catalog`}
                loading="lazy"
              />
            </div>

            <div className="product-card-body">
              <p className="catalog-eyebrow">{brand.name}</p>
              <h2>Product Catalog</h2>
              <span>
                View Catalog →
              </span>
            </div>
          </Link>
        ))}
      </div>
    </main>
  )
}