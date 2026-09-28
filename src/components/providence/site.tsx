import { Link, useRouterState } from "@tanstack/react-router";
import { ArrowRight, Menu, X, ShoppingBag } from "lucide-react";
import { useEffect, useRef, useState, type MouseEvent, type ReactNode } from "react";
import { motion, useMotionValue, useReducedMotion, useSpring, useTransform } from "motion/react";
import { navItems, footerCategories, imagery, serviceGroups } from "@/lib/providence-data";
import { Button } from "@/components/ui/button";
import { useCart } from "@/lib/cart-context";
import { coursesData } from "@/lib/courses-data";

export function Brand({ compact = false }: { compact?: boolean }) {
  return (
    <Link to="/" className="brand" aria-label="Providence — The AI Society, home">
      <img src={imagery.logo} alt="Providence" width={44} height={44} className="brand-logo" />
      <span className={compact ? "sr-only" : "brand-lockup"}>
        <strong>PROVIDENCE</strong>
        <small>THE AI SOCIETY</small>
      </span>
    </Link>
  );
}

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { totalCount, openCart } = useCart();
  const pathname = useRouterState({ select: s => s.location.pathname });
  useEffect(() => {
    setOpen(false);
    const onScroll = () => setScrolled(window.scrollY > 36);
    onScroll(); window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [pathname]);
  return <header className={`site-header ${scrolled ? "is-scrolled" : ""}`}>
    <div className="header-inner">
      <Brand />
      <nav className="desktop-nav" aria-label="Primary">
        {navItems.map(([label, to]) => <Link key={to} to={to} activeOptions={{ exact: to === "/" }} activeProps={{ className: "active" }}>{label}</Link>)}
      </nav>
      <div className="header-actions">
        <button
          type="button"
          onClick={openCart}
          className="header-cart-btn"
          aria-label={`Shopping cart with ${totalCount} items`}
          title="Open Cart"
        >
          <ShoppingBag size={18} />
          {totalCount > 0 && (
            <span className="header-cart-badge">{totalCount}</span>
          )}
        </button>
        <Button asChild variant="premium" className="desktop-start gold-cta backdrop-blur-none"><Link to="/services">Get a Quote <ArrowRight /></Link></Button>
        <Button variant="iconGhost" size="icon" className="menu-button" aria-label="Open navigation" onClick={() => setOpen(true)}><Menu /></Button>
      </div>
    </div>
    <div className={`mobile-panel ${open ? "open" : ""}`} aria-hidden={!open}>
      <div className="mobile-panel-top">
        <Brand />
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => { setOpen(false); openCart(); }}
            className="header-cart-btn"
            aria-label={`Shopping cart with ${totalCount} items`}
          >
            <ShoppingBag size={18} />
            {totalCount > 0 && (
              <span className="header-cart-badge">{totalCount}</span>
            )}
          </button>
          <Button variant="iconGhost" size="icon" aria-label="Close navigation" onClick={() => setOpen(false)}><X /></Button>
        </div>
      </div>
      <nav aria-label="Mobile navigation">
        {navItems.map(([label, to], i) => <Link key={to} to={to} onClick={() => setOpen(false)}><span>0{i + 1}</span>{label}<ArrowRight /></Link>)}
        <button
          type="button"
          onClick={() => { setOpen(false); openCart(); }}
          className="mobile-cart-link"
        >
          <div className="flex items-center gap-3">
            <ShoppingBag size={18} className="text-signal" />
            <span>Shopping Cart ({totalCount})</span>
          </div>
          <ArrowRight size={16} />
        </button>
      </nav>
    </div>
  </header>;
}

