"use client";

import { ProjectCard } from "@/components/projects/ProjectCard";
import { Filter, SlidersHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, Variants } from "framer-motion";
import { useState, useMemo } from "react";
import { useLocation } from "@/context/LocationContext";

import { PROJECTS } from "@/data/projects";

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
  const [showFilters, setShowFilters] = useState(false);
  const { stateName, districts, isLoading } = useLocation();
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);
  const [selectedDistricts, setSelectedDistricts] = useState<string[]>([]);
  const [selectedBudget, setSelectedBudget] = useState<string>("Any");
  const [selectedStatuses, setSelectedStatuses] = useState<string[]>([]);

  const toggleSelection = (setter: React.Dispatch<React.SetStateAction<string[]>>, value: string) => {
    setter(prev => prev.includes(value) ? prev.filter(v => v !== value) : [...prev, value]);
  };

  const getPropertyType = (project: typeof PROJECTS[0]) => {
    const t = project.type.toLowerCase();
    const c = project.config.toLowerCase();
    if (t.includes("commercial") || c.includes("commercial")) return "Commercial";
    if (t.includes("triplex") || c.includes("triplex")) return "Triplex";
    if (t.includes("duplex") || c.includes("duplex")) return "Duplex";
    return "Residential";
  };

  const filteredProjects = useMemo(() => {
    return PROJECTS.filter(project => {
      // Type Filter
      if (selectedTypes.length > 0 && !selectedTypes.includes(getPropertyType(project))) return false;
      
      // Location Filter
      if (selectedDistricts.length > 0) {
        const pLoc = project.location.toLowerCase();
        const isMatch = selectedDistricts.some(d => {
          let searchArea = d.toLowerCase();
          if (d.includes(' - ')) {
            searchArea = searchArea.split(' - ')[1];
            if (searchArea.includes(' (')) {
              searchArea = searchArea.split(' (')[0];
            }
          }
          return pLoc.includes(searchArea.trim());
        });
        if (!isMatch) return false;
      }

      // Budget Filter
      if (selectedBudget !== "Any") {
        const price = project._matchStats.priceValue;
        if (selectedBudget === "Under ₹ 50 Lakhs" && price >= 5000000) return false;
        if (selectedBudget === "₹ 50 Lakhs - 1 Crore" && (price < 5000000 || price > 10000000)) return false;
        if (selectedBudget === "₹ 1 Crore +" && price <= 10000000) return false;
      }

      // Status Filter
      if (selectedStatuses.length > 0 && !selectedStatuses.includes(project.status)) return false;

      return true;
    });
  }, [selectedTypes, selectedDistricts, selectedBudget, selectedStatuses]);

  const clearFilters = () => {
    setSelectedTypes([]);
    setSelectedDistricts([]);
    setSelectedBudget("Any");
    setSelectedStatuses([]);
  };

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
          <span className="font-mono text-[10px] md:text-[11px] uppercase tracking-[0.25em] text-primary">Portfolio</span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif tracking-wide mt-3 mb-4">Discover properties</h1>
          <p className="font-light text-base md:text-lg opacity-80">Browse our curated selection of premium real estate across India.</p>
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 py-8 md:py-16 flex flex-col md:flex-row gap-6 md:gap-12">
        {/* Mobile Filter Toggle */}
        <div className="md:hidden">
          <Button 
            onClick={() => setShowFilters(!showFilters)} 
            variant="outline" 
            className="w-full rounded-none flex items-center justify-center gap-2 uppercase tracking-widest font-mono text-[10px]"
          >
            <Filter className="w-4 h-4" /> {showFilters ? "Hide Filters" : "Show Filters"}
          </Button>
        </div>

        {/* Sidebar Filters */}
        <motion.aside 
          className={`w-full md:w-64 shrink-0 space-y-8 ${showFilters ? 'block' : 'hidden md:block'}`}
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="sticky top-32">
            <div className="flex items-center justify-between border-b border-border pb-4 mb-8">
              <h3 className="uppercase tracking-wider font-medium text-sm flex items-center">
                <Filter className="w-4 h-4 mr-2" /> Filters
              </h3>
              <span onClick={clearFilters} className="text-xs text-muted-foreground cursor-pointer hover:text-primary transition-colors">Clear</span>
            </div>

            <div className="space-y-4 mb-8">
              <h4 className="text-sm font-medium tracking-wide uppercase text-muted-foreground">Property Type</h4>
              <div className="space-y-3 text-sm font-light">
                {["Duplex", "Triplex", "Commercial", "Residential"].map(type => (
                  <label key={type} className="flex items-center gap-3 cursor-pointer group">
                    <input 
                      type="checkbox" 
                      className="accent-primary w-4 h-4" 
                      checked={selectedTypes.includes(type)}
                      onChange={() => toggleSelection(setSelectedTypes, type)}
                    /> 
                    <span className="group-hover:text-primary transition-colors">{type}</span>
                  </label>
                ))}
              </div>
            </div>

            <div className="space-y-4 mb-8">
              <h4 className="text-sm font-medium tracking-wide uppercase text-muted-foreground flex items-center justify-between">
                Location ({stateName})
                {isLoading && <span className="text-[10px] animate-pulse">Loading...</span>}
              </h4>
              <div className="space-y-3 text-sm font-light max-h-64 overflow-y-auto pr-2 custom-scrollbar">
                {districts.map(district => (
                  <label key={district} className="flex items-center gap-3 cursor-pointer group">
                    <input 
                      type="checkbox" 
                      className="accent-primary w-4 h-4"
                      checked={selectedDistricts.includes(district)}
                      onChange={() => toggleSelection(setSelectedDistricts, district)}
                    /> 
                    <span className="group-hover:text-primary transition-colors leading-tight">{district}</span>
                  </label>
                ))}
                {!isLoading && districts.length === 0 && (
                  <p className="text-xs text-muted-foreground italic">No districts available.</p>
                )}
              </div>
            </div>

            <div className="space-y-4 mb-8">
              <h4 className="text-sm font-medium tracking-wide uppercase text-muted-foreground">Budget</h4>
              <div className="space-y-3 text-sm font-light">
                {["Any", "Under ₹ 50 Lakhs", "₹ 50 Lakhs - 1 Crore", "₹ 1 Crore +"].map(budget => (
                  <label key={budget} className="flex items-center gap-3 cursor-pointer group" onClick={(e) => { e.preventDefault(); setSelectedBudget(budget); }}>
                    <input 
                      type="radio" 
                      name="budget" 
                      className="accent-primary w-4 h-4 cursor-pointer" 
                      checked={selectedBudget === budget}
                      readOnly
                    /> 
                    <span className="group-hover:text-primary transition-colors">{budget}</span>
                  </label>
                ))}
              </div>
            </div>

            <div className="space-y-4 mb-8">
              <h4 className="text-sm font-medium tracking-wide uppercase text-muted-foreground">Status</h4>
              <div className="space-y-3 text-sm font-light">
                {["Ready to Move", "Under Construction", "New Launch"].map(status => (
                  <label key={status} className="flex items-center gap-3 cursor-pointer group" onClick={(e) => { e.preventDefault(); toggleSelection(setSelectedStatuses, status); }}>
                    <input 
                      type="checkbox" 
                      className="accent-primary w-4 h-4 cursor-pointer" 
                      checked={selectedStatuses.includes(status)}
                      readOnly
                    /> 
                    <span className="group-hover:text-primary transition-colors">{status}</span>
                  </label>
                ))}
              </div>
            </div>

            <Button 
              onClick={() => setShowFilters(false)}
              className="w-full bg-foreground text-background hover:bg-foreground/90 rounded-none py-6 uppercase tracking-widest font-medium text-xs transition-transform hover:scale-[1.02]"
            >
              Apply Filters
            </Button>
          </div>
        </motion.aside>

        {/* Project Grid */}
        <div className="flex-1">
          <motion.div 
            className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8 border-b border-border pb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <p className="text-xs sm:text-sm text-muted-foreground font-light">Showing {filteredProjects.length} properties</p>
            <div className="flex items-center gap-2 text-xs sm:text-sm font-light">
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
            {filteredProjects.length === 0 ? (
              <div className="col-span-full py-12 text-center text-muted-foreground font-light">
                No properties match your current filters. Try clearing some selections.
              </div>
            ) : (
              filteredProjects.map(project => (
                <motion.div key={project.id} variants={fadeInUp}>
                  <ProjectCard 
                    id={project.id}
                    name={project.name}
                    developer={project.developer}
                    location={project.location}
                    price={project.price}
                    imageUrl={project.images[0]}
                    type={getPropertyType(project)}
                    status={project.status}
                  />
                </motion.div>
              ))
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
