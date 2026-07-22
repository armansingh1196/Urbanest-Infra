"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { usePathname } from 'next/navigation';

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const isHomepage = pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isTransparent = isHomepage && !scrolled;

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${isTransparent ? 'bg-transparent py-6' : 'bg-background/95 backdrop-blur-md py-4 shadow-xl border-b'} text-white px-8 md:px-16 flex justify-between items-center`}
      style={!isTransparent ? { borderColor: 'rgba(255,255,255,0.08)' } : {}}
    >
      <div className="flex items-center">
        <Link href="/" className="flex items-center gap-2">
          <img 
            src="/images/Urbanest%20Infra%20LOGO.png" 
            alt="Urbanest Infra" 
            className="h-10 w-auto object-contain" 
          />
        </Link>
      </div>
      
      <nav className="hidden md:flex gap-10 items-center text-xs uppercase tracking-[0.2em] font-medium text-muted-foreground">
        <Link href="/about" className="hover:text-primary transition-colors">About</Link>
        <Link href="/projects" className="hover:text-primary transition-colors">Projects</Link>
        <Link href="/services" className="hover:text-primary transition-colors">Services</Link>
        <Link href="/contact" className="hover:text-primary transition-colors">Contact</Link>
      </nav>

      <div className="hidden md:flex items-center gap-4">
        <Button variant="outline" className="border-primary/50 text-primary hover:bg-primary hover:text-background font-medium uppercase tracking-[0.15em] rounded-none px-8 bg-transparent transition-all">
          Sign In
        </Button>
      </div>

      <button className="md:hidden text-white">
        <Menu className="w-8 h-8 stroke-1" />
      </button>
    </header>
  );
}
