import { ArrowUpRight, MapPin, MessageCircle } from 'lucide-react'
import { Link } from 'react-router-dom'
import { navigationGroups, siteConfig } from '../config/site.js'
import BrandLogo from './BrandLogo.jsx'

const productLinks = navigationGroups.flatMap((group) => group.items)

export default function Footer() {
  return (
    <footer className="bg-navy-950 text-slate-300">
      <div className="site-container grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4 lg:gap-12 lg:py-16">
        <div>
          <div className="flex items-center gap-3">
            <Link to="/" aria-label={`${siteConfig.displayCompanyName} home`} className="inline-flex shrink-0 rounded bg-white p-2">
              <BrandLogo className="footer-logo" />
            </Link>
            <span className="text-sm font-semibold leading-tight text-white">
              {siteConfig.displayCompanyName}
            </span>
          </div>
          <p className="mt-5 text-sm font-semibold text-white">{siteConfig.tagline}</p>
          <p className="mt-3 max-w-xs text-sm leading-6 text-slate-400">
            Reliable safety equipment and professional tools for safer and more productive workplaces.
          </p>
        </div>

        <div>
          <h2 className="footer-heading">Quick Links</h2>
          <ul className="space-y-3">
            <li><Link className="footer-link" to="/">Home</Link></li>
            <li><Link className="footer-link" to={navigationGroups[0].items[0].to}>Safety Equipment</Link></li>
            <li><Link className="footer-link" to={navigationGroups[1].items[0].to}>Tools</Link></li>
            <li><Link className="footer-link" to="/about-us">About Us</Link></li>
            <li><Link className="footer-link" to="/contact-message">Contact Message</Link></li>
          </ul>
        </div>

        <div>
          <h2 className="footer-heading">Product Categories</h2>
          <ul className="space-y-3">
            {productLinks.map((item) => (
              <li key={item.to}>
                <Link className="footer-link" to={item.to}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="footer-heading">Contact</h2>
          <p className="font-semibold text-white">{siteConfig.companyName}</p>
          <address className="mt-3 flex gap-2 text-sm not-italic leading-6 text-slate-400">
            <MapPin size={17} className="mt-1 shrink-0 text-orange-500" aria-hidden="true" />
            <span>{siteConfig.address.map((line) => <span className="block" key={line}>{line}</span>)}</span>
          </address>
          <a
            href={siteConfig.whatsappUrl}
            className="footer-link mt-4 inline-flex items-center gap-2"
            target="_blank"
            rel="noreferrer"
          >
            <MessageCircle size={17} className="text-orange-500" aria-hidden="true" />
            {siteConfig.whatsappDisplay}
            <ArrowUpRight size={14} aria-hidden="true" />
          </a>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="site-container flex flex-col gap-2 py-5 text-xs text-slate-400 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 {siteConfig.companyName}. All Rights Reserved.</p>
          <p>{siteConfig.brandName} <span className="px-1 text-orange-500">|</span> {siteConfig.tagline}</p>
        </div>
      </div>
    </footer>
  )
}
