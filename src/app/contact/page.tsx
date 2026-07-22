import { Button } from "@/components/ui/button";

export default function ContactPage() {
  return (
    <div className="pt-32 min-h-screen px-4 md:px-16 max-w-7xl mx-auto">
      <h1 className="text-4xl font-light tracking-wide mb-8">Contact Us</h1>
      <p className="text-muted-foreground font-light text-lg mb-12 max-w-2xl">
        Ready to find your dream property in Dhanbad? Reach out to our expert advisors today.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
        <div>
          <form className="space-y-6 bg-card p-8 border border-border">
            <div>
              <label className="text-xs uppercase tracking-widest font-medium text-muted-foreground block mb-2">Full Name</label>
              <input type="text" className="w-full bg-transparent border-b border-border pb-2 outline-none focus:border-primary transition-colors text-sm font-light" placeholder="Your name" />
            </div>
            <div>
              <label className="text-xs uppercase tracking-widest font-medium text-muted-foreground block mb-2">Email Address</label>
              <input type="email" className="w-full bg-transparent border-b border-border pb-2 outline-none focus:border-primary transition-colors text-sm font-light" placeholder="Your email" />
            </div>
            <div>
              <label className="text-xs uppercase tracking-widest font-medium text-muted-foreground block mb-2">Message</label>
              <textarea className="w-full bg-transparent border-b border-border pb-2 outline-none focus:border-primary transition-colors text-sm font-light resize-none h-24" placeholder="How can we help you?"></textarea>
            </div>
            <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 rounded-none py-6 uppercase tracking-widest font-light text-sm">
              Send Message
            </Button>
          </form>
        </div>
        
        <div className="space-y-8">
          <div>
            <h4 className="text-sm font-medium tracking-wide uppercase text-muted-foreground mb-4">Our Office</h4>
            <p className="text-lg font-light">123 Premium Towers, Bank More<br/>Dhanbad, Jharkhand 826001</p>
          </div>
          <div>
            <h4 className="text-sm font-medium tracking-wide uppercase text-muted-foreground mb-4">Contact Info</h4>
            <p className="text-lg font-light">+91 98765 43210<br/>advisory@urbanestinfra.com</p>
          </div>
        </div>
      </div>
    </div>
  );
}
