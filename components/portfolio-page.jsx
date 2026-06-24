"use client";

import BeforeAfterSlider from "@/components/before-after-slider";
import CursorGlow from "@/components/cursor-glow";
import Reveal from "@/components/reveal";
import SiteHeader from "@/components/site-header";
import SocialLinks from "@/components/social-links";
import WhatsAppWidget from "@/components/whatsapp-widget";
import { portfolioDivisions, projects, trustVisuals, visualProof } from "@/lib/site-data";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Grid3X3, Images, Mail, MessageCircle, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

const whatsappHref =
  "https://wa.me/251951108127?text=Hello%20Harkani.Plc%2C%20I%20saw%20the%20portfolio%20and%20want%20to%20discuss%20a%20similar%20project.";

const portfolioLinks = [
  { label: "Home", href: "/" },
  { label: "Divisions", href: "#portfolio-divisions" },
  { label: "Compare", href: "#compare" },
  { label: "Details", href: "#details" },
  { label: "Start", href: "#contact" }
];

const detailStories = [
  {
    title: "Interior Design Division",
    projectId: "restaurant-interior",
    description:
      "Interior concepts, consultation, supervision, and full interior build packages for hospitality, offices, homes, and commercial spaces.",
    notes: ["Interior design", "Consultation and supervision", "Full interior construction and decoration"]
  },
  {
    title: "Furniture Division",
    projectId: "kitchen-furniture",
    description:
      "Custom furniture and ready-space setup for homes and offices, from cabinetry and closets to reception desks and built-in shelves.",
    notes: ["Kitchen cabinets", "TV units and bedroom closets", "Tables, reception desks, and shelves"]
  },
  {
    title: "Finishing & Construction Division",
    projectId: "government-boardroom",
    description:
      "Technical finishing and construction execution for raw spaces, managed through site coordination, installation, and handover.",
    notes: ["Gypsum board ceilings and partitions", "Ceramic, paint, wiring, and aluminum", "Sanitary fittings and epoxy flooring"]
  }
];

function getProject(projectId) {
  return projects.find((project) => project.id === projectId) || projects[0];
}

function backgroundImageUrl(image) {
  return 'url("' + image.replace(/"/g, '\"') + '")';
}

function getPreviewItems(division) {
  return division.gallery.slice(0, 4);
}


