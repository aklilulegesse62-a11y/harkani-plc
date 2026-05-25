"use client";

import AnimatedCounter from "@/components/animated-counter";
import BeforeAfterSlider from "@/components/before-after-slider";
import CursorGlow from "@/components/cursor-glow";
import PremiumDivisions from "@/components/premium-divisions";
import ProjectGrid from "@/components/project-grid";
import Reveal from "@/components/reveal";
import {
  heroSlides,
  logos,
  navigation,
  services,
  stats,
  testimonials
} from "@/lib/site-data";
import { AnimatePresence, motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  ArrowRight,
  MapPin,
  Menu,
  MessageCircle,
  MoveRight,
  PlayCircle,
  Sparkles,
  X
} from "lucide-react";
import { useEffect, useMemo, useRef, useState } from "react";

gsap.registerPlugin(ScrollTrigger);

export default function HomePage() {
  const shellRef = useRef(null);
  const [activeSlide, setActiveSlide] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formState, setFormState] = useState("idle");

  const desktopNav = useMemo(
    () => ({
      left: navigation.slice(0, 3),
      right: navigation.slice(3)
    }),
    []
  );

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reduceMotion.matches) {
      return undefined;
    }

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".hero-copy",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 1.15,
          delay: 0.2,
          ease: "power3.out"
        }
      );

      gsap.utils.toArray(".parallax-media").forEach((section, index) => {
        gsap.to(section, {
          yPercent: index % 2 === 0 ? -12 : 12,
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top bottom",
            end: "bottom top",
            scrub: true
          }
        });
      });

      gsap.utils.toArray(".cinematic-band").forEach((panel) => {
        gsap.fromTo(
          panel,
          { opacity: 0.45, y: 70 },
          {
            opacity: 1,
            y: 0,
            duration: 1.1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: panel,
              start: "top 82%"
            }
          }
        );
      });

      gsap.utils.toArray(".section-bridge").forEach((bridge) => {
        gsap.fromTo(
          bridge,
          { opacity: 0, y: 24 },
          {
            opacity: 1,
            y: 0,
            duration: 0.9,
            ease: "power3.out",
            scrollTrigger: {
              trigger: bridge,
              start: "top 86%"
            }
          }
        );
      });
    }, shellRef);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % heroSlides.length);
    }, 5400);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <div ref={shellRef} className="page-shell">
      <CursorGlow />

      <motion.div
        animate={{ opacity: 0 }}
        className="pointer-events-none fixed inset-0 z-[75] bg-[#060505]"
        initial={{ opacity: 1 }}
        transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
      >
        <motion.div
          animate={{ opacity: 0, y: -18 }}
          className="absolute inset-0 flex items-center justify-center"
          initial={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.72, ease: [0.22, 1, 0.36, 1], delay: 0.35 }}
        >
          <div className="text-center">
            <p className="font-serif text-3xl tracking-[0.32em] text-white">Harkani.Plc</p>
            <p className="mt-4 text-[0.72rem] font-semibold uppercase tracking-[0.34em] text-white/56">
              Interiors . Construction . Full Setup
            </p>
            <div className="mt-5 flex justify-center gap-2">
              {["Interiors", "Execution", "Lifestyle"].map((item, index) => (
                <motion.span
                  key={item}
                  animate={{ opacity: [0.35, 1, 0.35] }}
                  className="h-2.5 w-10 rounded-full bg-gradient-to-r from-[#d2a870] to-[#f0ddb7]"
                  transition={{ duration: 1.2, delay: index * 0.12, repeat: Infinity }}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </motion.div>

      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          isScrolled ? "px-2 pt-2 md:px-4" : "px-0 pt-0"
        }`}
      >
        <div
          className={`mx-auto flex w-full max-w-[1280px] items-center rounded-full px-4 py-3 transition-all duration-300 md:px-7 ${
            isScrolled
              ? "glass-panel border border-white/10"
              : "border border-transparent bg-transparent"
          }`}
        >
          <nav className="hidden flex-1 items-center gap-6 lg:flex">
            {desktopNav.left.map((item) => (
              <a key={item.label} className="underlined-nav text-sm text-white/72" href={item.href}>
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex w-full items-center justify-between lg:w-auto lg:justify-center">
            <div className="w-10 lg:hidden" />
            <a
              className="absolute left-1/2 -translate-x-1/2 text-center font-serif text-xl tracking-[0.24em] text-white"
              href="#home"
            >
              Harkani.Plc
            </a>
            <button
              aria-label="Toggle navigation"
              className="glass-panel flex h-10 w-10 items-center justify-center rounded-full border border-white/10 lg:hidden"
              onClick={() => setIsMenuOpen((current) => !current)}
              type="button"
            >
              {isMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>

          <nav className="hidden flex-1 items-center justify-end gap-6 lg:flex">
            {desktopNav.right.map((item) => (
              <a key={item.label} className="underlined-nav text-sm text-white/72" href={item.href}>
                {item.label}
              </a>
            ))}
          </nav>
        </div>

        <AnimatePresence>
          {isMenuOpen ? (
            <motion.div
              animate={{ opacity: 1, y: 0 }}
              className="mx-2 mt-3 rounded-[1.8rem] border border-white/10 bg-black/70 p-5 backdrop-blur-2xl lg:hidden"
              exit={{ opacity: 0, y: -10 }}
              initial={{ opacity: 0, y: -10 }}
            >
              <div className="flex flex-col gap-4">
                {navigation.map((item) => (
                  <a
                    key={item.label}
                    className="text-lg text-white/82"
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </header>

      <main>
        <section id="home" className="relative min-h-screen overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={heroSlides[activeSlide].image}
              animate={{ opacity: 1, scale: 1 }}
              className="absolute inset-0"
              exit={{ opacity: 0, scale: 1.04 }}
              initial={{ opacity: 0, scale: 1.08 }}
              transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <div
                className="parallax-media absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage: `url(${heroSlides[activeSlide].image})`
                }}
              />
            </motion.div>
          </AnimatePresence>

          <div className="hero-gradient absolute inset-0" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(233,201,157,0.18),transparent_30%)]" />

          <div className="section-shell relative z-10 flex min-h-screen flex-col justify-between pb-10 pt-28 md:pb-14 md:pt-36">
            <div className="grid flex-1 items-center gap-10 lg:grid-cols-[minmax(0,1.1fr)_420px]">
              <div className="hero-copy section-copy">
                <span className="eyebrow">
                  Premium spaces in Ethiopia, delivered through one accountable ecosystem
                </span>
                <h1 className="mt-6 text-balance text-[clamp(3rem,8vw,6rem)] font-semibold leading-[0.9] tracking-[-0.04em] text-white">
                  Interiors, Finishing, and Full Setup for Homes, Hospitality, and Commercial Spaces
                </h1>
                <p className="mt-6 max-w-2xl text-balance text-base leading-8 text-white/75 md:text-lg">
                  We shape businesses, restaurants, cafes, offices, luxury homes, government
                  projects, and diaspora-led spaces through one premium team from concept to
                  handover.
                </p>

                <div className="mt-9 flex flex-wrap items-center gap-4">
                  <a className="luxury-button inline-flex items-center gap-2" href="#contact">
                    Start Your Project
                    <ArrowRight className="h-4 w-4" />
                  </a>
                  <a className="secondary-button inline-flex items-center gap-2" href="#divisions">
                    Explore Divisions
                    <MoveRight className="h-4 w-4" />
                  </a>
                </div>

                <div className="mt-10 flex flex-wrap gap-4">
                  {stats.map((stat) => (
                    <div key={stat.label} className="min-w-[180px] flex-1">
                      <AnimatedCounter {...stat} />
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative hidden lg:block">
                <motion.div
                  animate={{ y: [0, -12, 0] }}
                  className="glass-panel floating-card interactive-surface absolute right-0 top-6 w-[280px] rounded-[1.8rem] p-5"
                  transition={{ duration: 7.2, repeat: Infinity, ease: "easeInOut" }}
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#e9c99d]">
                    Delivery dashboard
                  </p>
                  <div className="mt-5 grid gap-3">
                    {["Weekly visual reporting", "BOQ milestone approvals", "Procurement and site tracking"].map((item) => (
                      <div
                        key={item}
                        className="rounded-2xl border border-white/8 bg-white/[0.03] px-4 py-3 text-sm text-white/75"
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                </motion.div>

                <motion.div
                  animate={{ y: [0, 12, 0] }}
                  className="glass-panel floating-card-alt absolute bottom-0 left-0 w-[320px] rounded-[1.8rem] p-6"
                  transition={{ duration: 8.4, repeat: Infinity, ease: "easeInOut" }}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold uppercase tracking-[0.28em] text-white/55">
                      Current story
                    </span>
                    <Sparkles className="h-4 w-4 text-[#e9c99d]" />
                  </div>
                  <h2 className="mt-5 text-2xl font-semibold text-white">
                    {heroSlides[activeSlide].title}
                  </h2>
                  <p className="mt-4 text-sm leading-6 text-white/65">
                    Built for private, business, and diaspora clients who want premium execution
                    without fragmented vendors or scattered accountability.
                  </p>
                </motion.div>
              </div>
            </div>

            <div className="flex items-center justify-between gap-4 pt-8">
              <div className="flex gap-2">
                {heroSlides.map((slide, index) => (
                  <button
                    key={slide.label}
                    aria-label={`Go to slide ${index + 1}`}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      index === activeSlide ? "w-12 bg-[#e9c99d]" : "w-7 bg-white/25"
                    }`}
                    onClick={() => setActiveSlide(index)}
                    type="button"
                  />
                ))}
              </div>

              <div className="scroll-cue hidden items-center gap-3 text-xs uppercase tracking-[0.26em] text-white/48 md:flex">
                Scroll for the full experience
                <div className="h-12 w-7 rounded-full border border-white/12 p-1">
                  <div className="h-2.5 w-2.5 rounded-full bg-[#e9c99d]" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <div aria-hidden="true" className="section-bridge" />

        <section className="pb-10 pt-10 md:pb-16 md:pt-16">
          <div className="section-shell grid gap-10 xl:grid-cols-[0.85fr_1.15fr]">
            <Reveal className="cinematic-band">
              <span className="eyebrow">Trust Signals</span>
              <h2 className="section-title mt-6">The confidence layer ambitious clients need.</h2>
              <p className="mt-6 text-base leading-8 text-white/66">
                Clear communication, premium craftsmanship, and cross-border accountability help
                projects move from concept to launch without friction.
              </p>

              <div className="mt-8 overflow-hidden rounded-[1.8rem] border border-white/10 bg-white/[0.03] p-4">
                <div className="marquee-track flex min-w-max gap-4">
                  {[...logos, ...logos].map((logo, index) => (
                    <div
                      key={`${logo.short}-${index}`}
                      className="glass-panel flex min-w-[190px] items-center gap-4 rounded-[1.4rem] px-5 py-4"
                    >
                      <div className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] font-semibold text-[#e9c99d]">
                        {logo.short}
                      </div>
                      <span className="text-sm text-white/72">{logo.name}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-1">
                {testimonials.map((item) => (
                  <div
                    key={item.name}
                    className="glass-panel interactive-surface rounded-[1.8rem] p-6"
                  >
                    <p className="text-sm leading-7 text-white/72">"{item.quote}"</p>
                    <div className="mt-6">
                      <p className="font-semibold text-white">{item.name}</p>
                      <p className="text-sm text-white/52">{item.location}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>

            <div className="space-y-5">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="glass-panel rounded-[1.8rem] p-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#e9c99d]">
                    Reporting rhythm
                  </p>
                  <h3 className="mt-4 text-2xl font-semibold text-white">Weekly visual check-ins</h3>
                  <p className="mt-3 text-sm leading-7 text-white/63">
                    Video walkthroughs, procurement confirmations, and timeline updates keep
                    owners, operators, and diaspora stakeholders aligned without constant calls.
                  </p>
                </div>
                <div className="glass-panel rounded-[1.8rem] p-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#e9c99d]">
                    Delivery quality
                  </p>
                  <h3 className="mt-4 text-2xl font-semibold text-white">Final setup included</h3>
                  <p className="mt-3 text-sm leading-7 text-white/63">
                    We do not stop at civil finish. The last layer includes furniture placement,
                    decor, lighting mood, electronics, and ready-to-use handover.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="pb-24 pt-8 md:pb-32 md:pt-12">
          <div className="section-shell">
            <Reveal className="section-copy cinematic-band">
              <span className="eyebrow">About Harkani.Plc</span>
              <h2 className="section-title mt-6">
                The premium local team for homes, hospitality, and commercial spaces.
              </h2>
              <p className="mt-7 text-lg leading-8 text-white/72">
                Fragmented vendors, uncertain finishes, and slow decision loops can stall premium
                projects. Harkani.Plc brings design direction, execution, procurement, furnishing,
                and final styling into one controlled delivery model inside Ethiopia.
              </p>
              <p className="mt-6 text-base leading-8 text-white/58">
                The result is clearer accountability for luxury homes, offices, restaurants,
                government-facing environments, and diaspora-led projects that need confidence from
                afar.
              </p>
            </Reveal>
          </div>
        </section>

        <section id="services" className="py-10 md:py-16">
          <div className="section-shell">
            <Reveal className="max-w-3xl">
              <span className="eyebrow">Services</span>
              <h2 className="section-title mt-6">Everything your space needs, under one studio.</h2>
              <p className="mt-6 text-lg leading-8 text-white/68">
                We handle the atmosphere, technical finishing, sourcing logistics, and delivery
                pressure so clients can stay focused on outcomes instead of fragmented coordination.
              </p>
            </Reveal>

            <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
              {services.map((service, index) => (
                <Reveal key={service.title} delay={index * 0.05}>
                  <motion.article
                    className="glass-panel interactive-surface h-full rounded-[1.8rem] p-6"
                    onMouseMove={(event) => {
                      const bounds = event.currentTarget.getBoundingClientRect();
                      event.currentTarget.style.setProperty(
                        "--cursor-x",
                        `${((event.clientX - bounds.left) / bounds.width) * 100}%`
                      );
                      event.currentTarget.style.setProperty(
                        "--cursor-y",
                        `${((event.clientY - bounds.top) / bounds.height) * 100}%`
                      );
                    }}
                    whileHover={{ y: -6 }}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-4xl font-semibold text-white/16">{service.number}</span>
                      <div className="h-10 w-10 rounded-full border border-white/10 bg-white/[0.03]" />
                    </div>
                    <h3 className="mt-10 text-2xl font-semibold text-white">{service.title}</h3>
                    <p className="mt-4 text-sm leading-7 text-white/62">{service.description}</p>
                  </motion.article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <div aria-hidden="true" className="section-bridge" />

        <PremiumDivisions />

        <div aria-hidden="true" className="section-bridge" />

        <section className="py-24 md:py-32">
          <div className="section-shell grid gap-10 xl:grid-cols-[0.9fr_1.1fr]">
            <Reveal className="section-copy cinematic-band">
              <span className="eyebrow">Transformation</span>
              <h2 className="section-title mt-6">
                See the level of finish before launch, occupancy, or handover.
              </h2>
              <p className="mt-6 text-base leading-8 text-white/66">
                Before-and-after reporting is built into the workflow. Every upgrade is captured
                clearly so owners, operators, and diaspora stakeholders can approve progress with
                confidence from abroad.
              </p>
              <div className="mt-8 space-y-4">
                {[
                  "Transparent milestone approvals",
                  "Material tracking with visual proof",
                  "Final styling and snagging walkthroughs"
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white/75"
                  >
                    <div className="h-2.5 w-2.5 rounded-full bg-[#e9c99d]" />
                    {item}
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.06}>
              <BeforeAfterSlider />
            </Reveal>
          </div>
        </section>

        <section id="projects" className="pb-6 pt-10 md:pb-10 md:pt-16">
          <div className="section-shell">
            <Reveal className="max-w-3xl">
              <span className="eyebrow">Portfolio</span>
              <h2 className="section-title mt-6">
                Luxury homes, hospitality spaces, offices, and public-facing environments.
              </h2>
              <p className="mt-6 text-lg leading-8 text-white/68">
                Filter through curated projects spanning diaspora villa deliveries, signature
                cafe interiors, executive office suites, government upgrades, and high-end family
                homes.
              </p>
            </Reveal>

            <div className="mt-10">
              <ProjectGrid />
            </div>
          </div>
        </section>

        <section id="contact" className="pb-16 pt-8 md:pb-24 md:pt-16">
          <div className="section-shell">
            <div className="glass-panel overflow-hidden rounded-[2.4rem] border border-white/10 p-5 md:p-8 xl:p-10">
              <div className="grid gap-8 xl:grid-cols-[0.9fr_1.1fr]">
                <Reveal className="xl:pr-8">
                  <span className="eyebrow">Contact</span>
                  <h2 className="section-title mt-6">
                    Launch Your Space From Anywhere in the World
                  </h2>
                  <p className="mt-6 text-base leading-8 text-white/68">
                    Tell us about your property, business, restaurant, cafe, office, government
                    scope, or target finish level. We will shape the right premium delivery path
                    for your project in Ethiopia.
                  </p>

                  <div className="mt-8 flex flex-wrap gap-4">
                    <a
                      className="luxury-button inline-flex items-center gap-2"
                      href="https://wa.me/251951108127?text=Hello%20Harkani.Plc%2C%20I%20want%20to%20start%20a%20premium%20interior%2C%20finishing%2C%20or%20full%20setup%20project."
                      rel="noreferrer"
                      target="_blank"
                    >
                      <MessageCircle className="h-4 w-4" />
                      WhatsApp Us
                    </a>
                    <a
                      className="secondary-button inline-flex items-center gap-2"
                      href="mailto:kena@harkani.com"
                    >
                      kena@harkani.com
                    </a>
                  </div>

                  <div className="mt-10 grid gap-4 md:grid-cols-2">
                    <div className="rounded-[1.6rem] border border-white/10 bg-white/[0.03] p-5">
                      <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#e9c99d]">
                        Studio location
                      </p>
                      <p className="mt-4 flex items-center gap-2 text-white/75">
                        <MapPin className="h-4 w-4 text-[#e9c99d]" />
                        Golagul Building, Addis Ababa, Ethiopia
                      </p>
                    </div>
                    <div className="rounded-[1.6rem] border border-white/10 bg-white/[0.03] p-5">
                      <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#e9c99d]">
                        Client response
                      </p>
                      <p className="mt-4 text-white/75">Initial project consultations within 24 hours.</p>
                    </div>
                  </div>
                </Reveal>

                <Reveal delay={0.08}>
                  <div className="grid gap-4 xl:grid-cols-[1fr_0.95fr]">
                    <form
                      className="space-y-4 rounded-[1.8rem] border border-white/10 bg-white/[0.03] p-5"
                      onSubmit={(event) => {
                        event.preventDefault();
                        setFormState("submitted");
                        event.currentTarget.reset();
                      }}
                    >
                      <div className="grid gap-4 md:grid-cols-2">
                        <input className="contact-input" name="name" placeholder="Full name" required />
                        <input
                          className="contact-input"
                          name="country"
                          placeholder="Country of residence"
                          required
                        />
                      </div>
                      <div className="grid gap-4 md:grid-cols-2">
                        <input className="contact-input" name="email" placeholder="Email address" required type="email" />
                        <input className="contact-input" name="phone" placeholder="WhatsApp number" required />
                      </div>
                      <input
                        className="contact-input"
                        name="project-type"
                        placeholder="Property, business, or project location"
                        required
                      />
                      <textarea
                        className="contact-input min-h-[160px] resize-none"
                        name="message"
                        placeholder="Tell us about your interior, finishing, furnishing, or setup scope, plus budget range and target handover date."
                        required
                      />
                      <button className="luxury-button inline-flex items-center gap-2" type="submit">
                        Start Your Project
                        <ArrowRight className="h-4 w-4" />
                      </button>
                      <AnimatePresence>
                        {formState === "submitted" ? (
                          <motion.p
                            animate={{ opacity: 1, y: 0 }}
                            className="text-sm text-[#f2d4ac]"
                            exit={{ opacity: 0, y: -4 }}
                            initial={{ opacity: 0, y: 4 }}
                          >
                            Thank you. Your inquiry has been captured and the team can now tailor a
                            premium project path around it.
                          </motion.p>
                        ) : null}
                      </AnimatePresence>
                    </form>

                    <div className="space-y-4">
                      <div className="relative overflow-hidden rounded-[1.8rem] border border-white/10 bg-white/[0.03] p-3">
                        <div className="pointer-events-none absolute inset-3 rounded-[1.5rem] bg-[radial-gradient(circle_at_top,rgba(233,201,157,0.16),transparent_42%),linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0.01))]" />
                        <iframe
                          allowFullScreen
                          className="map-frame relative z-[1]"
                          loading="lazy"
                          referrerPolicy="no-referrer-when-downgrade"
                          src="https://maps.google.com/maps?q=Golagul%20Building%20Addis%20Ababa&t=&z=15&ie=UTF8&iwloc=&output=embed"
                          title="Harkani.Plc location"
                        />
                        <a
                          className="glass-panel absolute bottom-7 left-7 z-[2] inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-[#f6f1ea]"
                          href="https://maps.app.goo.gl/n7e8WQg4yPHS2rLs9?g_st=atm"
                          rel="noreferrer"
                          target="_blank"
                        >
                          Open Google Maps
                          <ArrowRight className="h-3.5 w-3.5" />
                        </a>
                      </div>
                      <div className="rounded-[1.8rem] border border-white/10 bg-white/[0.03] p-6">
                        <div className="flex items-center gap-3">
                          <PlayCircle className="h-5 w-5 text-[#e9c99d]" />
                          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#e9c99d]">
                            What clients usually ask first
                          </p>
                        </div>
                        <div className="mt-5 space-y-3">
                          {[
                            "Can you handle sourcing without us being in Ethiopia?",
                            "How often do we get project updates and approvals?",
                            "Can you deliver a fully furnished restaurant, office, or home?"
                          ].map((item) => (
                            <div
                              key={item}
                              className="rounded-[1.1rem] border border-white/10 bg-black/20 px-4 py-3 text-sm text-white/72"
                            >
                              {item}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </Reveal>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
