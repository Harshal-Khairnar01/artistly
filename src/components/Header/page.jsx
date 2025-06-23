"use client";
import Link from "next/link";
import React, { useState } from "react";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";

const navItems = [
  { name: "Home", href: "/" },
  { name: "Browse Artists", href: "/artists" },
  { name: "Join as Artist", href: "/onboard" },
  { name: "Manager Dashboard", href: "/manager" },
];

const Header = () => {
  const pathname = usePathname();

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <header className="bg-gray-100 shadow sticky top-0 z-50 font-sans">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center relative">
        <h1 className="text-2xl font-bold text-cyan-600 tracking-wide rounded-md">
          Artistly
        </h1>

        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-gray-700 hover:text-cyan-600  rounded-md p-2 transition-transform duration-300 transform outline-none"
          >
            {isMenuOpen ? (
              <HiOutlineX className="w-6 h-6 text-gray-700 hover:text-cyan-600 transition-transform duration-300" />
            ) : (
              <HiOutlineMenu className="w-6 h-6 text-gray-700 hover:text-cyan-600 transition-transform duration-300" />
            )}
          </button>
        </div>

        <nav className="hidden md:flex gap-6 text-gray-700 font-medium">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={clsx(
                "transition-colors p-2 rounded-md",
                pathname === item.href
                  ? "text-cyan-600 font-semibold"
                  : "hover:text-cyan-600"
              )}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {isMenuOpen && (
          <nav className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg py-2 flex flex-col items-center  rounded-b-lg">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className={clsx(
                  "block w-full text-center py-3 font-medium transition-colors rounded-md",
                  pathname === item.href
                    ? "text-cyan-600 bg-gray-100"
                    : "text-gray-700 hover:text-cyan-600 hover:bg-gray-100"
                )}
              >
                {item.name}
              </Link>
            ))}
          </nav>
        )}
      </div>

      
    </header>
  );
};

export default Header;
