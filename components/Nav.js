'use client'
import { useState } from 'react'

export default function Nav() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [imgError, setImgError] = useState(false)

  return (
    <>
      <div className="mobile-menu" id="mobileMenu" style={mobileOpen ? {display:'flex'} : {}}>
        <button className="mobile-close" onClick={() => setMobileOpen(false)}>✕</button>
        <a href="#features" onClick={() => setMobileOpen(false)}>Features</a>
        <a href="#how-it-works" onClick={() => setMobileOpen(false)}>How it works</a>
        <a href="#pricing" onClick={() => setMobileOpen(false)}>Pricing</a>
        <a href="#demo" className="btn-cta" onClick={() => setMobileOpen(false)} style={{fontSize:'1.1rem',padding:'.75rem 2rem'}}>Book a Demo</a>
      </div>

      <nav className="nav">
        <a href="#" className="nav-logo">
          {!imgError ? (
            <img 
              src="/DragonOS.png" 
              alt="DragonOS" 
              onError={() => setImgError(true)} 
              style={{
                height: '180px',
                width: 'auto',
                objectFit: 'contain',
                marginTop: '8px',
                marginBottom: '-8px',
                marginLeft: '-20px'
              }}
            />
          ) : (
            <div className="nav-logo-fallback">
              <div className="nav-logo-mark">🐉</div>
              Dragon<span>OS</span>
            </div>
          )}
        </a>

        <div className="nav-center">
          <a href="#features">Features</a>
          <a href="#how-it-works">How it works</a>
          <a href="#pricing">Pricing</a>
          <a href="#use-cases">Use cases</a>
        </div>

        <div className="nav-right">
          <a href="mailto:dragonosadmin@gmail.com" className="btn-ghost">Contact</a>
          <a href="#demo" className="btn-cta">Book a Demo</a>
        </div>

        <button className="hamburger" onClick={() => setMobileOpen(true)} aria-label="Menu">
          <span /><span /><span />
        </button>
      </nav>
    </>
  )
}
