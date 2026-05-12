"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    // === GANTI ID DI BAWAH INI DENGAN ID DARI FORMSPREE KAMU ===
    const FORMSPREE_ID = "mdabyqbb";

    try {
      const response = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setStatus("error");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  if (status === "success") {
    return (
      <section id="contact" className="py-24 border-t border-white/10">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="container mx-auto px-6 lg:px-12 flex flex-col items-center justify-center text-center gap-8 max-w-[1360px] min-h-[400px]"
        >
          <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
          </div>
          <h2 className="text-white text-4xl font-extrabold">Message Sent!</h2>
          <p className="text-neutral-400 text-lg max-w-md">
            Thank you for reaching out. I&apos;ll get back to you as soon as possible.
          </p>
          <button
            onClick={() => setStatus("idle")}
            className="text-white border-b border-white pb-1 hover:text-neutral-400 hover:border-neutral-400 transition-colors"
          >
            Send another message
          </button>
        </motion.div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-24 border-t border-white/10 overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12 flex flex-col lg:flex-row justify-between gap-16 max-w-[1360px]">

        {/* Left Side: Text and Decorative Elements */}
        <motion.div 
          className="w-full lg:w-[608px] flex flex-col justify-start relative min-h-[400px]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: { transition: { staggerChildren: 0.2 } }
          }}
        >
          <div className="mb-12">
            <motion.h2 
              variants={fadeIn}
              className="text-white text-5xl lg:text-6xl font-extrabold leading-tight lg:leading-[80px]"
            >
              Let&apos;s bring your <br /> ideas to life.
            </motion.h2>
            <motion.p 
              variants={fadeIn}
              className="text-neutral-400 text-lg lg:text-xl font-normal leading-relaxed lg:leading-8 mt-8 max-w-[512px]"
            >
              Got a project in mind? Whether it&apos;s AI integration, web development, or design—let&apos;s create something exceptional together.
            </motion.p>
          </div>

          {/* Decorative Floating Squares */}
          <div className="relative w-64 h-64 mt-12 opacity-20 hidden md:block">
            <motion.div 
              animate={{ 
                y: [0, -20, 0],
                rotate: [24, 28, 24]
              }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute w-64 h-64 left-[67px] top-[-60px] rotate-[24deg] rounded-3xl border border-white/30"
            ></motion.div>
            <motion.div 
              animate={{ 
                y: [0, 15, 0],
                rotate: [-12, -8, -12]
              }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="absolute w-48 h-48 left-[12px] top-[40px] -rotate-12 rounded-2xl border border-white/20"
            ></motion.div>
            <motion.div 
              animate={{ 
                scale: [1, 1.1, 1],
                rotate: [15, 10, 15]
              }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute w-32 h-32 left-[83px] top-[30px] rotate-[15deg] rounded-2xl border border-white/10"
            ></motion.div>
          </div>

          {/* Small Cross/Plus Decorative Element */}
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute right-[-24px] top-[268px] w-12 h-12 opacity-30 hidden lg:block"
          >
            <div className="absolute w-7 h-[4px] left-[10px] top-[24px] bg-white/30"></div>
            <div className="absolute w-[4px] h-7 left-[24px] top-[10px] bg-white/30"></div>
          </motion.div>
        </motion.div>

        {/* Right Side: Contact Form */}
        <motion.form 
          onSubmit={handleSubmit} 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="w-full lg:w-[608px] flex flex-col justify-start gap-10 pt-4 lg:pt-[74px]"
        >
          <div className="group border-b border-white/20 pb-4 transition-colors focus-within:border-white">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
              className="w-full bg-transparent text-neutral-400 text-lg font-normal focus:outline-none placeholder:text-neutral-600"
            />
          </div>

          <div className="group border-b border-white/20 pb-4 transition-colors focus-within:border-white">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              required
              className="w-full bg-transparent text-neutral-400 text-lg font-normal focus:outline-none placeholder:text-neutral-600"
            />
          </div>

          <div className="group border-b border-white/20 pb-4 transition-colors focus-within:border-white">
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell me about your project"
              rows={4}
              required
              className="w-full bg-transparent text-neutral-400 text-lg font-normal leading-7 focus:outline-none placeholder:text-neutral-600 resize-none"
            ></textarea>
          </div>

          <div className="flex flex-col justify-start gap-4">
            <motion.button
              type="submit"
              disabled={status === "loading"}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`flex items-center gap-3 bg-white text-black px-10 py-4 rounded-full font-bold text-base hover:bg-neutral-200 transition-colors group ${status === "loading" ? "opacity-50 cursor-not-allowed" : ""}`}
            >
              {status === "loading" ? "Sending..." : "Send Message"}
              {status !== "loading" && (
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="group-hover:translate-x-1 transition-transform">
                  <path d="M5 10H15M15 10L11 6M15 10L11 14" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              )}
            </motion.button>
            {status === "error" && (
              <p className="text-red-500 text-sm">Something went wrong. Please try again.</p>
            )}
          </div>
        </motion.form>
      </div>
    </section>
  );
}
