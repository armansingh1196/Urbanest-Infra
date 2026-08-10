"use client";

import { MapPin, Info, CheckCircle2, Building2, Map, Shield, Layers } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, Variants } from "framer-motion";
import { use } from "react";
import { notFound } from "next/navigation";
import { PROJECTS } from "@/data/projects";

export default function ProjectDetailsPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  
  const project = PROJECTS.find(p => p.id === id);

  if (!project) {
    notFound();
  }

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <div className="pt-24 min-h-screen bg-background pb-24">
      
      {/* Image Gallery */}
      <motion.div 
        className="max-w-7xl mx-auto px-4 md:px-8 mb-12"
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 h-[50vh] md:h-[60vh]">
          <motion.div 
            variants={fadeInUp}
            className="md:col-span-2 bg-muted bg-cover bg-center overflow-hidden relative group"
          >
             <div className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-105" style={{ backgroundImage: `url("${project.images[0]}")` }} />
          </motion.div>
          <div className="hidden md:flex flex-col gap-4">
            <motion.div 
              variants={fadeInUp}
              className="flex-1 bg-muted bg-cover bg-center overflow-hidden relative group"
            >
               <div className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-105" style={{ backgroundImage: `url("${project.images[1]}")` }} />
            </motion.div>
            <motion.div 
              variants={fadeInUp}
              className="flex-1 bg-muted bg-cover bg-center relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-105" style={{ backgroundImage: `url("${project.images[2] || project.images[0]}")` }} />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center cursor-pointer hover:bg-black/20 transition-colors backdrop-blur-[2px]">
                <span className="text-white font-medium tracking-widest uppercase text-sm drop-shadow-md">View Gallery</span>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 lg:grid-cols-3 gap-12">
        
        {/* Left Column (Overview, Amenities, Map) */}
        <motion.div 
          className="lg:col-span-2 space-y-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          
          {/* Header Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="bg-primary/10 text-primary px-3 py-1 text-xs uppercase tracking-widest font-medium rounded-full shadow-sm">{project.status}</span>
              <span className="bg-muted px-3 py-1 text-xs uppercase tracking-widest font-medium rounded-full shadow-sm">{project.type}</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-light tracking-wide mb-4">{project.name}</h1>
            <p className="text-muted-foreground flex items-center text-lg font-light mb-6">
              <MapPin className="w-5 h-5 mr-2 text-primary" /> {project.location}
            </p>
            <div className="text-2xl font-medium mb-8 pb-8 border-b border-border">{project.price}</div>
          </div>

          {/* Overview */}
          <section>
            <h2 className="text-2xl font-light mb-6 flex items-center">
              <Info className="w-6 h-6 mr-3 text-primary stroke-1" /> Project Overview
            </h2>
            <div className="bg-card p-6 md:p-8 border border-border shadow-sm mb-8">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8 border-b border-border pb-8">
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-widest mb-1">Developer</p>
                  <p className="font-medium">{project.developer}</p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-widest mb-1">Configuration</p>
                  <p className="font-medium">{project.config}</p>
                </div>
                <div className="col-span-2">
                  <p className="text-xs text-muted-foreground uppercase tracking-widest mb-1">Area</p>
                  <p className="font-medium">{project.area}</p>
                </div>
              </div>
              <p className="text-muted-foreground font-light leading-relaxed mb-4">
                {project.shortDescription}
              </p>
              <p className="text-muted-foreground font-light leading-relaxed">
                <strong>Positioning:</strong> {project.positioning}
              </p>
            </div>
          </section>

          {/* Highlights */}
          {project.highlights && project.highlights.length > 0 && (
            <section>
              <h2 className="text-2xl font-light mb-6 flex items-center">
                <CheckCircle2 className="w-6 h-6 mr-3 text-primary stroke-1" /> Key Highlights
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {project.highlights.map((highlight, idx) => (
                  <div key={idx} className="flex items-start text-muted-foreground font-light group">
                    <span className="w-2 h-2 rounded-full bg-primary mt-2 mr-4 shrink-0" />
                    {highlight}
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Amenities */}
          <section>
            <h2 className="text-2xl font-light mb-6 flex items-center">
              <Building2 className="w-6 h-6 mr-3 text-primary stroke-1" /> Amenities
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {project.amenities.map((amenity, idx) => (
                <div key={idx} className="flex items-center text-muted-foreground font-light group">
                  <CheckCircle2 className="w-5 h-5 text-primary mr-3 stroke-1 group-hover:scale-110 transition-transform" />
                  {amenity}
                </div>
              ))}
            </div>
          </section>
          
          {/* Floor Plans / Configurations */}
          {(project.floorPlans || project.configurations) && (
            <section>
              <h2 className="text-2xl font-light mb-6 flex items-center">
                <Layers className="w-6 h-6 mr-3 text-primary stroke-1" /> Floor Plans & Layouts
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {project.floorPlans?.map((plan, idx) => (
                  <div key={idx} className="border border-border p-6 shadow-sm hover:border-primary/50 transition-colors">
                    <h3 className="font-mono text-sm uppercase tracking-widest text-primary mb-2">{plan.level}</h3>
                    {plan.area && <p className="font-medium text-lg mb-4">{plan.area}</p>}
                    <ul className="space-y-2 text-sm text-muted-foreground font-light">
                      {plan.features.map((feature, fIdx) => (
                        <li key={fIdx}>• {feature}</li>
                      ))}
                    </ul>
                  </div>
                ))}
                {project.configurations?.map((config, idx) => (
                  <div key={idx} className="border border-border p-6 shadow-sm hover:border-primary/50 transition-colors">
                    {config.unit && <h3 className="font-mono text-sm uppercase tracking-widest text-primary mb-2">{config.unit}</h3>}
                    <p className="font-medium text-lg mb-1">{config.config}</p>
                    <p className="text-sm text-muted-foreground font-light">{config.area}</p>
                  </div>
                ))}
              </div>
            </section>
          )}
          
          {/* Specifications */}
          {project.specifications && project.specifications.length > 0 && (
            <section>
              <h2 className="text-2xl font-light mb-6 flex items-center">
                <Shield className="w-6 h-6 mr-3 text-primary stroke-1" /> Specifications
              </h2>
              <div className="space-y-6">
                {project.specifications.map((spec, idx) => (
                  <div key={idx} className="border-b border-border pb-4 last:border-0 last:pb-0">
                    <h3 className="font-medium mb-3">{spec.category}</h3>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm text-muted-foreground font-light">
                      {spec.details.map((detail, dIdx) => (
                        <li key={dIdx} className="flex items-start">
                          <span className="text-primary mr-2">›</span> {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Location / Map */}
          <section>
            <h2 className="text-2xl font-light mb-6 flex items-center">
              <Map className="w-6 h-6 mr-3 text-primary stroke-1" /> Location Map
            </h2>
            <div className="w-full h-80 bg-muted flex items-center justify-center border border-border shadow-inner relative overflow-hidden">
              <iframe 
                src={`https://maps.google.com/maps?q=${encodeURIComponent(project.location)}&t=&z=14&ie=UTF8&iwloc=&output=embed`} 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </section>

        </motion.div>

        {/* Right Column (Sticky Form) */}
        <motion.div 
          className="relative"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="sticky top-32 bg-card/80 backdrop-blur-xl border border-border shadow-[0_0_50px_rgba(193,95,53,0.08)] p-8">
            <h3 className="text-xl font-medium mb-2">Interested in this property?</h3>
            <p className="text-sm text-muted-foreground font-light mb-8">Fill out the form below and our experts will get in touch with you shortly.</p>
            
            <form className="space-y-6">
              <div className="group">
                <label className="text-xs uppercase tracking-widest font-medium text-muted-foreground block mb-2 group-focus-within:text-primary transition-colors">Full Name</label>
                <input type="text" className="w-full bg-transparent border-b border-border pb-2 outline-none focus:border-primary transition-colors text-sm font-light" placeholder="John Doe" />
              </div>
              <div className="group">
                <label className="text-xs uppercase tracking-widest font-medium text-muted-foreground block mb-2 group-focus-within:text-primary transition-colors">Phone Number</label>
                <input type="tel" className="w-full bg-transparent border-b border-border pb-2 outline-none focus:border-primary transition-colors text-sm font-light" placeholder="+91 6203819040" />
              </div>
              <div className="group">
                <label className="text-xs uppercase tracking-widest font-medium text-muted-foreground block mb-2 group-focus-within:text-primary transition-colors">Email Address (Optional)</label>
                <input type="email" className="w-full bg-transparent border-b border-border pb-2 outline-none focus:border-primary transition-colors text-sm font-light" placeholder="john@example.com" />
              </div>
              
              <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 rounded-none py-6 uppercase tracking-widest font-medium text-xs transition-transform hover:scale-[1.02] shadow-[0_0_20px_rgba(193,95,53,0.25)]">
                Request Callback
              </Button>
            </form>
          </div>
        </motion.div>

      </div>
    </div>
  );
}
