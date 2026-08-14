"use client";

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { Menu, X, Heart, Calculator, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';

const NAV_LINKS: ({ href: string; label: string; children?: undefined } | { label: string; href?: undefined; children: { href: string; label: string }[] })[] = [
  { href: '/', label: 'Home' },
  {
    label: 'Company',
    children: [
      { href: '/about', label: 'About Us' },
      { href: '/team', label: 'Our Team' },
      { href: '/careers', label: 'Careers' },
    ],
  },
  { href: '/projects', label: 'Projects' },
  { href: '/services', label: 'Services' },
  { href: '/contact', label: 'Contact' },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [companyOpen, setCompanyOpen] = useState(false);
  const [mobileCompanyOpen, setMobileCompanyOpen] = useState(false);
  const companyRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const isHomepage = pathname === '/';

  const companyPaths = ['/about', '/team', '/careers'];
  const isCompanyActive = companyPaths.includes(pathname);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
    setCompanyOpen(false);
    setMobileCompanyOpen(false);
  }, [pathname]);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (companyRef.current && !companyRef.current.contains(e.target as Node)) {
        setCompanyOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

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
        {NAV_LINKS.map((link) =>
          link.children ? (
            // Company dropdown
            <div
              key={link.label}
              className="relative"
              ref={companyRef}
              onMouseEnter={() => setCompanyOpen(true)}
              onMouseLeave={() => setCompanyOpen(false)}
            >
              <button
                className={`relative py-1 transition-colors hover:text-primary flex items-center gap-1 uppercase ${
                  isCompanyActive ? 'text-primary' : ''
                }`}
              >
                {link.label}
                <ChevronDown className={`w-3 h-3 transition-transform duration-200 ${companyOpen ? 'rotate-180' : ''}`} />
                <span
                  className={`absolute -bottom-1 left-0 h-px bg-primary transition-all duration-300 ${
                    isCompanyActive ? 'w-full' : 'w-0'
                  }`}
                />
              </button>

              <AnimatePresence>
                {companyOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 4 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 4 }}
                    transition={{ duration: 0.15 }}
                    className="absolute top-full left-1/2 -translate-x-1/2 pt-3"
                  >
                    <div className="plan-corners bg-card border border-border shadow-[0_16px_48px_rgba(0,0,0,0.12)] py-2 min-w-[200px]">
                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className={`block px-6 py-3 text-[11px] tracking-[0.15em] uppercase font-mono transition-all duration-200 hover:text-primary hover:pl-8 ${
                            pathname === child.href ? 'text-primary border-l-2 border-primary pl-8' : 'text-muted-foreground border-l-2 border-transparent'
                          }`}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ) : (
            <Link
              key={link.href}
              href={link.href!}
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
          )
        )}
      </nav>

      <div className="hidden md:flex items-center gap-4">
        <Link href="/services#emi-calculator" className="p-2 hover:text-primary transition-colors text-muted-foreground" aria-label="EMI Calculator">
          <Calculator className="w-5 h-5" />
        </Link>
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

      <div className="flex md:hidden items-center gap-4 z-50">
        <Link href="/services#emi-calculator" className="text-foreground hover:text-primary transition-colors" aria-label="EMI Calculator">
          <Calculator className="w-6 h-6 stroke-1" />
        </Link>
        <Link href="/wishlist" className="text-foreground hover:text-primary transition-colors" aria-label="Wishlist">
          <Heart className="w-6 h-6 stroke-1" />
        </Link>
        <button
          className="text-foreground"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X className="w-7 h-7 stroke-1" /> : <Menu className="w-7 h-7 stroke-1" />}
        </button>
      </div>

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
              {NAV_LINKS.map((link, i) =>
                link.children ? (
                  <motion.div
                    key={link.label}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + (i * 0.05) }}
                  >
                    <button
                      onClick={() => setMobileCompanyOpen((v) => !v)}
                      className={`font-serif text-2xl tracking-wide transition-colors hover:text-primary flex items-center gap-2 ${
                        isCompanyActive ? 'text-primary' : 'text-foreground'
                      }`}
                    >
                      {link.label}
                      <ChevronDown className={`w-5 h-5 transition-transform duration-200 ${mobileCompanyOpen ? 'rotate-180' : ''}`} />
                    </button>

                    <AnimatePresence>
                      {mobileCompanyOpen && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.2 }}
                          className="overflow-hidden"
                        >
                          <div className="pl-4 pt-3 flex flex-col gap-3 border-l border-primary/20 ml-1">
                            {link.children.map((child) => (
                              <Link
                                key={child.href}
                                href={child.href}
                                onClick={() => setMenuOpen(false)}
                                className={`font-serif text-lg tracking-wide transition-colors hover:text-primary ${
                                  pathname === child.href ? 'text-primary' : 'text-muted-foreground'
                                }`}
                              >
                                {child.label}
                              </Link>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                ) : (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + (i * 0.05) }}
                  >
                    <Link
                      href={link.href!}
                      onClick={() => setMenuOpen(false)}
                      className={`font-serif text-2xl tracking-wide transition-colors hover:text-primary block ${
                        pathname === link.href ? 'text-primary' : 'text-foreground'
                      }`}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                )
              )}
              
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
