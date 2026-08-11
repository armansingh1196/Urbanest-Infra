"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { usePathname } from 'next/navigation';

const NAV_LINKS = [
  { href: '/about', label: 'About' },
  { href: '/projects', label: 'Projects' },
  { href: '/services', label: 'Services' },
  { href: '/contact', label: 'Contact' },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHomepage = pathname === '/';

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  const isTransparent = isHomepage && !scrolled && !menuOpen;

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isTransparent ? 'bg-transparent py-6' : 'bg-background/95 backdrop-blur-md py-4 border-b border-border'
      } text-foreground px-6 md:px-16 flex justify-between items-center`}
    >
      <Link href="/" className="flex items-center gap-2 shrink-0">
        <img
          src="/images/Urbanest%20Infra%20LOGO.png"
          alt="Urbanest Infra"
          className="h-9 w-auto object-contain"
        />
      </Link>

      <nav className="hidden md:flex gap-10 items-center text-xs uppercase tracking-[0.2em] font-medium font-mono text-muted-foreground">
        {NAV_LINKS.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`relative py-1 transition-colors hover:text-primary ${
              pathname === link.href ? 'text-primary' : ''
            }`}
          >
            {link.label}
            <span
              className={`absolute -bottom-1 left-0 h-px bg-primary transition-all duration-300 ${
                pathname === link.href ? 'w-full' : 'w-0'
              }`}
            />
          </Link>
        ))}
      </nav>

      <div className="hidden md:flex items-center gap-4">
        <Button
          variant="outline"
          className="border-primary/50 text-primary hover:bg-primary hover:text-primary-foreground font-mono uppercase tracking-[0.15em] rounded-none px-8 bg-transparent transition-all"
        >
          Enquire
        </Button>
      </div>

      <button
        className="md:hidden text-foreground z-50"
        onClick={() => setMenuOpen((v) => !v)}
        aria-label={menuOpen ? 'Close menu' : 'Open menu'}
        aria-expanded={menuOpen}
      >
        {menuOpen ? <X className="w-7 h-7 stroke-1" /> : <Menu className="w-7 h-7 stroke-1" />}
      </button>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden fixed inset-0 top-0 bg-background/98 backdrop-blur-xl flex flex-col items-center justify-center gap-10 z-40">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`font-serif text-3xl tracking-wide transition-colors hover:text-primary ${
                pathname === link.href ? 'text-primary' : 'text-foreground'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Button
            variant="outline"
            className="border-primary/50 text-primary hover:bg-primary hover:text-primary-foreground font-mono uppercase tracking-[0.15em] rounded-none px-10 py-6 bg-transparent mt-4"
          >
            Enquire
          </Button>
        </div>
      )}
    </header>
  );
}
