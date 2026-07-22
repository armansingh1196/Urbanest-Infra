"use client";

import Link from "next/link";
import { Search, MapPin, Building2, Home, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { PropertyMatcher } from "@/components/projects/PropertyMatcher";
import { motion, useScroll, useTransform, Variants } from "framer-motion";
import { useRef } from "react";

export default function HomePage() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  
  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section ref={heroRef} className="relative w-full h-screen flex items-center justify-center overflow-hidden">
        {/* Parallax Background */}
        <motion.div 
          className="absolute inset-0 bg-zinc-950 z-0"
          style={{ y: backgroundY }}
        >
          <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.3),rgba(0,0,0,0.8))]" />
          <div className="absolute inset-0 bg-cover bg-center opacity-40 mix-blend-overlay" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=2000&q=80")' }} />
        </motion.div>

        <motion.div 
          className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-20"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <motion.h1 variants={fadeInUp} className="text-4xl md:text-6xl font-light text-white tracking-wide leading-tight mb-6 drop-shadow-lg">
            Find Your Dream Property in <span className="font-medium text-primary">Dhanbad</span>
          </motion.h1>
          <motion.p variants={fadeInUp} className="text-lg md:text-xl text-zinc-300 font-light mb-12 max-w-2xl mx-auto leading-relaxed drop-shadow-md">
            Trusted Channel Partner for Premium Real Estate Projects. See value clearly and invest with absolute confidence.
          </motion.p>
          
          <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 text-sm tracking-wider uppercase font-medium px-8 py-6 rounded-none shadow-[0_0_20px_rgba(200,160,80,0.3)] transition-all hover:scale-105">
              Explore Projects
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white bg-transparent hover:bg-white hover:text-black text-sm tracking-wider uppercase font-medium px-8 py-6 rounded-none backdrop-blur-sm transition-all hover:scale-105">
              Book Consultation
            </Button>
          </motion.div>
        </motion.div>
      </section>

      {/* Property Matcher Section */}
      <motion.section 
        className="relative z-20 py-20 px-4 md:px-8 w-full bg-zinc-950/50 backdrop-blur-sm border-t border-b border-white/5"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <div className="max-w-4xl mx-auto text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-light tracking-wide mb-4">Find Your Perfect Match</h2>
          <p className="text-muted-foreground font-light text-lg">Swipe right to add to your wishlist, or view details instantly.</p>
        </div>
        <PropertyMatcher />
      </motion.section>

      {/* Search Section */}
      <motion.section 
        className="relative z-20 -mt-16 px-4 md:px-8 max-w-6xl mx-auto w-full"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <div className="bg-card/90 backdrop-blur-xl shadow-2xl p-8 border border-white/10 dark:border-zinc-800/50 rounded-sm">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 items-end">
            <div className="space-y-2">
              <label className="text-xs uppercase tracking-wider font-medium text-muted-foreground">Location</label>
              <div className="flex items-center border-b border-border pb-2 group">
                <MapPin className="w-4 h-4 text-primary mr-2 group-hover:scale-110 transition-transform" />
                <select className="bg-transparent w-full outline-none text-sm font-light text-foreground appearance-none cursor-pointer">
                  <option>All Locations</option>
                  <option>Dhanbad Central</option>
                  <option>Saraidhela</option>
                </select>
              </div>
            </div>
            
            <div className="space-y-2">
              <label className="text-xs uppercase tracking-wider font-medium text-muted-foreground">Property Type</label>
              <div className="flex items-center border-b border-border pb-2 group">
                <Home className="w-4 h-4 text-primary mr-2 group-hover:scale-110 transition-transform" />
                <select className="bg-transparent w-full outline-none text-sm font-light text-foreground appearance-none cursor-pointer">
                  <option>Any Type</option>
                  <option>Residential</option>
                  <option>Commercial</option>
                  <option>Luxury</option>
                </select>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs uppercase tracking-wider font-medium text-muted-foreground">Budget</label>
              <div className="flex items-center border-b border-border pb-2 group">
                <span className="text-primary font-medium mr-2 group-hover:scale-110 transition-transform">₹</span>
                <select className="bg-transparent w-full outline-none text-sm font-light text-foreground appearance-none cursor-pointer">
                  <option>Any Budget</option>
                  <option>Under 50L</option>
                  <option>50L - 1Cr</option>
                  <option>1Cr +</option>
                </select>
              </div>
            </div>

            <Button className="w-full bg-foreground text-background hover:bg-foreground/90 rounded-none py-6 uppercase tracking-widest font-medium text-xs transition-transform hover:scale-[1.02]">
              Search
              <Search className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </motion.section>

      {/* Featured Projects */}
      <motion.section 
        className="py-32 px-4 md:px-16 max-w-7xl mx-auto w-full"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
      >
        <motion.div variants={fadeInUp} className="flex justify-between items-end mb-16">
          <div>
            <h2 className="text-3xl md:text-4xl font-light tracking-wide mb-4">Featured Projects</h2>
            <p className="text-muted-foreground font-light max-w-xl text-lg">
              Discover our handpicked selection of premium properties, offering unmatched luxury, location, and lifestyle.
            </p>
          </div>
          <Link href="/projects" className="hidden md:inline-flex items-center text-sm uppercase tracking-wider text-primary hover:text-primary/80 transition-colors group">
            View All Projects <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
          </Link>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div variants={fadeInUp}>
            <ProjectCard 
              id="1"
              name="Emerald Heights"
              developer="Siddhi Developers"
              location="Saraidhela, Dhanbad"
              price="65 L - 1.2 Cr"
              imageUrl="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800&q=80"
              type="Residential"
              status="Under Construction"
            />
          </motion.div>
          <motion.div variants={fadeInUp}>
            <ProjectCard 
              id="2"
              name="The Imperial"
              developer="Raj Builders"
              location="Dhanbad Central"
              price="1.5 Cr Onwards"
              imageUrl="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80"
              type="Luxury"
              status="Ready to Move"
            />
          </motion.div>
          <motion.div variants={fadeInUp}>
            <ProjectCard 
              id="3"
              name="Aura Commercial"
              developer="Apex Group"
              location="Bank More, Dhanbad"
              price="80 L Onwards"
              imageUrl="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80"
              type="Commercial"
              status="New Launch"
            />
          </motion.div>
        </div>
      </motion.section>

      {/* Why Urbanest Section */}
      <section className="bg-zinc-100 dark:bg-zinc-900/50 py-32 px-4 md:px-16 w-full relative overflow-hidden">
        <motion.div 
          className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <motion.div variants={fadeInUp}>
            <h2 className="text-3xl md:text-5xl font-light tracking-wide mb-8 leading-tight">Elevating Real Estate in Dhanbad.</h2>
            <p className="text-muted-foreground font-light text-lg leading-relaxed mb-6">
              We are not just a real estate listing website. We are a premium advisory platform designed to help you navigate the complex property market with absolute clarity and precision.
            </p>
            <p className="text-muted-foreground font-light text-lg leading-relaxed mb-10">
              From site visits to home loan assistance, we stand by you at every step of your property journey, ensuring you see value clearly.
            </p>
            <Button variant="outline" className="rounded-none uppercase tracking-widest font-medium text-xs px-8 py-6 transition-all hover:scale-105 hover:bg-foreground hover:text-background">
              Learn More About Us
            </Button>
          </motion.div>
          <motion.div variants={fadeInUp} className="grid grid-cols-1 sm:grid-cols-2 gap-6 relative">
             <div className="bg-card/80 backdrop-blur-sm p-8 border border-white/5 dark:border-zinc-800 shadow-xl flex flex-col items-start gap-4 transition-transform hover:-translate-y-2 duration-500">
                <Building2 className="w-8 h-8 text-primary" />
                <h4 className="font-medium text-lg">Curated Properties</h4>
                <p className="text-sm text-muted-foreground font-light">Only the most reliable developer projects make it to our platform.</p>
             </div>
             <div className="bg-card/80 backdrop-blur-sm p-8 border border-white/5 dark:border-zinc-800 shadow-xl flex flex-col items-start gap-4 sm:mt-12 transition-transform hover:-translate-y-2 duration-500">
                <Home className="w-8 h-8 text-primary" />
                <h4 className="font-medium text-lg">End-to-End Support</h4>
                <p className="text-sm text-muted-foreground font-light">From discovery to documentation and home loans.</p>
             </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Our Process Section */}
      <section className="py-32 px-4 md:px-16 max-w-7xl mx-auto w-full">
        <motion.div 
          className="text-center mb-20 max-w-2xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h2 className="text-3xl md:text-4xl font-light tracking-wide mb-4">Seamless Property Buying</h2>
          <p className="text-muted-foreground font-light text-lg">A structured approach to ensure you make the best investment with zero hassle.</p>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-4 gap-8 relative"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <div className="hidden md:block absolute top-12 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-border to-transparent z-0 opacity-50" />
          
          {[
            { step: '01', title: 'Discovery', desc: 'Understand your requirements and budget.' },
            { step: '02', title: 'Site Visits', desc: 'Guided tours of shortlisted properties.' },
            { step: '03', title: 'Negotiation', desc: 'Getting you the best price and terms.' },
            { step: '04', title: 'Closure', desc: 'Documentation and loan assistance.' }
          ].map((item, i) => (
            <motion.div key={i} variants={fadeInUp} className="relative z-10 flex flex-col items-center text-center group cursor-default">
              <div className="w-24 h-24 rounded-full bg-background border border-border flex items-center justify-center text-2xl font-light text-primary mb-6 shadow-lg transition-all duration-500 group-hover:scale-110 group-hover:border-primary/50 group-hover:shadow-[0_0_30px_rgba(200,160,80,0.15)]">
                {item.step}
              </div>
              <h4 className="text-xl font-medium mb-2">{item.title}</h4>
              <p className="text-sm text-muted-foreground font-light leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Testimonials */}
      <section className="relative py-32 px-4 md:px-16 w-full overflow-hidden">
        <div className="absolute inset-0 bg-primary/5 z-0" />
        <motion.div 
          className="relative max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center z-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <motion.div variants={fadeInUp}>
            <CheckCircle2 className="w-12 h-12 text-primary mb-8 opacity-80" />
            <h2 className="text-3xl md:text-5xl font-light tracking-wide mb-8 leading-tight">
              &quot;Urbanest completely changed how we viewed real estate in Dhanbad.&quot;
            </h2>
            <p className="text-xl font-medium mb-2 tracking-wide">— Rakesh & Priya Sharma</p>
            <p className="text-muted-foreground font-light text-sm uppercase tracking-widest">Purchased at Emerald Heights</p>
          </motion.div>
          <motion.div variants={fadeInUp} className="grid grid-cols-1 gap-6">
            <div className="bg-card/80 backdrop-blur-md p-10 border border-white/10 dark:border-zinc-800 shadow-2xl relative">
              <div className="absolute -top-4 -left-4 text-6xl text-primary/20 font-serif">&quot;</div>
              <p className="font-light italic mb-8 text-lg leading-relaxed relative z-10">Professional, transparent, and extremely helpful. Their team helped us secure a home loan in record time without any of the usual stress.</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-zinc-800 rounded-full bg-cover" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80")'}} />
                <div>
                  <h5 className="font-medium text-sm">Amit Verma</h5>
                  <p className="text-xs text-muted-foreground font-light uppercase tracking-widest mt-1">Investor</p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
}
