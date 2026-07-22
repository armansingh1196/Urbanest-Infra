"use client";

import { MapPin, Info, CheckCircle2, Building2, Map } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, Variants } from "framer-motion";

import { use } from "react";

export default function ProjectDetailsPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  
  // Use id for future data fetching
  console.log("Fetching project details for ID:", id);

  // Mock Data
  const project = {
    name: "Emerald Heights",
    developer: "Siddhi Developers",
    location: "Saraidhela, Dhanbad",
    price: "₹ 65 L - 1.2 Cr",
    rera: "PRJ/DHN/001/2023",
    status: "Under Construction",
    config: "2, 3 & 4 BHK Premium Apartments",
    description: "Emerald Heights redefines luxury living in Dhanbad. Strategically located in Saraidhela, it offers seamless connectivity to major schools, hospitals, and commercial hubs. Experience a lifestyle of unparalleled comfort and elegance.",
    amenities: ["Swimming Pool", "Clubhouse", "24/7 Security", "Gymnasium", "Landscaped Gardens", "Power Backup", "Children's Play Area", "Jogging Track"],
    images: [
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80"
    ]
  };

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
            className="md:col-span-2 bg-zinc-800 bg-cover bg-center rounded-sm overflow-hidden relative group"
          >
             <div className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-105" style={{ backgroundImage: `url("${project.images[0]}")` }} />
          </motion.div>
          <div className="hidden md:flex flex-col gap-4">
            <motion.div 
              variants={fadeInUp}
              className="flex-1 bg-zinc-800 bg-cover bg-center rounded-sm overflow-hidden relative group"
            >
               <div className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-105" style={{ backgroundImage: `url("${project.images[1]}")` }} />
            </motion.div>
            <motion.div 
              variants={fadeInUp}
              className="flex-1 bg-zinc-800 bg-cover bg-center rounded-sm relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-105" style={{ backgroundImage: `url("${project.images[2]}")` }} />
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
              <span className="bg-zinc-100 dark:bg-zinc-800 px-3 py-1 text-xs uppercase tracking-widest font-medium rounded-full shadow-sm">RERA: {project.rera}</span>
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
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-widest mb-1">Project Type</p>
                  <p className="font-medium">Residential</p>
                </div>
              </div>
              <p className="text-muted-foreground font-light leading-relaxed">
                {project.description}
              </p>
            </div>
          </section>

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

          {/* Location / Map */}
          <section>
            <h2 className="text-2xl font-light mb-6 flex items-center">
              <Map className="w-6 h-6 mr-3 text-primary stroke-1" /> Location Map
            </h2>
            <div className="w-full h-80 bg-zinc-200 dark:bg-zinc-800 rounded-sm flex items-center justify-center border border-border shadow-inner">
              <p className="text-muted-foreground font-light text-sm uppercase tracking-widest">Interactive Map Placeholder</p>
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
          <div className="sticky top-32 bg-card/80 backdrop-blur-xl border border-white/5 dark:border-zinc-800 shadow-[0_0_50px_rgba(200,160,80,0.08)] p-8 rounded-sm">
            <h3 className="text-xl font-medium mb-2">Interested in this property?</h3>
            <p className="text-sm text-muted-foreground font-light mb-8">Fill out the form below and our experts will get in touch with you shortly.</p>
            
            <form className="space-y-6">
              <div className="group">
                <label className="text-xs uppercase tracking-widest font-medium text-muted-foreground block mb-2 group-focus-within:text-primary transition-colors">Full Name</label>
                <input type="text" className="w-full bg-transparent border-b border-border pb-2 outline-none focus:border-primary transition-colors text-sm font-light" placeholder="John Doe" />
              </div>
              <div className="group">
                <label className="text-xs uppercase tracking-widest font-medium text-muted-foreground block mb-2 group-focus-within:text-primary transition-colors">Phone Number</label>
                <input type="tel" className="w-full bg-transparent border-b border-border pb-2 outline-none focus:border-primary transition-colors text-sm font-light" placeholder="+91 98765 43210" />
              </div>
              <div className="group">
                <label className="text-xs uppercase tracking-widest font-medium text-muted-foreground block mb-2 group-focus-within:text-primary transition-colors">Email Address (Optional)</label>
                <input type="email" className="w-full bg-transparent border-b border-border pb-2 outline-none focus:border-primary transition-colors text-sm font-light" placeholder="john@example.com" />
              </div>
              
              <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 rounded-none py-6 uppercase tracking-widest font-medium text-xs transition-transform hover:scale-[1.02] shadow-[0_0_20px_rgba(200,160,80,0.2)]">
                Request Callback
              </Button>
            </form>
          </div>
        </motion.div>

      </div>
    </div>
  );
}
