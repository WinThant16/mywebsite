"use client";

import { useState } from "react";
import Link from "next/link";
import { Terminal } from "lucide-react"; // or any icon you like
import Image from "next/image";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleToggle = () => {
    setMenuOpen(!menuOpen);
  };

  const navItems = [
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#skills" },
    { label: "Contact", href: "#contact" },
    { label: "Resume", href: "resume" }
  ];

  return (
    <header className="fixed left-0 top-0 z-50 w-full bg-slate-300 text-slate-800 shadow-md">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <div className="flex items-center gap-1.5 sm:gap-2 md:gap-3 font-centra text-lg sm:text-xl font-bold text-violet-950">
          <div className="aspect-[3/2] w-5 sm:w-6 md:w-7 animate-wave origin-left">
            <Image
              src="/mmflag.svg"
              alt="Myanmar Flag"
              fill
              className="object-contain"
            />
          </div>
          Win Thant Tin Han
        </div>

        {/* Desktop Menu */}
        <div className="hidden gap-6 md:flex">
          {navItems.map(({ label, href }) => (
            <Link
              key={href}
              href={href}
              className="group relative inline-block text-sm font-medium text-slate-800 transition-colors duration-200"
            >
              <span className="relative">
                {label}
                <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-black transition-all duration-300 group-hover:w-full"></span>
              </span>
            </Link>
          ))}
        </div>

        {/* Mobile menu button */}
        <button
          onClick={handleToggle}
          className="focus:outline-none md:hidden"
          aria-label="Toggle Menu"
        >
          <svg
            className="h-6 w-6 text-[#f2b544]"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {menuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="space-y-2 bg-[#0a192f] px-4 pb-4 md:hidden">
          {navItems.map(({ label, href }) => (
            <Link
              key={href}
              href={href}
              className="block font-centra text-white transition-colors duration-200 hover:text-[#f2b544]"
              onClick={() => setMenuOpen(false)}
            >
              {label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
};

export default Navbar;
