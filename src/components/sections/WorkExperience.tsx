"use client";

import React, { useState } from "react";
import Image from "next/image";
import { workExperience } from "@/data";
import { motion, AnimatePresence } from "framer-motion";

export default function WorkExperience() {
  // State untuk mengontrol Accordion (yang terbuka/tertutup)
  const [openId, setOpenId] = useState<number | null>(1);

  // State baru untuk mengontrol fitur "Show More"
  const [showAll, setShowAll] = useState(false);

  // Batas jumlah experience awal yang ingin ditampilkan
  const initialDisplayCount = 4;

  // Menentukan experience yang akan di-render (berdasarkan state showAll)
  const displayedExperience = showAll
    ? workExperience
    : workExperience.slice(0, initialDisplayCount);

  const toggleAccordion = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="experience" className="py-24 border-t border-white/10 overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12 flex justify-center max-w-[1360px]">
        <div className="flex flex-col justify-start items-start gap-12 w-full lg:max-w-[896px]">

          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-white text-4xl lg:text-5xl font-extrabold leading-tight lg:leading-[72px]"
          >
            Work & Organization Experiences
          </motion.h2>

          <div className="flex flex-col w-full">
            {displayedExperience.map((exp, index) => {
              const isOpen = openId === exp.id;

              return (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`w-full flex flex-col justify-start items-start border-t border-white/10 ${index === displayedExperience.length - 1 ? 'border-b' : ''}`}
                >
                  <button
                    onClick={() => toggleAccordion(exp.id)}
                    className="w-full py-6 flex flex-col md:flex-row justify-between md:items-center gap-4 text-left focus:outline-none hover:bg-white/[0.02] transition-colors group"
                  >
                    <div className="flex flex-wrap items-center gap-3 md:gap-6">
                      <span className="text-white text-base font-bold leading-6">
                        {exp.role}
                      </span>
                      <span className="hidden md:inline-block text-neutral-400 text-base font-medium leading-6">
                        •
                      </span>
                      <span className="text-neutral-400 text-base font-medium leading-6">
                        {exp.company}
                      </span>
                    </div>

                    <div className="flex items-center justify-between md:justify-end w-full md:w-auto gap-6">
                      <span className="text-neutral-400 text-base font-medium leading-6">
                        {exp.duration}
                      </span>
                      <motion.div 
                        animate={{ rotate: isOpen ? 180 : 0 }}
                        className="w-5 h-5 flex items-center justify-center"
                      >
                        <svg width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M1 1L7 7L13 1" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </motion.div>
                    </div>
                  </button>

                  {/* Expanded Content with AnimatePresence */}
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div 
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] as const }}
                        className="overflow-hidden w-full"
                      >
                        <div className="flex flex-col md:flex-row gap-8 items-start pb-8 pt-2">
                          <p className="flex-1 text-neutral-400 text-base font-normal leading-relaxed text-left pr-0 md:pr-4">
                            {exp.description}
                          </p>

                          {/* Image Section */}
                          <div className="w-full md:w-72 h-40 md:h-48 bg-zinc-900 rounded-2xl overflow-hidden border border-white/5 shadow-lg flex-shrink-0 relative group/img">
                            {exp.image ? (
                              <Image
                                src={exp.image}
                                alt={exp.company}
                                fill
                                sizes="(max-width: 768px) 100vw, 288px"
                                className="object-cover transition-all duration-500"
                              />
                            ) : (
                              <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-zinc-800 to-neutral-900">
                                <span className="text-stone-500 text-sm font-normal">No Image</span>
                              </div>
                            )}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                </motion.div>
              );
            })}
          </div>

          {/* Tombol Show More / Less */}
          {workExperience.length > initialDisplayCount && (
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="w-full flex justify-center mt-4"
            >
              <button
                onClick={() => setShowAll(!showAll)}
                className="px-8 py-3 rounded-full border border-white/20 text-white font-medium text-sm hover:bg-white/10 hover:border-white/40 transition-all duration-300"
              >
                {showAll ? "Show Less" : "More Experience"}
              </button>
            </motion.div>
          )}

        </div>
      </div>
    </section>
  );
}