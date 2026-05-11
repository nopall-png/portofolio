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
              { name: "LinkedIn", icon: "linkedin", href: "#" },
              { name: "Instagram", icon: "instagram", href: "#" },
              { name: "GitHub", icon: "github", href: "#" },
            ].map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/5 transition-all group"
                aria-label={social.name}
              >
                <img
                  src={`/icons/${social.icon}.svg`}
                  alt={social.name}
                  className="w-5 h-5 opacity-60 group-hover:opacity-100 transition-opacity"
                />
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
