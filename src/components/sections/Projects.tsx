"use client"; // Wajib ditambahkan di Next.js App Router jika menggunakan useState

import React, { useState } from "react";
import { projects } from "@/data"; // Sesuaikan path ini dengan struktur folder kamu

export default function Projects() {
  // State untuk mengontrol apakah semua project ditampilkan atau tidak
  const [showAll, setShowAll] = useState(false);

  // Menentukan project yang akan di-render (6 item pertama atau semuanya)
  const displayedProjects = showAll ? projects : projects.slice(0, 6);

  return (
    <section id="projects" className="py-24 border-t border-white/10">
      <div className="container mx-auto px-6 lg:px-12 flex justify-center max-w-[1360px]">
        <div className="flex flex-col justify-start items-start gap-12 w-full lg:max-w-[1184px]">

          <h2 className="text-white text-4xl lg:text-5xl font-extrabold leading-tight lg:leading-[72px]">
            Projects
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-8 w-full">
            {displayedProjects.map((project) => (
              <a
                href={project.link}
                key={project.id}
                className="group flex flex-col justify-start items-start hover:opacity-90 transition-opacity"
              >
                {/* Image Placeholder */}
                <div className="w-full aspect-[3/2] bg-gradient-to-br from-zinc-800 via-neutral-800 to-stone-950 rounded-2xl flex justify-center items-center overflow-hidden mb-6">
                  <span className="text-stone-500 text-sm font-normal leading-5 group-hover:scale-105 transition-transform duration-500">
                    Project Mockup
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-white text-lg font-bold leading-7 mb-1 group-hover:text-neutral-300 transition-colors">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-neutral-400 text-sm font-normal leading-6 mb-5">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap items-start gap-2 mt-auto">
                  {project.techStack.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 rounded-full outline outline-1 outline-offset-[-1px] outline-white/20 text-neutral-400 text-xs font-normal leading-4"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </a>
            ))}
          </div>

          {/* Tombol More Projects / Show Less */}
          {projects.length > 6 && (
            <div className="w-full flex justify-center mt-8">
              <button
                onClick={() => setShowAll(!showAll)}
                className="px-8 py-3 rounded-full border border-white/20 text-white font-medium text-sm hover:bg-white/10 hover:border-white/40 transition-all duration-300"
              >
                {showAll ? "Show Less" : "More Projects"}
              </button>
            </div>
          )}

        </div>
      </div>
    </section>
  );
}