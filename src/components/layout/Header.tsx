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
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${isTransparent ? 'bg-transparent py-6' : 'bg-zinc-950 py-4 shadow-lg border-b border-zinc-900'} text-white px-8 md:px-16 flex justify-between items-center`}>
      <div className="flex items-center">
        <Link href="/" className="flex items-center gap-2">
          <img 
            src="/images/Urbanest%20Infra%20LOGO.png" 
            alt="Urbanest Infra" 
            className="h-10 w-auto object-contain" 
          />
        </Link>
      </div>
      
      <nav className="hidden md:flex gap-10 items-center text-sm uppercase tracking-widest font-light">
        <Link href="/about" className="hover:text-primary transition-colors">About</Link>
        <Link href="/projects" className="hover:text-primary transition-colors">Projects</Link>
        <Link href="/services" className="hover:text-primary transition-colors">Services</Link>
        <Link href="/contact" className="hover:text-primary transition-colors">Contact</Link>
      </nav>

      <div className="hidden md:flex items-center gap-4">
        <Button variant="outline" className={`border-white bg-transparent hover:bg-white hover:text-black font-light uppercase tracking-wider rounded-none px-8 ${isTransparent ? 'text-white' : 'text-white'}`}>
          Sign In
        </Button>
      </div>

      <button className="md:hidden text-white">
        <Menu className="w-8 h-8 stroke-1" />
      </button>
    </header>
  );
}
