"use client";

import { motion, Variants } from "framer-motion";
import { Users, Target, Lightbulb, Heart, Crown, Briefcase, TrendingUp, Code2 } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const LEADERSHIP = [
  {
    name: "Sunny Anurag",
    role: "Managing Director",
    initials: "SA",
    bio: "The vision behind Urbanest. Sunny drives the company's strategy with a deep understanding of the real estate landscape and a commitment to building trust at every level.",
    icon: Crown,
  },
  {
    name: "Anand Pandey",
    role: "Manager",
    initials: "AP",
    bio: "The operational backbone of Urbanest. Anand ensures every process — from client onboarding to deal closure — runs with precision and accountability.",
    icon: Briefcase,
  },
];

const SALES_TEAM = [
  {
    name: "Shivam Kumar",
    initials: "SK",
    bio: "Guides clients through property selection with patience and market insight.",
  },
  {
    name: "Ritesh Mishra",
    initials: "RM",
    bio: "Specialises in matching the right property to the right buyer — every time.",
  },
  {
    name: "Balaji",
    initials: "BJ",
    bio: "On-ground expert who ensures every site visit turns into a confident decision.",
  },
];

const TECH_TEAM = [
  {
    name: "Arman Singh",
    role: "Design & Tech",
    initials: "AS",
    bio: "Builds the digital experience — from the platform you're browsing to the tools that power our advisory.",
  },
];

const VALUES = [
  {
    icon: Target,
    title: "Precision first",
    desc: "We treat every deal like a land survey — measure twice, commit once. No shortcuts, no assumptions.",
  },
  {
    icon: Lightbulb,
    title: "Radical transparency",
    desc: "The price you see is the price the developer quotes. We earn trust, not hidden margins.",
  },
  {
    icon: Heart,
    title: "Client before commission",
    desc: "If a property doesn't pass our checklist, it doesn't make it onto the platform — regardless of the fee.",
  },
  {
    icon: Users,
    title: "Ground-level knowledge",
    desc: "Our team walks every site themselves. We advise from the foundation up, not from a screen.",
  },
];

