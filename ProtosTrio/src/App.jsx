import { useState, useEffect, useRef, useCallback } from 'react';
import {
  Menu,
  X,
  ArrowRight,
  Code2,
  Palette,
  ShoppingCart,
  Search,
  Sparkles,
  Github,
  Linkedin,
  Twitter,
  Mail,
  Send,
  Zap,
  Globe,
  Layers,
  ChevronRight,
} from 'lucide-react';

/* ═══════════════════════════════════════════════════════════════════════════
   ProtosTrio — Single-page agency portfolio
   React + Tailwind CSS + Lucide React
   ═══════════════════════════════════════════════════════════════════════════ */

const NAV_LINKS = [
  { label: 'Services', href: '#services' },
  { label: 'Work', href: '#work' },
  { label: 'Team', href: '#team' },
  { label: 'Contact', href: '#contact' },
];

const SERVICES = [
  {
    icon: Code2,
    title: 'Custom Web Apps',
    description: 'Scalable, performant applications tailored to your business logic—from MVPs to enterprise platforms.',
    accent: 'from-neon-purple to-violet-600',
  },
  {
    icon: Palette,
    title: 'UI/UX Design',
    description: 'Pixel-perfect interfaces with intuitive flows that convert visitors into loyal customers.',
    accent: 'from-neon-cyan to-blue-500',
  },
  {
    icon: ShoppingCart,
    title: 'E-commerce',
    description: 'High-converting online stores with seamless checkout, inventory sync, and payment integrations.',
    accent: 'from-neon-emerald to-teal-500',
  },
  {
    icon: Search,
    title: 'SEO & Optimization',
    description: 'Lightning-fast load times, Core Web Vitals excellence, and search visibility that drives growth.',
    accent: 'from-amber-400 to-orange-500',
  },
];

const PROJECTS = [
  {
    title: 'NexusFlow SaaS',
    category: 'SaaS Dashboard',
    description: 'Real-time analytics platform with role-based access and custom reporting.',
    tags: ['React', 'Node.js', 'PostgreSQL'],
    gradient: 'from-violet-600/40 via-purple-900/60 to-midnight-900',
    accent: 'text-neon-purple',
  },
  {
    title: 'Lumière Boutique',
    category: 'Luxury E-commerce',
    description: 'Premium shopping experience with AR try-on and curated collections.',
    tags: ['Next.js', 'Stripe', 'Sanity CMS'],
    gradient: 'from-cyan-600/30 via-slate-900/80 to-midnight-900',
    accent: 'text-neon-cyan',
  },
  {
    title: 'Vertex Capital',
    category: 'Corporate Landing',
    description: 'Bold brand storytelling for a fintech firm with investor portal integration.',
    tags: ['TypeScript', 'Tailwind', 'Framer Motion'],
    gradient: 'from-emerald-600/25 via-slate-900/70 to-midnight-900',
    accent: 'text-neon-emerald',
  },
];

const TEAM = [
  {
    name: 'Barana',
    role: 'Lead Developer & Co-Founder',
    bio: 'Full-stack architect turning complex requirements into elegant, maintainable code.',
    initials: 'B',
    gradient: 'from-neon-purple to-violet-600',
  },
  {
    name: 'Chamudi',
    role: 'UI/UX Designer & Co-Founder',
    bio: 'Crafting interfaces that feel intuitive, look stunning, and drive measurable results.',
    initials: 'C',
    gradient: 'from-neon-cyan to-blue-500',
  },
  {
    name: 'Hasini',
    role: 'Product Strategist & Co-Founder',
    bio: 'Bridging business goals and technical execution with clarity and client-first focus.',
    initials: 'H',
    gradient: 'from-neon-emerald to-teal-500',
  },
];

const PROJECT_TYPES = [
  'New Website',
  'Web Application',
  'E-commerce Store',
  'Redesign / Refresh',
  'Other',
];

