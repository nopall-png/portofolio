"use client";

import React, { useState } from "react";
import { workExperience } from "@/data";

export default function WorkExperience() {
  const [openId, setOpenId] = useState<number | null>(1);

  const toggleAccordion = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="experience" className="py-24 border-t border-white/10">
      <div className="container mx-auto px-6 lg:px-12 flex justify-center max-w-[1360px]">
        <div className="flex flex-col justify-start items-start gap-12 w-full lg:max-w-[896px]">
          
          <h2 className="text-white text-4xl lg:text-5xl font-extrabold leading-tight lg:leading-[72px]">
            Work Experience
          </h2>
          
          <div className="flex flex-col w-full">
            {workExperience.map((exp, index) => {
              const isOpen = openId === exp.id;
              
              return (
                <div 
                  key={exp.id} 
                  className={`w-full flex flex-col justify-start items-start border-t border-white/10 ${index === workExperience.length - 1 ? 'border-b' : ''}`}
                >
                  <button 
                    onClick={() => toggleAccordion(exp.id)}
                    className="w-full py-6 flex flex-col md:flex-row justify-between md:items-center gap-4 text-left focus:outline-none hover:bg-white/[0.02] transition-colors"
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
                      <div className={`w-5 h-5 flex items-center justify-center transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
                        <svg width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M1 1L7 7L13 1" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                    </div>
                  </button>
                  
                  {/* Expanded Content */}
                  <div className={`grid transition-all duration-300 ease-in-out w-full ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
                    <div className="overflow-hidden">
                      <div className="flex flex-col md:flex-row gap-8 items-start pb-8 pt-2">
                        <p className="flex-1 text-neutral-400 text-base font-normal leading-relaxed text-left pr-0 md:pr-4">
                          {exp.description}
                        </p>
                        
                        {/* Image Placeholder */}
                        <div className="w-full md:w-72 h-40 md:h-48 bg-gradient-to-br from-zinc-800 via-zinc-800 to-neutral-900 rounded-2xl flex items-center justify-center border border-white/5 shadow-lg flex-shrink-0">
                          <span className="text-stone-500 text-sm font-normal font-['Inter'] leading-5">
                            Project UI
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
