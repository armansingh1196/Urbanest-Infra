import Link from 'next/link';
import { ScaleDivider } from './ScaleDivider';

export function Footer() {
  return (
    <footer className="bg-background text-foreground pt-16 pb-10 px-6 md:px-16 border-t border-border">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="flex flex-col gap-6 md:col-span-1">
          <span className="text-2xl font-serif tracking-wide text-primary">Urbanest Infra</span>
          <p className="text-muted-foreground font-light text-sm leading-relaxed">
            India&apos;s trusted real estate advisory platform. We help you
            survey the ground before you build a life on it.
          </p>
          <div className="flex gap-5 text-xs font-mono tracking-wider uppercase">
            <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">FB</Link>
            <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">X</Link>
            <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">IG</Link>
            <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">IN</Link>
          </div>
        </div>

        <div>
          <h3 className="font-mono text-xs uppercase tracking-[0.2em] mb-6 text-muted-foreground">Projects</h3>
          <ul className="flex flex-col gap-4 text-sm font-light">
            <li><Link href="/projects?type=residential" className="hover:text-primary transition-colors">Residential</Link></li>
            <li><Link href="/projects?type=commercial" className="hover:text-primary transition-colors">Commercial</Link></li>
            <li><Link href="/projects?type=luxury" className="hover:text-primary transition-colors">Luxury</Link></li>
            <li><Link href="/projects?status=under-construction" className="hover:text-primary transition-colors">Under Construction</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="font-mono text-xs uppercase tracking-[0.2em] mb-6 text-muted-foreground">Company</h3>
          <ul className="flex flex-col gap-4 text-sm font-light">
            <li><Link href="/about" className="hover:text-primary transition-colors">About Us</Link></li>
            <li><Link href="/services" className="hover:text-primary transition-colors">Our Services</Link></li>
            <li><Link href="/projects" className="hover:text-primary transition-colors">Partner Developers</Link></li>
            <li><Link href="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="font-mono text-xs uppercase tracking-[0.2em] mb-6 text-muted-foreground">Contact</h3>
          <ul className="flex flex-col gap-4 text-muted-foreground font-light text-sm">
            <li>1st Floor, Sumbriddhi garden, Subhash Nagar,<br />Saraidhela - 828127</li>
            <li>contact@urbanestinfra.com</li>
            <li>+91 6203819040</li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-12">
        <ScaleDivider className="text-muted-foreground" />
      </div>

      <div className="max-w-7xl mx-auto mt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-[11px] text-muted-foreground font-mono tracking-widest uppercase">
        <p>&copy; {new Date().getFullYear()} Urbanest Infra. All rights reserved.</p>
        <div className="flex gap-6">
          <Link href="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link>
          <Link href="/terms" className="hover:text-primary transition-colors">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
}
