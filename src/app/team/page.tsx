"use client";

import { motion, Variants } from "framer-motion";
import { Users, Target, Lightbulb, Heart } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const TEAM_MEMBERS = [
  {
    name: "Arman Singh",
    role: "Founder & CEO",
    initials: "AS",
    bio: "A surveyor by instinct and a strategist by training. Arman built Urbanest on the conviction that every property deal deserves the same rigour as a foundation audit.",
  },
  {
    name: "Rahul Kumar",
    role: "Head of Operations",
    initials: "RK",
    bio: "Keeps the machinery running — from site visits to registration paperwork. If there is a bottleneck, Rahul has already cleared it before you notice.",
  },
  {
    name: "Priya Sharma",
    role: "Client Relations",
    initials: "PS",
    bio: "Your first point of contact and your last. Priya ensures every client feels heard, updated, and confident from shortlisting to key handover.",
  },
  {
    name: "Vikash Gupta",
    role: "Legal & Compliance",
    initials: "VG",
    bio: "Handles title verification, RERA checks, and agreement drafting. No document leaves the desk without Vikash's sign-off.",
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
      <section className="pt-32 md:pt-40 pb-16 md:pb-24 px-4 md:px-16 max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="max-w-3xl"
        >
          <motion.span variants={fadeInUp} className="font-mono text-[10px] md:text-[11px] uppercase tracking-[0.25em] text-primary">
            Our People
          </motion.span>
          <motion.h1 variants={fadeInUp} className="text-3xl sm:text-4xl md:text-6xl font-serif tracking-wide mt-3 mb-4 md:mb-6 leading-tight">
            The team behind every solid deal.
          </motion.h1>
          <motion.p variants={fadeInUp} className="text-muted-foreground font-light text-base md:text-lg leading-relaxed max-w-2xl">
            A small, focused crew that believes real estate advisory should feel like working with
            a trusted surveyor — methodical, transparent, and always on your side.
          </motion.p>
        </motion.div>
      </section>

      {/* Team Grid */}
      <section className="px-4 md:px-16 max-w-7xl mx-auto pb-16 md:pb-32">
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          {TEAM_MEMBERS.map((member) => (
            <motion.div
              key={member.name}
              variants={fadeInUp}
              className="plan-corners bg-card border border-border p-6 md:p-8 flex flex-col gap-5 group hover:-translate-y-1.5 transition-transform duration-500"
            >
              {/* Avatar */}
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-500">
                <span className="font-serif text-xl md:text-2xl text-primary">{member.initials}</span>
              </div>

              <div>
                <h3 className="font-serif text-lg md:text-xl mb-1">{member.name}</h3>
                <p className="font-mono text-[10px] md:text-[11px] uppercase tracking-[0.2em] text-primary">{member.role}</p>
              </div>

              <p className="text-muted-foreground font-light text-xs md:text-sm leading-relaxed">
                {member.bio}
              </p>
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
