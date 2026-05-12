"use client";
import React from "react";
import Image from "next/image";
import { personalData } from "@/data";
import { motion, Variants } from "framer-motion";

export default function Hero() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1] as const, // Custom cubic-bezier for smooth feel
      },
    },
  };

  return (
    <section className="min-h-screen flex items-center justify-center pt-20 pb-10 overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12 flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-0 lg:h-80 relative max-w-[1360px]">

        {/* Left Content */}
        <motion.div 
          className="flex flex-col items-start w-full lg:w-[608px] lg:self-stretch justify-start relative lg:top-[37.80px]"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1 
            className="text-white text-5xl lg:text-6xl font-extrabold font-['Inter'] leading-tight lg:leading-[70.40px]"
            variants={itemVariants}
          >
            Hi, I&apos;m {personalData.name}
          </motion.h1>

          <motion.h2 
            className="text-neutral-400 text-2xl lg:text-3xl font-light font-['Inter'] leading-snug lg:leading-[48px] mt-6 lg:mt-[21px]"
            variants={itemVariants}
          >
            {personalData.title}
          </motion.h2>

          <motion.p 
            className="text-neutral-400 text-base font-normal font-['Inter'] leading-6 mt-6 lg:mt-[25px] max-w-[512px]"
            variants={itemVariants}
          >
            {personalData.description}
          </motion.p>

          {/* Social Links */}
          <motion.div className="flex items-center gap-6 mt-8" variants={itemVariants}>
            {[
              { name: "LinkedIn", href: personalData.socialLinks.linkedin },
              { name: "Instagram", href: personalData.socialLinks.instagram },
              { name: "GitHub", href: personalData.socialLinks.github },
            ].map((social) => (
              <motion.a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, backgroundColor: "rgba(255, 255, 255, 0.1)" }}
                whileTap={{ scale: 0.95 }}
                className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center transition-all group"
                aria-label={social.name}
              >
                <svg 
                  width="20" 
                  height="20" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                  className="text-neutral-400 group-hover:text-white transition-colors"
                >
                  {social.name === "LinkedIn" && (
                    <>
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                      <rect width="4" height="12" x="2" y="9" />
                      <circle cx="4" cy="4" r="2" />
                    </>
                  )}
                  {social.name === "GitHub" && (
                    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3.5 1.5a10.8 10.8 0 0 0-5.5 0C7.5 2 6.5 2 6.5 2c-.28 1.15-.28 2.35 0 3.5a4.6 4.6 0 0 0-1 3.5c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                  )}
                  {social.name === "Instagram" && (
                    <>
                      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                    </>
                  )}
                </svg>
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        {/* Right Content */}
        <motion.div 
          className="flex justify-center lg:justify-end items-center w-full lg:w-[608px] lg:h-80 lg:translate-y-10"
          initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] as const, delay: 0.5 }}
        >
          <div className="w-64 h-64 lg:w-80 lg:h-80 bg-zinc-900 rounded-3xl overflow-hidden shadow-2xl relative group border border-white/5">
            <Image
              src={personalData.profileImage}
              alt={personalData.name}
              fill
              sizes="(max-width: 1024px) 256px, 320px"
              className="object-cover object-top grayscale hover:grayscale-0 transition-all duration-700 ease-in-out scale-110 group-hover:scale-100"
              priority
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
}
