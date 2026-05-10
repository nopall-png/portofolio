import React from "react";

export default function Contact() {
  return (
    <section id="contact" className="py-24 border-t border-white/10">
      <div className="container mx-auto px-6 lg:px-12 flex flex-col lg:flex-row justify-between gap-16 max-w-[1360px]">
        
        {/* Left Side: Text and Decorative Elements */}
        <div className="w-full lg:w-[608px] flex flex-col justify-start relative min-h-[400px]">
          <div className="mb-12">
            <h2 className="text-white text-5xl lg:text-6xl font-extrabold leading-tight lg:leading-[80px]">
              Let&apos;s bring your <br /> ideas to life.
            </h2>
            <p className="text-neutral-400 text-lg lg:text-xl font-normal leading-relaxed lg:leading-8 mt-8 max-w-[512px]">
              Got a project in mind? Whether it&apos;s AI integration, web development, or design—let&apos;s create something exceptional together.
            </p>
          </div>

          {/* Decorative Floating Squares (Mimicking the user's absolute design) */}
          <div className="relative w-64 h-64 mt-12 opacity-20 hidden md:block">
            <div className="absolute w-64 h-64 left-[67px] top-[-60px] rotate-[24deg] rounded-3xl border border-white/30"></div>
            <div className="absolute w-48 h-48 left-[12px] top-[40px] -rotate-12 rounded-2xl border border-white/20"></div>
            <div className="absolute w-32 h-32 left-[83px] top-[30px] rotate-[15deg] rounded-2xl border border-white/10"></div>
          </div>

          {/* Small Cross/Plus Decorative Element */}
          <div className="absolute right-[-24px] top-[268px] w-12 h-12 opacity-30 hidden lg:block">
            <div className="absolute w-7 h-[4px] left-[10px] top-[24px] bg-white/30"></div>
            <div className="absolute w-[4px] h-7 left-[24px] top-[10px] bg-white/30"></div>
          </div>
        </div>

        {/* Right Side: Contact Form */}
        <div className="w-full lg:w-[608px] flex flex-col justify-start gap-10 pt-4 lg:pt-[74px]">
          <div className="group border-b border-white/20 pb-4 transition-colors focus-within:border-white">
            <input 
              type="text" 
              placeholder="Your Name" 
              className="w-full bg-transparent text-neutral-400 text-lg font-normal focus:outline-none placeholder:text-neutral-600"
            />
          </div>
          
          <div className="group border-b border-white/20 pb-4 transition-colors focus-within:border-white">
            <input 
              type="email" 
              placeholder="Your Email" 
              className="w-full bg-transparent text-neutral-400 text-lg font-normal focus:outline-none placeholder:text-neutral-600"
            />
          </div>

          <div className="group border-b border-white/20 pb-4 transition-colors focus-within:border-white">
            <textarea 
              placeholder="Tell me about your project" 
              rows={4}
              className="w-full bg-transparent text-neutral-400 text-lg font-normal leading-7 focus:outline-none placeholder:text-neutral-600 resize-none"
            ></textarea>
          </div>

          <div className="flex justify-start">
            <button className="flex items-center gap-3 bg-white text-black px-10 py-4 rounded-full font-bold text-base hover:bg-neutral-200 transition-colors group">
              Send Message
              <svg 
                width="20" 
                height="20" 
                viewBox="0 0 20 20" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
                className="group-hover:translate-x-1 transition-transform"
              >
                <path d="M5 10H15M15 10L11 6M15 10L11 14" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
