"use client";
import React, { useState, useEffect } from "react";

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
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
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled ? "bg-[#0D1117]/95 backdrop-blur-md" : "bg-transparent"
        }`}
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
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-2xl flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                    <span className="text-white font-bold text-sm sm:text-lg select-none">
                      S
                    </span>
                  </div>

                  {/* Hover glow */}
                  <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-2xl blur opacity-0 group-hover:opacity-50 transition-opacity duration-300 pointer-events-none"></div>
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
                    className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 relative group"
                  >
                    {link.name}
                    <span className="absolute inset-x-0 bottom-0 h-0.5  transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200"></span>
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
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur opacity-75 group-hover:opacity-100 transition"></div>
                <span className="relative px-4 py-2 bg-[#161B22] rounded-full text-sm font-medium text-white">
                  Hire Me
                </span>
              </a>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={toggleMobileMenu}
                className="relative w-10 h-10 rounded-lg bg-[#21262D] hover:bg-[#2D333B] border border-[#30363D] transition-all duration-200 flex items-center justify-center group focus:outline-none"
                aria-label="Toggle menu"
              >
                <div className="w-5 h-5 flex flex-col justify-center items-center">
                  <span
                    className={`block h-0.5 w-5 bg-gray-400 transition-all duration-300 ease-in-out transform origin-center ${
                      isMobileMenuOpen
                        ? "rotate-45 translate-y-0.5"
                        : "translate-y-[-3px]"
                    }`}
                  ></span>
                  <span
                    className={`block h-0.5 w-5 bg-gray-400 transition-all duration-300 ease-in-out ${
                      isMobileMenuOpen
                        ? "opacity-0 scale-0"
                        : "opacity-100 scale-100"
                    }`}
                  ></span>
                  <span
                    className={`block h-0.5 w-5 bg-gray-400 transition-all duration-300 ease-in-out transform origin-center ${
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
          className={`md:hidden transition-all duration-300 ease-out ${
            isMobileMenuOpen
              ? "max-h-96 opacity-100"
              : "max-h-0 opacity-0 pointer-events-none"
          } overflow-hidden`}
        >
          <div
            className={`px-4 py-6 space-y-2 bg-[#0D1117]/98 backdrop-blur-lg border-t border-[#21262D]/50 transform transition-transform duration-300 ease-out ${
              isMobileMenuOpen ? "translate-y-0" : "-translate-y-4"
            }`}
          >
            {navLinks.map((link, index) => (
              <div
                key={link.name}
                className={`transform transition-all duration-300 ease-out ${
                  isMobileMenuOpen
                    ? "translate-x-0 opacity-100"
                    : "-translate-x-4 opacity-0"
                }`}
                style={{
                  transitionDelay: isMobileMenuOpen ? `${index * 80}ms` : "0ms",
                }}
              >
                <a
                  href={link.href}
                  onClick={closeMobileMenu}
                  className="group flex items-center justify-center px-4 py-3 rounded-lg text-gray-300 hover:text-white hover:bg-[#21262D]/50 transition-all duration-200 border border-transparent hover:border-[#30363D]"
                >
                  <span className="font-medium">{link.name}</span>
                </a>
              </div>
            ))}

            <div
              className={`pt-4 mt-4 border-t border-[#21262D]/50 transform transition-all duration-300 ease-out ${
                isMobileMenuOpen
                  ? "translate-y-0 opacity-100"
                  : "translate-y-4 opacity-0"
              }`}
              style={{
                transitionDelay: isMobileMenuOpen ? "400ms" : "0ms",
              }}
            >
              <a
                href="#contact"
                onClick={closeMobileMenu}
                className="group relative inline-flex items-center justify-center w-full"
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg blur opacity-60 group-hover:opacity-100 transition-opacity duration-200"></div>
                <span className="relative px-6 py-3 bg-[#161B22] rounded-lg text-sm font-medium text-white w-full text-center border border-[#30363D] group-hover:border-blue-500/30 transition-colors duration-200">
                  Hire Me
                </span>
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/20 z-40 md:hidden"
          onClick={closeMobileMenu}
        ></div>
      )}
    </>
  );
};

// Demo component to show the navbar in action
export default function NavbarDemo() {
  return (
    <div className="bg-[#0D1117] min-h-screen">
      <Navbar />

      {/* Demo content to show navbar behavior */}
      <div className="pt-20">
        {/* Hero Section */}
        <section
          id="hero"
          className="min-h-screen flex items-center justify-center bg-gradient-to-b from-[#161B22] to-[#0D1117]"
        >
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              Sarthak Sarangi
            </h1>
            <p className="text-xl text-gray-400">Full Stack Developer</p>
          </div>
        </section>

        {/* Demo sections */}
        {["about", "work", "skills", "contact"].map((section) => (
          <section
            key={section}
            id={section}
            className="min-h-screen flex items-center justify-center bg-[#0D1117] border-t border-[#21262D]"
          >
            <div className="text-center">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 capitalize">
                {section}
              </h2>
              <p className="text-lg text-gray-400">
                This is the {section} section. Scroll to see the navbar in
                action!
              </p>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
