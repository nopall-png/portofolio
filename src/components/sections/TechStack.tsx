import React from "react";
import { techStack } from "@/data";

export default function TechStack() {
  return (
    <section id="tech-stack" className="py-24 border-t border-white/10">
      <div className="container mx-auto px-6 lg:px-12 flex justify-center max-w-[1360px]">
        <div className="flex flex-col justify-start items-start gap-16 lg:gap-20 w-full lg:max-w-[1152px]">
          
          <h2 className="text-white text-4xl lg:text-5xl font-extrabold leading-tight lg:leading-[72px]">
            Tech Stack
          </h2>
          
          <div className="flex flex-col gap-16 w-full">
            {techStack.map((category, catIndex) => (
              <div key={catIndex} className="flex flex-col justify-start items-start gap-6 w-full">
                
                {/* Category Title */}
                <div className="w-full flex justify-start items-start">
                  <h3 className="text-zinc-500 text-sm font-medium uppercase leading-5 tracking-tight">
                    • {category.category}
                  </h3>
                </div>
                
                {/* Skills Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 lg:gap-8 w-full">
                  {category.skills.map((skill, skillIndex) => (
                    <div 
                      key={skillIndex} 
                      className="flex flex-col justify-center items-center p-6 lg:p-8 gap-4 rounded-2xl hover:bg-white/[0.02] transition-colors group"
                    >
                      <div className="w-12 h-12 lg:w-16 lg:h-16 flex justify-center items-center relative transition-transform duration-300 group-hover:scale-110 group-hover:-translate-y-1">
                        {/* Using SimpleIcons CDN for monochrome white SVGs */}
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img 
                          src={`https://cdn.simpleicons.org/${skill.icon}/white`} 
                          alt={skill.name}
                          className="w-full h-full object-contain opacity-80 group-hover:opacity-100 transition-opacity"
                        />
                      </div>
                      <span className="text-neutral-400 text-sm font-normal leading-5 group-hover:text-white transition-colors">
                        {skill.name}
                      </span>
                    </div>
                  ))}
                </div>
                
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
