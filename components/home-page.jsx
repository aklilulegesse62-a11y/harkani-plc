"use client";

import AnimatedCounter from "@/components/animated-counter";
import BeforeAfterSlider from "@/components/before-after-slider";
import CursorGlow from "@/components/cursor-glow";
import Reveal from "@/components/reveal";
import SiteHeader from "@/components/site-header";
import SocialLinks from "@/components/social-links";
import WhatsAppWidget from "@/components/whatsapp-widget";
import {
  aboutSection,
  finalCtaImage,
  homeDivisionSections,
  heroSlides,
  logos,
  serviceGroups,
  stats,
  testimonialComparison,
  testimonials,
  trustVisuals
} from "@/lib/site-data";
import { AnimatePresence, motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight, Mail, MessageCircle, MoveRight } from "lucide-react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

gsap.registerPlugin(ScrollTrigger);

const whatsappHref =
  "https://wa.me/251951108127?text=Hello%20Harkani.Plc%2C%20I%20want%20to%20start%20a%20premium%20interior%2C%20finishing%2C%20or%20full%20setup%20project.";

const homeLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Trust", href: "#trust" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Contact", href: "#contact" }
];

const sectionThemes = {
  interior: {
    section: "bg-[#0c0a08] text-[#f6f1ea]",
    eyebrow: "text-[#e9c99d]",
    text: "text-[#f6f1ea]/78",
    muted: "text-[#f6f1ea]/64",
    border: "border-[#e9c99d]/22",
    imageBg: "bg-[#17100b]",
    bullet: "bg-[#e9c99d]",
    glow: "rgba(233, 201, 157, 0.24)",
    divider: "from-[#e9c99d]/36",
    wash: "from-[#0c0a08] via-[#130f0b] to-[#060505]"
  },
  furniture: {
    section: "bg-[#f6f1ea] text-[#202632]",
    eyebrow: "text-[#8b633f]",
    text: "text-[#2c2f37]",
    muted: "text-[#2c2f37]/82",
    border: "border-[#8b633f]/24",
    imageBg: "bg-[#8b633f]",
    bullet: "bg-[#8b633f]",
    glow: "rgba(139, 99, 63, 0.28)",
    divider: "from-[#8b633f]/28"
  },
  construction: {
    section: "bg-[#111111] text-[#ede7dd]",
    eyebrow: "text-[#c5b08f]",
    text: "text-[#d9dddc]/88",
    muted: "text-[#d9dddc]/72",
    border: "border-[#c5b08f]/24",
    imageBg: "bg-[#151515]",
    bullet: "bg-[#c5b08f]",
    glow: "rgba(197, 176, 143, 0.24)",
    divider: "from-[#c5b08f]/30",
    wash: "from-[#111111] via-[#17130f] to-[#080808]"
  }
};

