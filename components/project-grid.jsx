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
              className={`border px-4 py-2 text-sm font-semibold uppercase tracking-[0.12em] transition-all duration-300 ${
                isActive
                  ? "border-[#d8c18a]/45 bg-[#d8c18a]/12 text-[#f1eadc]"
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
              aria-label={project.title}
              layout
              animate={{ opacity: 1, scale: 1 }}
              className={`project-card interactive-surface glass-panel group relative overflow-hidden border border-white/10 ${sizeClasses[project.size]}`}
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
                  backgroundImage: `url(${project.image})`
                }}
              />
              <div className="absolute inset-0 bg-black/0 transition duration-300 group-hover:bg-black/10" />
            </motion.article>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
