import React from "react";
import { certificates } from "@/data";

export default function Certificates() {
  return (
    <section id="certificates" className="py-24 border-t border-white/10">
      <div className="container mx-auto px-6 lg:px-12 flex justify-center max-w-[1360px]">
        <div className="flex flex-col justify-start items-start gap-12 w-full lg:max-w-[896px]">
          
          <h2 className="text-white text-4xl lg:text-5xl font-extrabold leading-tight lg:leading-[72px]">
            Certificates
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-10 w-full">
            {certificates.map((cert) => (
              <div key={cert.id} className="flex flex-col justify-start items-start w-full group">
                
                {/* Certificate Image Placeholder */}
                <div className="w-full aspect-[2/1] bg-gradient-to-br from-zinc-900 via-neutral-900 to-neutral-950 rounded-2xl outline outline-1 outline-offset-[-1px] outline-white/10 flex justify-center items-center mb-5 overflow-hidden relative">
                  <span className="text-stone-500 text-sm font-normal leading-5 group-hover:scale-105 transition-transform duration-500">
                    Certificate
                  </span>
                  <div className="absolute inset-0 bg-white/0 group-hover:bg-white/[0.02] transition-colors duration-300"></div>
                </div>
                
                {/* Title */}
                <h3 className="text-white text-base lg:text-lg font-bold leading-6 mb-1 group-hover:text-neutral-300 transition-colors">
                  {cert.title}
                </h3>
                
                {/* Issuer */}
                <p className="text-neutral-400 text-sm font-normal leading-5">
                  {cert.issuer}
                </p>
                
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
