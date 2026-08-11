"use client";

import Link from "next/link";
import { PROJECTS } from "@/data/projects";
import { Search, MapPin, Building2, Home, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { PropertyMatcher } from "@/components/projects/PropertyMatcher";
import { ScaleDivider } from "@/components/layout/ScaleDivider";
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
      <section ref={heroRef} className="relative w-full min-h-[100dvh] md:h-screen flex items-center justify-center overflow-hidden">
        {/* Parallax Background */}
        <motion.div
          className="absolute inset-0 bg-background z-0 flex items-end justify-center"
          style={{ y: backgroundY }}
        >
        </motion.div>

        <motion.div
          className="relative z-20 w-full max-w-7xl mx-auto px-4 sm:px-8 mt-24 md:mt-20 flex flex-col justify-center h-full pt-8 md:pt-0 pb-8 md:pb-16"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <motion.span variants={fadeInUp} className="font-mono text-xs uppercase tracking-[0.3em] text-primary mb-6">
            Channel Partner — Across India
          </motion.span>
          <motion.h1 variants={fadeInUp} className="text-4xl sm:text-5xl md:text-7xl font-serif text-foreground tracking-wide leading-[1.05] mb-4 md:mb-6 max-w-4xl">
            Every good build starts with a proper survey.
          </motion.h1>
          <motion.p variants={fadeInUp} className="text-base md:text-xl text-muted-foreground font-light mb-8 md:mb-12 max-w-2xl leading-relaxed">
            We evaluate the builder&apos;s history, material quality, and legal clearances
            so the property you choose holds up long after you sign.
          </motion.p>

          <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-3 sm:gap-5 relative z-10">
            <Link href="/projects" tabIndex={-1}>
              <Button size="lg" className="w-full bg-primary text-primary-foreground hover:bg-primary/90 text-[10px] sm:text-xs tracking-widest uppercase font-mono px-6 py-5 md:px-10 md:py-7 rounded-none transition-all hover:-translate-y-0.5">
                Explore Projects
              </Button>
            </Link>
            <Link href="/contact" tabIndex={-1}>
              <Button size="lg" variant="outline" className="w-full text-foreground border-foreground/25 bg-background/30 hover:bg-foreground hover:text-background text-[10px] sm:text-xs tracking-widest uppercase font-mono px-6 py-5 md:px-10 md:py-7 rounded-none backdrop-blur-md transition-all hover:-translate-y-0.5">
                Book Consultation
              </Button>
            </Link>
          </motion.div>

          <motion.div 
            variants={fadeInUp} 
            className="hidden md:block absolute right-0 -bottom-16 w-1/2 max-w-[600px] z-0 pointer-events-none"
          >
            <img src="/Building.svg" alt="Building Illustration" className="w-full h-auto object-contain mix-blend-multiply opacity-80" />
          </motion.div>
        </motion.div>
      </section>

      {/* Property Matcher Section */}
      <motion.section
        className="relative z-20 py-12 md:py-20 px-4 md:px-8 w-full bg-background border-t border-b border-border"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <div className="max-w-4xl mx-auto text-center mb-8">
          <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-primary">Chapter 02 — Discovery</span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif tracking-wide mt-3 mb-4">Find your perfect match</h2>
          <p className="text-muted-foreground font-light text-base sm:text-lg">Swipe right to shortlist a property, or open it straight away for the full plan.</p>
        </div>
        <PropertyMatcher />
      </motion.section>

      {/* Search Section */}
      <motion.section
        className="relative z-20 mt-8 md:-mt-16 px-4 md:px-8 max-w-6xl mx-auto w-full"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <div className="bg-card/95 backdrop-blur-xl shadow-2xl p-4 md:p-8 border border-border rounded-none flex flex-col md:flex-row items-center gap-4 md:gap-6">
          <div className="flex-1 w-full grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-6 divide-y md:divide-y-0 md:divide-x divide-border">
            <div className="space-y-1 md:px-6 first:pl-0">
              <label className="text-[10px] uppercase tracking-widest font-mono text-muted-foreground">Location</label>
              <div className="flex items-center group">
                <MapPin className="w-4 h-4 text-primary mr-3 group-hover:scale-110 transition-transform" />
                <select className="bg-transparent w-full outline-none text-sm font-serif tracking-wide text-foreground appearance-none cursor-pointer">
                  <option>All Locations</option>
                  <option>Metropolitan Areas</option>
                  <option>Saraidhela</option>
                </select>
              </div>
            </div>

            <div className="space-y-1 pt-3 md:pt-0 md:px-6">
              <label className="text-[10px] uppercase tracking-widest font-mono text-muted-foreground">Property Type</label>
              <div className="flex items-center group">
                <Home className="w-4 h-4 text-primary mr-3 group-hover:scale-110 transition-transform" />
                <select className="bg-transparent w-full outline-none text-sm font-serif tracking-wide text-foreground appearance-none cursor-pointer">
                  <option>Any Type</option>
                  <option>Residential</option>
                  <option>Commercial</option>
                  <option>Luxury</option>
                </select>
              </div>
            </div>

            <div className="space-y-1 pt-3 md:pt-0 md:px-6">
              <label className="text-[10px] uppercase tracking-widest font-mono text-muted-foreground">Budget</label>
              <div className="flex items-center group">
                <span className="text-primary font-medium mr-3 group-hover:scale-110 transition-transform">₹</span>
                <select className="bg-transparent w-full outline-none text-sm font-serif tracking-wide text-foreground appearance-none cursor-pointer">
                  <option>Any Budget</option>
                  <option>Under 50L</option>
                  <option>50L - 1Cr</option>
                  <option>1Cr +</option>
                </select>
              </div>
            </div>
          </div>

          <Link href="/projects" tabIndex={-1} className="w-full md:w-auto">
            <Button className="w-full h-full min-h-[48px] md:min-h-full px-6 py-5 md:px-10 md:py-7 bg-primary text-primary-foreground hover:bg-primary/90 rounded-none uppercase tracking-widest font-mono text-[10px] md:text-xs transition-transform hover:-translate-y-0.5 flex-shrink-0">
              Search
              <Search className="w-4 h-4 ml-2 md:ml-3" />
            </Button>
          </Link>
        </div>
      </motion.section>

      {/* Featured Projects */}
      <motion.section
        className="py-16 md:py-32 px-4 md:px-16 max-w-7xl mx-auto w-full"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
      >
        <motion.div variants={fadeInUp} className="flex justify-between items-end mb-16 flex-wrap gap-6">
          <div>
            <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-primary">Chapter 03 — Portfolio</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif tracking-wide mt-3 mb-4">Featured projects</h2>
            <p className="text-muted-foreground font-light max-w-xl text-base sm:text-lg">
              A short list of the developments we&apos;d actually recommend to family.
            </p>
          </div>
          <Link href="/projects" className="font-mono text-xs uppercase tracking-widest text-primary hover:underline underline-offset-4 shrink-0">
            View all projects →
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.slice(0, 3).map((project, i) => (
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
        </div>
      </motion.section>

      <div className="max-w-7xl mx-auto w-full px-4 md:px-16">
        <ScaleDivider label="N 24.47° / E 86.98°" className="text-muted-foreground" />
      </div>

      {/* Why Urbanest Section */}
      <section className="site-stone blueprint-grid py-16 md:py-32 px-4 md:px-16 w-full relative overflow-hidden">
        <motion.div
          className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <motion.div variants={fadeInUp}>
            <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-primary">Chapter 04 — Why Us</span>
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-serif tracking-wide mt-3 mb-8 leading-tight">Elevating real estate.</h2>
            <p className="font-light text-base sm:text-lg leading-relaxed mb-6 opacity-80">
              We are not just a listing site. We are a premium advisory desk built to walk
              you through a market that rewards patience and punishes guesswork.
            </p>
            <p className="font-light text-base sm:text-lg leading-relaxed mb-10 opacity-80">
              From the first site visit to the loan paperwork, we stay on the file until the
              keys are in your hand.
            </p>
            <Link href="/about" tabIndex={-1}>
              <Button variant="outline" className="rounded-none uppercase tracking-widest font-mono text-xs px-8 py-6 transition-all hover:-translate-y-0.5 border-stone-foreground/25 text-stone-foreground hover:bg-stone-foreground hover:text-stone">
                About Us
              </Button>
            </Link>
          </motion.div>
          <motion.div variants={fadeInUp} className="grid grid-cols-1 sm:grid-cols-2 gap-6 relative">
            <div className="plan-corners bg-background/90 backdrop-blur-sm p-6 md:p-8 border border-stone-foreground/10 shadow-xl flex flex-col items-start gap-4 transition-transform hover:-translate-y-2 duration-500 text-foreground">
              <Building2 className="w-8 h-8 text-primary" />
              <h4 className="font-medium text-base sm:text-lg font-serif">Curated properties</h4>
              <p className="text-xs sm:text-sm text-muted-foreground font-light">Only the developers with a delivery record make it onto our list.</p>
            </div>
            <div className="plan-corners bg-background/90 backdrop-blur-sm p-6 md:p-8 border border-stone-foreground/10 shadow-xl flex flex-col items-start gap-4 sm:mt-12 transition-transform hover:-translate-y-2 duration-500 text-foreground">
              <Home className="w-8 h-8 text-primary" />
              <h4 className="font-medium text-base sm:text-lg font-serif">End-to-end support</h4>
              <p className="text-xs sm:text-sm text-muted-foreground font-light">From the first shortlist to registration and the home loan.</p>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Our Process Section */}
      <section className="py-10 md:py-32 px-4 md:px-16 max-w-7xl mx-auto w-full">
        <motion.div
          className="text-center mb-8 md:mb-20 max-w-2xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-primary">Chapter 05 — Process</span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif tracking-wide mt-3 mb-4">Four stages, zero surprises</h2>
          <p className="text-muted-foreground font-light text-base sm:text-lg">The same sequence, every time — so you always know what happens next.</p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-8 relative"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <div className="hidden md:block absolute top-12 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent z-0 opacity-70" />

          {[
            { step: '01', title: 'Discovery', desc: 'Understand your requirements and budget.' },
            { step: '02', title: 'Site Visits', desc: 'Guided tours of shortlisted properties.' },
            { step: '03', title: 'Negotiation', desc: 'Getting you the best price and terms.' },
            { step: '04', title: 'Closure', desc: 'Documentation and loan assistance.' }
          ].map((item, i) => (
            <motion.div key={i} variants={fadeInUp} className="relative z-10 flex flex-col items-center text-center group cursor-default">
              <div className="w-12 h-12 md:w-20 md:h-20 rounded-full bg-background border border-border flex items-center justify-center text-base md:text-xl font-mono text-primary mb-2 md:mb-6 transition-all duration-500 group-hover:scale-110 group-hover:border-primary/50">
                {item.step}
              </div>
              <h4 className="text-base sm:text-xl font-medium font-serif mb-1 md:mb-2">{item.title}</h4>
              <p className="text-[10px] sm:text-sm text-muted-foreground font-light leading-relaxed max-w-[200px]">{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Testimonials */}
      <section className="relative py-16 md:py-32 px-4 md:px-16 w-full overflow-hidden border-t border-border">
        <div className="absolute inset-0 bg-primary/[0.04] z-0" />
        <motion.div
          className="relative max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center z-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <motion.div variants={fadeInUp}>
            <CheckCircle2 className="w-10 h-10 text-primary mb-8 opacity-80" />
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-serif tracking-wide mb-8 leading-tight">
              &quot;Urbanest completely changed how we viewed real estate.&quot;
            </h2>
            <p className="text-lg sm:text-xl font-medium mb-2 tracking-wide font-serif">— Rakesh &amp; Priya Sharma</p>
            <p className="text-muted-foreground font-mono text-xs uppercase tracking-widest">Purchased at Emerald Heights</p>
          </motion.div>
          <motion.div variants={fadeInUp} className="grid grid-cols-1 gap-6">
            <div className="bg-card/90 backdrop-blur-md p-4 md:p-10 border border-border shadow-2xl relative">
              <div className="absolute -top-4 -left-4 text-6xl text-primary/20 font-serif">&quot;</div>
              <p className="font-light italic mb-6 md:mb-8 text-sm md:text-lg leading-relaxed relative z-10">Professional, transparent, and extremely helpful. Their team helped us secure a home loan in record time without any of the usual stress.</p>
              <div className="flex items-center gap-3 md:gap-4">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-secondary/40 flex items-center justify-center font-serif text-base md:text-lg text-secondary-foreground">AV</div>
                <div>
                  <h5 className="font-medium text-sm">Amit Verma</h5>
                  <p className="text-xs text-muted-foreground font-mono uppercase tracking-widest mt-1">Investor</p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
}
