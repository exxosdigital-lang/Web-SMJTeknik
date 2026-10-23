import { useState } from 'react'
import { ArrowRight, Drill, Footprints, Glasses, Sparkles, Wrench } from 'lucide-react'
import { Link } from 'react-router-dom'

const categoryVisuals = {
  boot: {
    Icon: Footprints,
    image: '/images/safety-equipment/SafetyShoes.png',
    alt: 'Safety shoes and protective footwear',
    description: 'Reliable footwear designed for demanding work environments.',
  },
  glasses: {
    Icon: Glasses,
    image: '/images/safety-equipment/Safety Glass.jpg',
    alt: 'Safety glasses for workplace protection',
    description: 'Eye protection for safer and more confident work.',
  },
  wrench: {
    Icon: Wrench,
    image: '/images/safety-equipment/HandTools.jpg',
    alt: 'Professional hand tools',
    description: 'Practical tools for everyday maintenance and professional work.',
  },
  drill: {
    Icon: Drill,
    image: '/images/safety-equipment/PowerTools.jpg',
    alt: 'Power tools',
    description: 'Efficient tools to support demanding tasks and projects.',
  },
  sparkles: {
    Icon: Sparkles,
    image: '/images/safety-equipment/Cleaning.jpg',
    alt: 'Cleaning equipment',
    description: 'Practical solutions for cleaner and safer workplaces.',
  },
}

function CategoryVisual({ category, visual }) {
  const [imageFailed, setImageFailed] = useState(false)
  const Icon = visual.Icon

  return (
    <span className={`category-card-visual category-card-visual-${category.icon}`}>
      {visual.image && !imageFailed ? (
        <img
          src={visual.image}
          alt={visual.alt}
          className="category-card-image"
          loading="lazy"
          decoding="async"
          onError={() => setImageFailed(true)}
        />
      ) : (
        <span className="category-card-placeholder" aria-hidden="true">
          <Icon size={58} strokeWidth={1.2} />
        </span>
      )}
    </span>
  )
}

export default function CategoryCard({ category }) {
  const visual = categoryVisuals[category.icon] ?? categoryVisuals.wrench

  return (
    <Link to={category.to} className="category-card group">
      <CategoryVisual category={category} visual={visual} />
      <span className="category-card-content">
        <span className="category-card-title">{category.title}</span>
        <span className="category-card-description">{visual.description}</span>
        <span className="category-card-link">
          Explore Category
          <ArrowRight size={17} aria-hidden="true" />
        </span>
      </span>
    </Link>
  )
}
