import { useState } from 'react'
import { ArrowRight, ShieldCheck, Wrench } from 'lucide-react'
import { Link } from 'react-router-dom'
import CategoryCard from '../components/CategoryCard.jsx'
import { categories, siteConfig } from '../config/site.js'

function HeroVisual() {
  const [imageFailed, setImageFailed] = useState(false)

  return (
    <div className={`hero-visual${imageFailed ? ' hero-visual-fallback' : ''}`}>
      {!imageFailed ? (
        <img
          src="/images/hero/safety-equipment-hero.jpg"
          alt="Safety equipment including helmet, protective eyewear, gloves, safety vest, work boots and respiratory protection"
          className="hero-photo"
          fetchpriority="high"
          decoding="async"
          onError={() => setImageFailed(true)}
        />
      ) : (
        <div className="hero-photo-placeholder" role="img" aria-label="Safety equipment photograph will be added here">
          <span>Safety equipment photography will be added here</span>
        </div>
      )}
    </div>
  )
}

export default function Home() {
  return (
    <>
      <section className="hero-section">
        <div className="site-container home-hero-layout grid items-center gap-12 py-14 md:py-20 lg:grid-cols-[1.02fr_0.98fr] lg:gap-16 lg:py-24">
          <div className="max-w-2xl">
            <p className="eyebrow"><span /> {siteConfig.brandName}</p>
            <h1 className="mt-6 text-4xl font-extrabold leading-[1.12] tracking-tight text-navy-950 sm:text-5xl lg:text-[3.65rem]">
              Safety Equipment &amp; Tools for a{' '}
              <span className="text-orange-600">Safer Workplace</span>
            </h1>
            <p className="mt-6 max-w-xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
              Reliable safety equipment and professional tools to support safer, more productive and efficient workplaces.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href="#categories" className="button-primary cursor-pointer">
                Explore Products <ArrowRight size={17} aria-hidden="true" />
              </a>
              <a
                href={siteConfig.whatsappUrl}
                className="button-secondary"
                target="_blank"
                rel="noreferrer"
              >
                Chat on WhatsApp
              </a>
            </div>
            <div className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm font-medium text-slate-500">
              <span className="inline-flex items-center gap-2"><ShieldCheck size={17} className="text-orange-600" /> Safety-focused solutions</span>
              <span className="inline-flex items-center gap-2"><Wrench size={17} className="text-orange-600" /> Reliable tools</span>
            </div>
          </div>
          <HeroVisual />
        </div>
      </section>

      <section id="categories" className="section-padding bg-slate-50">
        <div className="site-container">
          <div className="section-heading">
            <p className="eyebrow">What we offer</p>
            <h2 className="section-title">Our Product Categories</h2>
            <p className="section-description">
              Explore practical solutions for workplace safety, maintenance, and day-to-day operations.
            </p>
          </div>
          <div className="home-category-grid mt-10 grid gap-5 sm:grid-cols-2">
            {categories.map((category) => (
              <CategoryCard category={category} key={category.to} />
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="site-container max-w-4xl">
          <div className="max-w-3xl">
            <p className="eyebrow">Who we are</p>
            <h2 className="section-title mt-3">About SMJ Teknik</h2>
            <p className="mt-5 text-base leading-8 text-slate-600">
              CV. Senia Mandiri Jaya (SMJ Teknik) adalah pemasok peralatan keselamatan di Indonesia yang berfokus pada penyediaan produk dan layanan APD berkinerja tinggi dan inovatif.
            </p>
            <Link to="/about-us" className="text-link mt-6">
              Learn More <ArrowRight size={17} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      <section className="section-padding pt-0">
        <div className="site-container">
          <div className="cta-panel">
            <div className="relative z-10 max-w-2xl">
              <p className="eyebrow eyebrow-light">We’re here to help</p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Looking for the Right Safety Equipment or Tools?
              </h2>
              <p className="mt-4 leading-7 text-slate-300">
                Talk to our team and find the right products for your needs.
              </p>
              <a
                href={siteConfig.whatsappUrl}
                className="button-orange mt-7"
                target="_blank"
                rel="noreferrer"
              >
                Chat on WhatsApp <ArrowRight size={17} aria-hidden="true" />
              </a>
            </div>
            <div className="cta-decoration" aria-hidden="true"><Wrench size={138} strokeWidth={0.8} /></div>
          </div>
        </div>
      </section>
    </>
  )
}
