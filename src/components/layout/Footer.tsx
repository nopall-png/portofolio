import React from "react";
import { personalData } from "@/data";

export default function Footer() {
  const sitemap = [
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Tech Stack", href: "#tech-stack" },
    { name: "Services", href: "#services" },
    { name: "Certificates", href: "#certificates" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <footer className="bg-white text-black py-24">
      <div className="container mx-auto px-6 lg:px-12 max-w-[1360px]">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-24">
          
          {/* Brand & Contact */}
          <div className="flex flex-col gap-6">
            <h2 className="text-2xl font-extrabold leading-8">{personalData.name}</h2>
            <div className="flex items-center gap-3 text-stone-500">
              <svg 
                width="16" 
                height="16" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              >
                <rect width="20" height="16" x="2" y="4" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
              <a href={`mailto:${personalData.email}`} className="text-base font-normal hover:text-black transition-colors">
                {personalData.email}
              </a>
            </div>
          </div>

          {/* Sitemap */}
          <div className="flex flex-col gap-6">
            <h3 className="text-base font-bold leading-6">Sitemap</h3>
            <ul className="flex flex-col gap-2">
              {sitemap.map((item) => (
                <li key={item.name}>
                  <a 
                    href={item.href} 
                    className="text-stone-500 text-base font-medium hover:text-black transition-colors"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div className="flex flex-col gap-6">
            <h3 className="text-base font-bold leading-6">Connect</h3>
            <div className="flex gap-4">
              {[
                { name: "LinkedIn", href: personalData.socialLinks.linkedin },
                { name: "GitHub", href: personalData.socialLinks.github },
                { name: "Instagram", href: personalData.socialLinks.instagram }
              ].map((social) => (
                <a 
                  key={social.name}
                  href={social.href} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full outline outline-1 outline-offset-[-1px] outline-black/20 flex justify-center items-center hover:bg-black/5 transition-all"
                  aria-label={social.name}
                >
                  <span className="sr-only">{social.name}</span>
                  <svg 
                    width="20" 
                    height="20" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="black" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
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

        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-black/10">
          <p className="text-center text-stone-500 text-sm font-normal leading-5">
            © {new Date().getFullYear()} {personalData.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
