"use client";

import AnimatedCounter from "@/components/animated-counter";
import CursorGlow from "@/components/cursor-glow";
import Reveal from "@/components/reveal";
import SiteHeader from "@/components/site-header";
import {
  featuredProjects,
  heroSlides,
  serviceGroups,
  stats,
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
  { label: "Services", href: "#services" },
  { label: "Featured", href: "#featured" },
  { label: "Trust", href: "#trust" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Contact", href: "#contact" }
];

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
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(216,193,138,0.1),transparent_28%,transparent_72%,rgba(216,193,138,0.045))]" />

          <div className="section-shell relative z-10 flex min-h-screen items-end pb-12 pt-28 md:pb-16 md:pt-36">
            <div className="grid w-full items-end gap-10 lg:grid-cols-[minmax(0,1fr)_420px]">
              <div className="hero-copy max-w-4xl">
                <span className="eyebrow">Premium spaces in Ethiopia</span>
                <h1 className="display-title mt-6 max-w-5xl text-balance text-white">
                  Design. Build. Furnish.
                </h1>
                <p className="mt-6 max-w-2xl text-balance text-base leading-8 text-white/75 md:text-lg">
                  Interior design, furniture, finishing construction, furnishing, and decoration
                  from one accountable team.
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

                <div className="mt-10 grid gap-3 sm:grid-cols-3">
                  {stats.map((stat) => (
                    <AnimatedCounter key={stat.label} {...stat} />
                  ))}
                </div>
              </div>

              <div className="hidden gap-3 lg:grid">
                {heroSlides.map((slide, index) => (
                  <button
                    key={slide.label}
                    aria-label={`Show ${slide.label}`}
                    className={`group relative min-h-[132px] overflow-hidden border transition ${
                      index === activeSlide
                        ? "border-[#d8c18a]/45"
                        : "border-white/10 hover:border-white/22"
                    }`}
                    onClick={() => setActiveSlide(index)}
                    type="button"
                  >
                    <span
                      className="absolute inset-0 bg-cover bg-center transition duration-500 group-hover:scale-[1.07]"
                      style={{ backgroundImage: `url(${slide.image})` }}
                    />
                    <span className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                    <span className="absolute bottom-4 left-4 text-left text-[0.68rem] font-semibold uppercase tracking-[0.28em] text-white/70">
                      {slide.label}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="py-16 md:py-24">
          <div className="section-shell">
            <Reveal className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
              <div className="max-w-3xl">
                <span className="eyebrow">Services</span>
                <h2 className="section-title mt-6">Choose the exact help you need.</h2>
              </div>
              <a
                className="luxury-button inline-flex w-fit items-center gap-2"
                href={whatsappHref}
                rel="noreferrer"
                target="_blank"
              >
                Get Service Quote
                <ArrowRight className="h-4 w-4" />
              </a>
            </Reveal>

            <div className="mt-10 grid gap-5 lg:grid-cols-3">
              {serviceGroups.map((group, index) => (
                <Reveal key={group.title} delay={index * 0.05}>
                  <article className="interactive-surface h-full overflow-hidden border border-white/10 bg-white/[0.025]">
                    <div
                      className="h-64 bg-cover bg-center"
                      style={{ backgroundImage: `url(${group.image})` }}
                    />
                    <div className="p-6">
                      <h3 className="text-2xl font-semibold text-white">{group.title}</h3>
                      <div className="mt-5 space-y-3">
                        {group.groups
                          ? group.groups.map((subgroup) => (
                              <div key={subgroup.title}>
                                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#d8c18a]">
                                  {subgroup.title}
                                </p>
                                <div className="mt-3 space-y-2">
                                  {subgroup.items.map((item) => (
                                    <p key={item} className="text-sm text-white/72">
                                      {item}
                                    </p>
                                  ))}
                                </div>
                              </div>
                            ))
                          : group.items.map((item) => (
                              <p key={item} className="text-sm text-white/72">
                                {item}
                              </p>
                            ))}
                      </div>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section id="featured" className="py-16 md:py-24">
          <div className="section-shell">
            <Reveal className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
              <div className="max-w-3xl">
                <span className="eyebrow">Featured Projects</span>
                <h2 className="section-title mt-6">A quick preview before the full portfolio.</h2>
              </div>
              <Link className="secondary-button inline-flex w-fit items-center gap-2" href="/portfolio">
                View Full Portfolio
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Reveal>

            <div className="mt-10 grid gap-5 lg:grid-cols-3">
              {featuredProjects.map((project, index) => (
                <Reveal key={project.id} delay={index * 0.06}>
                  <Link
                    className="project-card interactive-surface group block overflow-hidden border border-white/10 bg-white/[0.025]"
                    href="/portfolio"
                  >
                    <div
                      className="h-[360px] bg-cover bg-center transition duration-700 group-hover:scale-[1.04]"
                      style={{ backgroundImage: `url(${project.image})` }}
                    />
                    <div className="flex items-center justify-between gap-4 p-5">
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#d8c18a]">
                          {project.category}
                        </p>
                        <h3 className="mt-2 text-xl font-semibold text-white">{project.title}</h3>
                      </div>
                      <ArrowRight className="h-5 w-5 text-white/60" />
                    </div>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

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
                  <div key={item.name} className="glass-panel p-5">
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
                className="min-h-[360px] border border-white/10 bg-cover bg-center shadow-[0_30px_90px_rgba(0,0,0,0.32)]"
                style={{ backgroundImage: `url(${trustVisuals[0]})` }}
              />
              <div className="grid gap-4">
                {trustVisuals.slice(1).map((image, index) => (
                  <div
                    key={image}
                    aria-label={`Trust visual ${index + 2}`}
                    className="min-h-[170px] border border-white/10 bg-cover bg-center"
                    style={{ backgroundImage: `url(${image})` }}
                  />
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        <section id="contact" className="pb-16 pt-12 md:pb-24 md:pt-16">
          <div className="section-shell">
            <Reveal className="relative overflow-hidden border border-white/10 bg-[#0c0a08] p-6 md:p-10 xl:p-14">
              <div
                className="absolute inset-0 opacity-28"
                style={{ backgroundImage: `url(${trustVisuals[1]})`, backgroundSize: "cover", backgroundPosition: "center" }}
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
              </div>
            </Reveal>
          </div>
        </section>
      </main>
    </div>
  );
}
