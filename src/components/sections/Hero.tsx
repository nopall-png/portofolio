import React from "react";
import Image from "next/image";
import { personalData } from "@/data";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center pt-20 pb-10">
      <div className="container mx-auto px-6 lg:px-12 flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-0 lg:h-80 relative max-w-[1360px]">

        {/* Left Content */}
        <div className="flex flex-col items-start w-full lg:w-[608px] lg:self-stretch justify-start relative lg:top-[37.80px]">
          <h1 className="text-white text-5xl lg:text-6xl font-extrabold font-['Inter'] leading-tight lg:leading-[70.40px]">
            Hi, I&apos;m {personalData.name}
          </h1>

          <h2 className="text-neutral-400 text-2xl lg:text-3xl font-light font-['Inter'] leading-snug lg:leading-[48px] mt-6 lg:mt-[21px]">
            {personalData.title}
          </h2>

          <p className="text-neutral-400 text-base font-normal font-['Inter'] leading-6 mt-6 lg:mt-[25px] max-w-[512px]">
            {personalData.description}
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-6 mt-8">
            {[
              { name: "LinkedIn", href: personalData.socialLinks.linkedin },
              { name: "Instagram", href: personalData.socialLinks.instagram },
              { name: "GitHub", href: personalData.socialLinks.github },
            ].map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/5 hover:border-white/30 transition-all group"
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
              </a>
            ))}
          </div>
        </div>

        {/* Right Content */}
        <div className="flex justify-center lg:justify-end items-center w-full lg:w-[608px] lg:h-80 lg:translate-y-10">
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
        </div>

      </div>
    </section>
  );
}
