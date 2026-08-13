"use client";

import { useEffect, useState } from "react";
import { PROJECTS } from "@/data/projects";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { motion, Variants } from "framer-motion";

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

export default function WishlistPage() {
  const [wishlist, setWishlist] = useState<string[]>([]);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    try {
      const saved = localStorage.getItem("urbanest_wishlist");
      if (saved) {
        setWishlist(JSON.parse(saved));
      }
    } catch {
      localStorage.removeItem("urbanest_wishlist");
    }
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const matchedProjects = PROJECTS.filter((p) => wishlist.includes(p.id));

  return (
    <div className="pt-24 min-h-screen">
      {/* Header */}
      <div className="site-stone blueprint-grid border-b border-border py-6 md:py-12 px-4 md:px-8">
        <motion.div 
          className="max-w-7xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="font-mono text-[10px] md:text-[11px] uppercase tracking-[0.25em] text-primary">Your Selections</span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif tracking-wide mt-3 mb-4">Your Wishlist</h1>
          <p className="font-light text-base md:text-lg opacity-80">Properties you've saved through the matcher.</p>
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16">
        {matchedProjects.length > 0 ? (
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            {matchedProjects.map(project => (
              <motion.div key={project.id} variants={fadeInUp}>
                <ProjectCard 
                  id={project.id}
                  name={project.name}
                  developer={project.developer}
                  location={project.location}
                  price={project.price}
                  imageUrl={project.images[0]}
                  type={project.type.includes("Commercial") ? "Commercial" : project.type.includes("Luxury") ? "Luxury" : "Residential"}
                  status={project.status}
                />
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <div className="text-center py-20 border border-border border-dashed">
            <h3 className="text-xl sm:text-2xl font-serif mb-2">No properties in your wishlist</h3>
            <p className="text-sm sm:text-base text-muted-foreground">Use the Property Matcher on the homepage to find your perfect match.</p>
          </div>
        )}
      </div>
    </div>
  );
}
