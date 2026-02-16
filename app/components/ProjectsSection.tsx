"use client";
import { motion, AnimatePresence } from "framer-motion";
import { Github, ChevronDown, ChevronLeft, ChevronRight, X, Maximize2 } from "lucide-react";
import { projects } from "../data/projects";
import { useState } from "react";
import Image from "next/image";

export default function ProjectsSection() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState<Record<number, number>>({});
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxImage, setLightboxImage] = useState<string>("");

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

  const openLightbox = (imageSrc: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setLightboxImage(imageSrc);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
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
            <div
              key={`project-${index}`}
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

                {/* GitHub button - only show when collapsed */}
                {!isExpanded && (
                  <div className="flex gap-3 mt-3">
                    <a
                      href={p.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-green-200 transition"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Github size={18} />
                    </a>
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
                            <div className="relative w-full h-full cursor-pointer"
                              onClick={(e) => openLightbox(p.images[currentImg], e)}
                            >
                              <Image
                                src={p.images[currentImg]}
                                alt={`${p.name} - Image ${currentImg + 1}`}
                                fill
                                className="object-cover"
                              />
                              {/* Expand icon overlay */}
                              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors flex items-center justify-center pointer-events-none">
                                <Maximize2 
                                  size={32} 
                                  className="text-white opacity-0 group-hover:opacity-100 transition-opacity"
                                />
                              </div>
                            </div>

                            {/* Image navigation controls - only show if multiple images */}
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

                          {/* Image indicator dots */}
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
                      
                      <div className="flex gap-3 pt-2 max-w-2xl mx-auto">
                        <a
                          href={p.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-green-200 flex items-center gap-2 text-sm"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <Github size={18} />
                          <span>View on GitHub</span>
                        </a>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {lightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
            className="fixed inset-0 bg-black/95 z-[9999] flex items-center justify-center p-4 cursor-zoom-out"
          >
            <button
              onClick={(e) => {
                e.stopPropagation();
                closeLightbox();
              }}
              className="fixed top-20 right-4 bg-green-700/50 hover:bg-green-700 rounded-full p-3 text-white transition z-[10000] backdrop-blur-sm"
              aria-label="Close"
            >
              <X size={24} />
            </button>
            
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="relative max-w-7xl max-h-[90vh] w-full h-full cursor-default"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={lightboxImage}
                alt="Full size image"
                fill
                className="object-contain"
                quality={100}
              />
            </motion.div>

            <div className="fixed bottom-4 left-1/2 -translate-x-1/2 text-green-400 text-sm z-[10000]">
              Click anywhere to close or press the X
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}