function AboutSection() {
  return (
    <section id="about" className="scroll-mt-24 bg-[#f4f2ef] py-16 text-[#231f20] md:py-24">
      <div className="section-shell">
        <div className="grid gap-10 xl:grid-cols-[0.72fr_1.28fr]">
          <Reveal>
            <h2 className="max-w-[24rem] text-6xl font-extrabold uppercase leading-[1.05] tracking-[0.01em] sm:text-7xl md:text-8xl">
              About
              <span className="block">Us</span>
            </h2>
          </Reveal>

          <Reveal className="border-l-2 border-[#231f20]/75 pl-8 md:pl-10" delay={0.08}>
            <div className="max-w-4xl space-y-7 text-xl leading-8 text-[#343031] md:text-2xl md:leading-9">
              {aboutSection.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </Reveal>
        </div>

        <Reveal
          className="interactive-surface group mt-8 min-h-[280px] overflow-hidden rounded-[0.65rem] border border-[#8b633f]/14 bg-[#8f8982] md:mt-10 md:min-h-[360px]"
          delay={0.12}
        >
          <div
            className="h-full min-h-[280px] bg-cover bg-center opacity-90 grayscale-[0.15] transition duration-700 group-hover:scale-[1.04] group-hover:opacity-100 md:min-h-[360px]"
            style={{ backgroundImage: `url(${aboutSection.image})`, "--surface-glow": "rgba(139, 99, 63, 0.22)" }}
          />
        </Reveal>
      </div>
    </section>
  );
}

function HomeDivisionSection({ division, index }) {
  const isInterior = division.layout === "interior";
  const theme = sectionThemes[division.theme] || sectionThemes.interior;

  if (division.theme === "construction") {
    const constructionImages = division.images || [division.image];

    return (
      <article id={division.id} className={`scroll-mt-24 overflow-hidden py-14 md:py-20 ${theme.section}`}>
        <div className="section-shell">
          <div className="grid gap-10 xl:grid-cols-[0.72fr_1.28fr]">
            <Reveal className="flex flex-col justify-between">
              <div>
                <span className={`text-xs font-bold uppercase tracking-[0.28em] ${theme.eyebrow}`}>
                  {division.eyebrow}
                </span>
                <h2 className="mt-5 max-w-xl text-balance text-4xl font-extrabold uppercase leading-none tracking-[0.02em] sm:text-5xl md:text-7xl">
                  From shell to ready space.
                </h2>
                <p className={`mt-6 max-w-md text-base leading-7 md:text-lg ${theme.text}`}>
                  Clean finishing, coordinated trades, and a polished handover.
                </p>
              </div>

              <div className="mt-10 grid grid-cols-3 gap-3">
                {["Plan", "Build", "Finish"].map((step, stepIndex) => (
                  <div
                    key={step}
                    className={`rounded-[1.1rem] border ${theme.border} bg-white/[0.035] p-4`}
                  >
                    <p className={`text-xs font-bold uppercase tracking-[0.2em] ${theme.eyebrow}`}>
                      0{stepIndex + 1}
                    </p>
                    <p className="mt-4 text-lg font-extrabold text-white">{step}</p>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <div className="grid gap-5">
                <div className="grid gap-5 md:grid-cols-2">
                  {constructionImages.slice(0, 2).map((image, imageIndex) => (
                    <div
                      key={image}
                      className="interactive-surface relative min-h-[430px] overflow-hidden rounded-[1.65rem] border border-[#c5b08f]/20 bg-[#080808] shadow-[0_30px_90px_rgba(0,0,0,0.34)] md:min-h-[560px]"
                      style={{ "--surface-glow": theme.glow }}
                    >
                      <div
                        className="absolute inset-0 bg-cover bg-center transition duration-700 hover:scale-[1.04]"
                        style={{ backgroundImage: `url(${image})` }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/48 via-black/8 to-transparent" />
                      {imageIndex === 0 ? (
                        <div className="absolute bottom-5 left-5 rounded-full border border-[#c5b08f]/24 bg-black/54 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-[#dfc79d] backdrop-blur">
                          Site execution
                        </div>
                      ) : null}
                    </div>
                  ))}
                </div>

                <div
                  className="interactive-surface relative min-h-[190px] overflow-hidden rounded-[1.45rem] border border-[#c5b08f]/20 bg-[#111111] shadow-[0_24px_70px_rgba(0,0,0,0.3)] md:min-h-[230px]"
                  style={{ "--surface-glow": theme.glow }}
                >
                  <div
                    className="absolute inset-0 bg-cover bg-center transition duration-700 hover:scale-[1.03]"
                    style={{ backgroundImage: `url(${constructionImages[2] || constructionImages[0]})` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/24 to-transparent" />
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </article>
    );
  }

  if (division.theme === "furniture") {
    const furnitureImages = division.images || [
      division.image,
      trustVisuals[0],
      trustVisuals[2],
      trustVisuals[3]
    ];

    return (
      <article id={division.id} className={`scroll-mt-24 py-14 md:py-20 ${theme.section}`}>
        <div className="section-shell">
          <div className="grid gap-10 xl:grid-cols-[0.82fr_1.18fr]">
            <Reveal className="flex min-w-0 flex-col justify-center">
              <span className={`text-xs font-bold uppercase tracking-[0.28em] ${theme.eyebrow}`}>
                {division.eyebrow}
              </span>
              <h2 className="mt-5 max-w-2xl break-words text-balance text-4xl font-extrabold uppercase leading-[1.02] sm:text-5xl md:text-7xl">
                Custom furniture. Ready spaces.
              </h2>
              <p className={`mt-6 max-w-xl text-base leading-7 md:text-lg ${theme.text}`}>
                Built-in pieces, office furniture, and home setup details made to feel calm and complete.
              </p>

              <div className="mt-9 grid gap-4 sm:grid-cols-2">
                {division.columns.map((column) => (
                  <motion.div
                    key={column.title}
                    className="interactive-surface rounded-[1.25rem] border border-[#8b633f]/18 bg-white/58 p-5 shadow-[0_20px_55px_rgba(74,53,32,0.1)]"
                    style={{ "--surface-glow": theme.glow }}
                    whileHover={{ y: -4 }}
                  >
                    <h3 className="text-xl font-extrabold text-[#211a14]">{column.title}</h3>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {column.items.map((item) => (
                        <span
                          key={item}
                          className="rounded-full border border-[#8b633f]/16 bg-white/54 px-3 py-2 text-xs font-bold uppercase tracking-[0.16em] text-[#6c5035]"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </Reveal>

            <Reveal className="grid min-h-[560px] gap-4 md:grid-cols-[1.14fr_0.86fr]" delay={0.08}>
              <div
                aria-label="Custom furniture setup"
                className="interactive-surface group min-h-[420px] overflow-hidden rounded-[1.8rem] border border-[#8b633f]/14 bg-[#8b633f]"
                style={{ "--surface-glow": theme.glow }}
              >
                <div
                  className="h-full min-h-[420px] bg-cover bg-center transition duration-700 group-hover:scale-[1.045]"
                  style={{ backgroundImage: `url(${furnitureImages[0]})` }}
                />
              </div>

              <div className="grid gap-4">
                {furnitureImages.slice(1).map((image, imageIndex) => (
                  <motion.div
                    key={image}
                    aria-label={`Furniture detail ${imageIndex + 1}`}
                    className="interactive-surface group min-h-[170px] overflow-hidden rounded-[1.4rem] border border-[#8b633f]/14 bg-[#8b633f]"
                    style={{ "--surface-glow": theme.glow }}
                    whileHover={{ y: -4 }}
                  >
                    <div
                      className="h-full min-h-[170px] bg-cover bg-center transition duration-700 group-hover:scale-[1.06]"
                      style={{ backgroundImage: `url(${image})` }}
                    />
                  </motion.div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </article>
    );
  }

  if (division.theme === "interior") {
    const interiorImages = (division.images || [
      division.image,
      trustVisuals[1],
      trustVisuals[0],
      trustVisuals[3]
    ]).filter(Boolean);

    return (
      <article id={division.id} className={`scroll-mt-24 overflow-hidden py-14 md:py-20 ${theme.section}`}>
        <div className="section-shell">
          <div className="grid gap-10 xl:grid-cols-[1.18fr_0.82fr]">
            <Reveal className="grid min-h-[560px] gap-4 md:grid-cols-[1.08fr_0.92fr]">
              <div
                aria-label="Interior design concept"
                className="interactive-surface group min-h-[420px] overflow-hidden rounded-[1.8rem] border border-[#e9c99d]/16 bg-[#17100b]"
                style={{ "--surface-glow": theme.glow }}
              >
                <div
                  className="h-full min-h-[420px] bg-cover bg-center transition duration-700 group-hover:scale-[1.045]"
                  style={{ backgroundImage: `url(${interiorImages[0]})` }}
                />
              </div>

              <div className="grid gap-4">
                {interiorImages.slice(1).map((image, imageIndex) => (
                  <motion.div
                    key={image}
                    aria-label={`Interior mood ${imageIndex + 1}`}
                    className="interactive-surface group min-h-[170px] overflow-hidden rounded-[1.4rem] border border-[#e9c99d]/16 bg-[#17100b]"
                    style={{ "--surface-glow": theme.glow }}
                    whileHover={{ y: -4 }}
                  >
                    <div
                      className="h-full min-h-[170px] bg-cover bg-center transition duration-700 group-hover:scale-[1.06]"
                      style={{ backgroundImage: `url(${image})` }}
                    />
                  </motion.div>
                ))}
              </div>
            </Reveal>

            <Reveal className="flex min-w-0 flex-col justify-center" delay={0.08}>
              <span className={`text-xs font-bold uppercase tracking-[0.28em] ${theme.eyebrow}`}>
                {division.eyebrow}
              </span>
              <h2 className="mt-5 max-w-xl text-balance text-4xl font-extrabold uppercase leading-none tracking-[0.02em] sm:text-5xl md:text-7xl">
                Calm spaces. Clear direction.
              </h2>
              <p className={`mt-6 max-w-md text-base leading-7 md:text-lg ${theme.text}`}>
                Interior concepts shaped through layout, mood, materials, and supervision.
              </p>

              <div className="mt-9 grid gap-3">
                {division.features.map((feature) => (
                  <motion.div
                    key={feature.title}
                    className={`interactive-surface flex items-center gap-4 rounded-[1.15rem] border ${theme.border} bg-white/[0.035] p-4`}
                    style={{ "--surface-glow": theme.glow }}
                    whileHover={{ x: 5 }}
                  >
                    <span className={`h-2.5 w-2.5 rounded-full ${theme.bullet}`} />
                    <h3 className="text-lg font-extrabold text-white">{feature.title}</h3>
                  </motion.div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </article>
    );
  }

  if (isInterior) {
    return (
      <article id={division.id} className={`scroll-mt-24 overflow-hidden py-14 md:py-20 ${theme.section}`}>
        <div className="section-shell">
          <div className="grid items-end gap-8 xl:grid-cols-[0.82fr_1.18fr]">
            <Reveal className="max-w-2xl">
              <span className={`text-xs font-bold uppercase tracking-[0.28em] ${theme.eyebrow}`}>
                {division.eyebrow}
              </span>
              <h2 className="mt-5 text-balance text-4xl font-extrabold uppercase leading-none tracking-[0.02em] sm:text-5xl md:text-7xl">
                {division.title}
              </h2>
              <p className={`mt-6 max-w-xl text-base leading-7 md:text-lg ${theme.text}`}>
                {division.intro}
              </p>
            </Reveal>

            <Reveal delay={0.06}>
              <div className={`h-px w-full bg-gradient-to-r ${theme.divider} to-transparent`} />
            </Reveal>
          </div>

          <div className="mt-10 grid gap-5 xl:grid-cols-[1.32fr_0.68fr]">
            <Reveal
              className={`interactive-surface group relative min-h-[560px] overflow-hidden rounded-[1.6rem] border ${theme.border} ${theme.imageBg}`}
              delay={0.08}
            >
              <div
                className="absolute inset-0 bg-cover bg-center transition duration-700 group-hover:scale-[1.045]"
                style={{ backgroundImage: `url(${division.image})`, "--surface-glow": theme.glow }}
              />
              <div className={`absolute inset-0 bg-gradient-to-t ${theme.wash} opacity-45`} />
              <div className="absolute bottom-5 left-5 rounded-full border border-white/12 bg-black/28 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-white/82 backdrop-blur-md">
                Visual direction
              </div>
            </Reveal>

            <Reveal className="grid gap-4" delay={0.12}>
              {division.features.map((feature) => (
                <motion.div
                  key={feature.title}
                  className={`interactive-surface rounded-[1.2rem] border ${theme.border} bg-white/[0.035] p-5 transition`}
                  style={{ "--surface-glow": theme.glow }}
                  whileHover={{ y: -4 }}
                >
                  <div className="flex items-center gap-4">
                    <span className={`h-2.5 w-2.5 rounded-full ${theme.bullet}`} />
                    <h3 className="text-xl font-extrabold">{feature.title}</h3>
                  </div>
                </motion.div>
              ))}
            </Reveal>
          </div>
        </div>
      </article>
    );
  }

  return (
    <article
      id={division.id}
      className={`scroll-mt-24 py-14 md:py-20 ${theme.section}`}
    >
      <div className="section-shell">
        <div className="grid min-w-0 items-stretch gap-10 xl:grid-cols-[0.9fr_1.1fr]">
          <Reveal className={`interactive-surface group min-h-[520px] min-w-0 overflow-hidden rounded-[0.65rem] ${theme.imageBg}`}>
            <div
              className="h-full min-h-[520px] bg-cover bg-center transition duration-700 group-hover:scale-[1.045]"
              style={{ backgroundImage: `url(${division.image})`, "--surface-glow": theme.glow }}
            />
          </Reveal>

          <Reveal className={`flex min-w-0 flex-col justify-center border-t-4 pt-8 ${theme.border}`} delay={0.08}>
            <span className={`text-sm font-bold uppercase tracking-[0.28em] ${theme.eyebrow}`}>
              {division.eyebrow}
            </span>
            <h2 className="mt-4 max-w-3xl break-words text-balance text-4xl font-extrabold uppercase leading-[1.08] sm:text-5xl md:text-7xl">
              {division.title}
            </h2>
            <div className={`mt-8 max-w-2xl text-lg leading-8 ${theme.text}`}>
              <p>{division.intro}</p>
            </div>

            <div className="mt-8 grid gap-4 md:grid-cols-2">
              {division.columns.map((column) => (
                <motion.div
                  key={column.title}
                  className={`interactive-surface rounded-[1.2rem] border p-5 transition ${theme.border}`}
                  style={{ "--surface-glow": theme.glow }}
                  whileHover={{ y: -6 }}
                >
                  <h3 className="text-xl font-extrabold">{column.title}</h3>
                  <ul className={`mt-5 space-y-3 text-base ${theme.text}`}>
                    {column.items.map((item) => (
                      <li key={item} className="flex items-center gap-3">
                        <span className={`h-1.5 w-1.5 rounded-full ${theme.bullet}`} />
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </article>
  );
}

export default function HomePage() {
  const shellRef = useRef(null);
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reduceMotion.matches) {
      return undefined;
    }

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".hero-copy",
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1.1, delay: 0.15, ease: "power3.out" }
      );

      gsap.utils.toArray(".parallax-media").forEach((section, index) => {
        gsap.to(section, {
          yPercent: index % 2 === 0 ? -10 : 10,
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top bottom",
            end: "bottom top",
            scrub: true
          }
        });
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
      <SiteHeader links={homeLinks} />

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
                style={{ backgroundImage: `url(${heroSlides[activeSlide].image})` }}
              />
            </motion.div>
          </AnimatePresence>

          <div className="hero-gradient absolute inset-0" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(233,201,157,0.2),transparent_32%)]" />

          <div className="section-shell relative z-10 flex min-h-screen items-end pb-12 pt-28 md:pb-16 md:pt-36">
            <div className="grid w-full items-end gap-10 lg:grid-cols-[minmax(0,1fr)_420px]">
              <div className="hero-copy max-w-4xl">
                <span className="eyebrow">Premium spaces in Ethiopia</span>
                <h1 className="display-title mt-6 max-w-5xl text-balance text-white">
                  Design. Build. Furnish.
                </h1>
                <p className="mt-6 max-w-2xl text-balance text-base leading-8 text-white/75 md:text-lg">
                  We invite you to explore our journey, our work, and the value we bring to every
                  project we undertake.
                </p>

                <div className="mt-9 flex flex-wrap items-center gap-4">
                  <a
                    className="luxury-button inline-flex items-center gap-2"
                    href={whatsappHref}
                    rel="noreferrer"
                    target="_blank"
                  >
                    Start Your Project
                    <ArrowRight className="h-4 w-4" />
                  </a>
                  <Link className="secondary-button inline-flex items-center gap-2" href="/portfolio">
                    View Portfolio
                    <MoveRight className="h-4 w-4" />
                  </Link>
                </div>

                <div className="mt-10 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
                  {stats.map((stat) => (
                    <AnimatedCounter key={stat.label} {...stat} />
                  ))}
                </div>
              </div>

              <div className="hidden gap-3 lg:grid">
                {serviceGroups.map((division) => (
                  <a
                    key={division.title}
                    aria-label={`Go to ${division.label}`}
                    className="group relative min-h-[132px] overflow-hidden rounded-[1.4rem] border border-white/10 transition hover:-translate-y-1 hover:border-[#e9c99d]/45"
                    href={division.href}
                  >
                    <span
                      className="absolute inset-0 bg-cover bg-center transition duration-500 group-hover:scale-[1.07]"
                      style={{ backgroundImage: `url(${division.image})` }}
                    />
                    <span className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                    <span className="absolute bottom-4 left-4 text-left text-xs font-semibold uppercase tracking-[0.24em] text-white/78">
                      {division.label}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section aria-label="Trusted by" className="overflow-hidden border-y border-white/10 bg-[#0c0a08] py-7">
          <div className="mb-5 flex justify-center px-6">
            <span className="eyebrow text-white/48">Trusted by</span>
          </div>
          <div className="relative">
            <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-[#0c0a08] to-transparent md:w-32" />
            <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-[#0c0a08] to-transparent md:w-32" />
            <div className="marquee-track flex w-max items-center gap-5 px-5">
              {[...logos, ...logos].map((logo, index) => (
                <div
                  key={`${logo.image}-${index}`}
                  className="flex h-20 w-40 shrink-0 items-center justify-center rounded-[1.4rem] border border-[#e9c99d]/28 bg-[#f8f3ea] px-6 shadow-[0_16px_45px_rgba(0,0,0,0.24)]"
                >
                  <img
                    alt={logo.name}
                    className="max-h-12 w-auto max-w-full object-contain contrast-125 saturate-110"
                    loading="lazy"
                    src={logo.image}
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        <AboutSection />

        {homeDivisionSections.map((division, index) => (
          <HomeDivisionSection key={division.id} division={division} index={index} />
        ))}

        <section id="trust" className="py-16 md:py-24">
          <div className="section-shell grid gap-10 xl:grid-cols-[0.9fr_1.1fr]">
            <Reveal>
              <span className="eyebrow">Trust</span>
              <h2 className="section-title mt-6">Clear delivery, visible progress, calmer decisions.</h2>
              <p className="mt-6 text-base leading-8 text-white/66">
                Built for business owners, hospitality teams, luxury homeowners, diaspora clients,
                and organizations that need one accountable partner.
              </p>

              <div className="mt-8 grid gap-4">
                {testimonials.map((item) => (
                  <div key={item.name} className="glass-panel rounded-[1.6rem] p-5">
                    <p className="text-sm leading-7 text-white/72">"{item.quote}"</p>
                    <p className="mt-4 font-semibold text-white">{item.name}</p>
                    <p className="text-sm text-white/52">{item.location}</p>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal className="grid min-h-[560px] gap-4 md:grid-cols-[1.1fr_0.9fr]" delay={0.08}>
              <div
                aria-label="Premium furnished living room"
                className="min-h-[360px] rounded-[2rem] border border-white/10 bg-cover bg-center shadow-[0_30px_90px_rgba(0,0,0,0.32)]"
                style={{ backgroundImage: `url(${trustVisuals[0]})` }}
              />
              <div className="grid gap-4">
                {trustVisuals.slice(1).map((image, index) => (
                  <div
                    key={image}
                    aria-label={`Trust visual ${index + 2}`}
                    className="min-h-[170px] rounded-[1.6rem] border border-white/10 bg-cover bg-center"
                    style={{ backgroundImage: `url(${image})` }}
                  />
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        <section aria-label="Before and after transformation" className="pb-8 pt-2 md:pb-12 md:pt-4">
          <div className="section-shell grid gap-8 xl:grid-cols-[0.82fr_1.18fr] xl:items-center">
            <Reveal>
              <span className="eyebrow">Before / After</span>
              <h2 className="section-title mt-6">Visible progress after trust is earned.</h2>
              <p className="mt-6 max-w-xl text-base leading-8 text-white/66">
                A quick look at the transformation from site condition to finished handover.
              </p>
            </Reveal>

            <Reveal delay={0.08}>
              <BeforeAfterSlider
                afterImage={testimonialComparison.afterImage}
                afterLabel="After"
                ariaLabel="Compare home page before and after transformation"
                beforeImage={testimonialComparison.beforeImage}
                beforeLabel="Before"
                className="bg-white/[0.025]"
                description="Drag the handle to compare the original condition with the completed result."
                title="Before1 / After1 transformation"
              />
            </Reveal>
          </div>
        </section>

        <section id="contact" className="pb-16 pt-12 md:pb-24 md:pt-16">
          <div className="section-shell">
            <Reveal className="relative overflow-hidden rounded-[2.4rem] border border-white/10 bg-[#0c0a08] p-6 md:p-10 xl:p-14">
              <div
                className="absolute inset-0 opacity-28"
                style={{
                  backgroundImage: `url(${finalCtaImage})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center"
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black via-black/86 to-black/28" />
              <div className="relative z-10 max-w-3xl">
                <span className="eyebrow">Start Here</span>
                <h2 className="section-title mt-6">Ready to plan your space?</h2>
                <p className="mt-6 max-w-2xl text-base leading-8 text-white/70">
                  Send the property type, location, timeline, and the result you want. Harkani.Plc
                  will guide the right interior, furniture, or finishing path.
                </p>
                <div className="mt-9 flex flex-wrap gap-4">
                  <a
                    className="luxury-button inline-flex items-center gap-2"
                    href={whatsappHref}
                    rel="noreferrer"
                    target="_blank"
                  >
                    <MessageCircle className="h-4 w-4" />
                    WhatsApp Us
                  </a>
                  <a className="secondary-button inline-flex items-center gap-2" href="mailto:kena@harkani.com">
                    <Mail className="h-4 w-4" />
                    kena@harkani.com
                  </a>
                </div>
                <SocialLinks className="mt-7" />
              </div>
            </Reveal>
          </div>
        </section>
      </main>

      <WhatsAppWidget />
    </div>
  );
}
