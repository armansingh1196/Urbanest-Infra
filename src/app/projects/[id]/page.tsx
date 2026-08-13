"use client";

import { MapPin, Info, CheckCircle2, Building2, Map, Shield, Layers, X, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, Variants } from "framer-motion";
import { use, useState } from "react";
import { notFound, useRouter } from "next/navigation";
import { PROJECTS } from "@/data/projects";

export default function ProjectDetailsPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const router = useRouter();
  
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [galleryTab, setGalleryTab] = useState<"photos" | "plans">("photos");

  // Inquiry form state
  const [inquiryForm, setInquiryForm] = useState({ name: "", phone: "", email: "" });
  const [inquiryErrors, setInquiryErrors] = useState<Record<string, string>>({});
  const [inquirySubmitted, setInquirySubmitted] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

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
        className="max-w-7xl mx-auto px-4 md:px-8 mb-12 relative"
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
      >
        <div className="flex md:grid md:grid-cols-3 gap-2 md:gap-4 h-[40vh] md:h-[60vh] min-h-[400px] overflow-x-auto md:overflow-visible snap-x snap-mandatory scrollbar-hide pb-2 md:pb-0 relative">
          
          {/* Floating Back Button */}
          <button 
            onClick={() => router.back()}
            className="absolute top-4 left-4 z-20 bg-background/60 hover:bg-background/90 backdrop-blur-md text-foreground rounded-full px-4 py-2 flex items-center text-xs font-mono uppercase tracking-wider transition-all shadow-sm border border-white/20"
          >
            <ChevronLeft className="w-4 h-4 mr-1" /> Back
          </button>

          <motion.div 
            variants={fadeInUp}
            className="flex-none w-[85vw] md:w-auto md:col-span-2 bg-muted bg-cover bg-center overflow-hidden relative group snap-center"
          >
             <div className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-105" style={{ backgroundImage: `url("${project.images[0]}")` }} />
          </motion.div>
          <div className="flex-none w-[75vw] md:w-auto flex flex-col gap-2 md:gap-4 snap-center">
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
              <div 
                onClick={() => setIsGalleryOpen(true)}
                className="absolute inset-0 bg-black/40 flex items-center justify-center cursor-pointer hover:bg-black/20 transition-colors backdrop-blur-[2px]"
              >
                <span className="text-white font-medium tracking-widest uppercase text-xs md:text-sm drop-shadow-md">View Gallery</span>
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
            <div className="flex flex-wrap items-center gap-2 mb-4">
              <span className="bg-primary/10 text-primary px-2 md:px-3 py-1 text-[10px] md:text-xs uppercase tracking-widest font-medium rounded-full shadow-sm">{project.status}</span>
              <span className="bg-muted px-2 md:px-3 py-1 text-[10px] md:text-xs uppercase tracking-widest font-medium rounded-full shadow-sm">{project.type}</span>
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-5xl font-light tracking-wide mb-2 md:mb-4">{project.name}</h1>
            <p className="text-muted-foreground flex items-start sm:items-center text-xs sm:text-sm md:text-lg font-light mb-4 md:mb-6">
              <MapPin className="w-3 h-3 md:w-5 md:h-5 mr-1.5 md:mr-2 text-primary shrink-0 mt-0.5 sm:mt-0" /> {project.location}
            </p>
            <div className="text-lg sm:text-xl md:text-2xl font-medium mb-4 md:mb-6 pb-4 md:pb-6 border-b border-border">{project.price}</div>
          </div>

          {/* Overview */}
          <section>
            <h2 className="text-lg sm:text-xl md:text-2xl font-light mb-4 md:mb-6 flex items-center">
              <Info className="w-5 h-5 md:w-6 md:h-6 mr-2 md:mr-3 text-primary stroke-1" /> Project Overview
            </h2>
            <div className="bg-card p-4 md:p-8 border border-border shadow-sm mb-6 md:mb-8">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-6 md:mb-8 border-b border-border pb-6 md:pb-8">
                <div>
                  <p className="text-[10px] md:text-xs text-muted-foreground uppercase tracking-widest mb-1">Developer</p>
                  <p className="font-medium text-sm md:text-base">{project.developer}</p>
                </div>
                <div>
                  <p className="text-[10px] md:text-xs text-muted-foreground uppercase tracking-widest mb-1">Configuration</p>
                  <p className="font-medium text-sm md:text-base">{project.config}</p>
                </div>
                <div className="col-span-2">
                  <p className="text-[10px] md:text-xs text-muted-foreground uppercase tracking-widest mb-1">Area</p>
                  <p className="font-medium text-sm md:text-base">{project.area}</p>
                </div>
              </div>
              <p className="text-muted-foreground font-light leading-relaxed mb-4 text-xs sm:text-sm md:text-base">
                {project.shortDescription}
              </p>
              <p className="text-muted-foreground font-light leading-relaxed text-xs sm:text-sm md:text-base">
                <strong>Positioning:</strong> {project.positioning}
              </p>
            </div>
          </section>

          {/* Highlights */}
          {project.highlights && project.highlights.length > 0 && (
            <section>
              <h2 className="text-lg sm:text-xl md:text-2xl font-light mb-4 md:mb-6 flex items-center">
                <CheckCircle2 className="w-5 h-5 md:w-6 md:h-6 mr-2 md:mr-3 text-primary stroke-1" /> Key Highlights
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
                {project.highlights.map((highlight, idx) => (
                  <div key={idx} className="flex items-start text-muted-foreground font-light group text-xs sm:text-sm md:text-base">
                    <span className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-primary mt-1.5 md:mt-2 mr-3 md:mr-4 shrink-0" />
                    {highlight}
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Amenities */}
          <section>
              <h2 className="text-lg sm:text-xl md:text-2xl font-light mb-4 md:mb-6 flex items-center">
                <Building2 className="w-5 h-5 md:w-6 md:h-6 mr-2 md:mr-3 text-primary stroke-1" /> Amenities
              </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
              {project.amenities.map((amenity, idx) => (
                <div key={idx} className="flex items-start text-muted-foreground font-light group text-xs sm:text-sm md:text-base">
                  <CheckCircle2 className="w-4 h-4 md:w-5 md:h-5 text-primary mr-2 md:mr-3 shrink-0 stroke-1 group-hover:scale-110 transition-transform mt-0.5 sm:mt-0" />
                  {amenity}
                </div>
              ))}
            </div>
          </section>
          
          {/* Floor Plans / Configurations */}
          {(project.floorPlans || project.configurations || (project.floorPlanImages && project.floorPlanImages.length > 0)) && (
            <section>
              <h2 className="text-lg sm:text-xl md:text-2xl font-light mb-4 md:mb-6 flex items-center">
                <Layers className="w-5 h-5 md:w-6 md:h-6 mr-2 md:mr-3 text-primary stroke-1" /> Floor Plans & Layouts
              </h2>

              {project.floorPlanImages && project.floorPlanImages.length > 0 && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                  {project.floorPlanImages.map((img, idx) => (
                    <div 
                      key={idx} 
                      className="border border-border p-4 bg-white/5 cursor-pointer group hover:border-primary/50 transition-colors"
                      onClick={() => { setIsGalleryOpen(true); setGalleryTab("plans"); setCurrentImageIndex(idx); }}
                    >
                      <div className="pt-[75%] w-full relative overflow-hidden bg-white/10 rounded-sm">
                        <img src={img} alt={`${project.name} Floor Plan ${idx + 1}`} className="absolute inset-0 w-full h-full object-contain p-2 transition-transform duration-500 group-hover:scale-105" />
                      </div>
                    </div>
                  ))}
                </div>
              )}

              <div className="grid grid-cols-2 gap-3 md:gap-6">
                {project.floorPlans?.map((plan, idx) => (
                  <div key={idx} className="border border-border p-4 md:p-6 shadow-sm hover:border-primary/50 transition-colors">
                    <h3 className="font-mono text-[10px] md:text-sm uppercase tracking-widest text-primary mb-1 md:mb-2">{plan.level}</h3>
                    {plan.area && <p className="font-medium text-sm md:text-lg mb-3 md:mb-4">{plan.area}</p>}
                    <ul className="space-y-1 md:space-y-2 text-xs md:text-sm text-muted-foreground font-light">
                      {plan.features.map((feature, fIdx) => (
                        <li key={fIdx}>• {feature}</li>
                      ))}
                    </ul>
                  </div>
                ))}
                {project.configurations?.map((config, idx) => (
                  <div key={idx} className="border border-border p-4 md:p-6 shadow-sm hover:border-primary/50 transition-colors">
                    {config.unit && <h3 className="font-mono text-[10px] md:text-sm uppercase tracking-widest text-primary mb-1 md:mb-2">{config.unit}</h3>}
                    <p className="font-medium text-sm md:text-lg mb-1">{config.config}</p>
                    <p className="text-[10px] md:text-sm text-muted-foreground font-light">{config.area}</p>
                  </div>
                ))}
              </div>
            </section>
          )}
          
          {/* Specifications */}
          {project.specifications && project.specifications.length > 0 && (
            <section>
              <h2 className="text-lg sm:text-xl md:text-2xl font-light mb-4 md:mb-6 flex items-center">
                <Shield className="w-5 h-5 md:w-6 md:h-6 mr-2 md:mr-3 text-primary stroke-1" /> Specifications
              </h2>
              <div className="space-y-6">
                {project.specifications.map((spec, idx) => (
                  <div key={idx} className="border-b border-border pb-3 md:pb-4 last:border-0 last:pb-0">
                    <h3 className="font-medium mb-2 md:mb-3 text-sm md:text-base">{spec.category}</h3>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-1 md:gap-2 text-xs md:text-sm text-muted-foreground font-light">
                      {spec.details.map((detail, dIdx) => (
                        <li key={dIdx} className="flex items-start">
                          <span className="text-primary mr-1.5 md:mr-2 shrink-0">›</span> {detail}
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
              <h2 className="text-lg sm:text-xl md:text-2xl font-light mb-4 md:mb-6 flex items-center">
                <Map className="w-5 h-5 md:w-6 md:h-6 mr-2 md:mr-3 text-primary stroke-1" /> Location Map
              </h2>
            <div className="w-full h-56 md:h-80 bg-muted flex items-center justify-center border border-border shadow-inner relative overflow-hidden">
              <iframe 
                src={`https://maps.google.com/maps?q=${encodeURIComponent(project.location)}&t=&z=14&ie=UTF8&iwloc=&output=embed`} 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                sandbox="allow-scripts allow-same-origin"
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
          <div className="sticky top-24 md:top-32 bg-card/80 backdrop-blur-xl border border-border shadow-[0_0_50px_rgba(193,95,53,0.08)] p-5 md:p-8">
            <h3 className="text-base sm:text-lg md:text-xl font-medium mb-1 md:mb-2">Interested in this property?</h3>
            <p className="text-[10px] sm:text-xs md:text-sm text-muted-foreground font-light mb-5 md:mb-8">Fill out the form below and our experts will get in touch with you shortly.</p>
            
            <form
              noValidate
              onSubmit={(e) => {
                e.preventDefault();
                const errs: Record<string, string> = {};
                if (!inquiryForm.name.trim() || inquiryForm.name.trim().length < 2) errs.name = "Please enter your name";
                const cleanPhone = inquiryForm.phone.replace(/[\s-]/g, "");
                if (!cleanPhone || !/^[+]?[0-9]{10,13}$/.test(cleanPhone)) errs.phone = "Enter a valid 10-digit number";
                if (inquiryForm.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(inquiryForm.email)) errs.email = "Enter a valid email";
                setInquiryErrors(errs);
                if (Object.keys(errs).length === 0) {
                  setInquirySubmitted(true);
                  setInquiryForm({ name: "", phone: "", email: "" });
                  setTimeout(() => setInquirySubmitted(false), 4000);
                }
              }}
              className="space-y-6"
            >
              {inquirySubmitted && (
                <div className="flex items-center gap-2 bg-green-900/20 border border-green-800/30 text-green-400 p-3 text-xs font-mono">
                  <CheckCircle2 className="w-4 h-4 shrink-0" /> We&apos;ll call you back shortly!
                </div>
              )}
              <div className="group">
                <label className="text-xs uppercase tracking-widest font-medium text-muted-foreground block mb-2 group-focus-within:text-primary transition-colors">Full Name *</label>
                <input
                  type="text"
                  className={`w-full bg-transparent border-b pb-2 outline-none transition-colors text-sm font-light ${inquiryErrors.name ? "border-red-500" : "border-border focus:border-primary"}`}
                  placeholder="John Doe"
                  value={inquiryForm.name}
                  onChange={(e) => { setInquiryForm({ ...inquiryForm, name: e.target.value }); setInquiryErrors({ ...inquiryErrors, name: "" }); }}
                />
                {inquiryErrors.name && <p className="text-[10px] font-mono text-red-500 mt-1">{inquiryErrors.name}</p>}
              </div>
              <div className="group">
                <label className="text-xs uppercase tracking-widest font-medium text-muted-foreground block mb-2 group-focus-within:text-primary transition-colors">Mobile Number *</label>
                <input
                  type="tel"
                  className={`w-full bg-transparent border-b pb-2 outline-none transition-colors text-sm font-light ${inquiryErrors.phone ? "border-red-500" : "border-border focus:border-primary"}`}
                  placeholder="+91 6203819040"
                  value={inquiryForm.phone}
                  onChange={(e) => { setInquiryForm({ ...inquiryForm, phone: e.target.value }); setInquiryErrors({ ...inquiryErrors, phone: "" }); }}
                />
                {inquiryErrors.phone && <p className="text-[10px] font-mono text-red-500 mt-1">{inquiryErrors.phone}</p>}
              </div>
              <div className="group">
                <label className="text-xs uppercase tracking-widest font-medium text-muted-foreground block mb-2 group-focus-within:text-primary transition-colors">Email Address (Optional)</label>
                <input
                  type="email"
                  className={`w-full bg-transparent border-b pb-2 outline-none transition-colors text-sm font-light ${inquiryErrors.email ? "border-red-500" : "border-border focus:border-primary"}`}
                  placeholder="john@example.com"
                  value={inquiryForm.email}
                  onChange={(e) => { setInquiryForm({ ...inquiryForm, email: e.target.value }); setInquiryErrors({ ...inquiryErrors, email: "" }); }}
                />
                {inquiryErrors.email && <p className="text-[10px] font-mono text-red-500 mt-1">{inquiryErrors.email}</p>}
              </div>
              
              <Button type="submit" className="w-full bg-primary text-primary-foreground hover:bg-primary/90 rounded-none py-6 uppercase tracking-widest font-medium text-xs transition-transform hover:scale-[1.02] shadow-[0_0_20px_rgba(193,95,53,0.25)]">
                Request Callback
              </Button>
            </form>
          </div>
        </motion.div>

      </div>

      {/* Image Gallery Overlay */}
      {isGalleryOpen && (
        <div className="fixed inset-0 z-[9999] bg-background/95 backdrop-blur-xl flex flex-col pt-20 md:pt-24">
          {/* Header */}
          <div className="flex items-center justify-between p-4 md:p-6 border-b border-border">
            <button 
              onClick={() => setIsGalleryOpen(false)}
              className="flex items-center text-[10px] md:text-sm font-mono uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors"
            >
              <ChevronLeft className="w-4 h-4 md:w-5 md:h-5 mr-1 md:mr-2" /> Back
            </button>
            <div className="flex gap-4 md:gap-8">
              <button 
                onClick={() => { setGalleryTab("photos"); setCurrentImageIndex(0); }}
                className={`text-[10px] md:text-sm tracking-widest uppercase font-mono transition-colors ${galleryTab === "photos" ? "text-primary" : "text-muted-foreground hover:text-foreground"}`}
              >
                Photos
              </button>
              <button 
                onClick={() => { setGalleryTab("plans"); setCurrentImageIndex(0); }}
                className={`text-[10px] md:text-sm tracking-widest uppercase font-mono transition-colors ${galleryTab === "plans" ? "text-primary" : "text-muted-foreground hover:text-foreground"}`}
              >
                Plans
              </button>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1 relative flex items-center justify-center p-4 overflow-hidden">
            <button 
              onClick={() => setCurrentImageIndex(prev => prev > 0 ? prev - 1 : (galleryTab === "photos" ? project.images.length - 1 : (project.floorPlanImages?.length || project.images.length) - 1))}
              className="absolute left-4 md:left-8 p-2 md:p-3 bg-card/50 hover:bg-card border border-border rounded-full backdrop-blur-md z-10 transition-colors"
            >
              <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
            </button>

            <motion.div
              key={currentImageIndex + galleryTab}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              className="w-full h-full flex items-center justify-center p-4 md:p-12"
            >
              <img 
                src={galleryTab === "photos" ? project.images[currentImageIndex] : (project.floorPlanImages?.[currentImageIndex] || project.images[currentImageIndex])} 
                alt={`${project.name} - ${galleryTab} ${currentImageIndex + 1}`} 
                className="max-w-full max-h-full object-contain rounded-md shadow-2xl"
              />
            </motion.div>

            <button 
              onClick={() => setCurrentImageIndex(prev => prev < (galleryTab === "photos" ? project.images.length - 1 : (project.floorPlanImages?.length || project.images.length) - 1) ? prev + 1 : 0)}
              className="absolute right-4 md:right-8 p-2 md:p-3 bg-card/50 hover:bg-card border border-border rounded-full backdrop-blur-md z-10 transition-colors"
            >
              <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
            </button>
          </div>

          {/* Footer */}
          <div className="p-4 md:p-6 text-center text-muted-foreground font-mono text-xs tracking-widest border-t border-border">
            {currentImageIndex + 1} / {galleryTab === "photos" ? project.images.length : (project.floorPlanImages?.length || project.images.length)}
          </div>
        </div>
      )}
    </div>
  );
}
