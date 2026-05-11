"use client";

import React, { useState } from "react";
import Image from "next/image";
import { projects } from "@/data";
import ProjectModal, { Project } from "@/components/sections/ProjectModal";

export default function Projects() {
  const [showAll, setShowAll] = useState<boolean>(false);

  // Berikan tipe data Project atau null
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const displayedProjects = showAll ? projects : projects.slice(0, 6);

  return (
    <>
      <section id="projects" className="py-24 border-t border-white/10">
        <div className="container mx-auto px-6 lg:px-12 flex justify-center max-w-[1360px]">
          <div className="flex flex-col justify-start items-start gap-12 w-full lg:max-w-[1184px]">

            <h2 className="text-white text-4xl lg:text-5xl font-extrabold leading-tight lg:leading-[72px]">
              Projects
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-8 w-full">
              {displayedProjects.map((project: Project) => (
                <div
                  key={project.id}
                  onClick={() => setSelectedProject(project)}
                  className="group flex flex-col justify-start items-start hover:opacity-90 transition-opacity cursor-pointer"
                >
                  <div className="w-full aspect-[3/2] bg-zinc-900 rounded-2xl flex justify-center items-center overflow-hidden mb-6 relative group shadow-xl">
                    {project.coverImage ? (
                      <Image 
                        src={project.coverImage}
                        alt={project.title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                    ) : (
                      <span className="text-stone-500 text-sm font-normal leading-5 group-hover:scale-105 transition-transform duration-500">
                        Project Mockup
                      </span>
                    )}
                  </div>

                  <h3 className="text-white text-lg font-bold leading-7 mb-1 group-hover:text-neutral-300 transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-neutral-400 text-sm font-normal leading-6 mb-5 line-clamp-2">
                    {project.description}
                  </p>

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
                </div>
              ))}
            </div>

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

      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </>
  );
}