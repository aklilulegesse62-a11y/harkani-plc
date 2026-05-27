"use client";

import BeforeAfterSlider from "@/components/before-after-slider";
import CursorGlow from "@/components/cursor-glow";
import Reveal from "@/components/reveal";
import SiteHeader from "@/components/site-header";
import { filters, projects, trustVisuals, visualProof } from "@/lib/site-data";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Grid3X3, Mail, Maximize2, MessageCircle, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

const whatsappHref =
  "https://wa.me/251951108127?text=Hello%20Harkani.Plc%2C%20I%20saw%20the%20portfolio%20and%20want%20to%20discuss%20a%20similar%20project.";

const portfolioLinks = [
  { label: "Home", href: "/" },
  { label: "Categories", href: "#categories" },
  { label: "Gallery", href: "#gallery" },
  { label: "Compare", href: "#compare" },
  { label: "Details", href: "#details" },
  { label: "Start", href: "#contact" }
];

const detailStories = [
  {
    title: "Hospitality Atmosphere",
    projectId: "restaurant-interior",
    description: "Restaurant and cafe interiors built around mood, seating comfort, lighting, and guest flow.",
    notes: ["Restaurant interior design", "Cafe seating and counters", "Furnishing and decor"]
  },
  {
    title: "Commercial Presence",
    projectId: "office-reception-render",
    description: "Office reception, workstation, boardroom, and commercial setup delivered with a polished first impression.",
    notes: ["Reception desks", "Office tables and shelves", "Glass partitions and lighting"]
  },
  {
    title: "Home Setup",
    projectId: "minimal-living",
    description: "Warm residential packages with furniture, kitchen cabinets, bedroom closets, TV units, and styling.",
    notes: ["Kitchen cabinets", "TV units and closets", "Decor and electronics setup"]
  },
  {
    title: "Finishing Execution",
    projectId: "government-boardroom",
    description: "Technical finishing work managed from gypsum and partitions to wiring, aluminum, sanitary, and epoxy.",
    notes: ["Ceiling and partition", "Electrical installations", "Ceramic, paint, and epoxy"]
  }
];

function getProject(projectId) {
  return projects.find((project) => project.id === projectId) || projects[0];
}

function projectHeight(size, index) {
  if (size === "tall") return "h-[520px]";
  if (size === "wide") return "h-[360px]";
  return index % 3 === 0 ? "h-[430px]" : "h-[330px]";
}

export default function PortfolioPage() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [activeProject, setActiveProject] = useState(null);

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  useEffect(() => {
    document.body.style.overflow = activeProject ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [activeProject]);

  return (
    <div className="page-shell">
      <CursorGlow />
      <SiteHeader homeHref="/" links={portfolioLinks} />

      <main>
        <section className="relative min-h-screen overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${visualProof[6].image})` }}
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
                  Explore interiors, furniture, finishing, commercial spaces, hospitality projects,
                  and full setup work in a quieter image-led experience.
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
                {[visualProof[0], visualProof[5], visualProof[11], visualProof[2]].map((item, index) => (
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
                      style={{ backgroundImage: `url(${item.image})` }}
                    />
                  </button>
                ))}
              </Reveal>
            </div>
          </div>
        </section>

        <section id="categories" className="py-16 md:py-24">
          <div className="section-shell">
            <Reveal className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
              <div>
                <span className="eyebrow">Project Categories</span>
                <h2 className="section-title mt-6">Browse by space type.</h2>
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

            <Reveal className="mt-9 flex flex-wrap gap-3" delay={0.08}>
              {filters.map((filter) => (
                <button
                  key={filter}
                  aria-current={activeFilter === filter}
                  className={`rounded-full border px-5 py-3 text-sm font-semibold transition ${
                    activeFilter === filter
                      ? "border-[#e9c99d]/50 bg-[#e9c99d] text-[#130d08]"
                      : "border-white/10 bg-white/[0.03] text-white/68 hover:border-[#e9c99d]/35 hover:text-white"
                  }`}
                  onClick={() => setActiveFilter(filter)}
                  type="button"
                >
                  {filter}
                </button>
              ))}
            </Reveal>
          </div>
        </section>

        <section id="gallery" className="pb-16 md:pb-24">
          <div className="section-shell">
            <Reveal className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div>
                <span className="eyebrow">Masonry Gallery</span>
                <h2 className="section-title mt-6">Images first. Details on click.</h2>
              </div>
              <p className="max-w-sm text-sm leading-7 text-white/58">
                Tap any project to open a fullscreen view with project context and a quick action.
              </p>
            </Reveal>

            <div className="columns-1 gap-4 sm:columns-2 xl:columns-3">
              {filteredProjects.map((project, index) => (
                <motion.button
                  key={project.id}
                  aria-label={`Open ${project.title}`}
                  className="interactive-surface mb-4 block w-full break-inside-avoid overflow-hidden rounded-[1.6rem] border border-white/10 bg-white/[0.025] text-left"
                  initial={{ opacity: 0, y: 28 }}
                  onClick={() => setActiveProject(project)}
                  type="button"
                  viewport={{ once: true, margin: "-80px" }}
                  whileHover={{ y: -4 }}
                  whileInView={{ opacity: 1, y: 0 }}
                >
                  <div
                    className={`${projectHeight(project.size, index)} bg-cover bg-center transition duration-700 hover:scale-[1.04]`}
                    style={{ backgroundImage: `url(${project.image})` }}
                  />
                  <div className="flex items-center justify-between gap-4 p-4">
                    <span className="text-xs font-semibold uppercase tracking-[0.24em] text-white/46">
                      {project.category}
                    </span>
                    <Maximize2 className="h-4 w-4 text-[#e9c99d]" />
                  </div>
                </motion.button>
              ))}
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
                <span className="eyebrow">Project Detail Sections</span>
                <h2 className="section-title mt-6">Four ways Harkani.Plc delivers.</h2>
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
                        style={{ backgroundImage: `url(${project.image})` }}
                      />
                      <div className="flex flex-col justify-between p-6">
                        <div>
                          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#e9c99d]">
                            {project.category}
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
                style={{ backgroundImage: `url(${trustVisuals[2]})`, backgroundPosition: "center", backgroundSize: "cover" }}
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
              </div>
            </Reveal>
          </div>
        </section>
      </main>

      <AnimatePresence>
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
                style={{ backgroundImage: `url(${activeProject.image})` }}
              />
              <aside className="flex flex-col justify-between p-6 md:p-8">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#e9c99d]">
                    {activeProject.category}
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
    </div>
  );
}
