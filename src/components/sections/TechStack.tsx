"use client";
import React from "react";
import { techStack } from "@/data";
import { motion } from "framer-motion";

export default function TechStack() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="tech-stack" className="py-24 border-t border-white/10 overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12 flex justify-center max-w-[1360px]">
        <div className="flex flex-col justify-start items-start gap-16 lg:gap-20 w-full lg:max-w-[1152px]">
          
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-white text-4xl lg:text-5xl font-extrabold leading-tight lg:leading-[72px]"
          >
            Tech Stack
          </motion.h2>
          
          <div className="flex flex-col gap-16 w-full">
            {techStack.map((category, catIndex) => (
              <motion.div 
                key={catIndex} 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={containerVariants}
                className="flex flex-col justify-start items-start gap-6 w-full"
              >
                
                {/* Category Title */}
                <motion.div className="w-full flex justify-start items-start" variants={itemVariants}>
                  <h3 className="text-zinc-500 text-sm font-medium uppercase leading-5 tracking-tight">
                    • {category.category}
                  </h3>
                </motion.div>
                
                {/* Skills Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 lg:gap-8 w-full">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div 
                      key={skillIndex} 
                      variants={itemVariants}
                      whileHover={{ 
                        scale: 1.05, 
                        backgroundColor: "rgba(255, 255, 255, 0.03)",
                        translateY: -5
                      }}
                      className="flex flex-col justify-center items-center p-6 lg:p-8 gap-4 rounded-2xl transition-colors group"
                    >
                      <div className="w-12 h-12 lg:w-16 lg:h-16 flex justify-center items-center relative transition-transform duration-300">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img 
                          src={`/icons/${skill.icon}.svg`} 
                          alt={skill.name}
                          className="w-full h-full object-contain opacity-80 group-hover:opacity-100 transition-opacity"
                        />
                      </div>
                      <span className="text-neutral-400 text-sm font-normal leading-5 group-hover:text-white transition-colors">
                        {skill.name}
                      </span>
                    </motion.div>
                  ))}
                </div>
                
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