function HeroVisual({ mouseX, mouseY }) {
  const rotateX = (mouseY - 0.5) * 12;
  const rotateY = (mouseX - 0.5) * -12;

  return (
    <div
      className="relative w-full max-w-lg mx-auto lg:mx-0 aspect-square perspective-1000"
      style={{ perspective: '1000px' }}
    >
      <div
        className="relative w-full h-full transition-transform duration-300 ease-out"
        style={{ transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg)` }}
      >
        {/* Ambient orbs */}
        <div className="absolute inset-0 rounded-3xl overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-neon-purple/30 rounded-full blur-3xl animate-pulse-glow" />
          <div className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-neon-cyan/25 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '1s' }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-neon-emerald/20 rounded-full blur-2xl" />
        </div>

        {/* Main glass card */}
        <div className="absolute inset-8 glass-strong rounded-2xl p-6 glow-purple animate-float">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-3 h-3 rounded-full bg-red-500/80" />
            <div className="w-3 h-3 rounded-full bg-amber-500/80" />
            <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
            <span className="ml-2 text-xs text-slate-500 font-mono">protostrio.app</span>
          </div>
          <div className="space-y-3 font-mono text-sm">
            <p><span className="text-neon-purple">const</span> <span className="text-neon-cyan">agency</span> = {'{'}</p>
            <p className="pl-4"><span className="text-slate-400">founders:</span> <span className="text-neon-emerald">3</span>,</p>
            <p className="pl-4"><span className="text-slate-400">stack:</span> <span className="text-amber-300">['React', 'Node']</span>,</p>
            <p className="pl-4"><span className="text-slate-400">mission:</span> <span className="text-white">'ideas → code'</span></p>
            <p>{'}'};</p>
          </div>
          <div className="mt-6 h-1 rounded-full bg-midnight-800 overflow-hidden">
            <div className="h-full w-2/3 bg-gradient-to-r from-neon-purple via-neon-cyan to-neon-emerald rounded-full animate-gradient bg-[length:300%_100%]" />
          </div>
        </div>

        {/* Orbiting elements */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="absolute w-4 h-4 rounded-lg bg-neon-purple/80 shadow-lg shadow-neon-purple/50" style={{ animation: 'orbit 20s linear infinite' }} />
        </div>
        <div className="absolute -top-2 -right-2 glass rounded-xl px-3 py-2 flex items-center gap-2 text-xs font-medium border-neon-cyan/20">
          <Zap className="w-3.5 h-3.5 text-neon-cyan" />
          <span>99 Lighthouse</span>
        </div>
        <div className="absolute -bottom-2 -left-2 glass rounded-xl px-3 py-2 flex items-center gap-2 text-xs font-medium border-neon-emerald/20">
          <Globe className="w-3.5 h-3.5 text-neon-emerald" />
          <span>Global Ready</span>
        </div>
      </div>

      {/* Grid background */}
      <div
        className="absolute inset-0 -z-10 opacity-30"
        style={{
          backgroundImage: `
            linear-gradient(rgba(168,85,247,0.15) 1px, transparent 1px),
            linear-gradient(90deg, rgba(168,85,247,0.15) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
        }}
      />
    </div>
  );
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mouse, setMouse] = useState({ x: 0.5, y: 0.5 });
  const [form, setForm] = useState({ name: '', email: '', projectType: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [logoError, setLogoError] = useState(false);
  const heroRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const handleHeroMouse = useCallback((e) => {
    const el = heroRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    setMouse({
      x: (e.clientX - rect.left) / rect.width,
      y: (e.clientY - rect.top) / rect.height,
    });
  }, []);

  const handleNavClick = (href) => {
    setMenuOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('https://formspree.io/f/mzdqbkvj', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify(form),
      });

      if (response.ok) {
        setSubmitted(true);
        setForm({ name: '', email: '', projectType: '', message: '' });
        setTimeout(() => {
          setSubmitted(false);
        }, 5000);
      } else {
        alert('An error occurred. Please try sending your message again.');
      }
    } catch (error) {
      alert('Network error. Please check your internet connection and try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen overflow-x-hidden">
      {/* Background mesh */}
      <div className="fixed inset-0 -z-20 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-neon-purple/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-neon-cyan/8 rounded-full blur-[100px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-neon-emerald/5 rounded-full blur-[80px]" />
      </div>

      {/* ─── Navigation ─── */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? 'py-3' : 'py-5'
        }`}
      >
        <nav
          className={`mx-auto max-w-6xl px-4 sm:px-6 transition-all duration-500 ${
            scrolled
              ? 'glass-strong rounded-2xl shadow-2xl shadow-black/40 glow-purple'
              : 'bg-transparent'
          }`}
        >
          <div className="flex items-center justify-between h-14 px-2 sm:px-4">
            <a
              href="#"
              className="flex items-center gap-2.5 group"
              onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
            >
              <div className="w-9 h-9 rounded-xl overflow-hidden bg-gradient-to-br from-neon-purple to-neon-cyan flex items-center justify-center shadow-lg shadow-neon-purple/30 group-hover:scale-105 transition-transform">
                {!logoError ? (
                  <img 
                    src="/logo.jpeg" 
                    alt="ProtosTrio" 
                    className="w-full h-full object-cover"
                    onError={() => setLogoError(true)}
                  />
                ) : (
                  <Layers className="w-5 h-5 text-white" />
                )}
              </div>
              <span className="font-bold text-lg tracking-tight">
                Protos<span className="text-gradient">Trio</span>
              </span>
            </a>

            <ul className="hidden md:flex items-center gap-1">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <button
                    type="button"
                    onClick={() => handleNavClick(link.href)}
                    className="px-4 py-2 text-sm text-slate-400 hover:text-white rounded-lg hover:bg-white/5 transition-all duration-300"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
              <li>
                <button
                  type="button"
                  onClick={() => handleNavClick('#contact')}
                  className="ml-2 px-5 py-2.5 text-sm font-semibold rounded-xl bg-gradient-to-r from-neon-purple to-violet-600 text-white hover:shadow-lg hover:shadow-neon-purple/40 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
                >
                  Get in Touch
                </button>
              </li>
            </ul>

            <button
              type="button"
              className="md:hidden p-2 rounded-lg glass hover:bg-white/10 transition-colors"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            >
              {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </nav>

        {/* Mobile menu */}
        <div
          className={`md:hidden fixed inset-0 top-[72px] z-40 transition-all duration-500 ${
            menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
          }`}
        >
          <div className="absolute inset-0 bg-midnight-950/90 backdrop-blur-xl" onClick={() => setMenuOpen(false)} />
          <ul className="relative mx-4 mt-4 glass-strong rounded-2xl p-4 space-y-1">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <button
                  type="button"
                  onClick={() => handleNavClick(link.href)}
                  className="w-full text-left px-4 py-3 text-lg rounded-xl hover:bg-white/5 transition-colors"
                >
                  {link.label}
                </button>
              </li>
            ))}
            <li className="pt-2">
              <button
                type="button"
                onClick={() => handleNavClick('#contact')}
                className="w-full py-3 rounded-xl bg-gradient-to-r from-neon-purple to-violet-600 font-semibold"
              >
                Get in Touch
              </button>
            </li>
          </ul>
        </div>
      </header>

      <main>
        {/* ─── Hero ─── */}
        <section
          ref={heroRef}
          onMouseMove={handleHeroMouse}
          className="relative min-h-screen flex items-center pt-28 pb-20 px-4 sm:px-6"
        >
          <div className="max-w-6xl mx-auto w-full grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="text-center lg:text-left order-2 lg:order-1">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-sm text-slate-300 mb-6 animate-fade-in">
                <Sparkles className="w-4 h-4 text-neon-cyan" />
                <span>3 founders. One mission. Infinite possibilities.</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold tracking-tight leading-[1.1] mb-6">
                We turn{' '}
                <span className="text-gradient bg-gradient-to-r from-neon-purple via-neon-cyan to-neon-emerald bg-[length:300%_auto] animate-gradient">
                  ideas
                </span>
                <br />
                into code.
              </h1>
              <p className="text-lg sm:text-xl text-slate-400 max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed">
                ProtosTrio builds modern websites, custom web apps, and digital experiences
                for startups and local businesses—crafted with precision, shipped with speed.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button
                  type="button"
                  onClick={() => handleNavClick('#contact')}
                  className="group inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl bg-gradient-to-r from-neon-purple via-violet-600 to-neon-purple bg-[length:200%_auto] hover:bg-right font-semibold text-white glow-purple hover:scale-[1.02] active:scale-[0.98] transition-all duration-500"
                >
                  Get in Touch
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <button
                  type="button"
                  onClick={() => handleNavClick('#work')}
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl glass hover:bg-white/[0.08] font-semibold transition-all duration-300"
                >
                  View Our Work
                  <ChevronRight className="w-5 h-5 text-neon-cyan" />
                </button>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <HeroVisual mouseX={mouse.x} mouseY={mouse.y} />
            </div>
          </div>
        </section>

        {/* ─── Services ─── */}
        <section id="services" className="py-24 px-4 sm:px-6 scroll-mt-24">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <p className="text-neon-cyan text-sm font-semibold uppercase tracking-widest mb-3">What we do</p>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
                Services built for <span className="text-gradient">growth</span>
              </h2>
              <p className="text-slate-400 max-w-2xl mx-auto">
                From concept to launch, we deliver end-to-end digital solutions that scale with your ambition.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {SERVICES.map((service) => (
                <article
                  key={service.title}
                  className="group relative glass rounded-2xl p-6 hover:-translate-y-2 hover:shadow-2xl hover:shadow-neon-purple/10 transition-all duration-500 cursor-default overflow-hidden"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.accent} opacity-0 group-hover:opacity-[0.07] transition-opacity duration-500`} />
                  <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${service.accent} mb-5 shadow-lg`}>
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-white transition-colors">{service.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{service.description}</p>
                  <div className="mt-4 flex items-center gap-1 text-sm font-medium text-neon-cyan opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Learn more <ChevronRight className="w-4 h-4" />
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ─── Portfolio ─── */}
        <section id="work" className="py-24 px-4 sm:px-6 scroll-mt-24">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-16">
              <div>
                <p className="text-neon-purple text-sm font-semibold uppercase tracking-widest mb-3">Portfolio</p>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
                  Our <span className="text-gradient">work</span>
                </h2>
              </div>
              <p className="text-slate-400 max-w-md">
                Selected projects showcasing our range—from SaaS dashboards to luxury retail.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {PROJECTS.map((project, i) => (
                <article
                  key={project.title}
                  className="group relative rounded-2xl overflow-hidden glass hover:-translate-y-2 transition-all duration-500"
                  style={{ transitionDelay: `${i * 50}ms` }}
                >
                  <div className={`aspect-[4/3] bg-gradient-to-br ${project.gradient} relative overflow-hidden`}>
                    <div className="absolute inset-0 flex items-center justify-center opacity-40 group-hover:opacity-60 transition-opacity">
                      <div className="w-3/4 h-3/4 rounded-lg border border-white/10 bg-white/5 backdrop-blur-sm transform group-hover:scale-105 transition-transform duration-500" />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-midnight-950 via-transparent to-transparent" />
                    <span className={`absolute top-4 left-4 text-xs font-semibold uppercase tracking-wider ${project.accent}`}>
                      {project.category}
                    </span>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2 group-hover:text-gradient transition-all">{project.title}</h3>
                    <p className="text-slate-400 text-sm mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-1 text-xs font-medium rounded-md bg-white/5 text-slate-300 border border-white/10"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ─── Team ─── */}
        <section id="team" className="py-24 px-4 sm:px-6 scroll-mt-24">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <p className="text-neon-emerald text-sm font-semibold uppercase tracking-widest mb-3">The founders</p>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
                Meet the <span className="text-gradient">team</span>
              </h2>
              <p className="text-slate-400 max-w-2xl mx-auto">
                Three passionate builders united by a love for clean code, beautiful design, and client success.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {TEAM.map((member) => (
                <article
                  key={member.name}
                  className="group glass rounded-2xl p-8 text-center hover:-translate-y-1 hover:shadow-xl hover:shadow-neon-purple/5 transition-all duration-500"
                >
                  <div
                    className={`w-24 h-24 mx-auto mb-6 rounded-2xl bg-gradient-to-br ${member.gradient} flex items-center justify-center text-3xl font-bold text-white shadow-xl group-hover:scale-105 transition-transform duration-300`}
                  >
                    {member.initials}
                  </div>
                  <h3 className="text-2xl font-bold mb-1">{member.name}</h3>
                  <p className={`text-sm font-semibold mb-4 bg-gradient-to-r ${member.gradient} bg-clip-text text-transparent`}>
                    {member.role}
                  </p>
                  <p className="text-slate-400 text-sm leading-relaxed mb-6">{member.bio}</p>
                  <div className="flex justify-center gap-3">
                    {[Github, Linkedin, Twitter].map((Icon, idx) => (
                      <a
                        key={idx}
                        href="#"
                        className="p-2.5 rounded-xl glass hover:bg-white/10 hover:text-neon-cyan transition-all duration-300"
                        aria-label={`${member.name} social link`}
                        onClick={(e) => e.preventDefault()}
                      >
                        <Icon className="w-5 h-5 text-slate-400 hover:text-inherit" />
                      </a>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ─── Contact ─── */}
        <section id="contact" className="py-24 px-4 sm:px-6 scroll-mt-24">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
              <div>
                <p className="text-neon-purple text-sm font-semibold uppercase tracking-widest mb-3">Contact</p>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
                  Let&apos;s build something <span className="text-gradient">great</span>
                </h2>
                <p className="text-slate-400 mb-8 leading-relaxed">
                  Tell us about your project. We typically respond within 24 hours and love
                  hearing from startups and local businesses ready to level up their digital presence.
                </p>
                <div className="space-y-4">
                  <a
                    href="mailto:hello@protostrio.com"
                    className="flex items-center gap-3 text-slate-300 hover:text-neon-cyan transition-colors group"
                  >
                    <div className="p-3 rounded-xl glass group-hover:glow-cyan transition-shadow">
                      <Mail className="w-5 h-5 text-neon-cyan" />
                    </div>
                    <span>hello@protostrio.com</span>
                  </a>
                </div>
              </div>

              <form
                onSubmit={handleSubmit}
                className="glass-strong rounded-2xl p-6 sm:p-8 space-y-5 glow-purple"
              >
                {submitted ? (
                  <div className="py-12 text-center">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-neon-emerald/20 flex items-center justify-center">
                      <Send className="w-8 h-8 text-neon-emerald" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">Message sent!</h3>
                    <p className="text-slate-400">We&apos;ll get back to you soon.</p>
                  </div>
                ) : (
                  <>
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">Name</label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={form.name}
                        onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                        className="w-full px-4 py-3 rounded-xl bg-midnight-800/80 border border-white/10 focus:border-neon-purple/50 focus:ring-2 focus:ring-neon-purple/20 outline-none transition-all"
                        placeholder="Your name"
                        disabled={isSubmitting}
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">Email</label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={form.email}
                        onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                        className="w-full px-4 py-3 rounded-xl bg-midnight-800/80 border border-white/10 focus:border-neon-cyan/50 focus:ring-2 focus:ring-neon-cyan/20 outline-none transition-all"
                        placeholder="you@company.com"
                        disabled={isSubmitting}
                      />
                    </div>
                    <div>
                      <label htmlFor="projectType" className="block text-sm font-medium text-slate-300 mb-2">Project Type</label>
                      <select
                        id="projectType"
                        name="projectType"
                        required
                        value={form.projectType}
                        onChange={(e) => setForm((f) => ({ ...f, projectType: e.target.value }))}
                        className="w-full px-4 py-3 rounded-xl bg-midnight-800/80 border border-white/10 focus:border-neon-emerald/50 focus:ring-2 focus:ring-neon-emerald/20 outline-none transition-all appearance-none cursor-pointer"
                        disabled={isSubmitting}
                      >
                        <option value="" disabled>Select a project type</option>
                        {PROJECT_TYPES.map((type) => (
                          <option key={type} value={type} className="bg-midnight-800">{type}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">Message</label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={4}
                        value={form.message}
                        onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                        className="w-full px-4 py-3 rounded-xl bg-midnight-800/80 border border-white/10 focus:border-neon-purple/50 focus:ring-2 focus:ring-neon-purple/20 outline-none transition-all resize-none"
                        placeholder="Tell us about your project..."
                        disabled={isSubmitting}
                      />
                    </div>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full flex items-center justify-center gap-2 py-4 rounded-xl bg-gradient-to-r from-neon-purple to-violet-600 font-semibold hover:shadow-lg hover:shadow-neon-purple/40 hover:scale-[1.01] active:scale-[0.99] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                      <Send className="w-5 h-5" />
                    </button>
                  </>
                )}
              </form>
            </div>
          </div>
        </section>
      </main>

      {/* ─── Footer ─── */}
      <footer className="border-t border-white/5 py-12 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg overflow-hidden bg-gradient-to-br from-neon-purple to-neon-cyan flex items-center justify-center">
                {!logoError ? (
                  <img 
                    src="/logo.jpeg" 
                    alt="ProtosTrio" 
                    className="w-full h-full object-cover"
                    onError={() => setLogoError(true)}
                  />
                ) : (
                  <Layers className="w-4 h-4 text-white" />
                )}
              </div>
              <span className="font-bold">ProtosTrio</span>
            </div>
            <nav className="flex flex-wrap justify-center gap-6 text-sm text-slate-400">
              {NAV_LINKS.map((link) => (
                <button
                  key={link.href}
                  type="button"
                  onClick={() => handleNavClick(link.href)}
                  className="hover:text-white transition-colors"
                >
                  {link.label}
                </button>
              ))}
            </nav>
            <div className="flex gap-3">
              {[Github, Linkedin, Twitter, Mail].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="p-2 rounded-lg glass hover:bg-white/10 hover:text-neon-cyan transition-all"
                  aria-label="Social link"
                  onClick={(e) => e.preventDefault()}
                >
                  <Icon className="w-5 h-5 text-slate-400" />
                </a>
              ))}
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-white/5 text-center text-sm text-slate-500">
            © {new Date().getFullYear()} ProtosTrio. Crafted by Barana, Chamudi & Hasini. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}