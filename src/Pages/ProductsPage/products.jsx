import { useEffect, useRef } from "react";
import Navbar from "../../components/Header/header";
import { Footer } from "../../components/Footer/footer";
import {
  FiShoppingCart, FiPackage, FiCreditCard, FiBarChart2, FiBell, FiGift,
  FiSmartphone, FiTrendingUp, FiCoffee, FiMessageSquare, FiUsers, FiMonitor
} from "react-icons/fi";
import "./products.css";

const tastyfoodFeatures = [
  { Icon: FiShoppingCart, title: "Custom Storefront",   desc: "Highly customizable visual identities that reflect your brand's unique culinary story." },
  { Icon: FiPackage,      title: "Inventory Sync",      desc: "Real-time inventory management across multiple locations and sales channels." },
  { Icon: FiCreditCard,   title: "Smart Checkout",      desc: "Frictionless payment processing with local and international gateway support." },
  { Icon: FiBarChart2,    title: "Palate Analytics",    desc: "Deep insights into customer preferences and ordering behavior trends." },
  { Icon: FiBell,         title: "Live Order Tracking", desc: "Keep customers informed with real-time push notifications and status updates." },
  { Icon: FiGift,         title: "Loyalty Engine",      desc: "Automated rewards programs designed to turn first-time buyers into patrons." },
];

const waitFeatures = [
  { Icon: FiSmartphone,    title: "Virtual Check-in",   desc: "Contactless QR-based registration that lets guests browse nearby while they wait." },
  { Icon: FiTrendingUp,    title: "Traffic Predictor",  desc: "AI-driven forecasts that accurately estimate wait times based on historical flow." },
  { Icon: FiCoffee,        title: "Table Optimization", desc: "Smart seat mapping that maximizes revenue by minimizing empty table intervals." },
  { Icon: FiMessageSquare, title: "Automated Alerts",   desc: "SMS and push notifications that ping guests precisely when their table is ready." },
  { Icon: FiUsers,         title: "Party Merging",      desc: "Effortlessly manage large groups and split parties within the digital queue." },
  { Icon: FiMonitor,       title: "Host Dashboard",     desc: "A clean interface for staff to manage the floor with ease." },
];

function useReveal() {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { el.classList.add("revealed"); obs.disconnect(); } },
      { threshold: 0.12 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return ref;
}

const FeatureCard = ({ Icon, title, desc, accent }) => (
  <div className="feat-card" style={{ "--accent": accent }}>
    <div className="feat-icon-wrap">
      <Icon size={22} />
    </div>
    <strong>{title}</strong>
    <p>{desc}</p>
  </div>
);

