import { useState } from 'react'
import { Drill, Footprints, Glasses, Sparkles, Wrench } from 'lucide-react'

export default function ProductImage({ product, large = false }) {
  const [imageFailed, setImageFailed] = useState(false)
  const CategoryIcon = {
    'protective-footwear': Footprints,
    'safety-glass': Glasses,
    'hand-tools': Wrench,
    'power-tools': Drill,
    cleaning: Sparkles,
  }[product.category] ?? Footprints

  if (product.image && !imageFailed) {
    return (
      <img
        src={product.image}
        alt={`${product.brand} ${product.name}`}
        className={`product-image${large ? ' product-image-large' : ''}`}
        onError={() => setImageFailed(true)}
      />
    )
  }

  return (
    <div className={`product-image-fallback${large ? ' product-image-fallback-large' : ''}`}>
      <span className="product-image-icon">
        <CategoryIcon size={large ? 64 : 42} strokeWidth={1.3} aria-hidden="true" />
      </span>
      <span className="product-image-note">Product image coming soon</span>
    </div>
  )
}
