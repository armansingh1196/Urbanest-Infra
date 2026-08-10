import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="pt-32 min-h-screen px-4 md:px-16 max-w-7xl mx-auto pb-24">
      <div className="max-w-2xl mb-16">
        <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-primary">Get in touch</span>
        <h1 className="text-4xl md:text-5xl font-serif tracking-wide mt-3 mb-6">Contact us</h1>
        <p className="text-muted-foreground font-light text-lg">
          Ready to find your next premium property? Reach out to our advisors — no forms
          to a call centre, a real answer within the day.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-start">
        <div className="w-full">
          <form className="space-y-10 bg-card p-10 md:p-12 border border-border shadow-xl plan-corners relative z-10">
            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-[0.2em] font-mono text-muted-foreground block">Full Name</label>
              <input type="text" className="w-full bg-transparent border-b border-border/60 pb-3 pt-1 outline-none focus:border-primary transition-colors text-base placeholder:text-muted-foreground/40 text-foreground" placeholder="Your name" />
            </div>
            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-[0.2em] font-mono text-muted-foreground block">Email Address</label>
              <input type="email" className="w-full bg-transparent border-b border-border/60 pb-3 pt-1 outline-none focus:border-primary transition-colors text-base placeholder:text-muted-foreground/40 text-foreground" placeholder="Your email" />
            </div>
            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-[0.2em] font-mono text-muted-foreground block">Message</label>
              <textarea className="w-full bg-transparent border-b border-border/60 pb-3 pt-1 outline-none focus:border-primary transition-colors text-base placeholder:text-muted-foreground/40 resize-none h-24 text-foreground" placeholder="How can we help you?"></textarea>
            </div>
            <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 rounded-none py-7 mt-6 uppercase tracking-[0.2em] font-mono text-xs transition-transform hover:-translate-y-0.5">
              Send Message
            </Button>
          </form>
        </div>

        <div className="space-y-12 md:pt-4">
          <div className="flex gap-5 group">
            <div className="w-10 h-10 rounded-full border border-primary/20 flex items-center justify-center shrink-0 group-hover:bg-primary/5 transition-colors">
              <MapPin className="w-4 h-4 text-primary" />
            </div>
            <div>
              <h4 className="text-[10px] font-mono tracking-[0.2em] uppercase text-muted-foreground mb-3">Our office</h4>
              <p className="text-xl font-serif text-foreground/90 leading-relaxed">1st Floor, Sumbriddhi garden, Subhash Nagar<br />Saraidhela - 828127</p>
            </div>
          </div>
          <div className="flex gap-5 group">
            <div className="w-10 h-10 rounded-full border border-primary/20 flex items-center justify-center shrink-0 group-hover:bg-primary/5 transition-colors">
              <Phone className="w-4 h-4 text-primary" />
            </div>
            <div>
              <h4 className="text-[10px] font-mono tracking-[0.2em] uppercase text-muted-foreground mb-3">Call us</h4>
              <p className="text-xl font-serif text-foreground/90 leading-relaxed">+91 6203819040</p>
            </div>
          </div>
          <div className="flex gap-5 group">
            <div className="w-10 h-10 rounded-full border border-primary/20 flex items-center justify-center shrink-0 group-hover:bg-primary/5 transition-colors">
              <Mail className="w-4 h-4 text-primary" />
            </div>
            <div>
              <h4 className="text-[10px] font-mono tracking-[0.2em] uppercase text-muted-foreground mb-3">Email</h4>
              <p className="text-xl font-serif text-foreground/90 leading-relaxed">contact@urbanestinfra.com</p>
            </div>
          </div>
          
          <div className="w-full h-64 border border-border mt-12 relative overflow-hidden shadow-sm plan-corners bg-muted/20">
            <iframe 
              src="https://maps.google.com/maps?q=Sumbriddhi+garden,+Subhash+Nagar,+Saraidhela&t=&z=14&ie=UTF8&iwloc=&output=embed" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}
