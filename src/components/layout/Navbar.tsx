"use client";

import React, { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? "bg-black/80 backdrop-blur-md border-b border-white/5" : "bg-black/60 border-b border-white/5"}`}>
      <div className="container mx-auto px-6 lg:px-32 h-16 flex items-center justify-between">
        
        {/* Logo */}
        <div className="flex items-center">
          <a href="#" className="text-white text-xl font-extrabold font-['Inter'] leading-7 tracking-tighter">
            NR
          </a>
        </div>

        {/* Nav Links */}
        <div className="hidden lg:flex items-center gap-8">
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

        {/* Mobile Menu Button (Optional, but good for UX) */}
        <div className="lg:hidden">
          <button className="text-white p-2">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </button>
        </div>

      </div>
    </nav>
  );
}
