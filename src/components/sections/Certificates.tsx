"use client";

import React, { useState } from "react";
import { certificates } from "@/data";
import CertificateModal from "./CertificateModal";
import { motion } from "framer-motion";

export default function Certificates() {
  const [showAll, setShowAll] = useState(false);
  const [selectedCert, setSelectedCert] = useState<any>(null);

  const initialDisplayCount = 4;

  const displayedCertificates = showAll
    ? certificates
    : certificates.slice(0, initialDisplayCount);

  return (
    <section id="certificates" className="py-24 border-t border-white/10 overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12 flex justify-center max-w-[1360px]">
        <div className="flex flex-col justify-start items-start gap-12 w-full lg:max-w-[896px]">

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-white text-4xl lg:text-5xl font-extrabold leading-tight lg:leading-[72px]"
          >
            Certificates
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-10 w-full">
            {displayedCertificates.map((cert, index) => {
              const isPDF = cert.image?.toLowerCase().endsWith(".pdf");

              return (
                <motion.div
                  key={cert.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="flex flex-col justify-start items-start w-full group cursor-pointer"
                  onClick={() => setSelectedCert(cert)}
                >
                  {/* Certificate Image Container */}
                  <div className="w-full bg-gradient-to-br from-zinc-900 via-neutral-900 to-neutral-950 rounded-2xl outline outline-1 outline-offset-[-1px] outline-white/10 flex justify-center items-center mb-5 overflow-hidden relative group-hover:outline-white/30 transition-all duration-300">
                    {cert.image ? (
                      isPDF ? (
                        <div className="w-full aspect-[2/1] flex flex-col items-center justify-center gap-3 group-hover:scale-105 transition-transform duration-700">
                          <svg className="w-12 h-12 text-red-500" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M11.363 2c4.155 0 2.637 6 2.637 6s6-1.518 6 2.638v11.362c0 .552-.448 1-1 1h-13c-.552 0-1-.448-1-1v-19c0-.552.448-1 1-1h6.363zm.637-2h-7c-1.105 0-2 .895-2 2v19c0 1.105.895 2 2 2h13c1.105 0 2-.895 2-2v-12.5l-7-7.5z" />
                          </svg>
                          <span className="text-neutral-400 text-sm font-medium">View PDF Document</span>
                        </div>
                      ) : (
                        /* eslint-disable-next-line @next/next/no-img-element */
                        <img
                          src={cert.image}
                          alt={cert.title}
                          className="w-full h-auto object-contain group-hover:scale-105 transition-transform duration-700"
                        />
                      )
                    ) : (
                      <div className="w-full aspect-[2/1] flex items-center justify-center">
                        <span className="text-stone-500 text-sm font-normal leading-5 group-hover:scale-105 transition-transform duration-500">
                          Certificate Preview
                        </span>
                      </div>
                    )}

                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-white/[0.03] transition-colors duration-300 flex items-center justify-center">
                      <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  <h3 className="text-white text-base lg:text-lg font-bold leading-6 mb-1 group-hover:text-neutral-300 transition-colors">
                    {cert.title}
                  </h3>
                  <p className="text-neutral-400 text-sm font-normal leading-5">
                    {cert.issuer}
                  </p>
                </motion.div>
              );
            })}
          </div>

          {certificates.length > initialDisplayCount && (
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
                {showAll ? "Show Less" : "More Certificates"}
              </button>
            </motion.div>
          )}

        </div>
      </div>

      <CertificateModal
        certificate={selectedCert}
        onClose={() => setSelectedCert(null)}
      />
    </section>
  );
}