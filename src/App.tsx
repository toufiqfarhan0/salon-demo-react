import { useState } from 'react';
import { OmniDeskWidget } from 'omnidesk-voice';
import './App.css';

interface ServiceItem {
  id: string;
  name: string;
  price: number;
  duration: string;
  category: string;
  description: string;
  popular?: boolean;
}

const SALON_SERVICES: ServiceItem[] = [
  {
    id: 'balayage',
    name: 'Artisan Balayage & Highlights',
    price: 280,
    duration: '120 min',
    category: 'Color & Highlights',
    description: 'Custom hand-painted multidimensional highlights, bespoke gloss formulation, restorative treatment mask, and blowout styling.',
    popular: true,
  },
  {
    id: 'haircut',
    name: 'Precision Cut & Styling',
    price: 85,
    duration: '45 min',
    category: 'Haircut & Styling',
    description: 'In-depth consultation, organic scalp massage, botanical cleanse, precision architectural cut, and signature voluminous blowout.',
  },
  {
    id: 'blowout',
    name: 'Signature Blowout & Treatment',
    price: 65,
    duration: '45 min',
    category: 'Haircut & Styling',
    description: 'Deep clarifying shampoo, revitalizing essential oil scalp massage, intense hydration therapy, and expert round-brush finish.',
  },
  {
    id: 'color',
    name: 'Full Spectrum Color Formulation',
    price: 145,
    duration: '90 min',
    category: 'Color & Highlights',
    description: 'Rich root-to-end single process color or regrowth touchup, high-gloss shine glaze, and antioxidant conditioning finish.',
  },
];

