"use client";

import { AnimatePresence, motion } from "framer-motion";
import { filters, projects } from "@/lib/site-data";
import { useMemo, useState } from "react";

const sizeClasses = {
  tall: "row-span-3 min-h-[420px]",
  wide: "sm:col-span-2 row-span-2 min-h-[300px]",
  medium: "row-span-2 min-h-[300px]"
};

export default function ProjectGrid() {
  const [selectedFilter, setSelectedFilter] = useState("All");

  const filteredProjects = useMemo(() => {
    if (selectedFilter === "All") {
      return projects;
    }

    return projects.filter((project) => project.category === selectedFilter);
  }, [selectedFilter]);

  return (
    <div className="space-y-8">
      <div className="flex flex-wrap gap-3">
        {filters.map((filter) => {
          const isActive = filter === selectedFilter;

          return (
            <button
              key={filter}
              className={`rounded-full border px-4 py-2 text-sm font-semibold transition-all duration-300 ${
                isActive
                  ? "border-[#e9c99d]/45 bg-[#e9c99d]/12 text-[#f7e0bd]"
                  : "border-white/10 bg-white/5 text-white/70 hover:border-white/20 hover:text-white"
              }`}
              onClick={() => setSelectedFilter(filter)}
              type="button"
            >
              {filter}
            </button>
          );
        })}
      </div>

      <motion.div
        layout
        className="grid auto-rows-[110px] grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3"
      >
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project) => (
            <motion.article
              key={project.id}
              layout
              animate={{ opacity: 1, scale: 1 }}
              className={`project-card interactive-surface glass-panel group relative overflow-hidden rounded-[2rem] border border-white/10 ${sizeClasses[project.size]}`}
              exit={{ opacity: 0, scale: 0.95 }}
              initial={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
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
            >
              <div
                className="project-media absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage: `linear-gradient(180deg, rgba(5,5,5,0.1), rgba(5,5,5,0.72)), url(${project.image})`
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/15 to-transparent" />

              <div className="relative z-10 flex h-full flex-col justify-between p-6 md:p-7">
                <div className="flex items-start justify-between gap-4">
                  <span className="rounded-full border border-white/15 bg-black/20 px-3 py-2 text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-white/80 backdrop-blur-md">
                    {project.category}
                  </span>
                  <span className="text-xs uppercase tracking-[0.22em] text-white/55">
                    {project.location}
                  </span>
                </div>

                <div className="space-y-3">
                  <h3 className="max-w-xs text-2xl font-semibold text-white md:text-[1.9rem]">
                    {project.title}
                  </h3>
                  <p className="max-w-md text-sm leading-6 text-white/72 opacity-0 transition duration-300 group-hover:opacity-100">
                    {project.summary}
                  </p>
                </div>
              </div>
            </motion.article>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}

