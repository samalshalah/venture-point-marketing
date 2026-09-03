import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  Brush,
  CheckCircle2,
  Globe2,
  Mail,
  MapPin,
  Phone,
  Search,
  Sparkles,
  Star,
  Users,
  WalletCards,
} from "lucide-react";

const services = [
  {
    icon: Star,
    title: "Google Business Profile + NFC Card",
    copy: "Optimized listing setup paired with tap-to-review NFC cards that help happy customers turn into public proof.",
    price: "$199",
    cadence: "one-time",
  },
  {
    icon: Globe2,
    title: "Web Design",
    copy: "Modern, high-converting websites designed to represent your brand and turn visitors into customers.",
    price: "$249",
    cadence: "one-time",
  },
  {
    icon: BarChart3,
    title: "Brand Strategy",
    copy: "Clear positioning, offers, and messaging so your business looks sharp and stands out locally.",
    price: "$299",
    cadence: "project",
  },
  {
    icon: Brush,
    title: "Content Creation",
    copy: "Photo, short-form video, social posts, flyers, story graphics, and promo ideas built for your market.",
    price: "$349",
    cadence: "project",
  },
  {
    icon: Search,
    title: "Local SEO / Advertising",
    copy: "Rank higher in local search and run targeted ads that drive real calls, visits, and leads.",
    price: "$399",
    cadence: "monthly",
  },
];

const benefits = [
  "Data-driven local strategies",
  "Clear communication",
  "Modern, premium presentation",
  "Fast launch packages",
  "Dedicated support",
];

const process = [
  "Free audit of your presence",
  "We build your custom plan",
  "We launch and set it live",
  "Watch it grow",
];

export default function Home() {
  return (
    <main>
      <section className="hero" id="top">
        <div className="shell hero-shell">
          <a className="corner-logo" href="#top" aria-label="Venture Point home">
            <svg viewBox="0 0 180 116" aria-hidden="true">
              <defs>
                <linearGradient id="cornerLogoStroke" x1="0" x2="1" y1="0" y2="1">
                  <stop offset="0%" stopColor="#ffffff" />
                  <stop offset="52%" stopColor="#d7d0c2" />
                  <stop offset="100%" stopColor="#7e7e79" />
                </linearGradient>
              </defs>
              <text className="corner-logo-v" x="38" y="58">
                V
              </text>
              <line className="corner-logo-slash" x1="91" y1="18" x2="74" y2="76" />
              <text className="corner-logo-p" x="108" y="78">
                P
              </text>
            </svg>
            <span>Venture Point</span>
          </a>
          <div className="hero-copy">
            <p className="eyebrow">Venture Point</p>
            <div className="rule" />
            <h1>Marketing That Moves Brands.</h1>
            <p className="kicker">Strategy. Content. Growth.</p>
            <p className="lede">
              Local marketing that gets businesses found through reviews, SEO,
              ads, web design, and branded content that turns searches into
              customers.
            </p>
            <div className="hero-actions">
              <Link className="button primary" href="/apply">
                Start Free Audit
                <ArrowRight size={18} aria-hidden="true" />
              </Link>
              <a className="button secondary" href="#services">
                View Services
                <ArrowRight size={18} aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="section services-section" id="services">
        <div className="shell two-column">
          <div className="service-board">
            <div className="board-header">
              <p>Our Services</p>
              <span>Starting At</span>
            </div>
            <div className="service-list">
              {services.map((service) => {
                const Icon = service.icon;
                return (
                  <article className="service-item" key={service.title}>
                    <div className="icon-box">
                      <Icon size={22} aria-hidden="true" />
                    </div>
                    <div>
                      <h2>{service.title}</h2>
                      <p>{service.copy}</p>
                    </div>
                    <div className="price">
                      <span>Starting at</span>
                      <strong>{service.price}</strong>
                      <small>{service.cadence}</small>
                    </div>
                  </article>
                );
              })}
            </div>
            <p className="custom-note">
              <Sparkles size={15} aria-hidden="true" />
              Custom packages available
            </p>
          </div>

          <div className="info-stack">
            <article className="info-panel about">
              <p className="panel-title">About Us</p>
              <Users size={28} aria-hidden="true" />
              <p>
                Venture Point is a results-driven marketing agency focused on
                helping local brands look premium, earn trust, and grow.
              </p>
            </article>

            <article className="info-panel">
              <p className="panel-title">Why Work With Us?</p>
              <ul>
                {benefits.map((benefit) => (
                  <li key={benefit}>
                    <CheckCircle2 size={16} aria-hidden="true" />
                    {benefit}
                  </li>
                ))}
              </ul>
            </article>

            <article className="info-panel">
              <p className="panel-title">How We Work</p>
              <ol>
                {process.map((step, index) => (
                  <li key={step}>
                    <strong>{String(index + 1).padStart(2, "0")}</strong>
                    <span>{step}</span>
                  </li>
                ))}
              </ol>
            </article>
          </div>
        </div>
      </section>

      <section className="section proof-section">
        <div className="shell">
          <div className="contact-card contact-card-wide" id="contact">
            <p className="eyebrow">Let&apos;s Work Together</p>
            <h2>Ready to get your business found?</h2>
            <p>
              Start with a free local presence audit and a clear plan for your
              website, Google profile, content, and review funnel.
            </p>
            <Link className="button primary contact-cta" href="/apply">
              Fill Out Application
              <ArrowRight size={18} aria-hidden="true" />
            </Link>
            <div className="contact-links">
              <a href="tel:+15712774644">
                <Phone size={18} aria-hidden="true" />
                571-277-4644
              </a>
              <a href="mailto:venturepointmarketing@gmail.com">
                <Mail size={18} aria-hidden="true" />
                venturepointmarketing@gmail.com
              </a>
              <a href="https://venturepointmarketing.com">
                <WalletCards size={18} aria-hidden="true" />
                venturepointmarketing.com
              </a>
              <span>
                <MapPin size={18} aria-hidden="true" />
                Virginia
              </span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
