"use client";
import React, { useEffect, useState } from "react";

// 1. Update interface Project
export interface Project {
    id: string | number;
    title: string;
    description: string;
    longDescription?: string; // Tambahkan longDescription sebagai opsional
    techStack: string[];
    link: string;
    images?: string[];
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
                className="relative w-full max-w-[1152px] h-auto lg:h-[653px] bg-neutral-950 rounded-3xl outline outline-1 outline-white/10 overflow-hidden flex flex-col lg:flex-row shadow-2xl"
                onClick={(e) => e.stopPropagation()}
            >

                <button
                    onClick={onClose}
                    className="absolute top-6 right-6 z-10 w-10 h-10 rounded-full bg-black/50 hover:bg-black/80 outline outline-1 outline-white/20 flex justify-center items-center transition-colors"
                >
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>

                {/* Kolom Kiri: Informasi Project */}
                <div className="w-full lg:w-1/2 h-full p-8 lg:p-12 flex flex-col overflow-y-auto custom-scrollbar">
                    <h2 className="text-neutral-50 text-3xl lg:text-4xl font-extrabold font-['Inter'] leading-tight mb-6">
                        {project.title}
                    </h2>

                    {/* Gunakan longDescription di sini. Jika kosong, pakai description biasa */}
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
                <div className="w-full lg:w-1/2 h-[400px] lg:h-full bg-stone-950 relative flex flex-col p-8 lg:p-12 justify-center items-center">

                    <div className="w-full aspect-video bg-zinc-900 rounded-2xl outline outline-1 outline-white/10 flex justify-center items-center relative overflow-hidden mb-8 lg:mb-16 group">

                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                            src={projectImages[currentImageIndex]}
                            alt={`${project.title} screenshot ${currentImageIndex + 1}`}
                            className="w-full h-full object-cover transition-opacity duration-300"
                        />

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
                        <div className="flex justify-center gap-2 mb-8 lg:mb-12 absolute bottom-[25%] lg:bottom-40">
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

                    <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full max-w-sm h-14 bg-white hover:bg-gray-200 rounded-full flex justify-center items-center gap-2 transition-colors mt-auto flex-shrink-0"
                    >
                        <span className="text-black text-base font-bold font-['Inter']">View Project</span>
                        <svg className="w-5 h-5 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                    </a>
                </div>

            </div>
        </div>
    );
}