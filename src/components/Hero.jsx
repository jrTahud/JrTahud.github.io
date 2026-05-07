import { useState, useEffect } from 'react'
import './Hero.css'

export default function Hero() {
  const [scrolled, setScrolled] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section className="hero">
      {/* Parallax Background Layers */}
      <div className="parallax-container">
        <div className="parallax-layer layer-1" style={{ transform: `translateY(${scrolled * 0.5}px)` }}></div>
        <div className="parallax-layer layer-2" style={{ transform: `translateY(${scrolled * 0.3}px)` }}></div>
        <div className="parallax-layer layer-3" style={{ transform: `translateY(${scrolled * 0.2}px)` }}></div>
      </div>

      {/* Profile Photo */}
      <div className="hero-photo-wrapper">
        <div className="hero-photo">
          <img src="https://avatars.githubusercontent.com/u/0" alt="Jhon Roque Tahud" className="profile-image" />
        </div>
      </div>

      {/* Content */}
      <div className="hero-content" style={{ transform: `translateY(${scrolled * 0.1}px)` }}>
        <div className="hero-text-wrapper">
          <h1 className="hero-title">
            Jhon Roque <span className="highlight">Tahud</span>
          </h1>
          <p className="hero-subtitle">
            Full-Stack Software Developer
          </p>
          <p className="hero-description">
            8+ Years in Web & Desktop Development | PHP • Laravel • FuelPHP • C#.NET • Delphi
          </p>

          <div className="hero-buttons">
            <button className="btn btn-primary" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
              Get In Touch
            </button>
            <button className="btn btn-secondary" onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}>
              View My Work
            </button>
          </div>

          <div className="hero-socials">
            <a href="https://www.linkedin.com/in/jhon-roquetahud-892839158" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="https://ph.jobstreet.com/profiles/jr-tahud-QnGcJpsj13" target="_blank" rel="noopener noreferrer" aria-label="JobStreet">
              <i className="fab fa-briefcase"></i>
            </a>
            <a href="mailto:jr.tahud23@gmail.com" aria-label="Email">
              <i className="fas fa-envelope"></i>
            </a>
            <a href="tel:09457700408" aria-label="Phone">
              <i className="fas fa-phone"></i>
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="scroll-indicator">
        <span>Scroll to explore</span>
        <div className="mouse">
          <div className="wheel"></div>
        </div>
      </div>
    </section>
  )
}
