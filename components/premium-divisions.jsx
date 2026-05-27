"use client";

import AnimatedCounter from "@/components/animated-counter";
import BeforeAfterSlider from "@/components/before-after-slider";
import Reveal from "@/components/reveal";
import { clientSegments, premiumDivisions } from "@/lib/site-data";
import { AnimatePresence, motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  ArrowLeft,
  ArrowRight,
  CircleDashed,
  Layers3,
  MonitorSmartphone,
  Sofa,
  Sparkles
} from "lucide-react";
import { useEffect, useRef, useState } from "react";

gsap.registerPlugin(ScrollTrigger);

const furnitureIcons = [Sofa, MonitorSmartphone, Sparkles, Layers3];
const whatsappHref =
  "https://wa.me/251951108127?text=Hello%20Harkani.Plc%2C%20I%20want%20to%20start%20a%20premium%20interior%2C%20finishing%2C%20or%20full%20setup%20project.";

function updateInteractiveGlow(event) {
  const bounds = event.currentTarget.getBoundingClientRect();
  event.currentTarget.style.setProperty(
    "--cursor-x",
    `${((event.clientX - bounds.left) / bounds.width) * 100}%`
  );
  event.currentTarget.style.setProperty(
    "--cursor-y",
    `${((event.clientY - bounds.top) / bounds.height) * 100}%`
  );
}