export default function App() {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const filteredServices = activeCategory === 'all'
    ? SALON_SERVICES
    : SALON_SERVICES.filter(s => s.category.toLowerCase().includes(activeCategory));

  return (
    <div className="salon-app">
      {/* Navigation Header */}
      <header className="salon-header">
        <div className="container header-content">
          <div className="brand">
            <div className="brand-logo">L</div>
            <div className="brand-info">
              <span className="brand-name">LUMIÈRE <em>Studio</em></span>
              <span className="brand-sub">Artisan Haircare &bull; Downtown</span>
            </div>
          </div>
          <nav className="header-nav">
            <a href="#services">Services</a>
            <a href="#experience">Experience</a>
            <a href="#hours">Hours</a>
          </nav>
          <div className="header-status">
            <span className="status-dot"></span>
            <span className="status-text">Voice Receptionist Online</span>
          </div>
        </div>
      </header>

      {/* Hero Showcase */}
      <section className="hero-section">
        <div className="container hero-layout">
          <div className="hero-text">
            <div className="hero-pill">
              <span className="pill-badge">React &bull; NPM Integration</span>
              <span>Powered by OmniDesk &amp; AssemblyAI</span>
            </div>
            <h1 className="hero-headline">
              Effortless Luxury Haircare, Booked Entirely by Voice.
            </h1>
            <p className="hero-subline">
              Step into Lumière Studio. From precision haircuts to hand-painted balayage, our stylists craft dimensional, healthy hair. Skip the phone tags and book directly with our autonomous AI voice receptionist.
            </p>

            <div className="voice-assistant-card">
              <div className="voice-card-header">
                <span className="voice-card-badge">🎙️ Try Voice Booking</span>
                <span className="voice-card-note">Click bottom-right widget to speak</span>
              </div>
              <p className="voice-card-title">What you can ask the receptionist:</p>
              <div className="voice-pills">
                <span className="v-pill">“What hair treatments do you offer?”</span>
                <span className="v-pill">“Can I book a haircut for this Friday at 2 PM?”</span>
                <span className="v-pill">“How much is an artisan balayage?”</span>
              </div>
            </div>
          </div>

          <div className="hero-aside">
            <div className="schedule-preview-box">
              <h3>Studio Operating Hours</h3>
              <div className="schedule-list">
                <div className="schedule-row">
                  <span>Monday – Friday</span>
                  <strong>9:00 AM – 5:00 PM</strong>
                </div>
                <div className="schedule-row">
                  <span>Saturday</span>
                  <em>Private Appointments</em>
                </div>
                <div className="schedule-row">
                  <span>Sunday</span>
                  <em>Closed</em>
                </div>
              </div>
              <div className="schedule-features">
                <div className="feature-item">
                  <span className="feature-icon">⚡</span>
                  <div>
                    <strong>Zero-Hold Booking</strong>
                    <p>Instant calendar verification in real time</p>
                  </div>
                </div>
                <div className="feature-item">
                  <span className="feature-icon">📅</span>
                  <div>
                    <strong>Instant Calendar (.ics)</strong>
                    <p>Direct sync to Apple &amp; Google Calendar</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Menu Section */}
      <section id="services" className="services-section">
        <div className="container">
          <div className="section-title-wrap">
            <span className="sub-title">Bespoke Treatments</span>
            <h2>Services &amp; Pricing Catalog</h2>
            <p>Every session includes deep botanical cleansing and tailored styling.</p>
          </div>

          <div className="category-tabs">
            <button
              type="button"
              className={`tab-btn ${activeCategory === 'all' ? 'active' : ''}`}
              onClick={() => setActiveCategory('all')}
            >
              All Services
            </button>
            <button
              type="button"
              className={`tab-btn ${activeCategory === 'haircut' ? 'active' : ''}`}
              onClick={() => setActiveCategory('haircut')}
            >
              Cuts &amp; Blowouts
            </button>
            <button
              type="button"
              className={`tab-btn ${activeCategory === 'color' ? 'active' : ''}`}
              onClick={() => setActiveCategory('color')}
            >
              Color &amp; Balayage
            </button>
          </div>

          <div className="services-grid">
            {filteredServices.map(service => (
              <div key={service.id} className={`service-item-card ${service.popular ? 'featured' : ''}`}>
                {service.popular && <span className="featured-flag">Client Favorite</span>}
                <div className="card-top">
                  <h3>{service.name}</h3>
                  <span className="price-tag">${service.price}</span>
                </div>
                <div className="duration-meta">{service.duration} &bull; {service.category}</div>
                <p className="desc">{service.description}</p>
                <div className="card-bottom">
                  <span className="hint">Bookable via Voice Widget</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="salon-footer">
        <div className="container footer-content">
          <p>&copy; 2026 Lumière Studio &bull; Embedded via <code>npm install omnidesk-voice</code></p>
          <div className="npm-badge">
            <code>package: omnidesk-voice@0.1.3</code>
          </div>
        </div>
      </footer>

      {/* ==================================================================== */}
      {/* OmniDesk Voice Receptionist Widget (Official React Component)        */}
      {/* ==================================================================== */}
      {/*
        ⚠️  WARNING: AGENT ID NOTICE
        ─────────────────────────────────────────────────────────────────────
        The `agentId` below is the LIVE AssemblyAI agent for
        "OmniDesk Hair Salon" configured in your dashboard.

        Before deploying or testing:
          1. Verify this ID in your AssemblyAI dashboard under Voice Agents.
          2. Cross-check it with your OmniDesk dashboard business settings.
          3. Test the widget using the OmniDesk Live Tester before going live.

        If you change the agent voice or settings in the AssemblyAI dashboard,
        the change applies to this widget automatically (same ID).
        If you CREATE a NEW agent, you must update `agentId` here manually.
        ─────────────────────────────────────────────────────────────────────
      */}
      <OmniDeskWidget
        host="https://omni-desk-rho.vercel.app"
        businessId="biz_demo_dental"
        agentId="agent_5e74813381884bb8b82f881b6db66aaf"
        theme="dark"
        accent="#18181b"
        position="bottom-right"
        label="Talk to Receptionist"
      />
    </div>
  );
}
