import { useState } from 'react'
import {
  ArrowDown,
  ArrowRight,
  Check,
  Menu,
  Sparkles,
  X,
} from 'lucide-react'

const features = [
  {
    number: '01',
    title: 'Your story, your style.',
    description:
      'Create a personal website that reflects your personality, career and ambitions.',
  },
  {
    number: '02',
    title: 'Designed to stand out.',
    description:
      'Choose an elegant template and make it yours with custom colors and typography.',
  },
  {
    number: '03',
    title: 'Everything in one place.',
    description:
      'Bring your experience, achievements and social links together in one beautiful profile.',
  },
]

const templates = [
  { name: 'Executive', type: 'Professional', color: '#d8c4a2' },
  { name: 'Minimal', type: 'Clean & simple', color: '#c5d2c2' },
  { name: 'Creative', type: 'Bold & expressive', color: '#c4b5fd' },
  { name: 'Editorial', type: 'Elegant & timeless', color: '#e8b9a8' },
]

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  const startCreating = () => {
    document.getElementById('templates')?.scrollIntoView({
      behavior: 'smooth',
    })
  }

  return (
    <main>
      <header className="navbar">
        <a className="brand" href="#" aria-label="Persona home">
          <span className="brand-mark">P.</span>
          <span>persona</span>
        </a>

        <nav className={menuOpen ? 'nav-links open' : 'nav-links'}>
          <a href="#features" onClick={() => setMenuOpen(false)}>
            Features
          </a>
          <a href="#templates" onClick={() => setMenuOpen(false)}>
            Templates
          </a>
          <button className="nav-cta" onClick={startCreating}>
            Get started <ArrowRight size={15} />
          </button>
        </nav>

        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
        >
          {menuOpen ? <X /> : <Menu />}
        </button>
      </header>

      <section className="hero">
        <div className="hero-glow" />

        <div className="hero-content">
          <div className="eyebrow">
            <Sparkles size={14} />
            <span>YOUR IDENTITY, REIMAGINED</span>
          </div>

          <h1>
            Make your
            <br />
            <span>presence</span> personal.
          </h1>

          <p className="hero-description">
            A personal website that feels like you.
            Showcase your story, your work and everything
            that makes you different.
          </p>

          <div className="hero-actions">
            <button className="primary-button" onClick={startCreating}>
              Create your website <ArrowRight size={17} />
            </button>

            <a className="secondary-button" href="#features">
              Explore Persona <ArrowDown size={16} />
            </a>
          </div>

          <div className="hero-note">
            <span className="status-dot" />
            YOUR STORY DESERVES A SPACE OF ITS OWN
          </div>
        </div>

        <div className="profile-scene">
          <div className="orbit orbit-one" />
          <div className="orbit orbit-two" />

          <div className="profile-card">
            <div className="card-top">
              <span>PERSONA / 001</span>
              <span className="card-status">AVAILABLE FOR WORK</span>
            </div>

            <div className="portrait">
              <div className="portrait-shape">
                <span>J</span>
              </div>
              <div className="portrait-label">CREATIVE PROFILE</div>
            </div>

            <div className="profile-info">
              <span className="profile-role">DESIGNER & STORYTELLER</span>
              <h2>James Morgan<span>.</span></h2>
              <p>Creating thoughtful digital experiences.</p>
            </div>

            <div className="card-bottom">
              <span>NEW YORK · USA</span>
              <span className="card-arrow">
                <ArrowRight size={17} />
              </span>
            </div>
          </div>

          <div className="floating-tag tag-top">
            <span className="tag-icon"><Check size={15} /></span>
            YOUR PERSONAL BRAND
          </div>

          <div className="floating-tag tag-bottom">
            <span className="tag-star">✳</span>
            Made to be remembered.
          </div>
        </div>

        <div className="hero-footer">
          <span>SCROLL TO DISCOVER</span>
          <span>01 — 04</span>
        </div>
      </section>

      <section className="intro-section" id="features">
        <div className="section-label">A NEW KIND OF PERSONAL WEBSITE</div>

        <div className="intro-heading">
          <h2>
            Not another profile.
            <br />
            <span>A little more you.</span>
          </h2>
          <p>
            Your experience is more than a list of achievements.
            Persona helps you turn your story into a thoughtful
            digital experience that people remember.
          </p>
        </div>

        <div className="feature-grid">
          {features.map((feature) => (
            <article className="feature-card" key={feature.number}>
              <span className="feature-number">{feature.number}</span>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
              <span className="feature-line" />
            </article>
          ))}
        </div>
      </section>

      <section className="templates-section" id="templates">
        <div className="section-label">FIND YOUR EXPRESSION</div>

        <div className="templates-heading">
          <h2>
            Four styles.
            <br />
            <span>One identity.</span>
          </h2>
          <p>
            Different aesthetics. The same idea:
            making your online presence feel unmistakably yours.
          </p>
        </div>

        <div className="template-grid">
          {templates.map((template, index) => (
            <article className="template-card" key={template.name}>
              <div
                className={`template-preview preview-${index + 1}`}
                style={{ '--template-accent': template.color } as React.CSSProperties}
              >
                <div className="preview-top">
                  <span>PERSONA</span>
                  <span>0{index + 1}</span>
                </div>

                <div className="preview-content">
                  <span>{template.type.toUpperCase()}</span>
                  <div className="preview-name">
                    {index === 0 && 'Alexandra\nMorgan.'}
                    {index === 1 && 'Alexandra\nMorgan'}
                    {index === 2 && 'Hello,\nI’m Alex.'}
                    {index === 3 && 'The art of\nbeing you.'}
                  </div>
                  <div className="preview-line" />
                </div>

                <div className="preview-bottom">
                  <span>PERSONAL PORTFOLIO</span>
                  <ArrowRight size={15} />
                </div>
              </div>

              <div className="template-meta">
                <div>
                  <h3>{template.name}</h3>
                  <p>{template.type}</p>
                </div>
                <span className="template-index">0{index + 1}</span>
              </div>
            </article>
          ))}
        </div>

        <div className="template-note">
          <Sparkles size={16} />
          More than a template. A space to tell your story.
        </div>
      </section>

      <section className="closing-section">
        <div className="closing-glow" />
        <span className="section-label">YOUR NEXT CHAPTER STARTS HERE</span>
        <h2>
          The world should
          <br />
          <span>know your name.</span>
        </h2>
        <p>
          Build a space that tells your story.
          Make it personal. Make it Persona.
        </p>
        <button className="primary-button" onClick={startCreating}>
          Find your style <ArrowRight size={17} />
        </button>
        <span className="closing-mark">P.</span>
      </section>

      <footer className="footer">
        <a className="brand" href="#">
          <span className="brand-mark">P.</span>
          <span>persona</span>
        </a>
        <span>YOUR IDENTITY, BEAUTIFULLY EXPRESSED.</span>
        <span>© 2026 PERSONA</span>
      </footer>
    </main>
  )
}