'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';

type NavLink = {
  label: string;
  href?: string;
  children?: { label: string; href: string }[];
};

const navLinks: NavLink[] = [
  { href: '/', label: 'Home' },
  { href: '/CFP', label: 'CFP' },
  { href: '/Publication', label: 'Publication' },
  {
    label: 'Committee',
    children: [
      { href: '/Committee/organizing', label: 'Organizing Members' },
      { href: '/Committee/technical', label: 'Technical Committee' }
    ],
  },
  { href: '/Invitees', label: 'Invitees' },
  { href: '/Agenda', label: 'Agenda' },
  { href: '/Gallery', label: 'Gallery' },
  { href: '/Venue', label: 'Venue' },
  { href: '/Dates', label: 'Important Dates' },
  { href: '/register', label: 'Register' },
  { href: '/Contact', label: 'Contact Us' },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [clickedDropdown, setClickedDropdown] = useState<string | null>(null);
  const [mobileDropdown, setMobileDropdown] = useState<string | null>(null);
  const [hasScrolled, setHasScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  useEffect(() => {
    if (!mounted) return;
    const handleScroll = () => setHasScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [mounted]);

  if (!mounted) return null;

  const toggleDropdown = (label: string) => {
    setClickedDropdown((prev) => (prev === label ? null : label));
  };

  const toggleMobileDropdown = (label: string) => {
    setMobileDropdown((prev) => (prev === label ? null : label));
  };

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${hasScrolled ? 'bg-black/70 backdrop-blur-md' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-1">
            <Image src="/MUJ_LOGO.webp" alt="MUJ Logo" width={60} height={40} />
            <Image src={hasScrolled ? "/MUJ_Logo_text.webp" : "/MUJ_logo_text_black.webp"} alt="MUJ Logo Text" width={140} height={32} />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) =>
              link.children ? (
                <div key={link.label} className="relative">
                  <button
                    onClick={() => toggleDropdown(link.label)}
                    className={`flex items-center gap-1 font-medium transition ${hasScrolled ? 'text-white hover:text-purple-300' : 'text-black hover:text-purple-300'}`}
                  >
                    {link.label} <ChevronDown className={`w-4 h-4 transition-transform ${clickedDropdown === link.label ? 'rotate-180' : ''}`} />
                  </button>
                  {clickedDropdown === link.label && (
                    <div className="absolute left-0 top-full mt-2 bg-black shadow-lg rounded-md z-50">
                      {link.children.map((sublink) => (
                        <Link
                          key={sublink.href}
                          href={sublink.href}
                          className="block px-4 py-2 text-sm text-white hover:bg-purple-700 whitespace-nowrap"
                        >
                          {sublink.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={link.label}
                  href={link.href!}
                  className={`font-medium transition ${hasScrolled ? 'text-white hover:text-purple-300' : 'text-black hover:text-purple-300'}`}
                >
                  {link.label}
                </Link>
              )
            )}
          </nav>

          {/* Mobile Toggle */}
          <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-black/90 backdrop-blur-sm px-4 py-4 space-y-4">
          {navLinks.map((link) =>
            link.children ? (
              <div key={link.label}>
                <button
                  onClick={() => toggleMobileDropdown(link.label)}
                  className="w-full flex justify-between items-center text-white font-medium"
                >
                  {link.label}
                  <ChevronDown className={`ml-2 transform transition-transform ${mobileDropdown === link.label ? 'rotate-180' : ''}`} />
                </button>
                {mobileDropdown === link.label && (
                  <div className="ml-4 mt-2 space-y-2">
                    {link.children.map((sublink) => (
                      <Link
                        key={sublink.href}
                        href={sublink.href}
                        onClick={() => setIsOpen(false)}
                        className="block text-white hover:text-purple-300"
                      >
                        {sublink.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={link.label}
                href={link.href!}
                onClick={() => setIsOpen(false)}
                className="block text-white hover:text-purple-300 font-medium transition"
              >
                {link.label}
              </Link>
            )
          )}
        </div>
      )}
    </header>
  );
}
