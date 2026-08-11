"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';

const NAV_LINKS = [
  { href: '/', label: 'Home' },
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
          src="/Logo%20UI%20ICON.png"
          alt="Urbanest Infra"
          className="h-10 sm:h-12 md:h-16 w-auto object-contain brightness-0"
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
        <Link href="/wishlist" className="p-2 hover:text-primary transition-colors text-muted-foreground" aria-label="Wishlist">
          <Heart className="w-5 h-5" />
        </Link>
        <Link href="/contact" tabIndex={-1}>
          <Button
            variant="outline"
            className="border-primary/50 text-primary hover:bg-primary hover:text-primary-foreground font-mono uppercase tracking-[0.15em] rounded-none px-8 bg-transparent transition-all"
          >
            Enquire
          </Button>
        </Link>
      </div>

      <button
        className="md:hidden text-foreground z-50"
        onClick={() => setMenuOpen((v) => !v)}
        aria-label={menuOpen ? 'Close menu' : 'Open menu'}
        aria-expanded={menuOpen}
      >
        {menuOpen ? <X className="w-7 h-7 stroke-1" /> : <Menu className="w-7 h-7 stroke-1" />}
      </button>

      {/* Mobile menu (Sidebar) */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMenuOpen(false)}
              className="md:hidden fixed inset-0 top-0 bg-foreground/20 backdrop-blur-sm z-40"
            />
            {/* Sidebar Drawer */}
            <motion.div 
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="md:hidden fixed top-0 right-0 h-[100dvh] w-4/5 max-w-sm bg-background border-l border-border flex flex-col pt-24 px-8 gap-6 sm:gap-8 z-40 shadow-2xl"
            >
              {NAV_LINKS.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + (i * 0.05) }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className={`font-serif text-2xl tracking-wide transition-colors hover:text-primary block ${
                      pathname === link.href ? 'text-primary' : 'text-foreground'
                    }`}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="mt-auto mb-8 flex flex-col gap-3"
              >
                <Link href="/wishlist" onClick={() => setMenuOpen(false)} className="flex items-center justify-center gap-2 py-3 text-muted-foreground hover:text-primary transition-colors border border-border">
                  <Heart className="w-4 h-4" />
                  <span className="font-mono uppercase tracking-widest text-[10px] sm:text-xs">Wishlist</span>
                </Link>
                <Link href="/contact" onClick={() => setMenuOpen(false)} tabIndex={-1}>
                  <Button
                    variant="outline"
                    className="w-full border-primary/50 text-primary hover:bg-primary hover:text-primary-foreground font-mono uppercase tracking-[0.15em] text-[10px] sm:text-xs rounded-none py-5 bg-transparent"
                  >
                    Enquire
                  </Button>
                </Link>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
