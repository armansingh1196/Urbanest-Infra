import Link from 'next/link';
import { ScaleDivider } from './ScaleDivider';

const FacebookIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
);

const TwitterIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
);

const InstagramIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
);

const LinkedinIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
);

export function Footer() {
  return (
    <footer className="bg-background text-foreground pt-6 md:pt-16 pb-4 md:pb-10 px-4 md:px-16 border-t border-border">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-12">
        <div className="flex flex-col gap-4 md:gap-6 md:col-span-1">
          <span className="text-xl md:text-2xl font-serif tracking-wide text-primary">Urbanest Infra</span>
          <p className="text-muted-foreground font-light text-xs md:text-sm leading-relaxed">
            India&apos;s trusted real estate advisory platform. We help you
            survey the ground before you build a life on it.
          </p>
          <div className="flex gap-4 md:gap-5 text-muted-foreground">
            <Link href="#" className="hover:text-primary transition-colors" aria-label="Facebook">
              <FacebookIcon className="w-4 h-4 md:w-5 md:h-5" />
            </Link>
            <Link href="#" className="hover:text-primary transition-colors" aria-label="Twitter">
              <TwitterIcon className="w-4 h-4 md:w-5 md:h-5" />
            </Link>
            <Link href="#" className="hover:text-primary transition-colors" aria-label="Instagram">
              <InstagramIcon className="w-4 h-4 md:w-5 md:h-5" />
            </Link>
            <Link href="#" className="hover:text-primary transition-colors" aria-label="LinkedIn">
              <LinkedinIcon className="w-4 h-4 md:w-5 md:h-5" />
            </Link>
          </div>
        </div>

        <div>
          <h3 className="font-mono text-[10px] md:text-xs uppercase tracking-[0.2em] mb-4 md:mb-6 text-muted-foreground">Projects</h3>
          <ul className="flex flex-col gap-2 md:gap-4 text-xs md:text-sm font-light">
            <li><Link href="/projects?type=residential" className="hover:text-primary transition-colors">Residential</Link></li>
            <li><Link href="/projects?type=commercial" className="hover:text-primary transition-colors">Commercial</Link></li>
            <li><Link href="/projects?type=luxury" className="hover:text-primary transition-colors">Luxury</Link></li>
            <li><Link href="/projects?status=under-construction" className="hover:text-primary transition-colors">Under Construction</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="font-mono text-[10px] md:text-xs uppercase tracking-[0.2em] mb-4 md:mb-6 text-muted-foreground">Company</h3>
          <ul className="flex flex-col gap-2 md:gap-4 text-xs md:text-sm font-light">
            <li><Link href="/about" className="hover:text-primary transition-colors">About Us</Link></li>
            <li><Link href="/services" className="hover:text-primary transition-colors">Our Services</Link></li>
            <li><Link href="/projects" className="hover:text-primary transition-colors">Partner Developers</Link></li>
            <li><Link href="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="font-mono text-[10px] md:text-xs uppercase tracking-[0.2em] mb-4 md:mb-6 text-muted-foreground">Contact</h3>
          <ul className="flex flex-col gap-2 md:gap-4 text-muted-foreground font-light text-xs md:text-sm">
            <li>1st Floor, Sumbriddhi garden, Subhash Nagar,<br />Saraidhela - 828127</li>
            <li>contact@urbanestinfra.com</li>
            <li>+91 6203819040</li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-8 md:mt-12">
        <ScaleDivider className="text-muted-foreground" />
      </div>

      <div className="max-w-7xl mx-auto mt-4 md:mt-6 flex flex-col md:flex-row justify-between items-center gap-3 md:gap-4 text-[9px] md:text-[11px] text-muted-foreground font-mono tracking-widest uppercase text-center md:text-left">
        <p>&copy; {new Date().getFullYear()} Urbanest Infra. All rights reserved.</p>
        <div className="flex gap-4 md:gap-6">
          <Link href="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link>
          <Link href="/terms" className="hover:text-primary transition-colors">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
}