export default function PortfolioPage() {
  const [activeProject, setActiveProject] = useState(null);
  const [activeDivision, setActiveDivision] = useState(null);

  useEffect(() => {
    document.body.style.overflow = activeProject || activeDivision ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [activeProject, activeDivision]);

  return (
    <div className="page-shell">
      <CursorGlow />
      <SiteHeader homeHref="/" links={portfolioLinks} />

      <main>
        <section className="relative min-h-screen overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: backgroundImageUrl(visualProof[6].image) }}
          />
          <div className="hero-gradient absolute inset-0" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(233,201,157,0.18),transparent_32%)]" />

          <div className="section-shell relative z-10 flex min-h-screen items-end pb-14 pt-28 md:pb-20">
            <div className="grid w-full gap-10 xl:grid-cols-[minmax(0,0.95fr)_520px] xl:items-end">
              <Reveal className="max-w-4xl">
                <span className="eyebrow">Portfolio</span>
                <h1 className="display-title mt-6 max-w-5xl text-white">
                  Visual proof before the conversation.
                </h1>
                <p className="mt-6 max-w-2xl text-base leading-8 text-white/72 md:text-lg">
                  Explore the same three Harkani divisions from the home page: interior design,
                  furniture, and finishing construction, all through an image-led portfolio.
                </p>
                <div className="mt-9 flex flex-wrap gap-4">
                  <a
                    className="luxury-button inline-flex items-center gap-2"
                    href={whatsappHref}
                    rel="noreferrer"
                    target="_blank"
                  >
                    Start a Similar Project
                    <ArrowRight className="h-4 w-4" />
                  </a>
                  <Link className="secondary-button inline-flex items-center gap-2" href="/">
                    <ArrowLeft className="h-4 w-4" />
                    Back to Homepage
                  </Link>
                </div>
              </Reveal>

              <Reveal className="grid grid-cols-2 gap-3" delay={0.08}>
                {[visualProof[0], visualProof[5], visualProof[2]].map((item, index) => (
                  <button
                    key={item.image}
                    aria-label={`Open ${item.title}`}
                    className={`interactive-surface group overflow-hidden rounded-[1.5rem] border border-white/10 ${
                      index === 0 ? "row-span-2 min-h-[420px]" : "min-h-[200px]"
                    }`}
                    onClick={() => setActiveProject(projects[index])}
                    type="button"
                  >
                    <span
                      className="block h-full bg-cover bg-center transition duration-700 group-hover:scale-[1.08]"
                      style={{ backgroundImage: backgroundImageUrl(item.image) }}
                    />
                  </button>
                ))}
              </Reveal>
            </div>
          </div>
        </section>

        <section id="portfolio-divisions" className="py-16 md:py-24">
          <div className="section-shell">
            <Reveal className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
              <div>
                <span className="eyebrow">Portfolio Divisions</span>
                <h2 className="section-title mt-6">Images grouped by division.</h2>
              </div>
              <a
                className="luxury-button inline-flex w-fit items-center gap-2"
                href={whatsappHref}
                rel="noreferrer"
                target="_blank"
              >
                Ask for a Quote
                <ArrowRight className="h-4 w-4" />
              </a>
            </Reveal>

            <div className="mt-12 space-y-14 md:space-y-20">
              {portfolioDivisions.map((division, divisionIndex) => {
                const previewItems = getPreviewItems(division);
                const moreImage = division.gallery[4]?.image || previewItems[0]?.image;
                const hiddenImageCount = Math.max(division.gallery.length - previewItems.length, 0);

                return (
                  <Reveal key={division.filter} delay={divisionIndex * 0.06}>
                    <article className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.025] p-4 md:p-6">
                      <div className="mb-6 flex flex-col gap-5 border-b border-white/10 pb-6 lg:flex-row lg:items-end lg:justify-between">
                        <div className="max-w-3xl">
                          <div className="flex flex-wrap items-center gap-3">
                            <span className="rounded-full border border-[#e9c99d]/24 bg-[#e9c99d]/10 px-3 py-2 text-[0.68rem] font-bold uppercase tracking-[0.2em] text-[#f0d3a9]">
                              {division.gallery.length} images
                            </span>
                            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-white/44">
                              {division.folder}
                            </span>
                          </div>
                          <h3 className="mt-5 text-4xl font-semibold leading-none text-white md:text-5xl">
                            {division.title}
                          </h3>
                          <p className="mt-4 max-w-2xl text-sm leading-7 text-white/68">
                            {division.description}
                          </p>
                        </div>

                        <div className="flex flex-wrap gap-2">
                          {division.highlights.map((highlight) => (
                            <span
                              key={highlight}
                              className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-2 text-[0.65rem] font-bold uppercase tracking-[0.16em] text-white/64"
                            >
                              {highlight}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="grid grid-flow-dense auto-rows-[180px] grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-4">
                        {previewItems.map((item, imageIndex) => (
                          <motion.button
                            key={item.id}
                            aria-label={"Open " + item.title}
                            className={[
                              "interactive-surface group relative overflow-hidden rounded-[1.15rem] border border-white/10 bg-white/[0.03] text-left",
                              imageIndex === 0 ? "sm:row-span-2 xl:col-span-2" : ""
                            ].join(" ")}
                            initial={{ opacity: 0, y: 24 }}
                            onClick={() => setActiveProject(item)}
                            type="button"
                            viewport={{ once: true, margin: "-80px" }}
                            whileHover={{ y: -4 }}
                            whileInView={{ opacity: 1, y: 0 }}
                          >
                            <span
                              className="absolute inset-0 bg-cover bg-center transition duration-700 group-hover:scale-[1.06]"
                              style={{ backgroundImage: backgroundImageUrl(item.image) }}
                            />
                            <span className="absolute inset-0 bg-gradient-to-t from-black/68 via-black/10 to-transparent opacity-80 transition group-hover:opacity-95" />
                          </motion.button>
                        ))}

                        <motion.button
                          aria-label={"Open more " + division.title + " images"}
                          className="interactive-surface group relative overflow-hidden rounded-[1.15rem] border border-[#e9c99d]/24 bg-[#e9c99d]/10 text-left"
                          initial={{ opacity: 0, y: 24 }}
                          onClick={() => setActiveDivision(division)}
                          type="button"
                          viewport={{ once: true, margin: "-80px" }}
                          whileHover={{ y: -4 }}
                          whileInView={{ opacity: 1, y: 0 }}
                        >
                          {moreImage ? (
                            <span
                              className="absolute inset-0 bg-cover bg-center opacity-55 blur-[1px] transition duration-700 group-hover:scale-[1.06] group-hover:opacity-70"
                              style={{ backgroundImage: backgroundImageUrl(moreImage) }}
                            />
                          ) : null}
                          <span className="absolute inset-0 bg-black/62" />
                          <span className="absolute inset-0 flex flex-col items-center justify-center gap-3 p-5 text-center">
                            <span className="flex h-12 w-12 items-center justify-center rounded-full border border-[#e9c99d]/28 bg-black/28 text-[#f0d3a9] backdrop-blur">
                              <Images className="h-5 w-5" />
                            </span>
                            <span className="text-2xl font-semibold text-white">More</span>
                            <span className="text-xs font-bold uppercase tracking-[0.18em] text-white/62">
                              {hiddenImageCount > 0 ? "+" + hiddenImageCount + " images" : "Open gallery"}
                            </span>
                          </span>
                        </motion.button>
                      </div>
                    </article>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>

        <section id="compare" className="py-16 md:py-24">
          <div className="section-shell grid gap-8 xl:grid-cols-[0.85fr_1.15fr] xl:items-center">
            <Reveal>
              <span className="eyebrow">Before / After</span>
              <h2 className="section-title mt-6">Compare the transformation.</h2>
              <p className="mt-6 text-base leading-8 text-white/66">
                A portfolio should build trust quickly. This comparison keeps the execution visible
                without covering the work with too much explanation.
              </p>
              <a
                className="luxury-button mt-8 inline-flex items-center gap-2"
                href={whatsappHref}
                rel="noreferrer"
                target="_blank"
              >
                Plan My Transformation
                <ArrowRight className="h-4 w-4" />
              </a>
            </Reveal>

            <Reveal delay={0.08}>
              <BeforeAfterSlider
                className="bg-white/[0.025]"
                description="Drag the handle to compare the site condition with the finished direction."
                title="From site condition to ready space"
              />
            </Reveal>
          </div>
        </section>

        <section id="details" className="py-16 md:py-24">
          <div className="section-shell">
            <Reveal className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
              <div>
                <span className="eyebrow">Division Detail Sections</span>
                <h2 className="section-title mt-6">Three divisions Harkani.Plc delivers.</h2>
              </div>
              <Link className="secondary-button inline-flex w-fit items-center gap-2" href="/">
                Homepage
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Reveal>

            <div className="mt-10 grid gap-5 lg:grid-cols-2">
              {detailStories.map((story, index) => {
                const project = getProject(story.projectId);

                return (
                  <Reveal key={story.title} delay={index * 0.05}>
                    <article className="interactive-surface grid min-h-full overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03] md:grid-cols-[0.95fr_1.05fr]">
                      <div
                        className="min-h-[320px] bg-cover bg-center"
                        style={{ backgroundImage: backgroundImageUrl(project.image) }}
                      />
                      <div className="flex flex-col justify-between p-6">
                        <div>
                          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#e9c99d]">
                            {project.division}
                          </p>
                          <h3 className="mt-4 text-3xl font-semibold text-white">{story.title}</h3>
                          <p className="mt-4 text-sm leading-7 text-white/66">{story.description}</p>
                          <div className="mt-6 grid gap-2">
                            {story.notes.map((note) => (
                              <p key={note} className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-white/68">
                                {note}
                              </p>
                            ))}
                          </div>
                        </div>
                        <button
                          className="secondary-button mt-7 inline-flex w-fit items-center gap-2"
                          onClick={() => setActiveProject(project)}
                          type="button"
                        >
                          Fullscreen View
                          <Grid3X3 className="h-4 w-4" />
                        </button>
                      </div>
                    </article>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>

        <section id="contact" className="pb-16 pt-10 md:pb-24">
          <div className="section-shell">
            <Reveal className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-[#0c0a08] p-6 md:p-12">
              <div
                className="absolute inset-0 opacity-28"
                style={{ backgroundImage: backgroundImageUrl(trustVisuals[2]), backgroundPosition: "center", backgroundSize: "cover" }}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black via-black/82 to-black/25" />
              <div className="relative z-10 max-w-3xl">
                <span className="eyebrow">Next Step</span>
                <h2 className="section-title mt-6">Found the direction you like?</h2>
                <p className="mt-6 max-w-2xl text-base leading-8 text-white/68">
                  Share the images or project type that feels closest to your vision. The team can
                  turn that into a practical scope, quote, and delivery path.
                </p>
                <div className="mt-9 flex flex-wrap gap-4">
                  <a
                    className="luxury-button inline-flex items-center gap-2"
                    href={whatsappHref}
                    rel="noreferrer"
                    target="_blank"
                  >
                    <MessageCircle className="h-4 w-4" />
                    WhatsApp Harkani.Plc
                  </a>
                  <a className="secondary-button inline-flex items-center gap-2" href="mailto:kena@harkani.com">
                    <Mail className="h-4 w-4" />
                    Email the Team
                  </a>
                </div>
                <SocialLinks className="mt-7" />
              </div>
            </Reveal>
          </div>
        </section>
      </main>

      <AnimatePresence>
        {activeDivision ? (
          <motion.div
            animate={{ opacity: 1 }}
            className="fixed inset-0 z-[80] overflow-y-auto bg-black/92 p-3 backdrop-blur-xl md:p-6"
            exit={{ opacity: 0 }}
            initial={{ opacity: 0 }}
          >
            <button
              aria-label="Close division gallery"
              className="fixed right-4 top-4 z-[90] flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/10 text-white backdrop-blur-xl"
              onClick={() => setActiveDivision(null)}
              type="button"
            >
              <X className="h-5 w-5" />
            </button>

            <motion.article
              animate={{ opacity: 1, y: 0, scale: 1 }}
              className="mx-auto min-h-[calc(100vh-1.5rem)] w-full max-w-[1380px] overflow-hidden rounded-[2rem] border border-white/10 bg-[#080706] p-4 md:p-7"
              exit={{ opacity: 0, y: 24, scale: 0.98 }}
              initial={{ opacity: 0, y: 24, scale: 0.98 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            >
              <header className="flex flex-col gap-5 border-b border-white/10 pb-6 lg:flex-row lg:items-end lg:justify-between">
                <div>
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="rounded-full border border-[#e9c99d]/24 bg-[#e9c99d]/10 px-3 py-2 text-[0.68rem] font-bold uppercase tracking-[0.2em] text-[#f0d3a9]">
                      {activeDivision.gallery.length} images
                    </span>
                    <span className="text-xs font-semibold uppercase tracking-[0.2em] text-white/44">
                      Full gallery
                    </span>
                  </div>
                  <h2 className="mt-5 text-4xl font-semibold leading-none text-white md:text-6xl">
                    {activeDivision.title}
                  </h2>
                  <p className="mt-4 max-w-2xl text-sm leading-7 text-white/68">
                    {activeDivision.description}
                  </p>
                </div>

                <a
                  className="luxury-button inline-flex w-fit items-center gap-2"
                  href={whatsappHref}
                  rel="noreferrer"
                  target="_blank"
                >
                  Start Similar Project
                  <ArrowRight className="h-4 w-4" />
                </a>
              </header>

              <div className="mt-6 grid grid-flow-dense auto-rows-[190px] grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {activeDivision.gallery.map((item, imageIndex) => (
                  <motion.button
                    key={item.id}
                    aria-label={"Open " + item.title}
                    className={[
                      "interactive-surface group relative overflow-hidden rounded-[1.15rem] border border-white/10 bg-white/[0.03] text-left",
                      imageIndex === 0 ? "sm:row-span-2 lg:col-span-2" : ""
                    ].join(" ")}
                    initial={{ opacity: 0, y: 18 }}
                    onClick={() => {
                      setActiveDivision(null);
                      setActiveProject(item);
                    }}
                    type="button"
                    whileHover={{ y: -4 }}
                    whileInView={{ opacity: 1, y: 0 }}
                  >
                    <span
                      className="absolute inset-0 bg-cover bg-center transition duration-700 group-hover:scale-[1.06]"
                      style={{ backgroundImage: backgroundImageUrl(item.image) }}
                    />
                    <span className="absolute inset-0 bg-gradient-to-t from-black/68 via-black/8 to-transparent opacity-78 transition group-hover:opacity-92" />
                    <span className="absolute bottom-4 left-4 right-4">
                      <span className="block text-sm font-semibold text-white">{item.title}</span>
                      <span className="mt-1 block text-[0.65rem] font-bold uppercase tracking-[0.18em] text-white/46">
                        Open image
                      </span>
                    </span>
                  </motion.button>
                ))}
              </div>
            </motion.article>
          </motion.div>
        ) : null}

        {activeProject ? (
          <motion.div
            animate={{ opacity: 1 }}
            className="fixed inset-0 z-[80] overflow-y-auto bg-black/92 p-3 backdrop-blur-xl md:p-6"
            exit={{ opacity: 0 }}
            initial={{ opacity: 0 }}
          >
            <button
              aria-label="Close project view"
              className="fixed right-4 top-4 z-[90] flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/10 text-white backdrop-blur-xl"
              onClick={() => setActiveProject(null)}
              type="button"
            >
              <X className="h-5 w-5" />
            </button>

            <motion.article
              animate={{ opacity: 1, y: 0, scale: 1 }}
              className="mx-auto grid min-h-[calc(100vh-1.5rem)] w-full max-w-[1320px] overflow-hidden rounded-[2rem] border border-white/10 bg-[#080706] lg:grid-cols-[minmax(0,1fr)_380px]"
              exit={{ opacity: 0, y: 24, scale: 0.98 }}
              initial={{ opacity: 0, y: 24, scale: 0.98 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            >
              <div
                className="min-h-[58vh] bg-cover bg-center lg:min-h-[calc(100vh-3rem)]"
                style={{ backgroundImage: backgroundImageUrl(activeProject.image) }}
              />
              <aside className="flex flex-col justify-between p-6 md:p-8">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#e9c99d]">
                    {activeProject.division}
                  </p>
                  <h2 className="mt-5 text-4xl font-semibold leading-none text-white md:text-5xl">
                    {activeProject.title}
                  </h2>
                  <p className="mt-4 text-sm uppercase tracking-[0.2em] text-white/44">
                    {activeProject.location}
                  </p>
                  <p className="mt-7 text-base leading-8 text-white/68">{activeProject.summary}</p>
                </div>

                <div className="mt-10 grid gap-3">
                  <a
                    className="luxury-button inline-flex items-center justify-center gap-2"
                    href={whatsappHref}
                    rel="noreferrer"
                    target="_blank"
                  >
                    Start Similar Project
                    <ArrowRight className="h-4 w-4" />
                  </a>
                  <button
                    className="secondary-button inline-flex items-center justify-center gap-2"
                    onClick={() => setActiveProject(null)}
                    type="button"
                  >
                    Continue Browsing
                  </button>
                </div>
              </aside>
            </motion.article>
          </motion.div>
        ) : null}
      </AnimatePresence>

      <WhatsAppWidget />
    </div>
  );
}
