import React from "react";
import { aboutMe } from "@/data";

export default function AboutMe() {
  return (
    <section id="about" className="py-24 border-t border-white/10">
      <div className="container mx-auto px-6 lg:px-12 flex flex-col items-start max-w-[1360px]">
        
        <div className="flex flex-col justify-start items-start gap-12 w-full lg:max-w-[896px]">
          {/* Title */}
          <h2 className="text-white text-4xl lg:text-5xl font-extrabold leading-tight lg:leading-[72px]">
            About Me
          </h2>
          
          {/* Description */}
          <p className="text-neutral-400 text-base lg:text-lg font-normal leading-relaxed lg:leading-7">
            {aboutMe.text}
          </p>
          
          {/* Stats */}
          <div className="flex flex-wrap items-center gap-8 lg:gap-16 w-full">
            <div className="flex flex-wrap justify-start items-start gap-8 lg:gap-12">
              {aboutMe.stats.map((stat, index) => (
                <div key={index} className="flex flex-col justify-start items-start">
                  <span className="text-white text-3xl lg:text-4xl font-extrabold leading-tight lg:leading-[60px]">
                    {stat.value}
                  </span>
                  <span className="text-neutral-400 text-sm lg:text-base font-normal leading-snug lg:leading-6">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>

            {/* Download CV Button */}
            <a 
              href="/cv.pdf" 
              download
              className="flex items-center gap-3 bg-white text-black px-8 py-3 rounded-full font-bold text-sm lg:text-base hover:bg-neutral-200 transition-colors group mt-4 lg:mt-0"
            >
              Download CV
              <svg 
                width="20" 
                height="20" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2.5" 
                strokeLinecap="round" 
                strokeLinejoin="round"
                className="group-hover:translate-y-0.5 transition-transform"
              >
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" x2="12" y1="15" y2="3" />
              </svg>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
