"use client";

import { ProjectCard } from "@/components/projects/ProjectCard";
import { Filter, SlidersHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, Variants } from "framer-motion";

const MOCK_PROJECTS = [
  {
    id: "1",
    name: "Emerald Heights",
    developer: "Siddhi Developers",
    location: "Saraidhela, Dhanbad",
    price: "65 L - 1.2 Cr",
    imageUrl: "/images/project-emerald-heights.jpeg",
    type: "Residential",
    status: "Under Construction"
  },
  {
    id: "2",
    name: "The Imperial",
    developer: "Raj Builders",
    location: "Dhanbad Central",
    price: "1.5 Cr Onwards",
    imageUrl: "/images/project-imperial.jpeg",
    type: "Luxury",
    status: "Ready to Move"
  },
  {
    id: "3",
    name: "Aura Commercial",
    developer: "Apex Group",
    location: "Bank More, Dhanbad",
    price: "80 L Onwards",
    imageUrl: "/images/project-aura-commercial.jpeg",
    type: "Commercial",
    status: "New Launch"
  },
  {
    id: "4",
    name: "Green Valley",
    developer: "Eco Homes",
    location: "Karmik Nagar, Dhanbad",
    price: "45 L - 85 L",
    imageUrl: "/images/project-green-valley.jpeg",
    type: "Residential",
    status: "Ready to Move"
  }
];

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

export default function ProjectsPage() {
  return (
    <div className="pt-24 min-h-screen">
      {/* Header */}
      <div className="site-stone blueprint-grid border-b border-border py-16 px-4 md:px-8">
        <motion.div 
          className="max-w-7xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-primary">Portfolio</span>
          <h1 className="text-4xl md:text-5xl font-serif tracking-wide mt-3 mb-4">Discover properties</h1>
          <p className="font-light text-lg opacity-80">Browse our curated selection of premium real estate across Dhanbad.</p>
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16 flex flex-col md:flex-row gap-12">
        {/* Sidebar Filters */}
        <motion.aside 
          className="w-full md:w-64 shrink-0 space-y-8"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="sticky top-32">
            <div className="flex items-center justify-between border-b border-border pb-4 mb-8">
              <h3 className="uppercase tracking-wider font-medium text-sm flex items-center">
                <Filter className="w-4 h-4 mr-2" /> Filters
              </h3>
              <span className="text-xs text-muted-foreground cursor-pointer hover:text-primary transition-colors">Clear</span>
            </div>

            <div className="space-y-4 mb-8">
              <h4 className="text-sm font-medium tracking-wide uppercase text-muted-foreground">Property Type</h4>
              <div className="space-y-3 text-sm font-light">
                <label className="flex items-center gap-3 cursor-pointer group"><input type="checkbox" className="accent-primary w-4 h-4" /> <span className="group-hover:text-primary transition-colors">Residential</span></label>
                <label className="flex items-center gap-3 cursor-pointer group"><input type="checkbox" className="accent-primary w-4 h-4" /> <span className="group-hover:text-primary transition-colors">Commercial</span></label>
                <label className="flex items-center gap-3 cursor-pointer group"><input type="checkbox" className="accent-primary w-4 h-4" /> <span className="group-hover:text-primary transition-colors">Luxury</span></label>
              </div>
            </div>

            <div className="space-y-4 mb-8">
              <h4 className="text-sm font-medium tracking-wide uppercase text-muted-foreground">Budget</h4>
              <div className="space-y-3 text-sm font-light">
                <label className="flex items-center gap-3 cursor-pointer group"><input type="radio" name="budget" className="accent-primary w-4 h-4" /> <span className="group-hover:text-primary transition-colors">Any</span></label>
                <label className="flex items-center gap-3 cursor-pointer group"><input type="radio" name="budget" className="accent-primary w-4 h-4" /> <span className="group-hover:text-primary transition-colors">Under ₹ 50 Lakhs</span></label>
                <label className="flex items-center gap-3 cursor-pointer group"><input type="radio" name="budget" className="accent-primary w-4 h-4" /> <span className="group-hover:text-primary transition-colors">₹ 50 Lakhs - 1 Crore</span></label>
                <label className="flex items-center gap-3 cursor-pointer group"><input type="radio" name="budget" className="accent-primary w-4 h-4" /> <span className="group-hover:text-primary transition-colors">₹ 1 Crore +</span></label>
              </div>
            </div>

            <div className="space-y-4 mb-8">
              <h4 className="text-sm font-medium tracking-wide uppercase text-muted-foreground">Status</h4>
              <div className="space-y-3 text-sm font-light">
                <label className="flex items-center gap-3 cursor-pointer group"><input type="checkbox" className="accent-primary w-4 h-4" /> <span className="group-hover:text-primary transition-colors">Ready to Move</span></label>
                <label className="flex items-center gap-3 cursor-pointer group"><input type="checkbox" className="accent-primary w-4 h-4" /> <span className="group-hover:text-primary transition-colors">Under Construction</span></label>
                <label className="flex items-center gap-3 cursor-pointer group"><input type="checkbox" className="accent-primary w-4 h-4" /> <span className="group-hover:text-primary transition-colors">New Launch</span></label>
              </div>
            </div>

            <Button className="w-full bg-foreground text-background hover:bg-foreground/90 rounded-none py-6 uppercase tracking-widest font-medium text-xs transition-transform hover:scale-[1.02]">
              Apply Filters
            </Button>
          </div>
        </motion.aside>

        {/* Project Grid */}
        <div className="flex-1">
          <motion.div 
            className="flex justify-between items-center mb-8 border-b border-border pb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <p className="text-sm text-muted-foreground font-light">Showing {MOCK_PROJECTS.length} properties</p>
            <div className="flex items-center gap-2 text-sm font-light">
               <SlidersHorizontal className="w-4 h-4 text-muted-foreground" />
               <select className="bg-transparent outline-none border-none cursor-pointer hover:text-primary transition-colors">
                 <option>Sort by: Recommended</option>
                 <option>Price: Low to High</option>
                 <option>Price: High to Low</option>
                 <option>Newest First</option>
               </select>
            </div>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            {MOCK_PROJECTS.map(project => (
              <motion.div key={project.id} variants={fadeInUp}>
                <ProjectCard {...project} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
