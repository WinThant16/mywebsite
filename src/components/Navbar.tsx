"use client";

import { useState } from "react";
import Link from "next/link";
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
    { label: "Resume", href: "resume" },
  ];

  return (
    <header className="fixed left-0 top-0 z-50 w-full bg-slate-300 text-slate-800 shadow-md">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <div className="font-Georgia flex items-center gap-1.5 text-lg font-bold text-violet-950 sm:gap-2 sm:text-xl md:gap-3">
          <div className="animate-wave relative aspect-[3/2] w-5 origin-left sm:w-6 md:w-7">
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
        <div className="font-Georgia hidden gap-6 md:flex">
          {navItems.map(({ label, href }) => (
            <Link
              key={href}
              href={href}
              className="font-Georgia group relative inline-block text-sm font-medium text-slate-800 transition-all duration-200"
            >
              <span className="relative">
                {label}
                <span className="block h-px max-w-full scale-x-0 bg-current transition-transform duration-300 group-hover:scale-x-100" />
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
            className="h-6 w-6 text-zinc-900"
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
        <div className="font-Georgia space-y-2 bg-slate-300 px-4 pb-4 text-slate-800 md:hidden">
          {navItems.map(({ label, href }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setMenuOpen(false)}
              className="group block text-sm font-medium transition-colors duration-200"
            >
              <span className="relative inline-block">
                {label}
                <span className="block h-px max-w-full scale-x-0 bg-current transition-transform duration-300 group-hover:scale-x-100" />
              </span>
            </Link>
          ))}
        </div>
      )}
    </header>
  );
};

export default Navbar;
