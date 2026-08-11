import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="pt-32 min-h-screen px-4 md:px-16 max-w-7xl mx-auto pb-24">
      <div className="max-w-2xl mb-16">
        <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-primary">Get in touch</span>
        <h1 className="text-4xl md:text-5xl font-serif tracking-wide mt-3 mb-6">Contact us</h1>
        <p className="text-muted-foreground font-light text-lg">
          Ready to find your next property in Dhanbad? Reach out to our advisors — no forms
          to a call centre, a real answer within the day.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
        <div>
          <form className="space-y-6 bg-card p-8 border border-border plan-corners">
            <div>
              <label className="text-xs uppercase tracking-widest font-mono text-muted-foreground block mb-2">Full Name</label>
              <input type="text" className="w-full bg-transparent border-b border-border pb-2 outline-none focus:border-primary transition-colors text-sm font-light" placeholder="Your name" />
            </div>
            <div>
              <label className="text-xs uppercase tracking-widest font-mono text-muted-foreground block mb-2">Email Address</label>
              <input type="email" className="w-full bg-transparent border-b border-border pb-2 outline-none focus:border-primary transition-colors text-sm font-light" placeholder="Your email" />
            </div>
            <div>
              <label className="text-xs uppercase tracking-widest font-mono text-muted-foreground block mb-2">Message</label>
              <textarea className="w-full bg-transparent border-b border-border pb-2 outline-none focus:border-primary transition-colors text-sm font-light resize-none h-24" placeholder="How can we help you?"></textarea>
            </div>
            <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 rounded-none py-6 uppercase tracking-widest font-mono text-xs">
              Send Message
            </Button>
          </form>
        </div>

        <div className="space-y-10">
          <div className="flex gap-4">
            <MapPin className="w-5 h-5 text-primary shrink-0 mt-1" />
            <div>
              <h4 className="text-xs font-mono tracking-wide uppercase text-muted-foreground mb-2">Our office</h4>
              <p className="text-lg font-light">123 Premium Towers, Bank More<br />Dhanbad, Jharkhand 826001</p>
            </div>
          </div>
          <div className="flex gap-4">
            <Phone className="w-5 h-5 text-primary shrink-0 mt-1" />
            <div>
              <h4 className="text-xs font-mono tracking-wide uppercase text-muted-foreground mb-2">Call us</h4>
              <p className="text-lg font-light">+91 98765 43210</p>
            </div>
          </div>
          <div className="flex gap-4">
            <Mail className="w-5 h-5 text-primary shrink-0 mt-1" />
            <div>
              <h4 className="text-xs font-mono tracking-wide uppercase text-muted-foreground mb-2">Email</h4>
              <p className="text-lg font-light">advisory@urbanestinfra.com</p>
            </div>
          </div>
          <div className="w-full h-64 bg-muted border border-border flex items-center justify-center">
            <p className="text-muted-foreground font-mono text-xs uppercase tracking-widest">Map — Bank More, Dhanbad</p>
          </div>
        </div>
      </div>
    </div>
  );
}