export function Footer() {
  return (
    <footer className="footer">
      <img className="footer-bg" src={imagery.visionLandscape} alt="" aria-hidden="true" loading="lazy" width={1920} height={1080} />
      <div className="footer-inner">
        <div className="footer-mission">
          <div>
            <p className="footer-eyebrow">PROVIDENCE / THE NEXT GENERATION</p>
            <h2>Build skills.<br /><span>Shape what comes next.</span></h2>
            <p className="footer-standfirst">Technology moves forward when more people have the skills to shape it.</p>
          </div>
          <div className="footer-actions">
            <Link to="/courses" className="footer-cta">Explore learning paths</Link>
            <Link to="/about" className="footer-cta">About Providence</Link>
          </div>
        </div>

        <div className="footer-top">
          <div className="footer-brand">
            <Brand />
            <p>An AI Society</p>
            <p className="footer-cats">{footerCategories.join(" • ")}</p>
          </div>
          <nav className="footer-links" aria-label="Footer navigation">
            {navItems.map(([label, to]) => (
              <Link key={to} to={to} className="footer-nav-link">
                {label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="footer-directory">
          <section className="footer-directory-section" aria-labelledby="footer-services-title">
            <div className="footer-directory-heading">
              <p className="footer-eyebrow">WHAT WE BUILD</p>
              <h3 id="footer-services-title">Services</h3>
            </div>
            <div className="footer-service-groups">
              {serviceGroups.map((group) => (
                <div className="footer-list-group" key={group.title}>
                  <h4>{group.title}</h4>
                  <ul>
                    {group.items.map((service) => (
                      <li key={service}>
                        <Link to="/services" className="footer-list-link">{service}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          <section className="footer-directory-section footer-course-section" aria-labelledby="footer-courses-title">
            <div className="footer-directory-heading">
              <p className="footer-eyebrow">LEARN WITH PROVIDENCE</p>
              <h3 id="footer-courses-title">Courses</h3>
            </div>
            <ul className="footer-course-list">
              {coursesData.map((course) => (
                <li key={course.id}>
                  <Link to="/courses" className="footer-list-link">{course.title}</Link>
                </li>
              ))}
            </ul>
          </section>
        </div>

        <div className="footer-bottom">
          <span>© Providence. All rights reserved.</span>
          <span>Built for a more capable future.</span>
        </div>
      </div>
    </footer>
  );
}

export function PageTransition({ children }: { children: ReactNode }) {
  const pathname = useRouterState({ select: s => s.location.pathname });
  return <motion.main key={pathname} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .6, ease: [0.22, 1, 0.36, 1] }}>{children}</motion.main>;
}

export function PageHero({ label, title, description, image }: { label: string; title: string; description: string; image: string }) {
  return <section className="page-hero"><motion.img src={image} alt="" width={1920} height={1080} initial={{ scale: 1.06 }} animate={{ scale: 1 }} transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }} /><div className="image-shade" /><motion.div className="page-hero-content" initial={{ opacity: 0, y: 36 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .9, delay: .15, ease: [0.22, 1, 0.36, 1] }}><p className="eyebrow">{label}</p><h1>{title}</h1><p className="lede">{description}</p></motion.div><span className="chapter-index">01 / PROVIDENCE</span></section>;
}

export function SectionIntro({ label, title, copy, light = false }: { label: string; title: string; copy: string; light?: boolean }) {
  return <motion.div className={`section-intro ${light ? "light" : ""}`} initial={{ opacity: 0, y: 42 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .25 }} transition={{ duration: .75, ease: [0.22, 1, 0.36, 1] }}><p className="eyebrow">{label}</p><h2>{title}</h2><p>{copy}</p></motion.div>;
}

export function TiltCard({
  title,
  description,
  image,
  meta,
  to = "/services",
  actionLabel = "Explore",
  compact = false,
}: {
  title: string;
  description: string;
  image: string;
  meta?: string;
  to?: "/services" | "/courses" | "/3d" | "/research" | "/vision" | "/about" | "/donate";
  actionLabel?: string;
  compact?: boolean;
}) {
  const cardRef = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();
  const pointerX = useMotionValue(.5);
  const pointerY = useMotionValue(.5);
  const rotateX = useSpring(useTransform(pointerY, [0, 1], [7, -7]), { stiffness: 180, damping: 22 });
  const rotateY = useSpring(useTransform(pointerX, [0, 1], [-7, 7]), { stiffness: 180, damping: 22 });
  const onMove = (event: MouseEvent<HTMLElement>) => {
    if (reduceMotion) return;
    const bounds = cardRef.current?.getBoundingClientRect();
    if (!bounds) return;
    pointerX.set((event.clientX - bounds.left) / bounds.width);
    pointerY.set((event.clientY - bounds.top) / bounds.height);
  };
  const reset = () => { pointerX.set(.5); pointerY.set(.5); };
  return (
    <motion.article
      ref={cardRef}
      className={`image-card ${compact ? "compact-card" : ""}`}
      onMouseMove={onMove}
      onMouseLeave={reset}
      style={reduceMotion ? {} : { rotateX, rotateY }}
      initial={{ opacity: 0, y: 42 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: .15 }}
      whileHover={reduceMotion ? {} : { y: -12, scale: 1.012 }}
      transition={{ duration: .55, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="card-media">
        <img src={image} alt="" loading="lazy" width={1536} height={1024} />
        <span className="card-scan" />
      </div>
      <div className="card-copy">
        {meta && <p className="card-meta">{meta}</p>}
        <h3>{title}</h3>
        <p>{description}</p>
        <Link to={to} aria-label={`${actionLabel} ${title}`}>
          {actionLabel} <ArrowRight />
        </Link>
      </div>
    </motion.article>
  );
}

export function Reveal({ children, className = "", delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  return <motion.div className={className} initial={{ opacity: 0, y: 44 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .18 }} transition={{ duration: .8, delay, ease: [0.22, 1, 0.36, 1] }}>{children}</motion.div>;
}

export function DonateBand() {
  return <section className="donate-band">
    <motion.div className="donate-shell" initial={{ opacity: 0, y: 48, scale: .985 }} whileInView={{ opacity: 1, y: 0, scale: 1 }} viewport={{ once: true, amount: .2 }} transition={{ duration: .9, ease: [0.22, 1, 0.36, 1] }}>
        <img className="donate-bg" src={imagery.aiEngineering} alt="" aria-hidden="true" loading="lazy" width={1920} height={1080} />
      <div className="donate-grid" aria-hidden="true" />
      <div className="donate-content">
        <p className="donate-eyebrow"><span aria-hidden="true" />OPEN RESEARCH. SHARED FUTURE.</p>
        <h2>HELP US BUILD<br /><em>WHAT COMES NEXT.</em></h2>
        <Button asChild variant="premium" size="xl"><Link to="/donate">Support Providence <ArrowRight /></Link></Button>
      </div>
      <span className="donate-mark" aria-hidden="true">P</span>
    </motion.div>
  </section>;
}
