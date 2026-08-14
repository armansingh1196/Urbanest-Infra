"use client";

import { motion, Variants } from "framer-motion";
import { Briefcase, MapPin, Clock, ChevronRight, Send } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ScaleDivider } from "@/components/layout/ScaleDivider";
import { useState } from "react";

const OPENINGS = [
  {
    id: "sales-advisor",
    title: "Sales Advisor",
    location: "Dhanbad, Jharkhand",
    type: "Full-time",
    department: "Sales",
    posted: "2 weeks ago",
    description:
      "You'll be the first voice our clients hear. Guide walk-ins and inbound leads through our project portfolio, schedule site visits, and close with confidence.",
    requirements: [
      "1–3 years of experience in real estate or B2C sales",
      "Strong communication skills in Hindi and English",
      "Willingness to conduct on-ground site visits",
      "Local knowledge of Dhanbad and surrounding areas",
    ],
  },
  {
    id: "marketing-associate",
    title: "Marketing Associate",
    location: "Dhanbad, Jharkhand",
    type: "Full-time",
    department: "Marketing",
    posted: "1 week ago",
    description:
      "Own our digital presence — from social media content to brochure design. You'll craft the visual story that brings premium real estate to life online.",
    requirements: [
      "Experience with Canva, Figma, or Adobe Creative Suite",
      "Understanding of social media marketing (Instagram, Facebook)",
      "Basic photography and video editing skills",
      "Creative eye for premium brand aesthetics",
    ],
  },
  {
    id: "legal-documentation",
    title: "Legal & Documentation Executive",
    location: "Dhanbad, Jharkhand",
    type: "Full-time",
    department: "Operations",
    posted: "3 weeks ago",
    description:
      "Handle title searches, sale agreements, and property registration paperwork. You're the last checkpoint before any document leaves the desk.",
    requirements: [
      "2+ years in property law or real estate documentation",
      "Knowledge of RERA regulations and compliance",
      "Attention to detail and paperwork discipline",
      "Familiarity with local registration processes",
    ],
  },
];

const PERKS = [
  { title: "Growth-stage energy", desc: "Join early and shape the company culture from the ground up." },
  { title: "No corporate red tape", desc: "A flat team where your ideas reach the founder's desk the same day." },
  { title: "Real-world impact", desc: "Help families find homes they'll live in for decades — not just close tickets." },
  { title: "Learning budget", desc: "We invest in courses, certifications, and conferences that sharpen your edge." },
];

