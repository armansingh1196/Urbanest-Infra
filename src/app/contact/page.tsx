"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, CheckCircle2 } from "lucide-react";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const newErrors: Record<string, string> = {};

    if (!form.name.trim() || form.name.trim().length < 2) {
      newErrors.name = "Please enter your full name";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!form.email.trim() || !emailRegex.test(form.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    const phoneRegex = /^[+]?[0-9]{10,13}$/;
    const cleanPhone = form.phone.replace(/[\s-]/g, "");
    if (!cleanPhone || !phoneRegex.test(cleanPhone)) {
      newErrors.phone = "Please enter a valid 10-digit mobile number";
    }

    if (!form.message.trim() || form.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setSubmitted(true);
      setForm({ name: "", email: "", phone: "", message: "" });
      setTimeout(() => setSubmitted(false), 4000);
    }
  };

  const inputClass = (field: string) =>
    `w-full bg-transparent border-b pb-3 pt-1 outline-none transition-colors text-base placeholder:text-muted-foreground/40 text-foreground ${
      errors[field] ? "border-red-500 focus:border-red-500" : "border-border/60 focus:border-primary"
    }`;

  return (
    <div className="pt-24 md:pt-32 min-h-screen px-4 md:px-16 max-w-7xl mx-auto pb-24">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-24 items-start">
        <div className="space-y-10 md:space-y-16">
          {/* Header Section */}
          <div className="max-w-xl">
            <span className="font-mono text-[10px] md:text-[11px] uppercase tracking-[0.25em] text-primary">Get in touch</span>
            <h1 className="text-2xl sm:text-3xl md:text-5xl font-serif tracking-wide mt-2 md:mt-3 mb-3 md:mb-6">Contact us</h1>
            <p className="text-muted-foreground font-light text-sm sm:text-base md:text-lg">
              Ready to find your next premium property? Reach out to our advisors — no forms
              to a call centre, a real answer within the day.
            </p>
          </div>

          {/* Contact Info */}
          <div className="space-y-6 md:space-y-12">
            <div className="flex gap-4 md:gap-5 group">
              <div className="w-8 h-8 md:w-10 md:h-10 rounded-full border border-primary/20 flex items-center justify-center shrink-0 group-hover:bg-primary/5 transition-colors">
                <MapPin className="w-4 h-4 text-primary" />
              </div>
              <div>
                <h4 className="text-[10px] font-mono tracking-[0.2em] uppercase text-muted-foreground mb-1 md:mb-3">Our office</h4>
                <p className="text-base sm:text-lg md:text-xl font-serif text-foreground/90 leading-relaxed">1st Floor, Sumbriddhi garden, Subhash Nagar<br />Saraidhela - 828127</p>
              </div>
            </div>
            <div className="flex gap-4 md:gap-5 group">
              <div className="w-10 h-10 rounded-full border border-primary/20 flex items-center justify-center shrink-0 group-hover:bg-primary/5 transition-colors">
                <Phone className="w-4 h-4 text-primary" />
              </div>
              <div>
                <h4 className="text-[10px] font-mono tracking-[0.2em] uppercase text-muted-foreground mb-1 md:mb-3">Call us</h4>
                <p className="text-base sm:text-lg md:text-xl font-serif text-foreground/90 leading-relaxed">+91 6203819040</p>
              </div>
            </div>
            <div className="flex gap-4 md:gap-5 group">
              <div className="w-10 h-10 rounded-full border border-primary/20 flex items-center justify-center shrink-0 group-hover:bg-primary/5 transition-colors">
                <Mail className="w-4 h-4 text-primary" />
              </div>
              <div>
                <h4 className="text-[10px] font-mono tracking-[0.2em] uppercase text-muted-foreground mb-1 md:mb-3">Email</h4>
                <p className="text-base sm:text-lg md:text-xl font-serif text-foreground/90 leading-relaxed">contact@urbanestinfra.com</p>
              </div>
            </div>
          
            <div className="w-full h-48 md:h-64 border border-border mt-8 md:mt-12 relative overflow-hidden shadow-sm plan-corners bg-muted/20">
              <iframe 
                src="https://maps.google.com/maps?q=Sumbriddhi+garden,+Subhash+Nagar,+Saraidhela&t=&z=14&ie=UTF8&iwloc=&output=embed" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                sandbox="allow-scripts allow-same-origin"
              ></iframe>
            </div>
          </div>
        </div>

        <div className="w-full">
          <form onSubmit={handleSubmit} noValidate className="space-y-6 md:space-y-10 bg-card p-6 md:p-12 border border-border shadow-xl plan-corners relative z-10">
            
            {/* Success Toast */}
            {submitted && (
              <div className="flex items-center gap-3 bg-green-900/20 border border-green-800/30 text-green-400 p-4 text-sm font-mono animate-in fade-in slide-in-from-top-2">
                <CheckCircle2 className="w-5 h-5 shrink-0" />
                Thank you! We&apos;ll get back to you shortly.
              </div>
            )}

            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-[0.2em] font-mono text-muted-foreground block">Full Name *</label>
              <input
                type="text"
                className={inputClass("name")}
                placeholder="Your name"
                value={form.name}
                onChange={(e) => { setForm({ ...form, name: e.target.value }); setErrors({ ...errors, name: "" }); }}
              />
              {errors.name && <p className="text-[10px] font-mono text-red-500 mt-1">{errors.name}</p>}
            </div>
            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-[0.2em] font-mono text-muted-foreground block">Email Address *</label>
              <input
                type="email"
                className={inputClass("email")}
                placeholder="Your email"
                value={form.email}
                onChange={(e) => { setForm({ ...form, email: e.target.value }); setErrors({ ...errors, email: "" }); }}
              />
              {errors.email && <p className="text-[10px] font-mono text-red-500 mt-1">{errors.email}</p>}
            </div>
            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-[0.2em] font-mono text-muted-foreground block">Mobile Number *</label>
              <input
                type="tel"
                className={inputClass("phone")}
                placeholder="+91 6203819040"
                value={form.phone}
                onChange={(e) => { setForm({ ...form, phone: e.target.value }); setErrors({ ...errors, phone: "" }); }}
              />
              {errors.phone && <p className="text-[10px] font-mono text-red-500 mt-1">{errors.phone}</p>}
            </div>
            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-[0.2em] font-mono text-muted-foreground block">Message *</label>
              <textarea
                className={`${inputClass("message")} resize-none h-24`}
                placeholder="How can we help you?"
                value={form.message}
                onChange={(e) => { setForm({ ...form, message: e.target.value }); setErrors({ ...errors, message: "" }); }}
              ></textarea>
              {errors.message && <p className="text-[10px] font-mono text-red-500 mt-1">{errors.message}</p>}
            </div>
            <Button type="submit" className="w-full bg-primary text-primary-foreground hover:bg-primary/90 rounded-none py-6 md:py-7 mt-6 uppercase tracking-[0.2em] font-mono text-[10px] md:text-xs transition-transform hover:-translate-y-0.5">
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}
