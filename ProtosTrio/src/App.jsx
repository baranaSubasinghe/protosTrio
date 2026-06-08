import { useState, useEffect, useRef, useCallback } from 'react';
import {
  Menu, X, ArrowRight, Code2, Palette, ShoppingCart, Search,
  Sparkles, Github, Linkedin, Twitter, Mail, Send, Zap, Globe,
  Layers, ChevronRight, Terminal, Star, ExternalLink,
} from 'lucide-react';

/* ════════════════════════════════════════════════════════════════
   ProtosTrio — Redesigned Portfolio  |  Syne + DM Sans
   Theme: Deep forest-black + emerald bioluminescence
   ════════════════════════════════════════════════════════════════ */

const NAV_LINKS = [
  { label: 'Services', href: '#services' },
  { label: 'Work',     href: '#work' },
  { label: 'Team',     href: '#team' },
  { label: 'Contact',  href: '#contact' },
];

const SERVICES = [
  {
    icon: Code2,
    title: 'Custom Web Apps',
    description: 'Scalable, performant applications tailored to your business logic—from MVPs to enterprise platforms.',
    num: '01',
  },
  {
    icon: Palette,
    title: 'UI / UX Design',
    description: 'Pixel-perfect interfaces with intuitive flows that convert visitors into loyal customers.',
    num: '02',
  },
  {
    icon: ShoppingCart,
    title: 'E-commerce',
    description: 'High-converting online stores with seamless checkout, inventory sync, and payment integrations.',
    num: '03',
  },
  {
    icon: Search,
    title: 'SEO & Optimization',
    description: 'Lightning-fast load times, Core Web Vitals excellence, and search visibility that drives growth.',
    num: '04',
  },
];

const PROJECTS = [
  {
    title: 'NexusFlow SaaS',
    category: 'SaaS Dashboard',
    description: 'Real-time analytics platform with role-based access and custom reporting for enterprise teams.',
    tags: ['React', 'Node.js', 'PostgreSQL'],
    hue: '#1F6F5F',
    accent: '#3BBFA0',
    
  },
  {
    title: 'Lumière Boutique',
    category: 'Luxury E-commerce',
    description: 'Premium shopping experience with AR try-on and curated collections for discerning buyers.',
    tags: ['Next.js', 'Stripe', 'Sanity CMS'],
    hue: '#1A5C4E',
    accent: '#4BDFB8',
    link:'https://luxury-e-commerce-steel.vercel.app',
  },
  {
    title: 'Vertex Capital',
    category: 'Corporate Landing',
    description: 'Bold brand storytelling for a fintech firm with investor portal and real-time market feeds.',
    tags: ['TypeScript', 'Tailwind', 'Framer Motion'],
    hue: '#0F4438',
    accent: '#2FA084',
  },
];

const TEAM = [
  {
    name: 'Barana',
    role: 'Lead Developer & Co-Founder',
    bio: 'Full-stack architect turning complex requirements into elegant, maintainable code.',
    initials: 'BS',
    links: {
      github:   'https://github.com/baranaSubasinghe',
      linkedin: 'https://www.linkedin.com/in/barana-subasinghe-1aa909384',
      twitter:  'https://twitter.com/your-barana-profile',
    },
  },
  {
    name: 'Chamudi',
    role: 'UI/UX Designer & Co-Founder',
    bio: 'Crafting interfaces that feel intuitive, look stunning, and drive measurable results.',
    initials: 'CH',
    links: {
      github:   'https://github.com/chamudiNethmini',
      linkedin: 'https://www.linkedin.com/in/chamudi-wickrama-3b94373a2/',
      twitter:  'https://twitter.com/your-chamudi-profile',
    },
  },
  {
    name: 'Hasini',
    role: 'Product Strategist & Co-Founder',
    bio: 'Bridging business goals and technical execution with clarity and client-first focus.',
    initials: 'HH',
    links: {
      github:   'https://github.com/HasiniHeshara',
      linkedin: 'https://www.linkedin.com/in/hasini-heshara-90831a396/',
      twitter:  'https://twitter.com/your-hasini-profile',
    },
  },
];

const PROJECT_TYPES = [
  'New Website', 'Web Application', 'E-commerce Store', 'Redesign / Refresh', 'Other',
];

/* ─── Noise overlay SVG (grain texture) ─── */
function Noise() {
  return (
    <svg className="fixed inset-0 w-full h-full pointer-events-none -z-10 opacity-[0.028]" xmlns="http://www.w3.org/2000/svg">
      <filter id="noise">
        <feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="4" stitchTiles="stitch" />
        <feColorMatrix type="saturate" values="0" />
      </filter>
      <rect width="100%" height="100%" filter="url(#noise)" />
    </svg>
  );
}

