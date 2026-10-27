import { useEffect } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import Footer from './components/Footer.jsx'
import Navbar from './components/Navbar.jsx'
import ProductCatalog from './components/ProductCatalog.jsx'
import WhatsAppButton from './components/WhatsAppButton.jsx'
import { categories, siteConfig } from './config/site.js'
import { catalogCategories, getProductById } from './data/products.js'
import Home from './pages/Home.jsx'
import NotFound from './pages/NotFound.jsx'
import Placeholder from './pages/Placeholder.jsx'
import ProductDetail from './pages/ProductDetail.jsx'
import CheetahDetail from './pages/CheetahDetail.jsx'
import KingPowerDetail from './pages/KingPowerDetail.jsx'
import SimonDetail from './pages/SimonDetail.jsx'
import ComfortaKingIndoDetail from './pages/ComfortaKingIndoDetail.jsx'

function RouteContent() {
  const location = useLocation()

  useEffect(() => {
    const currentCategory = categories.find((category) => category.to === location.pathname)
    const currentProduct = location.pathname.startsWith('/product/')
      ? getProductById(location.pathname.split('/').pop())
      : null
    const pageTitle =
      location.pathname === '/'
        ? `${siteConfig.brandName} | ${siteConfig.tagline}`
        : currentProduct
          ? `${currentProduct.name} | ${currentProduct.brand} | ${siteConfig.brandName}`
        : location.pathname === '/protective-footwear/cheetah'
          ? `Cheetah | Protective Footwear | ${siteConfig.brandName}`
        : location.pathname === '/protective-footwear/king-power'
          ? `King Power | Protective Footwear | ${siteConfig.brandName}`
        : location.pathname === '/protective-footwear/simon'
          ? `Simon | Protective Footwear | ${siteConfig.brandName}`
        : location.pathname === '/protective-footwear/comforta-king-indo'
          ? `Comforta King Indo | Protective Footwear | ${siteConfig.brandName}`
        : currentCategory
          ? `${currentCategory.title} | ${siteConfig.brandName}`
          : location.pathname === '/about-us'
            ? `About Us | ${siteConfig.brandName}`
            : location.pathname === '/contact-message'
              ? `Contact Message | ${siteConfig.brandName}`
              : 'Page Not Found | SMJ Teknik'

    document.title = pageTitle
  }, [location.pathname])

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          {categories.map((category) => (
            <Route
              key={category.to}
              path={category.to}
              element={catalogCategories[category.to.split('/').pop()]
                ? <ProductCatalog
                    key={category.to}
                    category={category.to.split('/').pop()}
                  />
                : <Placeholder
                    title={category.title}
                    description={`Product information for ${category.title} will be available soon.`}
                  />}
            />
          ))}
          <Route path="/protective-footwear/cheetah" element={<CheetahDetail />} />
          <Route path="/protective-footwear/king-power" element={<KingPowerDetail />} />
          <Route path="/protective-footwear/simon" element={<SimonDetail />} />
          <Route path="/protective-footwear/comforta-king-indo" element={<ComfortaKingIndoDetail />} />
          <Route path="/product/:productId" element={<ProductDetail />} />
          <Route
            path="/about-us"
            element={
              <Placeholder
                title="About Us"
                description="Learn more about CV. Senia Mandiri Jaya and our commitment to safer, more productive workplaces."
              />
            }
          />
          <Route
            path="/contact-message"
            element={
              <Placeholder
                title="Contact Message"
                description="Contact information and ways to reach our team will be available here soon."
              />
            }
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  )
}

export default function App() {
  return <RouteContent />
}
