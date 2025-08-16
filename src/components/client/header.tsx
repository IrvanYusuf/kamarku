"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Search, Menu, Bell, ChevronDown, X } from "lucide-react";
import { useEffect, useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isCategoryDropdownOpen, setIsCategoryDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const categories = [
    { name: "Web Development", href: "/category/web-development" },
    { name: "Mobile Apps", href: "/category/mobile-apps" },
    { name: "UI/UX Design", href: "/category/ui-ux-design" },
    { name: "E-commerce", href: "/category/e-commerce" },
    { name: "Dashboard", href: "/category/dashboard" },
    { name: "Landing Pages", href: "/category/landing-pages" },
    { name: "Admin Templates", href: "/category/admin-templates" },
    { name: "Portfolio", href: "/category/portfolio" },
  ];

  return (
    <header
      className={`fixed left-0 right-0 z-50 transition-all duration-500 ease-in-out transform ${
        scrolled ? "top-6 scale-95" : "top-4 scale-100"
      }`}
    >
      <div className="container mx-auto px-4">
        <div
          className={`w-full transition-all duration-500 ease-in-out ${
            scrolled
              ? "bg-white/90 backdrop-blur-xl border border-gray-200/30 shadow-2xl shadow-emerald-500/20 rounded-2xl"
              : "bg-white/80 rounded-2xl backdrop-blur-md border-b border-gray-200/20"
          }`}
        >
          <div
            className={`px-4 transition-all duration-300 ${
              scrolled ? "py-3" : "py-4"
            }`}
          >
            <div className="flex items-center justify-between space-x-4">
              <div className="flex items-center space-x-8">
                <Link href="/" className="flex items-center space-x-2 group">
                  <svg
                    fill="none"
                    height="38"
                    viewBox="0 0 38 48"
                    width="38"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="m14.25 5c0 7.8701-6.37994 14.25-14.25 14.25v9.5h14.25v14.25h9.5c0-7.8701 6.3799-14.25 14.25-14.25v-9.5h-14.25v-14.25z"
                      fill="#16b364"
                    />
                  </svg>
                  <span className="text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent transition-all duration-300 group-hover:from-emerald-600 group-hover:to-emerald-500">
                    KamarKu
                  </span>
                </Link>
              </div>

              <div className="flex lg:items-center justify-end space-x-4 w-full">
                <nav className="hidden lg:flex space-x-8">
                  <Link
                    href="/"
                    className="relative text-gray-600 hover:text-gray-900 transition-all duration-200 font-medium group hover:scale-105"
                  >
                    Beranda
                    <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-emerald-500 transition-all duration-300 group-hover:w-full"></div>
                  </Link>
                  <Link
                    href="/"
                    className="relative text-gray-600 hover:text-gray-900 transition-all duration-200 font-medium group hover:scale-105"
                  >
                    Pilih Kamar
                    <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-emerald-500 transition-all duration-300 group-hover:w-full"></div>
                  </Link>
                  <Link
                    href="/"
                    className="relative text-gray-600 hover:text-gray-900 transition-all duration-200 font-medium group hover:scale-105"
                  >
                    Testimoni
                    <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-emerald-500 transition-all duration-300 group-hover:w-full"></div>
                  </Link>
                  <Link
                    href="/"
                    className="relative text-gray-600 hover:text-gray-900 transition-all duration-200 font-medium group hover:scale-105"
                  >
                    Tentang Kami
                    <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-emerald-500 transition-all duration-300 group-hover:w-full"></div>
                  </Link>
                </nav>
              </div>

              {/* Mobile Menu Button */}
              <Button
                variant="ghost"
                size="sm"
                className="lg:hidden"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="hamburger-menu"
              >
                {isMenuOpen ? (
                  <X className="w-5 h-5" />
                ) : (
                  <Menu className="w-5 h-5" />
                )}
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden overflow-hidden`}>
        <div className="container mx-auto px-4">
          <nav
            className={`p-6 w-full ${
              isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
            } rounded-2xl border-gray-200/50 transition-all duration-300 bg-white/95 backdrop-blur-md space-y-1`}
          >
            <Link
              href="/"
              className="block py-3 px-4 text-gray-700 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg transition-all duration-200"
              onClick={() => setIsMenuOpen(false)}
            >
              Beranda
            </Link>
            <Link
              href="/"
              className="block py-3 px-4 text-gray-700 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg transition-all duration-200"
              onClick={() => setIsMenuOpen(false)}
            >
              Pilih Kamar
            </Link>
            <Link
              href="/"
              className="block py-3 px-4 text-gray-700 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg transition-all duration-200"
              onClick={() => setIsMenuOpen(false)}
            >
              Testimoni
            </Link>
            <Link
              href="/"
              className="block py-3 px-4 text-gray-700 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg transition-all duration-200"
              onClick={() => setIsMenuOpen(false)}
            >
              Tentang Kami
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
