import { useState } from 'react'
import { ChevronDown, MessageCircle, Menu, X } from 'lucide-react'
import { Link, NavLink } from 'react-router-dom'
import { navigationGroups, siteConfig } from '../config/site.js'
import BrandLogo from './BrandLogo.jsx'

function WhatsAppLink({ className = '' }) {
  return (
    <a
      href={siteConfig.whatsappUrl}
      className={className}
      target="_blank"
      rel="noreferrer"
    >
      <MessageCircle size={17} aria-hidden="true" />
      <span>Chat on WhatsApp</span>
    </a>
  )
}

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [openGroup, setOpenGroup] = useState('')

  const closeMenu = () => {
    setMobileOpen(false)
    setOpenGroup('')
  }

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/95 shadow-sm backdrop-blur">
      <nav
        className="site-container flex min-h-[76px] items-center justify-between gap-2 sm:gap-4 lg:gap-3 xl:gap-6"
        aria-label="Main navigation"
      >
        <Link
          to="/"
          aria-label={`${siteConfig.displayCompanyName} home`}
          className="flex min-w-0 items-center gap-2"
          onClick={closeMenu}
        >
          <BrandLogo className="navbar-logo shrink-0" />
          <span className="min-w-0 max-w-[155px] text-[10px] font-semibold leading-tight text-navy-950 sm:max-w-none sm:text-[13px] lg:max-w-[120px] lg:text-xs xl:max-w-none xl:text-sm">
            {siteConfig.displayCompanyName}
          </span>
        </Link>

        <div className="hidden items-center gap-4 lg:flex xl:gap-7">
          <NavLink to="/" className={({ isActive }) => `nav-link${isActive ? ' nav-link-active' : ''}`}>
            Home
          </NavLink>
          {navigationGroups.map((group) => (
            <div
              key={group.label}
              className="nav-dropdown"
              onMouseEnter={() => setOpenGroup(group.label)}
              onMouseLeave={() => setOpenGroup('')}
            >
              <button
                type="button"
                className="nav-link inline-flex items-center gap-1.5"
                aria-haspopup="true"
                aria-expanded={openGroup === group.label}
                onClick={() => setOpenGroup(openGroup === group.label ? '' : group.label)}
                onKeyDown={(event) => {
                  if (event.key === 'Escape') setOpenGroup('')
                }}
              >
                {group.label}
                <ChevronDown size={15} aria-hidden="true" />
              </button>
              <div className={`dropdown-panel${openGroup === group.label ? ' dropdown-panel-open' : ''}`}>
                {group.items.map((item) => (
                  <NavLink
                    key={item.to}
                    to={item.to}
                    className="dropdown-link"
                    onClick={() => setOpenGroup('')}
                  >
                    {item.label}
                  </NavLink>
                ))}
              </div>
            </div>
          ))}
          <NavLink
            to="/about-us"
            className={({ isActive }) => `nav-link${isActive ? ' nav-link-active' : ''}`}
          >
            About Us
          </NavLink>
          <NavLink
            to="/contact-message"
            className={({ isActive }) => `nav-link${isActive ? ' nav-link-active' : ''}`}
          >
            Contact Message
          </NavLink>
        </div>

        <div className="hidden lg:block">
          <WhatsAppLink className="button-primary !px-5 !py-3 !text-sm" />
        </div>

        <button
          type="button"
          className="icon-button lg:hidden"
          aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={mobileOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {mobileOpen && (
        <div id="mobile-navigation" className="mobile-navigation lg:hidden">
          <div className="site-container space-y-1 pb-5 pt-2">
            <NavLink to="/" className="mobile-nav-link" onClick={closeMenu}>
              Home
            </NavLink>
            {navigationGroups.map((group) => (
              <section key={group.label} className="mobile-nav-group">
                <button
                  type="button"
                  className="mobile-nav-link flex w-full items-center justify-between"
                  aria-expanded={openGroup === group.label}
                  onClick={() => setOpenGroup(openGroup === group.label ? '' : group.label)}
                >
                  {group.label}
                  <ChevronDown
                    size={17}
                    className={openGroup === group.label ? 'rotate-180 transition-transform' : 'transition-transform'}
                    aria-hidden="true"
                  />
                </button>
                {openGroup === group.label && (
                  <div className="mobile-submenu">
                    {group.items.map((item) => (
                      <NavLink
                        key={item.to}
                        to={item.to}
                        className="mobile-submenu-link"
                        onClick={closeMenu}
                      >
                        {item.label}
                      </NavLink>
                    ))}
                  </div>
                )}
              </section>
            ))}
            <NavLink to="/about-us" className="mobile-nav-link" onClick={closeMenu}>
              About Us
            </NavLink>
            <NavLink to="/contact-message" className="mobile-nav-link" onClick={closeMenu}>
              Contact Message
            </NavLink>
            <WhatsAppLink className="button-primary mt-4 w-full justify-center" />
          </div>
        </div>
      )}
    </header>
  )
}