/* ─── Hero 3-D card ─── */
function HeroVisual({ mouseX, mouseY }) {
  const rotX = (mouseY - 0.5) * 14;
  const rotY = (mouseX - 0.5) * -14;

  const lines = [
    { tokens: [{ t: 'const ', c: '#4BDFB8' }, { t: 'agency', c: '#A8FFE4' }, { t: ' = {', c: '#E0FFF5' }] },
    { indent: true, tokens: [{ t: 'founders', c: '#6ee7b7' }, { t: ': ', c: '#64748b' }, { t: '3', c: '#f59e0b' }, { t: ',', c: '#64748b' }] },
    { indent: true, tokens: [{ t: 'stack', c: '#6ee7b7' }, { t: ': [', c: '#64748b' }, { t: "'React'", c: '#4BDFB8' }, { t: ', ', c: '#64748b' }, { t: "'Node'", c: '#4BDFB8' }, { t: '],', c: '#64748b' }] },
    { indent: true, tokens: [{ t: 'mission', c: '#6ee7b7' }, { t: ': ', c: '#64748b' }, { t: "'ideas → code'", c: '#4BDFB8' }] },
    { tokens: [{ t: '};', c: '#E0FFF5' }] },
  ];

  return (
    <div className="relative w-full max-w-[480px] mx-auto aspect-square" style={{ perspective: '900px' }}>
      {/* Morphing glow blob behind card */}
      <div
        className="absolute inset-[10%] bg-brand-light/20 blur-3xl animate-morph"
        style={{ animation: 'morph 10s ease-in-out infinite' }}
      />

      <div
        className="relative w-full h-full transition-transform duration-300 ease-out"
        style={{ transform: `rotateX(${rotX}deg) rotateY(${rotY}deg)` }}
      >
        {/* Grid bg */}
        <div className="absolute inset-0 -z-10 opacity-20 rounded-3xl overflow-hidden"
          style={{
            backgroundImage: `linear-gradient(rgba(47,160,132,0.25) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(47,160,132,0.25) 1px, transparent 1px)`,
            backgroundSize: '36px 36px',
          }}
        />

        {/* Ambient orbs */}
        <div className="absolute top-1/4 left-1/5 w-28 h-28 bg-brand-glow/40 rounded-full blur-3xl animate-pulse-glow" />
        <div className="absolute bottom-1/4 right-1/5 w-36 h-36 bg-brand-mid/30 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '1.4s' }} />

        {/* Orbiting dots */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="absolute w-3 h-3 rounded-full bg-brand-glow shadow-[0_0_12px_4px_rgba(75,223,184,0.7)]"
            style={{ animation: 'orbit 22s linear infinite' }} />
          <div className="absolute w-2 h-2 rounded-full bg-brand-bright/70"
            style={{ animation: 'orbitRev 18s linear infinite' }} />
        </div>

        {/* Main glass card */}
        <div className="absolute inset-6 rounded-2xl overflow-hidden animate-float"
          style={{
            background: 'linear-gradient(135deg, rgba(10,28,23,0.92) 0%, rgba(5,15,12,0.96) 100%)',
            backdropFilter: 'blur(24px)',
            border: '1px solid rgba(75,223,184,0.15)',
            boxShadow: '0 0 0 1px rgba(75,223,184,0.06), 0 40px 80px -20px rgba(0,0,0,0.8), 0 0 60px -10px rgba(47,160,132,0.25)',
          }}
        >
          {/* Scan line effect */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-glow/40 to-transparent animate-scan" />
          </div>

          {/* Window chrome */}
          <div className="flex items-center justify-between px-5 py-3.5 border-b border-white/[0.05]">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-red-500/50" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
              <div className="w-3 h-3 rounded-full bg-emerald-500/50" />
            </div>
            <div className="flex items-center gap-2 px-3 py-1 rounded-md bg-white/[0.04] border border-white/[0.06]">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-glow animate-pulse" />
              <span className="text-[11px] font-mono tracking-wide text-slate-400">agency.config.ts</span>
            </div>
            <Terminal className="w-3.5 h-3.5 text-brand-light/40" />
          </div>

          {/* Code */}
          <div className="px-5 pt-5 pb-3 font-mono text-[13px] leading-7 space-y-0.5">
            {lines.map((line, i) => (
              <div key={i} className={line.indent ? 'pl-6' : ''}>
                {line.tokens.map((tok, j) => (
                  <span key={j} style={{ color: tok.c }}>{tok.t}</span>
                ))}
              </div>
            ))}
          </div>

          {/* Progress bar */}
          <div className="px-5 pb-5 pt-3">
            <div className="flex justify-between text-[10px] font-mono text-slate-500 uppercase tracking-widest mb-2">
              <span>build_output</span>
              <span className="text-brand-glow/80 animate-pulse">✓ optimized</span>
            </div>
            <div className="h-[3px] w-full rounded-full bg-surface-800 overflow-hidden">
              <div className="h-full w-[96%] rounded-full bg-gradient-to-r from-brand-dark via-brand-bright to-brand-glow animate-shimmer"
                style={{ backgroundSize: '200% 100%' }} />
            </div>
          </div>

          {/* Stats row */}
          <div className="mx-5 mb-5 grid grid-cols-3 gap-2">
            {[['99', 'Lighthouse'], ['< 1s', 'Load Time'], ['3', 'Founders']].map(([val, label]) => (
              <div key={label} className="rounded-lg bg-brand-light/[0.07] border border-brand-light/10 py-2 text-center">
                <div className="text-base font-bold font-display text-brand-glow">{val}</div>
                <div className="text-[9px] text-slate-500 uppercase tracking-widest mt-0.5">{label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Floating badges */}
        <div className="absolute -top-3 -right-3 px-3 py-1.5 rounded-xl text-xs font-semibold flex items-center gap-1.5"
          style={{
            background: 'rgba(10,28,23,0.9)',
            border: '1px solid rgba(75,223,184,0.3)',
            boxShadow: '0 0 20px rgba(75,223,184,0.15)',
          }}
        >
          <Zap className="w-3 h-3 text-brand-glow" />
          <span className="text-brand-faint">99 Lighthouse</span>
        </div>
        <div className="absolute -bottom-3 -left-3 px-3 py-1.5 rounded-xl text-xs font-semibold flex items-center gap-1.5"
          style={{
            background: 'rgba(10,28,23,0.9)',
            border: '1px solid rgba(47,160,132,0.3)',
            boxShadow: '0 0 20px rgba(47,160,132,0.12)',
          }}
        >
          <Globe className="w-3 h-3 text-brand-light" />
          <span className="text-brand-faint">Global Ready</span>
        </div>
      </div>
    </div>
  );
}

/* ─── Section label ─── */
function SectionLabel({ children }) {
  return (
    <div className="inline-flex items-center gap-2 mb-4">
      <div className="w-6 h-px bg-brand-bright" />
      <span className="text-xs font-mono uppercase tracking-[0.22em] text-brand-bright">{children}</span>
      <div className="w-6 h-px bg-brand-bright" />
    </div>
  );
}

/* ─── Main App ─── */
export default function App() {
  const [menuOpen, setMenuOpen]   = useState(false);
  const [scrolled, setScrolled]   = useState(false);
  const [mouse, setMouse]         = useState({ x: 0.5, y: 0.5 });
  const [form, setForm]           = useState({ name: '', email: '', projectType: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [logoError, setLogoError] = useState(false);
  const heroRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const handleHeroMouse = useCallback((e) => {
    const el = heroRef.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    setMouse({ x: (e.clientX - r.left) / r.width, y: (e.clientY - r.top) / r.height });
  }, []);

  const scrollTo = (href) => {
    setMenuOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      const res = await fetch('https://formspree.io/f/mzdqbkvj', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setSubmitted(true);
        setForm({ name: '', email: '', projectType: '', message: '' });
        setTimeout(() => setSubmitted(false), 5000);
      } else {
        alert('Something went wrong. Please try again.');
      }
    } catch {
      alert('Network error. Check your connection and retry.');
    } finally {
      setSubmitting(false);
    }
  };

  /* shared input style — text-slate-200 so typed characters are clearly visible on dark bg */
  const inputCls = `w-full px-4 py-3 rounded-xl text-sm font-sans text-slate-200 placeholder-slate-600
    bg-surface-800/80 border border-brand-light/[0.15] focus:outline-none focus:border-brand-glow/50
    focus:ring-2 focus:ring-brand-glow/10 transition-all duration-300`;

  return (
    <div className="min-h-screen overflow-x-hidden font-sans text-brand-muted">
      <Noise />

      {/* ── Global background ── */}
      <div className="fixed inset-0 -z-20 pointer-events-none">
        {/* base */}
        <div style={{ background: 'linear-gradient(160deg, #010806 0%, #050F0C 40%, #020806 100%)' }} className="absolute inset-0" />
        {/* top-left bloom */}
        <div className="absolute -top-40 -left-40 w-[700px] h-[700px] rounded-full opacity-20 blur-[120px]"
          style={{ background: 'radial-gradient(circle, #2FA084 0%, transparent 70%)' }} />
        {/* bottom-right bloom */}
        <div className="absolute -bottom-32 -right-32 w-[600px] h-[600px] rounded-full opacity-15 blur-[100px]"
          style={{ background: 'radial-gradient(circle, #1F6F5F 0%, transparent 70%)' }} />
        {/* center soft */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full opacity-10 blur-[80px]"
          style={{ background: 'radial-gradient(circle, #4BDFB8 0%, transparent 70%)' }} />
      </div>

      {/* ══════════════════════ NAV ══════════════════════ */}
      <header className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${scrolled ? 'py-2' : 'py-4'}`}>
        <nav className={`mx-auto max-w-6xl px-4 sm:px-6 transition-all duration-500 ${
          scrolled
            ? 'rounded-2xl shadow-2xl shadow-black/40'
            : 'bg-transparent'
        }`}
          style={scrolled ? {
            background: 'rgba(5,15,12,0.85)',
            backdropFilter: 'blur(20px)',
            border: '1px solid rgba(75,223,184,0.1)',
          } : {}}
        >
          <div className="flex items-center justify-between h-14 px-2 sm:px-4">
            {/* Logo */}
            <a href="#" className="flex items-center gap-2.5 group"
              onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
            >
              <div className="relative w-9 h-9 rounded-xl overflow-hidden flex items-center justify-center shadow-lg"
                style={{
                  background: 'linear-gradient(135deg, #1A5C4E, #4BDFB8)',
                  boxShadow: '0 0 20px rgba(75,223,184,0.35)',
                }}
              >
                {!logoError ? (
                  <img src="/logo.jpeg" alt="ProtosTrio" className="w-full h-full object-cover"
                    onError={() => setLogoError(true)} />
                ) : (
                  <Layers className="w-5 h-5 text-white" />
                )}
              </div>
              <span className="font-display font-bold text-lg tracking-tight text-brand-muted">
                Protos<span style={{ color: '#4BDFB8' }}>Trio</span>
              </span>
            </a>

            {/* Desktop nav */}
            <ul className="hidden md:flex items-center gap-1">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <button type="button" onClick={() => scrollTo(link.href)}
                    className="px-4 py-2 text-sm text-slate-400 hover:text-brand-faint rounded-lg hover:bg-brand-light/10 transition-all duration-300"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
              <li>
                <button type="button" onClick={() => scrollTo('#contact')}
                  className="ml-3 px-5 py-2.5 text-sm font-semibold rounded-xl transition-all duration-300 hover:scale-[1.03] active:scale-[0.97]"
                  style={{
                    background: 'linear-gradient(135deg, #1F6F5F, #3BBFA0)',
                    boxShadow: '0 0 20px rgba(47,160,132,0.3)',
                    color: '#E0FFF5',
                  }}
                >
                  Get in Touch
                </button>
              </li>
            </ul>

            {/* Mobile burger */}
            <button type="button"
              className="md:hidden p-2 rounded-lg text-brand-muted transition-colors"
              style={{ background: 'rgba(75,223,184,0.06)', border: '1px solid rgba(75,223,184,0.12)' }}
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </nav>

        {/* Mobile drawer */}
        <div className={`md:hidden fixed inset-0 top-[72px] z-40 transition-all duration-400 ${
          menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}>
          <div className="absolute inset-0 bg-surface-950/90 backdrop-blur-2xl" onClick={() => setMenuOpen(false)} />
          <ul className="relative mx-4 mt-4 rounded-2xl p-4 space-y-1"
            style={{ background: 'rgba(10,28,23,0.95)', border: '1px solid rgba(75,223,184,0.12)' }}
          >
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <button type="button" onClick={() => scrollTo(link.href)}
                  className="w-full text-left px-4 py-3 text-base rounded-xl hover:bg-brand-light/10 transition-colors text-slate-300"
                >
                  {link.label}
                </button>
              </li>
            ))}
            <li className="pt-2">
              <button type="button" onClick={() => scrollTo('#contact')}
                className="w-full py-3 rounded-xl font-semibold text-brand-muted"
                style={{ background: 'linear-gradient(135deg, #1F6F5F, #3BBFA0)' }}
              >
                Get in Touch
              </button>
            </li>
          </ul>
        </div>
      </header>

      <main>
        {/* ══════════════════════ HERO ══════════════════════ */}
        <section
          ref={heroRef}
          onMouseMove={handleHeroMouse}
          className="relative min-h-screen flex items-center pt-32 pb-24 px-4 sm:px-6"
        >
          {/* Decorative left rule */}
          <div className="hidden lg:block absolute left-6 top-1/2 -translate-y-1/2 w-px h-40 bg-gradient-to-b from-transparent via-brand-bright/40 to-transparent" />

          <div className="max-w-6xl mx-auto w-full grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
            {/* Left copy */}
            <div className="text-center lg:text-left order-2 lg:order-1 animate-fade-up">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-7 text-sm text-brand-faint"
                style={{
                  background: 'rgba(75,223,184,0.06)',
                  border: '1px solid rgba(75,223,184,0.2)',
                }}
              >
                <Star className="w-3.5 h-3.5 text-brand-glow" fill="currentColor" />
                <span>3 founders. One mission. Infinite possibilities.</span>
              </div>

              <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.05] mb-6">
                We turn{' '}
                <span className="relative inline-block">
                  <span className="relative z-10 bg-clip-text text-transparent bg-gradient-to-r from-brand-bright via-brand-glow to-brand-bright animate-gradient-x"
                    style={{ backgroundSize: '300% auto' }}
                  >
                    ideas
                  </span>
                  {/* underline glow */}
                  <span className="absolute -bottom-1 left-0 right-0 h-[3px] rounded-full bg-gradient-to-r from-brand-mid to-brand-glow opacity-60" />
                </span>
                <br />
                into code.
              </h1>

              <p className="text-base sm:text-lg text-slate-400 max-w-xl mx-auto lg:mx-0 mb-9 leading-relaxed">
                ProtosTrio builds modern websites, custom web apps, and digital experiences
                for startups and local businesses — crafted with precision, shipped with speed.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button type="button" onClick={() => scrollTo('#contact')}
                  className="group inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl font-semibold text-brand-muted transition-all duration-300 hover:scale-[1.03] active:scale-[0.97]"
                  style={{
                    background: 'linear-gradient(135deg, #1F6F5F 0%, #3BBFA0 100%)',
                    boxShadow: '0 0 30px rgba(47,160,132,0.35), 0 4px 20px rgba(0,0,0,0.4)',
                  }}
                >
                  Start a Project
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>

                <button type="button" onClick={() => scrollTo('#work')}
                  className="group inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl font-semibold text-slate-300 transition-all duration-300 hover:text-brand-faint"
                  style={{
                    background: 'rgba(75,223,184,0.04)',
                    border: '1px solid rgba(75,223,184,0.18)',
                  }}
                >
                  View Our Work
                  <ChevronRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
                </button>
              </div>

              {/* Trust row */}
              <div className="flex items-center gap-6 mt-10 justify-center lg:justify-start text-xs text-slate-500">
                {[['10+', 'Projects shipped'], ['< 24h', 'Response time'], ['100%', 'Client satisfaction']].map(([v, l]) => (
                  <div key={l} className="text-center">
                    <div className="font-display font-bold text-base text-brand-bright mb-0.5">{v}</div>
                    <div>{l}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right visual */}
            <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
              <HeroVisual mouseX={mouse.x} mouseY={mouse.y} />
            </div>
          </div>
        </section>

        {/* ══════════════════════ SERVICES ══════════════════════ */}
        <section id="services" className="py-28 px-4 sm:px-6 scroll-mt-24">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <SectionLabel>What we do</SectionLabel>
              <h2 className="font-display text-4xl sm:text-5xl font-bold mb-4">
                Services built for{' '}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-brand-bright to-brand-glow">growth</span>
              </h2>
              <p className="text-slate-400 max-w-xl mx-auto">
                End-to-end digital solutions that scale with your ambition — from concept to launch and beyond.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {SERVICES.map((svc) => (
                <article key={svc.title}
                  className="group relative rounded-2xl p-6 overflow-hidden cursor-default transition-all duration-500 hover:-translate-y-2"
                  style={{
                    background: 'rgba(10,28,23,0.7)',
                    border: '1px solid rgba(75,223,184,0.08)',
                    boxShadow: '0 4px 30px rgba(0,0,0,0.4)',
                  }}
                >
                  {/* hover glow overlay */}
                  <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    style={{ background: 'radial-gradient(circle at 50% 0%, rgba(75,223,184,0.07) 0%, transparent 70%)' }} />

                  {/* Number */}
                  <div className="font-mono text-[11px] tracking-widest text-brand-mid mb-4">{svc.num}</div>

                  {/* Icon */}
                  <div className="inline-flex p-3 rounded-xl mb-5"
                    style={{
                      background: 'linear-gradient(135deg, rgba(31,111,95,0.6), rgba(75,223,184,0.2))',
                      border: '1px solid rgba(75,223,184,0.15)',
                    }}
                  >
                    <svc.icon className="w-5 h-5 text-brand-glow" />
                  </div>

                  <h3 className="font-display text-lg font-bold mb-2 text-brand-muted group-hover:text-white transition-colors">
                    {svc.title}
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{svc.description}</p>

                  <div className="mt-5 flex items-center gap-1 text-xs font-semibold text-brand-bright opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-[-4px] group-hover:translate-x-0">
                    Learn more <ChevronRight className="w-3.5 h-3.5" />
                  </div>

                  {/* bottom glow line */}
                  <div className="absolute bottom-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-brand-bright/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════ WORK ══════════════════════ */}
        <section id="work" className="py-28 px-4 sm:px-6 scroll-mt-24">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-8 mb-16">
              <div>
                <SectionLabel>Portfolio</SectionLabel>
                <h2 className="font-display text-4xl sm:text-5xl font-bold">
                  Our{' '}
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-brand-bright to-brand-glow">work</span>
                </h2>
              </div>
              <p className="text-slate-400 max-w-sm text-sm leading-relaxed">
                Selected projects showcasing our range — from SaaS dashboards to luxury retail experiences.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-7">
              {PROJECTS.map((proj, i) => (
               <a

  key={proj.title}

  href={proj.link}

  target="_blank"

  rel="noopener noreferrer"

  className="group relative rounded-2xl overflow-hidden transition-all duration-500 hover:-translate-y-2 cursor-pointer block"

>
                  {/* Image area */}
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-105"
                      style={{ background: `linear-gradient(135deg, ${proj.hue} 0%, #020806 100%)` }} />

                    {/* Decorative inner frame */}
                    <div className="absolute inset-4 rounded-xl border opacity-20 group-hover:opacity-40 transition-opacity duration-500"
                      style={{ borderColor: proj.accent }} />
                    <div className="absolute inset-8 rounded-lg border opacity-10 group-hover:opacity-25 transition-opacity duration-700"
                      style={{ borderColor: proj.accent }} />

                    {/* Central icon */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-14 h-14 rounded-2xl flex items-center justify-center opacity-30 group-hover:opacity-60 transition-all duration-500 group-hover:scale-110"
                        style={{ background: `${proj.accent}20`, border: `1px solid ${proj.accent}40` }}
                      >
                        <Code2 className="w-7 h-7" style={{ color: proj.accent }} />
                      </div>
                    </div>

                    {/* Category badge */}
                    <span className="absolute top-4 left-4 px-2.5 py-1 rounded-md text-[11px] font-mono font-semibold uppercase tracking-wider"
                      style={{
                        background: 'rgba(5,15,12,0.85)',
                        border: `1px solid ${proj.accent}50`,
                        color: proj.accent,
                      }}
                    >
                      {proj.category}
                    </span>

                    {/* Gradient fade */}
                    <div className="absolute inset-0 bg-gradient-to-t from-surface-950 via-transparent to-transparent opacity-80" />

                    {/* Hover link icon */}
                    <div className="absolute top-4 right-4 p-2 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0"
                      style={{ background: 'rgba(5,15,12,0.9)', border: `1px solid ${proj.accent}40` }}
                    >
                      <ExternalLink className="w-4 h-4" style={{ color: proj.accent }} />
                    </div>
                  </div>

                  {/* Info */}
                  <div className="p-6">
                    <h3 className="font-display text-xl font-bold mb-2 text-brand-muted group-hover:text-white transition-colors">
                      {proj.title}
                    </h3>
                    <p className="text-slate-500 text-sm leading-relaxed mb-5">{proj.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {proj.tags.map((tag) => (
                        <span key={tag}
                          className="px-2.5 py-1 text-[11px] font-mono font-medium rounded-md"
                          style={{
                            background: `${proj.accent}10`,
                            border: `1px solid ${proj.accent}30`,
                            color: proj.accent,
                          }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════ TEAM ══════════════════════ */}
        <section id="team" className="py-28 px-4 sm:px-6 scroll-mt-24">
          {/* Separator line */}
          <div className="max-w-6xl mx-auto mb-20">
            <div className="h-px bg-gradient-to-r from-transparent via-brand-bright/30 to-transparent" />
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <SectionLabel>The founders</SectionLabel>
              <h2 className="font-display text-4xl sm:text-5xl font-bold mb-4">
                Meet the{' '}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-brand-bright to-brand-glow">team</span>
              </h2>
              <p className="text-slate-400 max-w-xl mx-auto">
                Three passionate builders united by a love for clean code, beautiful design, and client success.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-7">
              {TEAM.map((member, i) => (
                <article key={member.name}
                  className="group relative rounded-2xl p-8 text-center overflow-hidden transition-all duration-500 hover:-translate-y-2"
                  style={{
                    background: 'rgba(10,28,23,0.7)',
                    border: '1px solid rgba(75,223,184,0.08)',
                    boxShadow: '0 4px 40px rgba(0,0,0,0.4)',
                  }}
                >
                  {/* top glow on hover */}
                  <div className="absolute top-0 left-1/4 right-1/4 h-px bg-gradient-to-r from-transparent via-brand-glow/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Avatar */}
                  <div className="relative mx-auto w-24 h-24 mb-6 group-hover:scale-105 transition-transform duration-300">
                    <div className="w-full h-full rounded-2xl flex items-center justify-center text-3xl font-display font-bold text-brand-muted"
                      style={{
                        background: `linear-gradient(135deg, #1A5C4E, #4BDFB8)`,
                        boxShadow: '0 0 30px rgba(75,223,184,0.2)',
                      }}
                    >
                      {member.initials}
                    </div>
                    {/* online dot */}
                    <span className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-brand-glow border-2 border-surface-900" />
                  </div>

                  <h3 className="font-display text-xl font-bold mb-1 text-brand-muted">{member.name}</h3>
                  <p className="text-xs font-mono text-brand-bright/80 mb-4 tracking-wide">{member.role}</p>
                  <p className="text-slate-500 text-sm leading-relaxed mb-6">{member.bio}</p>

                  {/* Social links */}
                  <div className="flex justify-center gap-2.5">
                    {[
                      { Icon: Github,   url: member.links.github },
                      { Icon: Linkedin, url: member.links.linkedin },
                      { Icon: Twitter,  url: member.links.twitter },
                    ].map(({ Icon, url }, idx) => (
                      <a key={idx} href={url} target="_blank" rel="noopener noreferrer"
                        className="p-2.5 rounded-xl text-slate-500 hover:text-surface-950 transition-all duration-300"
                        style={{
                          background: 'rgba(75,223,184,0.06)',
                          border: '1px solid rgba(75,223,184,0.12)',
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.background = '#4BDFB8';
                          e.currentTarget.style.border = '1px solid #4BDFB8';
                          e.currentTarget.style.boxShadow = '0 0 15px rgba(75,223,184,0.4)';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.background = 'rgba(75,223,184,0.06)';
                          e.currentTarget.style.border = '1px solid rgba(75,223,184,0.12)';
                          e.currentTarget.style.boxShadow = 'none';
                        }}
                      >
                        <Icon className="w-4 h-4" />
                      </a>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════ CONTACT ══════════════════════ */}
        <section id="contact" className="py-28 px-4 sm:px-6 scroll-mt-24">
          <div className="max-w-6xl mx-auto">
            {/* Top separator */}
            <div className="h-px mb-20 bg-gradient-to-r from-transparent via-brand-bright/30 to-transparent" />

            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
              {/* Left */}
              <div>
                <SectionLabel>Contact</SectionLabel>
                <h2 className="font-display text-4xl sm:text-5xl font-bold mb-5">
                  Let's build something{' '}
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-brand-bright to-brand-glow">great</span>
                </h2>
                <p className="text-slate-400 mb-8 leading-relaxed">
                  Tell us about your project. We typically respond within 24 hours and love
                  hearing from startups and local businesses ready to level up their digital presence.
                </p>

                <a href="mailto:protostrio26@gmail.com"
                  className="group inline-flex items-center gap-3 text-slate-300 hover:text-brand-faint transition-colors"
                >
                  <div className="p-3 rounded-xl transition-all duration-300"
                    style={{
                      background: 'rgba(75,223,184,0.08)',
                      border: '1px solid rgba(75,223,184,0.2)',
                    }}
                  >
                    <Mail className="w-5 h-5 text-brand-glow" />
                  </div>
                  <span className="text-sm">protostrio26@gmail.com</span>
                </a>

                {/* Decorative element */}
                <div className="mt-12 rounded-2xl p-6"
                  style={{
                    background: 'rgba(10,28,23,0.5)',
                    border: '1px solid rgba(75,223,184,0.08)',
                  }}
                >
                  <div className="font-mono text-xs text-slate-500 mb-3 uppercase tracking-widest">Why work with us?</div>
                  {[
                    'Clean, maintainable code shipped fast',
                    'Design that converts visitors to customers',
                    'SEO-first, performance-obsessed builds',
                    '24h response, transparent communication',
                  ].map((pt) => (
                    <div key={pt} className="flex items-start gap-2.5 mb-2.5">
                      <div className="w-1.5 h-1.5 rounded-full bg-brand-glow mt-1.5 shrink-0" />
                      <p className="text-sm text-slate-400">{pt}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Form */}
              <div className="rounded-2xl p-7 sm:p-9"
                style={{
                  background: 'rgba(10,28,23,0.75)',
                  border: '1px solid rgba(75,223,184,0.12)',
                  boxShadow: '0 0 60px rgba(47,160,132,0.1), 0 20px 60px rgba(0,0,0,0.5)',
                  backdropFilter: 'blur(20px)',
                }}
              >
                {submitted ? (
                  <div className="py-16 text-center">
                    <div className="w-16 h-16 mx-auto mb-5 rounded-2xl flex items-center justify-center"
                      style={{ background: 'linear-gradient(135deg, #1F6F5F, #3BBFA0)', boxShadow: '0 0 30px rgba(47,160,132,0.4)' }}
                    >
                      <Send className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="font-display text-xl font-bold mb-2 text-brand-muted">Message sent!</h3>
                    <p className="text-slate-400 text-sm">We'll get back to you within 24 hours.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                      <label htmlFor="name" className="block text-xs font-mono uppercase tracking-widest text-slate-500 mb-2">Name</label>
                      <input id="name" name="name" type="text" required
                        value={form.name} disabled={submitting}
                        onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                        className={inputCls} placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-xs font-mono uppercase tracking-widest text-slate-500 mb-2">Email</label>
                      <input id="email" name="email" type="email" required
                        value={form.email} disabled={submitting}
                        onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                        className={inputCls} placeholder="you@company.com"
                      />
                    </div>

                    <div>
                      <label htmlFor="projectType" className="block text-xs font-mono uppercase tracking-widest text-slate-500 mb-2">Project Type</label>
                      <select id="projectType" name="projectType" required
                        value={form.projectType} disabled={submitting}
                        onChange={(e) => setForm((f) => ({ ...f, projectType: e.target.value }))}
                        className={`${inputCls} appearance-none cursor-pointer`}
                      >
                        <option value="" disabled>Select a project type</option>
                        {PROJECT_TYPES.map((t) => <option key={t} value={t}>{t}</option>)}
                      </select>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-xs font-mono uppercase tracking-widest text-slate-500 mb-2">Message</label>
                      <textarea id="message" name="message" required rows={4}
                        value={form.message} disabled={submitting}
                        onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                        className={`${inputCls} resize-none`} placeholder="Tell us about your project..."
                      />
                    </div>

                    <button type="submit" disabled={submitting}
                      className="w-full flex items-center justify-center gap-2 py-4 rounded-xl font-semibold text-brand-muted transition-all duration-300 hover:scale-[1.01] active:scale-[0.99] disabled:opacity-50 disabled:cursor-not-allowed"
                      style={{
                        background: 'linear-gradient(135deg, #1F6F5F, #3BBFA0)',
                        boxShadow: '0 0 30px rgba(47,160,132,0.25)',
                      }}
                    >
                      {submitting ? 'Sending…' : 'Send Message'}
                      <Send className="w-4 h-4" />
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* ══════════════════════ FOOTER ══════════════════════ */}
      <footer style={{ borderTop: '1px solid rgba(75,223,184,0.12)', background: 'rgba(5,15,12,0.9)' }}
        className="py-12 px-4 sm:px-6"
      >
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            {/* Brand */}
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg overflow-hidden flex items-center justify-center"
                style={{ background: 'linear-gradient(135deg, #1A5C4E, #4BDFB8)' }}
              >
                {!logoError ? (
                  <img src="/logo.jpeg" alt="ProtosTrio" className="w-full h-full object-cover"
                    onError={() => setLogoError(true)} />
                ) : (
                  <Layers className="w-4 h-4 text-white" />
                )}
              </div>
              <span className="font-display font-bold text-brand-muted">ProtosTrio</span>
            </div>

            {/* Nav */}
            <nav className="flex flex-wrap justify-center gap-6 text-sm text-slate-500">
              {NAV_LINKS.map((link) => (
                <button key={link.href} type="button" onClick={() => scrollTo(link.href)}
                  className="hover:text-brand-bright transition-colors"
                >
                  {link.label}
                </button>
              ))}
            </nav>

            {/* Socials */}
            <div className="flex gap-2.5">
              {[Github, Linkedin, Twitter, Mail].map((Icon, i) => (
                <a key={i} href="#"
                  className="p-2.5 rounded-xl text-slate-500 transition-all duration-300"
                  style={{
                    background: 'rgba(75,223,184,0.05)',
                    border: '1px solid rgba(75,223,184,0.1)',
                  }}
                  onClick={(e) => e.preventDefault()}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'rgba(75,223,184,0.15)';
                    e.currentTarget.style.color = '#4BDFB8';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'rgba(75,223,184,0.05)';
                    e.currentTarget.style.color = '';
                  }}
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          <div className="mt-8 pt-8 text-center text-xs text-slate-600"
            style={{ borderTop: '1px solid rgba(75,223,184,0.07)' }}
          >
            © {new Date().getFullYear()} ProtosTrio. Crafted with care by Barana, Chamudi & Hasini.
          </div>
        </div>
      </footer>
    </div>
  );
}
