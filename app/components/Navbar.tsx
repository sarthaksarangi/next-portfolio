"use client";
import React, { useEffect, useState, useCallback } from "react";

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          // Only update boolean state, not continuous values
          setIsScrolled(window.scrollY > 20);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Calculate opacity using CSS custom property instead of JS
  const backgroundOpacity = isScrolled ? 0.95 : 0;

  const navLinks = [
    { name: "Home", href: "#hero" },
    { name: "Work", href: "#work" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" },
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <nav
        className="fixed top-0 w-full z-50 transition-all duration-500 ease-out"
        style={{
          backgroundColor: `rgba(13, 17, 23, ${backgroundOpacity})`,
          backdropFilter: isScrolled ? "blur(12px)" : "blur(0px)",
          borderBottom: `1px solid rgba(48, 54, 61, ${Math.min(
            backgroundOpacity * 0.5,
            0.3
          )})`,
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Logo */}
            <div className="flex-shrink-0">
              <a
                href="#hero"
                className="group flex items-center space-x-2"
                onClick={closeMobileMenu}
              >
                <div className="relative">
                  {/* Main logo square */}
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-all duration-300 ease-out">
                    <span className="text-white font-bold text-sm sm:text-lg select-none">
                      S
                    </span>
                  </div>

                  {/* Hover glow */}
                  <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-2xl blur opacity-0 group-hover:opacity-40 transition-all duration-300 ease-out pointer-events-none"></div>
                </div>
              </a>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 ease-out relative group"
                  >
                    {link.name}
                    <span className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out"></span>
                  </a>
                ))}
              </div>
            </div>

            {/* Desktop CTA Button */}
            <div className="hidden md:block">
              <a
                href="#contact"
                className="group relative inline-flex items-center justify-center"
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur opacity-60 group-hover:opacity-90 transition-all duration-300 ease-out"></div>
                <span className="relative px-5 py-2.5 bg-gray-900/90 hover:bg-gray-800/90 rounded-full text-sm font-medium text-white transition-all duration-300 ease-out border border-gray-700/50 group-hover:border-blue-500/30">
                  Hire Me
                </span>
              </a>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={toggleMobileMenu}
                className="relative w-10 h-10 rounded-lg bg-gray-800/60 hover:bg-gray-700/80 border border-gray-600/40 transition-all duration-300 ease-out flex items-center justify-center group focus:outline-none focus:ring-2 focus:ring-blue-500/50"
                aria-label="Toggle menu"
              >
                <div className="w-5 h-5 flex flex-col justify-center items-center">
                  <span
                    className={`block h-0.5 w-5 bg-gray-300 transition-all duration-300 ease-out transform origin-center ${
                      isMobileMenuOpen
                        ? "rotate-45 translate-y-0.5"
                        : "translate-y-[-3px]"
                    }`}
                  ></span>
                  <span
                    className={`block h-0.5 w-5 bg-gray-300 transition-all duration-200 ease-out ${
                      isMobileMenuOpen
                        ? "opacity-0 scale-0"
                        : "opacity-100 scale-100"
                    }`}
                  ></span>
                  <span
                    className={`block h-0.5 w-5 bg-gray-300 transition-all duration-300 ease-out transform origin-center ${
                      isMobileMenuOpen
                        ? "-rotate-45 -translate-y-0.5"
                        : "translate-y-[3px]"
                    }`}
                  ></span>
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div
          className={`md:hidden transition-all duration-400 ease-out ${
            isMobileMenuOpen
              ? "max-h-96 opacity-100"
              : "max-h-0 opacity-0 pointer-events-none"
          } overflow-hidden`}
        >
          <div
            className="px-4 py-6 space-y-2 bg-gray-900/95 backdrop-blur-xl border-t border-gray-700/30"
            style={{
              transform: isMobileMenuOpen
                ? "translateY(0)"
                : "translateY(-10px)",
              transition: "transform 400ms ease-out",
            }}
          >
            {navLinks.map((link, index) => (
              <div
                key={link.name}
                className="transform transition-all duration-300 ease-out"
                style={{
                  opacity: isMobileMenuOpen ? 1 : 0,
                  transform: isMobileMenuOpen
                    ? "translateX(0)"
                    : "translateX(-20px)",
                  transitionDelay: isMobileMenuOpen ? `${index * 60}ms` : "0ms",
                }}
              >
                <a
                  href={link.href}
                  onClick={closeMobileMenu}
                  className="group flex items-center justify-center px-4 py-3 rounded-lg text-gray-300 hover:text-white hover:bg-gray-800/50 transition-all duration-300 ease-out border border-transparent hover:border-gray-600/40"
                >
                  <span className="font-medium">{link.name}</span>
                </a>
              </div>
            ))}
          </div>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/30 z-40 md:hidden transition-opacity duration-400 ease-out"
          onClick={closeMobileMenu}
          style={{
            opacity: isMobileMenuOpen ? 1 : 0,
          }}
        ></div>
      )}
    </>
  );
};
