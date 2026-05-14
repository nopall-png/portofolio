"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { personalData } from "@/data";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu when clicking on a link
  const closeMenu = () => setIsOpen(false);

  // Prevent scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const navLinks = [
    { name: "about", href: "#about" },
    { name: "experience", href: "#experience" },
    { name: "projects", href: "#projects" },
    { name: "tech stack", href: "#tech-stack" },
    { name: "services", href: "#services" },
    { name: "certificates", href: "#certificates" },
    { name: "contact", href: "#contact" },
  ];

  return (
    <>
      <nav className={`fixed top-0 left-0 w-full z-[60] transition-all duration-300 ${scrolled || isOpen ? "bg-black/95 backdrop-blur-lg border-b border-white/10 shadow-2xl shadow-black/50" : "bg-black/60 border-b border-white/5"}`}>
        <div className="container mx-auto px-6 lg:px-32 h-16 flex items-center justify-between">
          
          {/* Logo */}
          <div className="flex items-center">
            <a href="#" className="flex items-center group">
              <div className="relative w-10 h-10 rounded-full overflow-hidden border border-white/20 group-hover:border-white/40 transition-all duration-300">
                <Image 
                  src={personalData.profileImage} 
                  alt={personalData.name}
                  fill
                  className="object-cover"
                />
              </div>
            </a>
          </div>

          {/* Nav Links & Social Icons (Desktop) */}
          <div className="hidden lg:flex items-center gap-8">
            <div className="flex items-center gap-8 border-r border-white/10 pr-8 mr-2">
              {navLinks.map((link) => (
                <a 
                  key={link.name}
                  href={link.href}
                  className="group relative h-6 flex flex-col justify-center items-center overflow-hidden"
                >
                  <span className="text-neutral-400 text-sm font-medium font-['Inter'] capitalize leading-6 group-hover:text-white transition-colors">
                    {link.name}
                  </span>
                  <div className="absolute bottom-0 left-0 w-0 h-px bg-white group-hover:w-full transition-all duration-300"></div>
                </a>
              ))}
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-4">
              <a 
                href={personalData.socialLinks.linkedin} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-neutral-400 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect width="4" height="12" x="2" y="9" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>
              <a 
                href={personalData.socialLinks.github} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-neutral-400 hover:text-white transition-colors"
                aria-label="GitHub"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3.5 1.5a10.8 10.8 0 0 0-5.5 0C7.5 2 6.5 2 6.5 2c-.28 1.15-.28 2.35 0 3.5a4.6 4.6 0 0 0-1 3.5c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                </svg>
              </a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button 
              className="text-white p-2 z-[70] relative"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle Menu"
            >
              {isOpen ? (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              ) : (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="3" y1="12" x2="21" y2="12"></line>
                  <line x1="3" y1="6" x2="21" y2="6"></line>
                  <line x1="3" y1="18" x2="21" y2="18"></line>
                </svg>
              )}
            </button>
          </div>

        </div>
      </nav>

      {/* Mobile Menu Drawer - Outside of filtered nav to avoid coordinate bugs */}
      <div 
        className={`fixed inset-0 bg-black/98 z-[55] lg:hidden transition-all duration-500 ease-in-out ${
          isOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full pointer-events-none"
        }`}
      >
        <div className="flex flex-col h-full justify-center items-center gap-8 px-6">
          <div className="flex flex-col items-center gap-6">
            {navLinks.map((link) => (
              <a 
                key={link.name}
                href={link.href}
                onClick={closeMenu}
                className="text-2xl font-medium text-neutral-400 hover:text-white transition-colors capitalize"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="w-12 h-px bg-white/10 my-4"></div>

          <div className="flex items-center gap-6">
            <a 
              href={personalData.socialLinks.linkedin} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-neutral-400 hover:text-white transition-colors"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect width="4" height="12" x="2" y="9" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </a>
            <a 
              href={personalData.socialLinks.github} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-neutral-400 hover:text-white transition-colors"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3.5 1.5a10.8 10.8 0 0 0-5.5 0C7.5 2 6.5 2 6.5 2c-.28 1.15-.28 2.35 0 3.5a4.6 4.6 0 0 0-1 3.5c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </>

  );
}