export default function PremiumDivisions() {
  const sectionRef = useRef(null);
  const [activeFurnitureIndex, setActiveFurnitureIndex] = useState(0);
  const activeFurniture = premiumDivisions.furniture.carousel[activeFurnitureIndex];

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveFurnitureIndex((current) => (current + 1) % premiumDivisions.furniture.carousel.length);
    }, 5200);

    return () => window.clearInterval(interval);
  }, []);

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reduceMotion.matches) {
      return undefined;
    }

    const ctx = gsap.context(() => {
      gsap.utils.toArray(".division-panel").forEach((panel) => {
        const backdrop = panel.querySelector(".division-backdrop");
        const copyLines = panel.querySelectorAll(".division-copy-line");
        const cards = panel.querySelectorAll(".division-card");

        gsap.fromTo(
          panel,
          { opacity: 0.45, y: 90 },
          {
            opacity: 1,
            y: 0,
            duration: 1.1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: panel,
              start: "top 76%"
            }
          }
        );

        if (backdrop) {
          gsap.fromTo(
            backdrop,
            { scale: 1.12, yPercent: -4 },
            {
              scale: 1,
              yPercent: 8,
              ease: "none",
              scrollTrigger: {
                trigger: panel,
                start: "top bottom",
                end: "bottom top",
                scrub: true
              }
            }
          );
        }

        if (copyLines.length) {
          gsap.fromTo(
            copyLines,
            { opacity: 0, y: 36 },
            {
              opacity: 1,
              y: 0,
              duration: 0.9,
              stagger: 0.08,
              ease: "power3.out",
              scrollTrigger: {
                trigger: panel,
                start: "top 72%"
              }
            }
          );
        }

        if (cards.length) {
          gsap.fromTo(
            cards,
            { opacity: 0, y: 48 },
            {
              opacity: 1,
              y: 0,
              duration: 0.95,
              stagger: 0.09,
              ease: "power3.out",
              scrollTrigger: {
                trigger: panel,
                start: "top 70%"
              }
            }
          );
        }
      });

      gsap.fromTo(
        ".blueprint-progress",
        { scaleY: 0, transformOrigin: "top center" },
        {
          scaleY: 1,
          ease: "none",
          scrollTrigger: {
            trigger: ".construction-timeline",
            start: "top 72%",
            end: "bottom 55%",
            scrub: true
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="divisions" ref={sectionRef} className="py-14 md:py-20">
      <div className="section-shell">
        <Reveal className="max-w-4xl">
          <span className="eyebrow">Premium Divisions</span>
          <h2 className="section-title mt-6">One team. Three divisions.</h2>
          <p className="mt-6 text-lg leading-8 text-white/68">
            {premiumDivisions.intro.description}
          </p>
          <a
            className="luxury-button mt-8 inline-flex items-center gap-2"
            href={whatsappHref}
            rel="noreferrer"
            target="_blank"
          >
            Choose a Division
            <ArrowRight className="h-4 w-4" />
          </a>
        </Reveal>

        <Reveal className="mt-8" delay={0.08}>
          <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
            {clientSegments.map((segment) => (
              <motion.div
                key={segment}
                className="glass-panel interactive-surface rounded-full px-5 py-3 text-sm font-medium text-white/76"
                onMouseMove={updateInteractiveGlow}
                whileHover={{ y: -3 }}
              >
                {segment}
              </motion.div>
            ))}
          </div>
        </Reveal>
      </div>

      <div className="mt-10 space-y-8 md:space-y-10">
        <article className="division-panel division-panel--interiors">
          <div
            className="division-backdrop"
            style={{
              backgroundImage: `linear-gradient(180deg, rgba(5, 10, 22, 0.08), rgba(4, 8, 19, 0.62)), url(${premiumDivisions.interiors.image})`
            }}
          />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,215,74,0.18),transparent_26%),linear-gradient(135deg,rgba(4,10,22,0.82),rgba(4,10,22,0.94))]" />

          <div className="relative z-10 flex min-h-[100svh] flex-col justify-between p-5 md:p-8 xl:p-12">
            <div className="grid gap-8 xl:grid-cols-[0.88fr_1.12fr]">
              <div className="division-copy max-w-xl">
                <span className="division-copy-line eyebrow !text-[#ffd54a] before:!bg-[#ffd54a]">
                  {premiumDivisions.interiors.label}
                </span>
                <h3 className="division-title division-copy-line mt-6 text-balance text-white">
                  {premiumDivisions.interiors.title}
                </h3>
                <p className="division-copy-line mt-6 text-base leading-8 text-white/76 md:text-lg">
                  {premiumDivisions.interiors.description}
                </p>

                <div className="division-copy-line mt-8 flex flex-wrap gap-3">
                  {premiumDivisions.interiors.audiences.map((audience) => (
                    <span
                      key={audience}
                      className="rounded-full border border-[#ffd54a]/20 bg-[#ffd54a]/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-[#ffe690]"
                    >
                      {audience}
                    </span>
                  ))}
                </div>

                <div className="division-copy-line mt-10 grid gap-4">
                  {premiumDivisions.interiors.highlights.map((highlight) => (
                    <div
                      key={highlight}
                      className="glass-panel rounded-[1.5rem] border border-white/10 bg-white/[0.03] px-5 py-4 text-sm leading-7 text-white/76"
                    >
                      {highlight}
                    </div>
                  ))}
                </div>
                <a
                  className="division-copy-line luxury-button mt-8 inline-flex items-center gap-2"
                  href={whatsappHref}
                  rel="noreferrer"
                  target="_blank"
                >
                  Start Interior Project
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>

              <div className="grid gap-4">
                <motion.div
                  className="division-card group relative min-h-[360px] overflow-hidden rounded-[2rem] border border-white/10"
                  onMouseMove={updateInteractiveGlow}
                  style={{ "--surface-glow": "rgba(255, 213, 74, 0.24)" }}
                  whileHover={{ y: -4 }}
                >
                  <div
                    className="absolute inset-0 bg-cover bg-center transition duration-700 ease-out group-hover:scale-[1.08]"
                    style={{
                      backgroundImage: `linear-gradient(180deg, rgba(7, 12, 28, 0.05), rgba(7, 12, 28, 0.58)), url(${premiumDivisions.interiors.gallery[1].image})`
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#03111f] via-[#03111f]/10 to-transparent" />

                  <div className="relative flex h-full flex-col justify-between p-5 md:p-6">
                    <div className="flex items-start justify-between gap-4">
                      <span className="rounded-full border border-[#ffd54a]/28 bg-[#051629]/60 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-[#ffe37d] backdrop-blur-xl">
                        Fullscreen showcase
                      </span>
                      <span className="text-xs uppercase tracking-[0.24em] text-white/56">
                        Creative direction
                      </span>
                    </div>

                    <div className="space-y-4">
                      <h4 className="max-w-lg text-3xl font-semibold text-white">
                        Interior spaces with a finished look.
                      </h4>
                    </div>
                  </div>
                </motion.div>

                <div className="grid gap-4 md:grid-cols-3">
                  {premiumDivisions.interiors.gallery.map((item) => (
                    <motion.article
                      key={item.title}
                      className="division-card interactive-surface group relative min-h-[230px] overflow-hidden rounded-[1.8rem] border border-white/10"
                      onMouseMove={updateInteractiveGlow}
                      style={{ "--surface-glow": "rgba(255, 213, 74, 0.22)" }}
                      whileHover={{ y: -6 }}
                    >
                      <div
                        className="absolute inset-0 bg-cover bg-center transition duration-700 ease-out group-hover:scale-[1.1]"
                        style={{
                          backgroundImage: `linear-gradient(180deg, rgba(6, 12, 26, 0.06), rgba(6, 12, 26, 0.74)), url(${item.image})`
                        }}
                      />
                      <div className="relative flex h-full flex-col justify-end p-5">
                        <span className="mb-3 inline-flex w-fit rounded-full border border-white/10 bg-black/25 px-3 py-2 text-[0.65rem] font-semibold uppercase tracking-[0.24em] text-white/74 backdrop-blur-md">
                          {item.tag}
                        </span>
                        <h4 className="text-xl font-semibold text-white">{item.title}</h4>
                      </div>
                    </motion.article>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-8 grid gap-4 md:grid-cols-2">
              {premiumDivisions.interiors.floatingCards.map((card) => (
                <div
                  key={card.title}
                  className="division-card glass-panel rounded-[1.6rem] border border-white/10 bg-white/[0.03] p-5"
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#ffe37d]">
                    {card.title}
                  </p>
                  <p className="mt-3 text-sm leading-7 text-white/72">{card.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </article>

        <article className="division-panel division-panel--construction blueprint-overlay">
          <div
            className="division-backdrop"
            style={{
              backgroundImage: `linear-gradient(180deg, rgba(8, 12, 19, 0.12), rgba(8, 12, 19, 0.74)), url(${premiumDivisions.construction.image})`
            }}
          />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(66,120,255,0.16),transparent_28%),linear-gradient(135deg,rgba(10,12,16,0.84),rgba(8,11,15,0.96))]" />

          <div className="relative z-10 flex min-h-[100svh] flex-col justify-between p-5 md:p-8 xl:p-12">
            <div className="grid gap-8 xl:grid-cols-[0.78fr_1.22fr]">
              <div className="division-copy max-w-xl">
                <span className="division-copy-line eyebrow !text-[#7ea5ff] before:!bg-[#7ea5ff]">
                  {premiumDivisions.construction.label}
                </span>
                <h3 className="division-title division-copy-line mt-6 text-balance text-white">
                  {premiumDivisions.construction.title}
                </h3>
                <p className="division-copy-line mt-6 text-base leading-8 text-white/74 md:text-lg">
                  {premiumDivisions.construction.description}
                </p>

                <div className="division-copy-line mt-8 flex flex-wrap gap-3">
                  {[
                    "Gypsum & partitions",
                    "Tiles & skirting",
                    "Paint work",
                    "Electric wiring",
                    "Aluminum",
                    "Sanitary",
                    "Epoxy flooring"
                  ].map((item) => (
                    <span
                      key={item}
                      className="inline-flex items-center gap-2 rounded-full border border-[#7ea5ff]/20 bg-[#7ea5ff]/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#dce6ff]"
                    >
                      <CircleDashed className="h-4 w-4 text-[#7ea5ff]" />
                      {item}
                    </span>
                  ))}
                </div>
                <a
                  className="division-copy-line luxury-button mt-8 inline-flex items-center gap-2"
                  href={whatsappHref}
                  rel="noreferrer"
                  target="_blank"
                >
                  Start Finishing Work
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>

              <div className="grid gap-4 md:grid-cols-3">
                {premiumDivisions.construction.metrics.map((metric) => (
                  <AnimatedCounter
                    key={metric.label}
                    {...metric}
                    className="division-card border border-white/10 bg-white/[0.035]"
                    labelClassName="text-[#d6def2]/72"
                    valueClassName="text-white"
                  />
                ))}
              </div>
            </div>

            <div className="mt-10 grid gap-6 xl:grid-cols-[1.02fr_0.98fr]">
              <div className="division-card">
                <BeforeAfterSlider
                  accentColor="#5a88ff"
                  afterImage={premiumDivisions.construction.comparison.afterImage}
                  afterLabel={premiumDivisions.construction.comparison.afterLabel}
                  beforeImage={premiumDivisions.construction.comparison.beforeImage}
                  beforeLabel={premiumDivisions.construction.comparison.beforeLabel}
                  className="border border-white/10 bg-white/[0.03]"
                  description="Drag to compare raw shell and finished handover."
                  title="Before / after finish"
                />

                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  {premiumDivisions.construction.showcases.map((item) => (
                    <div
                      key={item.title}
                      className="division-card glass-panel rounded-[1.6rem] border border-white/10 bg-white/[0.03] p-5"
                    >
                      <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#7ea5ff]">
                        Commercial showcase
                      </p>
                      <h4 className="mt-3 text-xl font-semibold text-white">{item.title}</h4>
                      <p className="mt-3 text-sm leading-7 text-white/68">{item.detail}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="construction-timeline division-card glass-panel relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03] p-5 md:p-6">
                <div className="pointer-events-none absolute bottom-6 left-7 top-24 w-px bg-white/10">
                  <div className="blueprint-progress absolute inset-0 bg-gradient-to-b from-[#7ea5ff] via-[#7ea5ff]/40 to-transparent" />
                </div>

                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#7ea5ff]">
                  Execution timeline
                </p>
                <h4 className="mt-4 max-w-lg text-3xl font-semibold text-white">
                  Four steps from site audit to handover.
                </h4>

                <div className="mt-8 space-y-5">
                  {premiumDivisions.construction.timeline.map((item) => (
                    <div key={item.stage} className="timeline-step relative pl-10">
                      <div className="absolute left-0 top-1 flex h-6 w-6 items-center justify-center rounded-full border border-[#7ea5ff]/35 bg-[#7ea5ff]/12 text-[0.65rem] font-semibold text-[#d5e0ff]">
                        {item.stage}
                      </div>
                      <h5 className="text-lg font-semibold text-white">{item.title}</h5>
                      <p className="mt-2 text-sm leading-7 text-[#d6def2]/72">{item.detail}</p>
                    </div>
                  ))}
                </div>
                <a
                  className="secondary-button mt-8 inline-flex items-center gap-2"
                  href={whatsappHref}
                  rel="noreferrer"
                  target="_blank"
                >
                  Talk About Timeline
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </article>

        <article className="division-panel division-panel--furniture">
          <div
            className="division-backdrop"
            style={{
              backgroundImage: `linear-gradient(180deg, rgba(255, 255, 255, 0.04), rgba(90, 67, 42, 0.32)), url(${premiumDivisions.furniture.image})`
            }}
          />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.42),transparent_26%),linear-gradient(135deg,rgba(236,224,206,0.94),rgba(214,189,159,0.96))]" />

          <div className="relative z-10 flex min-h-[100svh] flex-col justify-between p-5 md:p-8 xl:p-12">
            <div className="grid gap-8 xl:grid-cols-[0.78fr_1.22fr]">
              <div className="division-copy max-w-xl text-[#201a15]">
                <span className="division-copy-line eyebrow !text-[#5f4831] before:!bg-[#8e6a46]">
                  {premiumDivisions.furniture.label}
                </span>
                <h3 className="division-title division-copy-line mt-6 text-balance text-[#201a15]">
                  {premiumDivisions.furniture.title}
                </h3>
                <p className="division-copy-line mt-6 text-base leading-8 text-[#4f4033] md:text-lg">
                  {premiumDivisions.furniture.description}
                </p>

                <div className="division-copy-line mt-8 rounded-[1.8rem] border border-[#5a4430]/10 bg-white/45 p-5 shadow-[0_24px_70px_rgba(74,53,32,0.12)] backdrop-blur-xl">
                  <p className="text-xs font-semibold uppercase tracking-[0.26em] text-[#6c5035]">
                    Everything in one place
                  </p>
                  <p className="mt-3 text-sm leading-7 text-[#524130]">
                    Furniture, decor, electronics, and move-in readiness in one package.
                  </p>
                </div>

                <div className="division-copy-line mt-8 grid gap-4 md:grid-cols-2">
                  {premiumDivisions.furniture.setupCategories.map((item, index) => {
                    const Icon = furnitureIcons[index % furnitureIcons.length];

                    return (
                      <motion.div
                        key={item.title}
                        className="division-card interactive-surface warm-panel rounded-[1.6rem] p-5"
                        onMouseMove={updateInteractiveGlow}
                        style={{ "--surface-glow": "rgba(120, 83, 47, 0.16)" }}
                        whileHover={{ y: -4 }}
                      >
                        <div className="flex items-center gap-3">
                          <div className="flex h-11 w-11 items-center justify-center rounded-full border border-[#6c5035]/12 bg-white/60 text-[#5d4630]">
                            <Icon className="h-4 w-4" />
                          </div>
                          <p className="text-lg font-semibold text-[#201a15]">{item.title}</p>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
                <a
                  className="division-copy-line luxury-button mt-8 inline-flex items-center gap-2"
                  href={whatsappHref}
                  rel="noreferrer"
                  target="_blank"
                >
                  Order Furniture Setup
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>

              <div className="division-card warm-panel overflow-hidden rounded-[2.2rem] p-4 md:p-6">
                <div className="grid gap-6 xl:grid-cols-[1.1fr_0.9fr]">
                  <div className="relative overflow-hidden rounded-[2rem] border border-[#5b4631]/10 bg-[#1f1a16]">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={activeFurniture.id}
                        animate={{ opacity: 1, x: 0 }}
                        className="relative min-h-[460px]"
                        exit={{ opacity: 0, x: -26 }}
                        initial={{ opacity: 0, x: 26 }}
                        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                      >
                        <div
                          className="absolute inset-0 bg-cover bg-center"
                          style={{
                            backgroundImage: `linear-gradient(180deg, rgba(23, 17, 13, 0.04), rgba(23, 17, 13, 0.7)), url(${activeFurniture.image})`
                          }}
                        />
                        <div className="relative flex h-full flex-col justify-between p-5 md:p-6">
                          <div className="flex items-center justify-between gap-4">
                            <span className="rounded-full border border-white/12 bg-black/25 px-4 py-2 text-[0.65rem] font-semibold uppercase tracking-[0.24em] text-[#f7e9d0] backdrop-blur-md">
                              Showroom carousel
                            </span>
                            <div className="flex items-center gap-2">
                              <button
                                aria-label="Previous showroom item"
                                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/12 bg-black/25 text-white/80 backdrop-blur-md transition hover:border-white/25 hover:text-white"
                                onClick={() =>
                                  setActiveFurnitureIndex(
                                    (current) =>
                                      (current - 1 + premiumDivisions.furniture.carousel.length) %
                                      premiumDivisions.furniture.carousel.length
                                  )
                                }
                                type="button"
                              >
                                <ArrowLeft className="h-4 w-4" />
                              </button>
                              <button
                                aria-label="Next showroom item"
                                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/12 bg-black/25 text-white/80 backdrop-blur-md transition hover:border-white/25 hover:text-white"
                                onClick={() =>
                                  setActiveFurnitureIndex(
                                    (current) => (current + 1) % premiumDivisions.furniture.carousel.length
                                  )
                                }
                                type="button"
                              >
                                <ArrowRight className="h-4 w-4" />
                              </button>
                            </div>
                          </div>

                          <div className="max-w-lg space-y-4">
                            <div className="flex flex-wrap gap-2">
                              {activeFurniture.tags.map((tag) => (
                                <span
                                  key={tag}
                                  className="rounded-full border border-white/12 bg-black/25 px-3 py-2 text-[0.65rem] font-semibold uppercase tracking-[0.24em] text-[#f4e6ce] backdrop-blur-md"
                                >
                                  {tag}
                                </span>
                              ))}
                            </div>
                            <h4 className="text-3xl font-semibold text-white">{activeFurniture.title}</h4>
                          </div>
                        </div>
                      </motion.div>
                    </AnimatePresence>
                  </div>

                  <div className="space-y-4">
                    <div className="rounded-[1.8rem] border border-[#5a4430]/10 bg-white/56 p-5 shadow-[0_24px_70px_rgba(74,53,32,0.12)]">
                      <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#6d5237]">
                        Catalog feel
                      </p>
                      <h4 className="mt-3 text-2xl font-semibold text-[#201a15]">
                        Premium showroom flow for clients who want a complete answer.
                      </h4>
                      <p className="mt-3 text-sm leading-7 text-[#59493a]">
                        Furniture, electronics, decor, and styling selected together.
                      </p>
                      <a
                        className="mt-5 inline-flex items-center gap-2 rounded-full border border-[#5a4430]/20 bg-[#2a2018] px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#3a2a1f]"
                        href={whatsappHref}
                        rel="noreferrer"
                        target="_blank"
                      >
                        Request Catalog
                        <ArrowRight className="h-4 w-4" />
                      </a>
                    </div>

                    <div className="space-y-3">
                      {premiumDivisions.furniture.carousel.map((item, index) => (
                        <button
                          key={item.id}
                          aria-current={activeFurnitureIndex === index}
                          className={`showroom-thumbnail w-full rounded-[1.5rem] border p-4 text-left transition ${
                            activeFurnitureIndex === index
                              ? "border-[#7a5b3d]/30 bg-[#2a2018] text-white shadow-[0_24px_70px_rgba(74,53,32,0.22)]"
                              : "border-[#5a4430]/10 bg-white/46 text-[#2b2118] hover:border-[#7a5b3d]/24 hover:bg-white/62"
                          }`}
                          onClick={() => setActiveFurnitureIndex(index)}
                          type="button"
                        >
                          <div className="flex items-center justify-between gap-4">
                            <span className="text-sm font-semibold">{item.title}</span>
                            <span className="text-[0.65rem] uppercase tracking-[0.24em] opacity-70">
                              0{index + 1}
                            </span>
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-5 grid gap-4 md:grid-cols-3">
                  {activeFurniture.highlights.map((highlight) => (
                    <motion.div
                      key={highlight}
                      className="division-card interactive-surface warm-panel rounded-[1.5rem] p-5"
                      onMouseMove={updateInteractiveGlow}
                      style={{ "--surface-glow": "rgba(120, 83, 47, 0.16)" }}
                      whileHover={{ y: -4 }}
                    >
                      <p className="text-sm leading-7 text-[#4d3f32]">{highlight}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
