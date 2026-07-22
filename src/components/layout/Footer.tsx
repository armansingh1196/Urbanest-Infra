import Link from 'next/link';


export function Footer() {
  return (
    <footer 
      className="bg-background text-foreground py-16 px-8 md:px-16 border-t"
      style={{ borderColor: 'rgba(255,255,255,0.08)' }}
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="flex flex-col gap-6">
          <span className="text-2xl font-serif tracking-widest uppercase text-primary">Urbanest</span>
          <p className="text-muted-foreground font-light text-sm leading-relaxed">
            Your trusted premium real estate advisory platform in Dhanbad. We help you see value clearly and make informed property decisions.
          </p>
          <div className="flex gap-6 text-sm font-medium tracking-wider uppercase">
            <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">Facebook</Link>
            <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">Twitter</Link>
            <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">Instagram</Link>
            <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">LinkedIn</Link>
          </div>
        </div>

        <div>
          <h3 className="font-serif tracking-wider uppercase mb-6 text-lg">Projects</h3>
          <ul className="flex flex-col gap-4 text-muted-foreground font-light text-sm">
            <li><Link href="/projects?type=residential" className="hover:text-primary transition-colors">Residential</Link></li>
            <li><Link href="/projects?type=commercial" className="hover:text-primary transition-colors">Commercial</Link></li>
            <li><Link href="/projects?type=luxury" className="hover:text-primary transition-colors">Luxury</Link></li>
            <li><Link href="/projects?status=under-construction" className="hover:text-primary transition-colors">Under Construction</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="font-serif tracking-wider uppercase mb-6 text-lg">Company</h3>
          <ul className="flex flex-col gap-4 text-muted-foreground font-light text-sm">
            <li><Link href="/about" className="hover:text-primary transition-colors">About Us</Link></li>
            <li><Link href="/services" className="hover:text-primary transition-colors">Our Services</Link></li>
            <li><Link href="/developers" className="hover:text-primary transition-colors">Partner Developers</Link></li>
            <li><Link href="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="font-serif tracking-wider uppercase mb-6 text-lg">Contact</h3>
          <ul className="flex flex-col gap-4 text-muted-foreground font-light text-sm">
            <li>123 Real Estate Avenue, Dhanbad, Jharkhand, India</li>
            <li>info@urbanestinfra.com</li>
            <li>+91 98765 43210</li>
          </ul>
        </div>
      </div>
      
      <div 
        className="max-w-7xl mx-auto mt-16 pt-8 border-t flex flex-col md:flex-row justify-between items-center text-xs text-muted-foreground font-mono tracking-widest uppercase"
        style={{ borderColor: 'rgba(255,255,255,0.08)' }}
      >
        <p>&copy; {new Date().getFullYear()} Urbanest Infra. All rights reserved.</p>
        <div className="flex gap-6 mt-4 md:mt-0">
          <Link href="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link>
          <Link href="/terms" className="hover:text-primary transition-colors">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
}