const ProductsPage = () => {
  const hero  = useReveal();
  const sec1  = useReveal();
  const grid1 = useReveal();
  const sec2  = useReveal();
  const grid2 = useReveal();
  const cta   = useReveal();

  return (
    <div className="pp-page">
      <Navbar />

      {/* ── Hero ── */}
      <section className="pp-hero">
        <div className="pp-hero-bg" />
        <div className="pp-hero-content reveal-up" ref={hero}>
          <span className="pp-eyebrow">Our Portfolio</span>
          <h1>Our Products</h1>
          <p>E-commerce platforms built for real-world food businesses.</p>
        </div>
      </section>

      {/* ── Product 1 — The Tasty Food ── */}
      <section className="pp-product pp-product--light">
        <div className="pp-inner">
          <div className="pp-row reveal-up" ref={sec1}>
            <div className="pp-text">
              <span className="pp-tag pp-tag--yellow">Food E-Commerce</span>

              <h2>The Tasty Food</h2>
              <p className="pp-tagline">
                Every restaurant deserves its own e-commerce store — without the cost or complexity of building one from scratch.
              </p>
              <p className="pp-body">
                A full e-commerce platform that gives each restaurant its own branded website and mobile app the moment they sign up.
                Customers browse, order, and pay directly — no third-party marketplaces, no commission cuts.
              </p>
              <p className="pp-body">
                Think of it as <strong>Shopify built specifically for food businesses</strong>. Sign up, list your menu, start selling online instantly.
              </p>
              <div className="pp-badges">
                <span className="pp-badge">Restaurant Owners</span>
                <span className="pp-badge">Cloud Kitchens</span>
                <span className="pp-badge">Small Restaurants</span>
              </div>
              <div className="pp-actions">
                <a href="https://thetastyfood.in" target="_blank" rel="noopener noreferrer" className="pp-btn pp-btn--yellow">
                  Explore Platform ↗
                </a>
                <button className="pp-btn pp-btn--ghost">View Demo</button>
              </div>
            </div>
            <div className="pp-media">
              <div className="pp-media-glow pp-media-glow--yellow" />
              <img src="/Images/cloudkitchen.jpg" alt="The Tasty Food" />
            </div>
          </div>

          <div className="pp-features-label">What Each Merchant Gets</div>
          <div className="pp-grid reveal-up" ref={grid1}>
            {tastyfoodFeatures.map((f, i) => (
              <FeatureCard key={i} {...f} accent="#FBCE1A" />
            ))}
          </div>
        </div>
      </section>

      {/* ── Product 2 — Wait Please ── */}
      <section className="pp-product pp-product--muted">

        <div className="pp-inner">
          <div className="pp-row pp-row--reverse reveal-up" ref={sec2}>
            <div className="pp-media pp-media--dev">
              <div className="pp-media-glow pp-media-glow--purple" />
              <div className="pp-dev-card">
                <div className="pp-dev-bar">
                  <span /><span /><span />
                </div>
                <div className="pp-dev-body">
                  <div className="pp-dev-badge">
                    <span className="pp-dev-pulse" />
                    Under Development
                  </div>
                  <h3>Wait Please — Live Queue</h3>
                  <p>We&apos;re building something great. The smart queue + pre-order system is coming soon.</p>
                  <div className="pp-dev-progress">
                    <div className="pp-dev-bar-fill" />
                  </div>
                  <div className="pp-dev-pct">65% complete</div>
                  <div className="pp-dev-queue">
                    {[
                      { num: "01", name: "Abhjit P.", status: "seated" },
                      { num: "02", name: "Yogesh N.", status: "waiting" },
                      { num: "03", name: "Parmesh N.", status: "waiting" },
                    ].map((q) => (
                      <div className={`pp-dev-queue-item${q.status === "seated" ? " active" : ""}`} key={q.num}>
                        <span className="q-num">{q.num}</span>
                        <span className="q-name">{q.name}</span>
                        <span className={`q-status ${q.status}`}>{q.status}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="pp-text">
              <span className="pp-tag pp-tag--purple">Queue Commerce</span>
              <h2>Wait Please</h2>
              <p className="pp-tagline">
                Turn the wait into a sale. Customers join the queue digitally, browse the menu, and place orders before they even sit down.
              </p>
              <p className="pp-body">
                An e-commerce-powered waitlist platform. The restaurant collects the customer&apos;s contact, and our platform sends them their queue number
                along with a direct link to the online menu — so they can order ahead and arrive ready.
              </p>
              <p className="pp-body">
                A <strong>smart queue + pre-order system</strong> that drives more sales, reduces walk-offs, and makes every wait productive.
              </p>
              <div className="pp-badges">
                <span className="pp-badge">Restaurants</span>
                <span className="pp-badge">Cafes</span>
                <span className="pp-badge">Diners</span>
              </div>
              <div className="pp-actions">
                <button className="pp-btn pp-btn--outline-dark" disabled style={{ opacity: 0.6, cursor: "not-allowed" }}>
                  Coming Soon
                </button>
              </div>
            </div>
          </div>

          <div className="pp-features-label">How It Works</div>
          <div className="pp-grid reveal-up" ref={grid2}>
            {waitFeatures.map((f, i) => (
              <FeatureCard key={i} {...f} accent="#722ED1" />
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="pp-cta-wrap">
        <div className="pp-cta reveal-up" ref={cta}>
          <div className="pp-cta-glow pp-cta-glow--yellow" />
          <div className="pp-cta-glow pp-cta-glow--purple" />
          <h2>Ready to transform your food business?</h2>
          <p>Join hundreds of restaurants and cloud kitchens who have modernized their operations with our platform.</p>
          <div className="pp-cta-actions">
            <button className="pp-btn pp-btn--white">Talk to Sales</button>
            <button className="pp-btn pp-btn--outline-dark">View Pricing</button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ProductsPage;