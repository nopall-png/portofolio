"use client";
import React from "react";
import { services } from "@/data";
import { motion } from "framer-motion";

export default function Services() {
  return (
    <section id="services" className="py-24 border-t border-white/10 overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12 flex justify-center max-w-[1360px]">
        
        <div className="flex flex-col justify-start items-start gap-12 w-full lg:max-w-[1280px]">
          
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-white text-4xl lg:text-5xl font-extrabold leading-tight lg:leading-[72px]"
          >
            My Services
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 w-full">
            {services.map((service, index) => (
              <motion.div 
                key={service.id} 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10, backgroundColor: "rgba(39, 39, 42, 0.8)" }}
                className="w-full flex flex-col justify-between bg-zinc-900 rounded-3xl p-8 min-h-[384px] group transition-colors border border-white/5"
              >
                <div>
                  <div className="flex flex-col justify-start items-start gap-4 mb-10">
                    <motion.span 
                      initial={{ scale: 0.8, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      transition={{ delay: 0.5 + index * 0.1 }}
                      className="text-white/20 text-5xl font-bold leading-tight group-hover:text-white/40 transition-colors"
                    >
                      {service.id}
                    </motion.span>
                    <div className="w-full h-px bg-white/10 group-hover:bg-white/20 transition-colors"></div>
                  </div>
                  
                  <div className="flex flex-col justify-start items-start gap-3">
                    <h3 className="text-white text-2xl font-bold leading-9">
                      {service.title}
                    </h3>
                    <p className="text-neutral-400 text-sm font-normal leading-6">
                      {service.description}
                    </p>
                  </div>
                </div>
                
                <div className="flex justify-end items-end w-full mt-8">
                  <motion.div 
                    whileHover={{ scale: 1.2, rotate: 45 }}
                    className="w-12 h-12 rounded-full outline outline-1 outline-offset-[-1px] outline-white/20 flex justify-center items-center group-hover:outline-white/50 group-hover:bg-white/5 transition-all cursor-pointer"
                  >
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" className="transform transition-transform">
                      <path d="M1 13L13 1M13 1H4M13 1V10" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
