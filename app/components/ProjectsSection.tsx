"use client";
import { motion, AnimatePresence } from "framer-motion";
import { Github, ChevronDown, ChevronLeft, ChevronRight, X, Maximize2, Monitor, Server, Globe, FolderGit2, ArrowUpRight } from "lucide-react";
import type { Project } from "../data/projects";
import { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";

const RepoIcon = ({ icon, size = 18 }: { icon?: string; size?: number }) => {
  if (icon === "frontend") return <Monitor size={size} />;
  if (icon === "backend") return <Server size={size} />;
  if (icon === "globe") return <Globe size={size} />;
  return <Github size={size} />;
};

type LoadState = "loading" | "ready" | "error";

export default function ProjectsSection() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loadState, setLoadState] = useState<LoadState>("loading");
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState<Record<number, number>>({});
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxProjectIndex, setLightboxProjectIndex] = useState<number | null>(null);
  const [lightboxImageIndex, setLightboxImageIndex] = useState(0);

  const touchStartX = useRef<number | null>(null);
  const touchStartY = useRef<number | null>(null);

  useEffect(() => {
    let cancelled = false;

    fetch("/api/projects.php")
      .then((res) => {
        if (!res.ok) throw new Error(`Request failed with status ${res.status}`);
        return res.json();
      })
      .then((data) => {
        if (cancelled) return;
        if (!Array.isArray(data)) throw new Error("Unexpected response shape");
        setProjects(data);
        setLoadState("ready");
      })
      .catch(() => {
        if (cancelled) return;
        setProjects([]);
        setLoadState("error");
      });

    return () => {
      cancelled = true;
    };
  }, []);

  const toggleExpand = (index: number) => {
    setExpandedIndex(prev => prev === index ? null : index);
  };

  const nextImage = (projectIndex: number, totalImages: number, e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImageIndex(prev => ({
      ...prev,
      [projectIndex]: ((prev[projectIndex] || 0) + 1) % totalImages
    }));
  };

  const prevImage = (projectIndex: number, totalImages: number, e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImageIndex(prev => ({
      ...prev,
      [projectIndex]: ((prev[projectIndex] || 0) - 1 + totalImages) % totalImages
    }));
  };

  const openLightbox = (projectIndex: number, imageIndex: number, e: React.MouseEvent) => {
    e.stopPropagation();
    setLightboxProjectIndex(projectIndex);
    setLightboxImageIndex(imageIndex);
    setLightboxOpen(true);
  };

  const closeLightbox = useCallback(() => {
    setLightboxOpen(false);
    setLightboxProjectIndex(null);
  }, []);

  const lightboxProject = lightboxProjectIndex !== null ? projects[lightboxProjectIndex] : null;
  const lightboxTotalImages = lightboxProject?.images.length ?? 0;

  const nextLightboxImage = useCallback(() => {
    if (lightboxTotalImages > 1) {
      setLightboxImageIndex(prev => (prev + 1) % lightboxTotalImages);
    }
  }, [lightboxTotalImages]);

  const prevLightboxImage = useCallback(() => {
    if (lightboxTotalImages > 1) {
      setLightboxImageIndex(prev => (prev - 1 + lightboxTotalImages) % lightboxTotalImages);
    }
  }, [lightboxTotalImages]);

  useEffect(() => {
    if (!lightboxOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") nextLightboxImage();
      if (e.key === "ArrowLeft") prevLightboxImage();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxOpen, closeLightbox, nextLightboxImage, prevLightboxImage]);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    touchStartY.current = e.touches[0].clientY;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null || touchStartY.current === null) return;

    const deltaX = e.changedTouches[0].clientX - touchStartX.current;
    const deltaY = e.changedTouches[0].clientY - touchStartY.current;

    // Only trigger if horizontal swipe is more prominent than vertical
    if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > 50) {
      if (deltaX < 0) nextLightboxImage();
      else prevLightboxImage();
    }

    touchStartX.current = null;
    touchStartY.current = null;
  };

  return (
    <section id="projects" className="scroll-mt-14 py-16 border-t border-green-900/60">
      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-xl mb-8 flex items-center gap-2 font-mono"
      >
        <FolderGit2 size={20} />
        $ ls notable-projects/
      </motion.h2>

      {loadState === "loading" && (
        <div className="space-y-6" aria-busy="true">
          {[0, 1, 2].map((i) => (
            <div key={`skeleton-${i}`} className="flex gap-4 animate-pulse">
              <div className="w-12 h-12 rounded-lg bg-green-900/60 flex-shrink-0" />
              <div className="flex-1">
                <div className="h-5 w-1/3 bg-green-900/60 rounded" />
                <div className="h-3 w-full bg-green-900/40 rounded mt-3" />
                <div className="h-3 w-2/3 bg-green-900/40 rounded mt-2" />
              </div>
            </div>
          ))}
        </div>
      )}

      {loadState === "error" && (
        <div className="border border-amber-600/60 bg-amber-500/5 rounded-lg p-5">
          <p className="text-amber-400 font-semibold mb-2 font-mono">
            $ projects: failed to load
          </p>
          <p className="text-green-300 text-sm">
            The project list could not be loaded right now. Everything is also
            available directly on GitHub.
          </p>
          <a
            href="https://github.com/michadasis"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-4 text-sm text-green-400 hover:text-green-200 transition"
          >
            <Github size={16} />
            <span>github.com/michadasis</span>
          </a>
        </div>
      )}

      {loadState === "ready" && projects.length === 0 && (
        <p className="text-green-300 text-sm">
          No projects are listed at the moment.
        </p>
      )}

      {loadState === "ready" && projects.length > 0 && (
        <ul className="divide-y divide-green-900/60">
          {projects.map((p, index) => {
            const isExpanded = expandedIndex === index;
            const hasImages = p.images && p.images.length > 0;
            const currentImg = currentImageIndex[index] || 0;
            const primaryLink = p.github[0];

            return (
              <motion.li
                key={`project-${index}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="py-6 first:pt-0 last:pb-0"
              >
                <div className="flex gap-4">
                  {/* Thumbnail: the project's icon, or its first screenshot if it has none */}
                  <div className="relative w-12 h-12 rounded-lg border border-green-800 bg-green-950 overflow-hidden flex-shrink-0 flex items-center justify-center text-green-500">
                    {p.icon ? (
                      <Image src={p.icon} alt="" fill sizes="48px" className="object-contain" />
                    ) : hasImages ? (
                      <Image src={p.images[0]} alt="" fill className="object-cover object-top" />
                    ) : (
                      <FolderGit2 size={22} />
                    )}
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-3">
                      <h3 className="text-lg font-semibold text-green-300">
                        {primaryLink ? (
                          <a
                            href={primaryLink.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 hover:text-green-200 transition"
                          >
                            {p.name}
                            <ArrowUpRight size={16} className="text-green-600 flex-shrink-0" />
                          </a>
                        ) : (
                          p.name
                        )}
                      </h3>
                      <button
                        type="button"
                        onClick={() => toggleExpand(index)}
                        aria-expanded={isExpanded}
                        aria-label={`${isExpanded ? "Hide" : "Show"} details for ${p.name}`}
                        className="flex-shrink-0 p-1 -m-1 text-green-500 hover:text-green-300 transition"
                      >
                        <motion.span
                          animate={{ rotate: isExpanded ? 180 : 0 }}
                          transition={{ duration: 0.3 }}
                          className="block"
                        >
                          <ChevronDown size={20} />
                        </motion.span>
                      </button>
                    </div>

                    <p className="mt-1 text-green-300/90 text-sm leading-relaxed">{p.desc}</p>

                    {p.github.length > 0 && (
                      <div className="flex flex-wrap gap-2 mt-3">
                        {p.github.map((repo) => (
                          <a
                            key={repo.url}
                            href={repo.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-green-800 text-green-400 text-xs font-mono hover:bg-green-500/10 hover:text-green-200 transition"
                          >
                            <RepoIcon icon={repo.icon} size={14} />
                            {repo.label}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                <AnimatePresence initial={false}>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0 }}
                      animate={{ height: "auto" }}
                      exit={{ height: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="pt-5 sm:pl-16 space-y-4">
                        {hasImages && (
                          <div className="relative w-full">
                            <div className="relative w-full h-56 md:h-72 rounded-lg overflow-hidden border border-green-700 group">
                              <div
                                className="relative w-full h-full cursor-pointer"
                                onClick={(e) => openLightbox(index, currentImg, e)}
                              >
                                <Image
                                  src={p.images[currentImg]}
                                  alt={`${p.name} - Image ${currentImg + 1}`}
                                  fill
                                  className="object-cover"
                                />
                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors flex items-center justify-center pointer-events-none">
                                  <Maximize2
                                    size={32}
                                    className="text-white opacity-0 group-hover:opacity-100 transition-opacity"
                                  />
                                </div>
                              </div>

                              {p.images.length > 1 && (
                                <>
                                  <button
                                    onClick={(e) => prevImage(index, p.images.length, e)}
                                    className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 rounded-full p-2 transition z-10"
                                    aria-label="Previous image"
                                  >
                                    <ChevronLeft size={20} className="text-green-400" />
                                  </button>
                                  <button
                                    onClick={(e) => nextImage(index, p.images.length, e)}
                                    className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 rounded-full p-2 transition z-10"
                                    aria-label="Next image"
                                  >
                                    <ChevronRight size={20} className="text-green-400" />
                                  </button>
                                </>
                              )}
                            </div>

                            {p.images.length > 1 && (
                              <div className="flex justify-center gap-2 mt-3">
                                {p.images.map((_, imgIndex) => (
                                  <button
                                    key={imgIndex}
                                    onClick={(e) => {
                                      e.stopPropagation();
                                      setCurrentImageIndex(prev => ({
                                        ...prev,
                                        [index]: imgIndex
                                      }));
                                    }}
                                    aria-label={`Go to image ${imgIndex + 1}`}
                                    className={`w-2 h-2 rounded-full transition ${
                                      currentImg === imgIndex
                                        ? "bg-green-400"
                                        : "bg-green-700 hover:bg-green-600"
                                    }`}
                                  />
                                ))}
                              </div>
                            )}
                          </div>
                        )}

                        {p.detailedDesc && (
                          <p className="text-green-200 text-sm leading-relaxed">
                            {p.detailedDesc}
                          </p>
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.li>
            );
          })}
        </ul>
      )}

      <AnimatePresence>
        {lightboxOpen && lightboxProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
            className="fixed inset-0 bg-black/95 z-[9999] flex items-center justify-center p-4 cursor-zoom-out"
          >
            <button
              onClick={(e) => { e.stopPropagation(); closeLightbox(); }}
              className="fixed top-20 right-4 bg-green-700/50 hover:bg-green-700 rounded-full p-3 text-white transition z-[10000] backdrop-blur-sm"
              aria-label="Close"
            >
              <X size={24} />
            </button>

            {lightboxTotalImages > 1 && (
              <button
                onClick={(e) => { e.stopPropagation(); prevLightboxImage(); }}
                className="fixed left-4 top-1/2 -translate-y-1/2 bg-green-700/50 hover:bg-green-700 rounded-full p-3 text-white transition z-[10000] backdrop-blur-sm"
                aria-label="Previous image"
              >
                <ChevronLeft size={24} />
              </button>
            )}

            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="relative max-w-7xl max-h-[90vh] w-full h-full cursor-default"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={lightboxProject.images[lightboxImageIndex]}
                alt={`${lightboxProject.name} - Image ${lightboxImageIndex + 1}`}
                fill
                className="object-contain"
                quality={100}
              />
            </motion.div>

            {lightboxTotalImages > 1 && (
              <button
                onClick={(e) => { e.stopPropagation(); nextLightboxImage(); }}
                className="fixed right-4 top-1/2 -translate-y-1/2 bg-green-700/50 hover:bg-green-700 rounded-full p-3 text-white transition z-[10000] backdrop-blur-sm"
                aria-label="Next image"
              >
                <ChevronRight size={24} />
              </button>
            )}

            <div className="fixed bottom-4 left-1/2 -translate-x-1/2 text-green-400 text-sm z-[10000] text-center">
              {lightboxTotalImages > 1
                ? `${lightboxImageIndex + 1} / ${lightboxTotalImages} · Press the X to exit`
                : "Press the X to exit"
              }
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