export default function CareersPage() {
  const [expandedRole, setExpandedRole] = useState<string | null>(null);

  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="pt-32 md:pt-40 pb-16 md:pb-24 px-4 md:px-16 max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="max-w-3xl"
        >
          <motion.span variants={fadeInUp} className="font-mono text-[10px] md:text-[11px] uppercase tracking-[0.25em] text-primary">
            Careers at Urbanest
          </motion.span>
          <motion.h1 variants={fadeInUp} className="text-3xl sm:text-4xl md:text-6xl font-serif tracking-wide mt-3 mb-4 md:mb-6 leading-tight">
            Build your career on solid ground.
          </motion.h1>
          <motion.p variants={fadeInUp} className="text-muted-foreground font-light text-base md:text-lg leading-relaxed max-w-2xl">
            We&apos;re a small team doing meaningful work in real estate. If you believe property advisory
            should be built on honesty, rigour, and genuine care — there&apos;s a desk with your name on it.
          </motion.p>
        </motion.div>
      </section>

      {/* Why work here */}
      <section className="site-stone blueprint-grid py-16 md:py-24 px-4 md:px-16 w-full">
        <motion.div
          className="max-w-7xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <motion.div variants={fadeInUp} className="max-w-2xl mb-10 md:mb-14">
            <span className="font-mono text-[10px] md:text-[11px] uppercase tracking-[0.25em] text-primary">Why Urbanest</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif tracking-wide mt-3 mb-4">More than just a job.</h2>
            <p className="text-muted-foreground font-light text-base md:text-lg">
              We offer the kind of environment where your work matters from day one.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-6">
            {PERKS.map((perk, i) => (
              <motion.div
                key={perk.title}
                variants={fadeInUp}
                className="bg-background/90 backdrop-blur-sm p-6 md:p-8 border border-stone-foreground/10 shadow-lg transition-transform hover:-translate-y-1 duration-500"
              >
                <span className="font-mono text-[10px] tracking-widest text-primary/60">{String(i + 1).padStart(2, "0")}</span>
                <h4 className="font-serif text-base md:text-lg mt-2 mb-2">{perk.title}</h4>
                <p className="text-muted-foreground font-light text-xs md:text-sm leading-relaxed">{perk.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Open Roles */}
      <section className="py-16 md:py-28 px-4 md:px-16 max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <motion.div variants={fadeInUp} className="max-w-2xl mb-10 md:mb-14">
            <span className="font-mono text-[10px] md:text-[11px] uppercase tracking-[0.25em] text-primary">Open Positions</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif tracking-wide mt-3 mb-4">Current openings</h2>
            <p className="text-muted-foreground font-light text-base md:text-lg">
              Pick a role that fits. If none of these match but you think you&apos;d be a great fit, reach out anyway.
            </p>
          </motion.div>

          <div className="space-y-4 md:space-y-6">
            {OPENINGS.map((role) => (
              <motion.div
                key={role.id}
                variants={fadeInUp}
                className="plan-corners bg-card border border-border overflow-hidden transition-shadow hover:shadow-lg duration-500"
              >
                {/* Role Header */}
                <button
                  onClick={() => setExpandedRole(expandedRole === role.id ? null : role.id)}
                  className="w-full flex items-center justify-between p-5 md:p-8 text-left group"
                >
                  <div className="flex-1">
                    <h3 className="font-serif text-lg md:text-xl mb-2 group-hover:text-primary transition-colors">{role.title}</h3>
                    <div className="flex flex-wrap gap-3 md:gap-5">
                      <span className="flex items-center gap-1.5 text-[10px] md:text-xs font-mono text-muted-foreground">
                        <MapPin className="w-3 h-3 text-primary/60" /> {role.location}
                      </span>
                      <span className="flex items-center gap-1.5 text-[10px] md:text-xs font-mono text-muted-foreground">
                        <Briefcase className="w-3 h-3 text-primary/60" /> {role.type}
                      </span>
                      <span className="flex items-center gap-1.5 text-[10px] md:text-xs font-mono text-muted-foreground">
                        <Clock className="w-3 h-3 text-primary/60" /> {role.posted}
                      </span>
                    </div>
                  </div>
                  <ChevronRight className={`w-5 h-5 text-muted-foreground shrink-0 transition-transform duration-300 ${expandedRole === role.id ? "rotate-90" : ""}`} />
                </button>

                {/* Expanded Details */}
                {expandedRole === role.id && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    transition={{ duration: 0.3 }}
                    className="border-t border-border"
                  >
                    <div className="p-5 md:p-8 space-y-6">
                      <div>
                        <h4 className="font-mono text-[10px] md:text-xs uppercase tracking-[0.2em] text-muted-foreground mb-3">About the role</h4>
                        <p className="text-sm md:text-base font-light leading-relaxed">{role.description}</p>
                      </div>
                      <div>
                        <h4 className="font-mono text-[10px] md:text-xs uppercase tracking-[0.2em] text-muted-foreground mb-3">What we&apos;re looking for</h4>
                        <ul className="space-y-2">
                          {role.requirements.map((req) => (
                            <li key={req} className="flex items-start gap-3 text-sm md:text-base font-light">
                              <span className="w-1 h-1 rounded-full bg-primary mt-2 shrink-0" />
                              {req}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="pt-2">
                        <Link href={`mailto:careers@urbanestinfra.com?subject=Application: ${role.title}`}>
                          <Button className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-none py-5 px-8 uppercase tracking-widest font-mono text-xs transition-transform hover:-translate-y-0.5">
                            <Send className="w-3.5 h-3.5 mr-2" />
                            Apply Now
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* General Application CTA */}
      <div className="max-w-7xl mx-auto px-4 md:px-16">
        <ScaleDivider label="Don't see your role?" className="text-muted-foreground" />
      </div>

      <section className="py-16 md:py-24 px-4 md:px-16 max-w-7xl mx-auto text-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="max-w-2xl mx-auto"
        >
          <motion.h2 variants={fadeInUp} className="text-2xl sm:text-3xl md:text-4xl font-serif tracking-wide mb-4">
            Send us a general application.
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-muted-foreground font-light text-base md:text-lg mb-8">
            Drop your resume at <span className="text-primary font-medium">careers@urbanestinfra.com</span> with
            a short note on what you bring to the table. Good people always find a seat here.
          </motion.p>
          <motion.div variants={fadeInUp}>
            <Link href="mailto:careers@urbanestinfra.com">
              <Button variant="outline" className="rounded-none py-6 px-10 uppercase tracking-widest font-mono text-xs border-foreground/25 hover:bg-foreground hover:text-background transition-all hover:-translate-y-0.5">
                Email Your Resume
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
}