export default function TeamPage() {
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
      <section className="pt-28 md:pt-32 pb-8 md:pb-12 px-4 md:px-16 max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="max-w-3xl"
        >
          <motion.span variants={fadeInUp} className="font-mono text-[10px] md:text-[11px] uppercase tracking-[0.25em] text-primary">
            Our People
          </motion.span>
          <motion.h1 variants={fadeInUp} className="text-2xl sm:text-3xl md:text-4xl font-serif tracking-wide mt-3 mb-3 md:mb-4 leading-tight">
            The team behind every solid deal.
          </motion.h1>
          <motion.p variants={fadeInUp} className="text-muted-foreground font-light text-sm md:text-base leading-relaxed max-w-2xl">
            A small, focused crew that believes real estate advisory should feel like working with
            a trusted surveyor — methodical, transparent, and always on your side.
          </motion.p>
        </motion.div>
      </section>

      {/* Leadership */}
      <section className="px-4 md:px-16 max-w-7xl mx-auto pb-12 md:pb-20">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <motion.span variants={fadeInUp} className="font-mono text-[10px] md:text-[11px] uppercase tracking-[0.25em] text-primary block mb-6 md:mb-8">
            Leadership
          </motion.span>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {LEADERSHIP.map((member) => (
              <motion.div
                key={member.name}
                variants={fadeInUp}
                className="group relative bg-card border border-border overflow-hidden transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_24px_60px_-20px_rgba(0,0,0,0.15)]"
              >
                {/* Accent top bar */}
                <div className="h-1 w-full bg-gradient-to-r from-primary via-primary/60 to-transparent" />
                
                <div className="p-6 md:p-10 flex flex-col sm:flex-row gap-6 items-start">
                  {/* Avatar */}
                  <div className="relative shrink-0">
                    <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-primary/10 border-2 border-primary/20 flex items-center justify-center group-hover:border-primary/40 transition-colors duration-500">
                      <span className="font-serif text-2xl md:text-3xl text-primary">{member.initials}</span>
                    </div>
                    <div className="absolute -bottom-1 -right-1 w-7 h-7 rounded-full bg-primary flex items-center justify-center">
                      <member.icon className="w-3.5 h-3.5 text-primary-foreground" />
                    </div>
                  </div>

                  <div className="flex-1">
                    <h3 className="font-serif text-xl md:text-2xl mb-1">{member.name}</h3>
                    <p className="font-mono text-[10px] md:text-[11px] uppercase tracking-[0.2em] text-primary mb-4">{member.role}</p>
                    <p className="text-muted-foreground font-light text-sm md:text-base leading-relaxed">
                      {member.bio}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Sales Team */}
      <section className="site-stone blueprint-grid py-16 md:py-24 px-4 md:px-16 w-full">
        <motion.div
          className="max-w-7xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <motion.div variants={fadeInUp} className="flex items-center gap-3 mb-8 md:mb-12">
            <TrendingUp className="w-5 h-5 text-primary" />
            <span className="font-mono text-[10px] md:text-[11px] uppercase tracking-[0.25em] text-primary">Sales Team</span>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 md:gap-6">
            {SALES_TEAM.map((member) => (
              <motion.div
                key={member.name}
                variants={fadeInUp}
                className="bg-background/90 backdrop-blur-sm border border-stone-foreground/10 shadow-lg p-6 md:p-8 flex flex-col items-center text-center transition-transform hover:-translate-y-1.5 duration-500"
              >
                <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center mb-4">
                  <span className="font-serif text-lg md:text-xl text-primary">{member.initials}</span>
                </div>
                <h3 className="font-serif text-lg md:text-xl mb-1">{member.name}</h3>
                <p className="font-mono text-[9px] md:text-[10px] uppercase tracking-[0.2em] text-primary mb-3">Sales Advisor</p>
                <p className="text-muted-foreground font-light text-xs md:text-sm leading-relaxed">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Design & Tech */}
      <section className="px-4 md:px-16 max-w-7xl mx-auto py-16 md:py-24">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <motion.div variants={fadeInUp} className="flex items-center gap-3 mb-8 md:mb-12">
            <Code2 className="w-5 h-5 text-primary" />
            <span className="font-mono text-[10px] md:text-[11px] uppercase tracking-[0.25em] text-primary">Design & Technology</span>
          </motion.div>

          {TECH_TEAM.map((member) => (
            <motion.div
              key={member.name}
              variants={fadeInUp}
              className="plan-corners bg-card border border-border p-6 md:p-10 flex flex-col sm:flex-row gap-6 items-center sm:items-start max-w-xl transition-all hover:-translate-y-1 duration-500 hover:shadow-lg"
            >
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
                <span className="font-serif text-xl md:text-2xl text-primary">{member.initials}</span>
              </div>
              <div className="text-center sm:text-left">
                <h3 className="font-serif text-lg md:text-xl mb-1">{member.name}</h3>
                <p className="font-mono text-[10px] md:text-[11px] uppercase tracking-[0.2em] text-primary mb-3">{member.role}</p>
                <p className="text-muted-foreground font-light text-sm md:text-base leading-relaxed">{member.bio}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Values Section */}
      <section className="site-stone blueprint-grid py-16 md:py-28 px-4 md:px-16 w-full">
        <motion.div
          className="max-w-7xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <motion.div variants={fadeInUp} className="max-w-2xl mb-12 md:mb-16">
            <span className="font-mono text-[10px] md:text-[11px] uppercase tracking-[0.25em] text-primary">What we stand for</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif tracking-wide mt-3 mb-4">Our values</h2>
            <p className="text-muted-foreground font-light text-base md:text-lg">
              The principles that shape every recommendation, every site visit, and every handshake.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
            {VALUES.map(({ icon: Icon, title, desc }) => (
              <motion.div
                key={title}
                variants={fadeInUp}
                className="bg-background/90 backdrop-blur-sm p-6 md:p-8 border border-stone-foreground/10 shadow-xl flex items-start gap-5 transition-transform hover:-translate-y-1 duration-500"
              >
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-primary/20 flex items-center justify-center shrink-0">
                  <Icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-serif text-base md:text-lg mb-2">{title}</h4>
                  <p className="text-muted-foreground font-light text-xs md:text-sm leading-relaxed">{desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-28 px-4 md:px-16 max-w-7xl mx-auto text-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="max-w-2xl mx-auto"
        >
          <motion.span variants={fadeInUp} className="font-mono text-[10px] md:text-[11px] uppercase tracking-[0.25em] text-primary">
            Join the crew
          </motion.span>
          <motion.h2 variants={fadeInUp} className="text-2xl sm:text-3xl md:text-4xl font-serif tracking-wide mt-3 mb-4">
            Want to build something with us?
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-muted-foreground font-light text-base md:text-lg mb-8 md:mb-10">
            We&apos;re always looking for people who care about doing real estate the right way.
          </motion.p>
          <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/careers" tabIndex={-1}>
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-none py-6 px-10 uppercase tracking-widest font-mono text-xs transition-transform hover:-translate-y-0.5">
                View Open Roles
              </Button>
            </Link>
            <Link href="/contact" tabIndex={-1}>
              <Button variant="outline" className="rounded-none py-6 px-10 uppercase tracking-widest font-mono text-xs border-foreground/25 hover:bg-foreground hover:text-background transition-all hover:-translate-y-0.5">
                Get In Touch
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
}
