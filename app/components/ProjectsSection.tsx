"use client";
import { motion, AnimatePresence } from "framer-motion";
import { Github, ChevronDown, ChevronLeft, ChevronRight, X, Maximize2, Monitor, Server } from "lucide-react";
import { projects } from "../data/projects";
import { useState } from "react";
import Image from "next/image";

const RepoIcon = ({ icon }: { icon?: string }) => {
  if (icon === "frontend") return <Monitor size={18} />;
  if (icon === "backend") return <Server size={18} />;
  return <Github size={18} />;
};

export default function ProjectsSection() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState<Record<number, number>>({});
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxProjectIndex, setLightboxProjectIndex] = useState<number | null>(null);
  const [lightboxImageIndex, setLightboxImageIndex] = useState(0);

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

  const closeLightbox = () => {
    setLightboxOpen(false);
    setLightboxProjectIndex(null);
  };

  const lightboxProject = lightboxProjectIndex !== null ? projects[lightboxProjectIndex] : null;
  const lightboxTotalImages = lightboxProject?.images.length ?? 0;

  const nextLightboxImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setLightboxImageIndex(prev => (prev + 1) % lightboxTotalImages);
  };

  const prevLightboxImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setLightboxImageIndex(prev => (prev - 1 + lightboxTotalImages) % lightboxTotalImages);
  };

  return (
    <section id="activity">
      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-xl mb-6"
      >
        $ ls notable-projects/
      </motion.h2>
      <div className="flex flex-col md:grid md:grid-cols-2 gap-6">
        {projects.map((p, index) => {
          const isExpanded = expandedIndex === index;
          const hasImages = p.images && p.images.length > 0;
          const currentImg = currentImageIndex[index] || 0;
          
          return (
            <motion.div
              key={`project-${index}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`border border-green-700 rounded-lg overflow-hidden hover:bg-green-500/5 transition ${
                isExpanded ? 'md:col-span-2' : ''
              }`}
            >
              <div className="p-4">
                <div
                  onClick={() => toggleExpand(index)}
                  className="cursor-pointer select-none"
                >
                  <div className="flex justify-between items-start gap-2">
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg">{p.name}</h3>
                      <p className="text-green-300 text-sm mt-1">{p.desc}</p>
                    </div>
                    <motion.div
                      animate={{ rotate: isExpanded ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="flex-shrink-0"
                    >
                      <ChevronDown size={20} className="text-green-400" />
                    </motion.div>
                  </div>
                </div>

                {!isExpanded && (
                  <div className="flex gap-3 mt-3">
                    {p.github.map((repo) => (
                      <a
                        key={repo.url}
                        href={repo.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-green-200 transition"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <RepoIcon icon={repo.icon} />
                      </a>
                    ))}
                  </div>
                )}
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
                    <div className="border-t border-green-700 p-4 space-y-4">
                      {hasImages && (
                        <div className="relative w-full max-w-2xl mx-auto">
                          <div className="relative w-full h-64 md:h-80 rounded-lg overflow-hidden border border-green-700 group">
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
                        <p className="text-green-200 text-sm leading-relaxed max-w-2xl mx-auto">
                          {p.detailedDesc}
                        </p>
                      )}

                      <div className="flex flex-col gap-2 pt-2 max-w-2xl mx-auto">
                        {p.github.map((repo) => (
                          <a
                            key={repo.url}
                            href={repo.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-green-200 flex items-center gap-2 text-sm"
                            onClick={(e) => e.stopPropagation()}
                          >
                            <RepoIcon icon={repo.icon} />
                            <span>{repo.label}</span>
                          </a>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>

      <AnimatePresence>
        {lightboxOpen && lightboxProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
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
                onClick={prevLightboxImage}
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
                onClick={nextLightboxImage}
                className="fixed right-4 top-1/2 -translate-y-1/2 bg-green-700/50 hover:bg-green-700 rounded-full p-3 text-white transition z-[10000] backdrop-blur-sm"
                aria-label="Next image"
              >
                <ChevronRight size={24} />
              </button>
            )}

            <div className="fixed bottom-4 left-1/2 -translate-x-1/2 text-green-400 text-sm z-[10000]">
              {lightboxTotalImages > 1
                ? `${lightboxImageIndex + 1} / ${lightboxTotalImages} — Click anywhere to close or press the X`
                : "Click anywhere to close or press the X"
              }
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}