"use client";
import React, { useEffect, useState } from "react";

// 1. Update interface Project
export interface Project {
    id: string | number;
    title: string;
    description: string;
    longDescription?: string;
    techStack: string[];
    link?: string;
    github?: string;
    images?: string[];
    documentation?: string;
    coverImage?: string;
}

interface ProjectModalProps {
    project: Project | null;
    onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        setCurrentImageIndex(0);
    }, [project]);

    useEffect(() => {
        document.body.style.overflow = "hidden";
        return () => {
            document.body.style.overflow = "unset";
        };
    }, []);

    if (!project) return null;

    const projectImages = project.images && project.images.length > 0
        ? project.images
        : [
            "https://via.placeholder.com/800x450/171717/525252?text=No+Image+Available"
        ];

    const totalImages = projectImages.length;

    const nextImage = () => {
        setCurrentImageIndex((prev) => (prev + 1) % totalImages);
    };

    const prevImage = () => {
        setCurrentImageIndex((prev) => (prev - 1 + totalImages) % totalImages);
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 sm:p-6" onClick={onClose}>

            <div
                className="relative w-full max-w-[1152px] h-full max-h-[90vh] lg:h-[653px] bg-neutral-950 rounded-3xl outline outline-1 outline-white/10 overflow-hidden flex flex-col lg:flex-row shadow-2xl"
                onClick={(e) => e.stopPropagation()}
            >

                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 lg:top-6 lg:right-6 z-[70] w-10 h-10 rounded-full bg-black/60 hover:bg-black/80 outline outline-1 outline-white/20 flex justify-center items-center transition-colors"
                    aria-label="Close"
                >
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>

                {/* Kolom Kiri: Informasi Project */}
                <div className="w-full lg:w-1/2 h-full p-6 lg:p-12 flex flex-col overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">

                    <h2 className="text-neutral-50 text-3xl lg:text-4xl font-extrabold font-['Inter'] leading-tight mb-6">
                        {project.title}
                    </h2>

                    <p className="text-neutral-400 text-base lg:text-lg font-normal font-['Inter'] leading-relaxed mb-10 whitespace-pre-wrap">
                        {project.longDescription || project.description}
                    </p>

                    <div className="mt-auto flex flex-col gap-4">
                        <h3 className="text-white text-lg font-bold font-['Inter']">Tech Stack Used</h3>
                        <div className="flex flex-wrap gap-3">
                            {project.techStack.map((tech, index) => (
                                <div key={index} className="px-4 py-2 bg-zinc-900 rounded-full outline outline-1 outline-white/20">
                                    <span className="text-neutral-400 text-sm font-normal font-['Inter']">{tech}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Kolom Kanan: Gambar & Tombol Action */}
                <div className="w-full lg:w-1/2 h-[400px] lg:h-full bg-stone-950 relative flex flex-col p-8 lg:p-12 items-center">

                    <div className="w-full aspect-video bg-zinc-900 rounded-2xl outline outline-1 outline-white/10 flex justify-center items-center relative overflow-hidden mb-6 group">

                        {projectImages[currentImageIndex].toLowerCase().endsWith(".mp4") ? (
                            <video
                                src={projectImages[currentImageIndex]}
                                controls
                                className="w-full h-full object-cover"
                                autoPlay
                                muted
                                loop
                            />
                        ) : (
                            /* eslint-disable-next-line @next/next/no-img-element */
                            <img
                                src={projectImages[currentImageIndex]}
                                alt={`${project.title} screenshot ${currentImageIndex + 1}`}
                                className="w-full h-full object-cover transition-opacity duration-300"
                            />
                        )}

                        {totalImages > 1 && (
                            <>
                                <button
                                    onClick={prevImage}
                                    className="absolute left-4 w-10 h-10 bg-black/60 hover:bg-black/80 rounded-full outline outline-1 outline-white/20 flex justify-center items-center transition-colors opacity-0 group-hover:opacity-100"
                                >
                                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" /></svg>
                                </button>

                                <button
                                    onClick={nextImage}
                                    className="absolute right-4 w-10 h-10 bg-black/60 hover:bg-black/80 rounded-full outline outline-1 outline-white/20 flex justify-center items-center transition-colors opacity-0 group-hover:opacity-100"
                                >
                                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
                                </button>
                            </>
                        )}
                    </div>

                    {totalImages > 1 && (
                        <div className="flex justify-center gap-2 mb-8">
                            {projectImages.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => setCurrentImageIndex(index)}
                                    className={`h-2 rounded-full transition-all duration-300 ${currentImageIndex === index ? "w-8 bg-white" : "w-2 bg-white/30 hover:bg-white/50"
                                        }`}
                                />
                            ))}
                        </div>
                    )}

                    <div className="w-full max-w-sm flex flex-col gap-3 mt-auto">
                        {project.link && (
                            <a
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full h-14 bg-white hover:bg-gray-200 rounded-full flex justify-center items-center gap-2 transition-colors flex-shrink-0"
                            >
                                <span className="text-black text-base font-bold font-['Inter']">View Project</span>
                                <svg className="w-5 h-5 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                </svg>
                            </a>
                        )}

                        {project.github && (
                            <a
                                href={project.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full h-14 bg-zinc-900 hover:bg-zinc-800 rounded-full flex justify-center items-center gap-2 transition-colors outline outline-1 outline-white/20 flex-shrink-0"
                            >
                                <span className="text-white text-base font-bold font-['Inter']">GitHub Repository</span>
                                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                </svg>
                            </a>
                        )}

                        {project.documentation && (
                            <a
                                href={project.documentation}
                                download
                                className="w-full h-14 bg-transparent hover:bg-white/5 rounded-full outline outline-1 outline-white/20 flex justify-center items-center gap-2 transition-colors flex-shrink-0"
                            >
                                <span className="text-white text-base font-bold font-['Inter']">Download Documentation</span>
                                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a2 2 0 002 2h12a2 2 0 002-2v-1M7 10l5 5m0 0l5-5m-5 5V3" />
                                </svg>
                            </a>
                        )}

                        <button
                            onClick={onClose}
                            className="w-full h-14 bg-transparent hover:bg-white/5 rounded-full flex justify-center items-center gap-2 transition-colors lg:hidden mt-2 border border-white/10"
                        >
                            <span className="text-neutral-400 text-base font-medium font-['Inter']">Close</span>
                        </button>
                    </div>

                </div>

            </div>
        </div>
    );
}