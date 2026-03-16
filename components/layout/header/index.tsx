"use client";

import Image from "next/image";
import Link from "next/link";
import NavLinks from "./NavLinks";
import MobileMenu from "./MobileMenu";
import MobileMenuToggle from "./MobileMenuToggle";
import { useState, useEffect } from "react";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 h-[78px] transition-all duration-500 ease-in-out ${
          scrolled
            ? "bg-white/95 backdrop-blur-xl shadow-sm border-b border-gray-100"
            : "bg-white border-b border-(--gold)/70"
        }`}
      >
        <div className="container mx-auto h-full px-4 sm:px-6 flex items-center justify-between gap-4">
          {/* ── Logo ── */}
          <Link
            href="/"
            className="shrink-0 flex items-center group"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <Image
              src="/logo/main-logo.png"
              alt="Yolman Logo"
              width={60}
              height={50}
              className="h-auto w-auto object-contain transition-transform duration-300 scale-90 group-hover:scale-100"
              priority
            />
          </Link>

          {/* ── Desktop Nav (hidden on mobile) ── */}
          <div className="hidden lg:flex flex-1 justify-center">
            <NavLinks />
          </div>

          {/* ── Right Side ── */}
          <div className="flex items-center gap-4">
            {/* Desktop WhatsApp Button */}
            <Link
              href="https://wa.me/+905444644422"
              target="_blank"
              className="hidden md:flex items-center gap-2 px-6 py-2.5 rounded-full 
                bg-linear-to-r from-(--gold) to-(--gold-dark) text-white font-bold text-sm 
                shadow-[0_4px_15px_rgba(201,168,76,0.3)] hover:shadow-[0_8px_25px_rgba(201,168,76,0.5)] 
                hover:-translate-y-1 transition-all duration-300 relative overflow-hidden group/btn"
            >
              <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover/btn:animate-shimmer" />
              <span className="relative z-10">تواصل معنا الآن</span>
              <div className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
            </Link>

            {/* Hamburger — only on mobile */}
            <div className="lg:hidden">
              <MobileMenuToggle
                isOpen={isMobileMenuOpen}
                onClose={setIsMobileMenuOpen}
              />
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu — rendered outside header to avoid clipping */}
      <MobileMenu isOpen={isMobileMenuOpen} onClose={setIsMobileMenuOpen} />
    </>
  );
};

export default Header;
