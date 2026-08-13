"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Search, Map, Handshake, PenTool } from "lucide-react";

const STEPS = [
  { 
    step: '01', 
    title: 'Discovery', 
    desc: 'Understand your requirements and budget.',
    icon: Search
  },
  { 
    step: '02', 
    title: 'Site Visits', 
    desc: 'Guided tours of shortlisted properties.',
    icon: Map
  },
  { 
    step: '03', 
    title: 'Negotiation', 
    desc: 'Getting you the best price and terms.',
    icon: Handshake
  },
  { 
    step: '04', 
    title: 'Closure', 
    desc: 'Documentation and loan assistance.',
    icon: PenTool
  }
];

export function ProcessStepper() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <div className="relative w-full max-w-5xl mx-auto mt-12 mb-10">
      {/* Background Line */}
      <div className="hidden md:block absolute top-10 left-[10%] w-[80%] h-[1px] bg-border z-0" />
      
      {/* Animated Fill Line */}
      <motion.div 
        className="hidden md:block absolute top-10 left-[10%] h-[2px] bg-primary z-0 origin-left"
        initial={{ width: "0%" }}
        animate={{ width: `${(activeStep / (STEPS.length - 1)) * 80}%` }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      />

      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 relative z-10">
        {STEPS.map((item, i) => {
          const isActive = i <= activeStep;
          const isCurrent = i === activeStep;
          const Icon = item.icon;
          
          return (
            <div 
              key={i} 
              className="flex flex-col items-center text-center cursor-pointer group"
              onMouseEnter={() => setActiveStep(i)}
            >
              <div 
                className={`w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center mb-6 transition-all duration-500 border-2 relative ${
                  isActive 
                    ? "bg-primary border-primary text-primary-foreground shadow-[0_0_24px_rgba(193,95,53,0.35)] md:scale-110" 
                    : "bg-background border-border text-muted-foreground group-hover:border-primary/40 group-hover:text-primary"
                }`}
              >
                {/* Number (Fades out when active) */}
                <span 
                  className={`absolute inset-0 flex items-center justify-center font-mono text-lg md:text-xl font-medium tracking-wide transition-opacity duration-300 ${
                    isCurrent ? "opacity-0" : "opacity-100"
                  }`}
                >
                  {item.step}
                </span>

                {/* Icon (Fades in and pops when active) */}
                <motion.div
                  className="absolute inset-0 flex items-center justify-center"
                  initial={false}
                  animate={{ 
                    scale: isCurrent ? 1 : 0.5, 
                    opacity: isCurrent ? 1 : 0,
                    rotate: isCurrent ? 0 : -45
                  }}
                  transition={{ type: "spring", stiffness: 200, damping: 12 }}
                >
                  <Icon className="w-6 h-6 md:w-8 md:h-8" strokeWidth={1.5} />
                </motion.div>
              </div>
              
              <h4 className={`text-lg sm:text-xl font-medium font-serif mb-2 transition-colors duration-300 ${
                isActive ? "text-foreground" : "text-muted-foreground group-hover:text-foreground"
              }`}>
                {item.title}
              </h4>
              
              <p className={`text-xs sm:text-sm font-light leading-relaxed max-w-[220px] transition-colors duration-300 ${
                isCurrent ? "text-foreground" : "text-muted-foreground/50 group-hover:text-muted-foreground"
              }`}>
                {item.desc}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
