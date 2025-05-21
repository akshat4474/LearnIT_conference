'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/schedule', label: 'Schedule' },
  { href: '/speakers', label: 'Speakers' },
  { href: '/venue', label: 'Venue' },
  { href: '/register', label: 'Register' },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  
  const [hasScrolled, setHasScrolled] = useState(false);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
    setMounted(true);
    }, []);

    useEffect(() => {
    if (!mounted) return;

    const handleScroll = () => {
        setHasScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
    }, [mounted]);

    if (!mounted) return null; // Prevent hydration mismatch


  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        hasScrolled ? 'bg-black/70 backdrop-blur-md' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
         {/* Logo Section */}
        <Link href="/" className="flex items-center space-x-1">
        <Image
            src="/MUJ_LOGO.webp"
            alt="MUJ Logo"
            width={60}
            height={40}
        />
        <Image
            src={hasScrolled ? "/MUJ_Logo_text.webp" : "/MUJ_Logo_text_black.webp"}
            alt="MUJ Logo Text"
            width={140}
            height={32}
        />
        </Link>


          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-black hover:text-purple-300 font-medium transition ${
                  hasScrolled ? 'text-white hover:text-purple-300 font-medium transition' : 'bg-transparent'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Mobile Toggle */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-black/90 backdrop-blur-sm">
          <nav className="px-4 py-4 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block text-white hover:text-purple-300 font-medium transition"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
