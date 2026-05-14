"use client";
import React, { useEffect } from "react";

interface Certificate {
    id: string | number;
    title: string;
    issuer: string;
    image?: string;
}

interface CertificateModalProps {
    certificate: Certificate | null;
    onClose: () => void;
}

export default function CertificateModal({ certificate, onClose }: CertificateModalProps) {
    useEffect(() => {
        if (certificate) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return () => {
            document.body.style.overflow = "unset";
        };
    }, [certificate]);

    if (!certificate) return null;

    return (
        <div 
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-md p-4 transition-all duration-300"
            onClick={onClose}
        >
            <div 
                className="relative flex flex-col items-center max-w-full max-h-full"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/60 hover:bg-black/80 outline outline-1 outline-white/20 flex justify-center items-center transition-colors"
                    aria-label="Close"
                >
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>


                {/* Image/PDF Container */}
                <div className="rounded-xl overflow-hidden outline outline-1 outline-white/10 shadow-2xl bg-zinc-900/50 flex items-center justify-center max-w-[95vw] max-h-[80vh] w-full">
                    {certificate.image ? (
                        certificate.image.toLowerCase().endsWith(".pdf") ? (
                            /* PDF Preview */
                            <iframe
                                src={certificate.image}
                                className="w-full h-[70vh] md:w-[80vw]"
                                title={certificate.title}
                            />
                        ) : (
                            /* eslint-disable-next-line @next/next/no-img-element */
                            <img
                                src={certificate.image}
                                alt={certificate.title}
                                className="w-auto h-auto max-w-full max-h-[80vh] object-contain"
                            />
                        )
                    ) : (
                        <div className="w-96 aspect-[4/3] flex items-center justify-center bg-zinc-900 text-zinc-500 italic">
                            No preview available
                        </div>
                    )}
                </div>

                {/* Info */}
                <div className="text-center mt-6 space-y-1">
                    <h2 className="text-white text-xl md:text-2xl font-bold tracking-tight">
                        {certificate.title}
                    </h2>
                    <p className="text-neutral-400 text-base">
                        {certificate.issuer}
                    </p>
                </div>
            </div>
        </div>
    );
}
