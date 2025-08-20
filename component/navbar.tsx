"use client";

import { useEffect, useState } from "react";
import {
    Search,
    ShoppingCart,
    User,
    Menu,
    ChevronLeft,
    ChevronUp,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import Logo from "@/assets/Logo_White.png";

export default function Navbar() {
    const [show, setShow] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const [searchOpen, setSearchOpen] = useState(false);
  
    useEffect(() => {
      setShow(true);
      // Prevent scrolling when menu is open
      if (menuOpen) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "";
      }
      return () => {
        document.body.style.overflow = "";
      };
    }, [menuOpen]);
  
    return (
      <>
        {/* Navbar always rendered */}
        <nav
          className={`sticky top-0 z-30 bg-gray-400 text-white px-6 py-3 flex items-center
                      transition-transform duration-500 ease-out
                      ${show ? "translate-y-0" : "-translate-y-full"}
                  `}
        >
          {/* Left: Menu + Search (mobile) */}
          <div className="flex items-center gap-2 flex-1 md:flex-none">
            <div className="flex items-center gap-6 md:hidden">
              <button aria-label="Open menu" onClick={() => setMenuOpen(true)}>
                <Menu className="w-7 h-7" />
              </button>
              <button aria-label="Search" onClick={() => setSearchOpen(true)}>
                <Search className="w-6 h-6" />
              </button>
            </div>
          </div>
  
          {/* Center: Logo */}
          <div className="flex-1 flex justify-center md:justify-start">
            <Link href="/" className="flex items-center">
              <Image
                src={Logo}
                alt="EDELQUINN Logo"
                width={110}
                height={30}
                priority
              />
            </Link>
          </div>
  
          {/* Center: Navigation Links (desktop only) */}
          <div className="hidden md:flex gap-4 md:gap-10 text-lg font-light flex-1 justify-center">
            <Link href="/" className="hover:underline">
              Home
            </Link>
            <Link href="/products" className="hover:underline">
              Products
            </Link>
            <Link href="/about" className="hover:underline">
              About
            </Link>
          </div>
  
          <div className="flex gap-6 items-center flex-1 justify-end">
            {/* Desktop: Search */}
            <button
              aria-label="Search"
              onClick={() => setSearchOpen(true)}
              className="hidden md:block cursor-pointer"
            >
              <Search className="w-6 h-6" />
            </button>
            <Link href="/profile">
              <User className="w-6 h-6 cursor-pointer" />
            </Link>
            <Link href="/cart">
              <div className="relative cursor-pointer">
                <ShoppingCart className="w-6 h-7" />
                <span className="absolute top-0 left-5 w-2 h-2 bg-red-500 rounded-full" />
              </div>
            </Link>
          </div>
        </nav>
  
        {/* Search Panel with Blur Overlay (applies to all screens) */}
        <div
          className={`fixed inset-0 z-40 ${
            searchOpen ? "pointer-events-auto" : "pointer-events-none"
          }`}
        >
          {/* Blur Overlay */}
          <div
            className={`absolute inset-0 bg-black/20 backdrop-blur-[6px] transition-opacity duration-300 ${
              searchOpen ? "opacity-100" : "opacity-0"
            }`}
            onClick={() => setSearchOpen(false)}
            aria-label="Close search overlay"
          />
          {/* Slide-down Panel */}
          <div
            className={`absolute left-0 top-0 w-full transition-transform duration-500 ${
              searchOpen ? "translate-y-0" : "-translate-y-full"
            }`}
            style={{
              height: "30vh",
              background: "#fff",
              boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
            }}
          >
            <div className="flex flex-col h-full px-4 pt-6">
              <div className="flex items-center">
                <input
                  type="text"
                  placeholder="Find your style…"
                  className="flex-1 rounded bg-gray-100 px-4 py-2 outline-none text-black"
                />
                <button
                  aria-label="Close search"
                  onClick={() => setSearchOpen(false)}
                  className="ml-2 bg-gray-100 rounded-full w-8 h-8 flex items-center justify-center"
                >
                  <ChevronUp className="w-5 h-5 text-gray-500" />
                </button>
              </div>
              <div className="mt-4">
                <div className="text-sm text-gray-700 mb-2">
                  Resently Searched:
                </div>
                <div className="flex gap-3 flex-wrap">
                  <Link
                    href="/products?search=Party%20Dress"
                    className="border border-gray-300 rounded px-3 py-1 text-gray-700 text-sm bg-white hover:bg-gray-50 transition"
                  >
                    Party Dress
                  </Link>
                  <Link
                    href="/products?search=Corporate%20wears"
                    className="border border-gray-300 rounded px-3 py-1 text-gray-700 text-sm bg-white hover:bg-gray-50 transition"
                  >
                    Corporate wears
                  </Link>
                  <Link
                    href="/products?search=Shirts"
                    className="border border-gray-300 rounded px-3 py-1 text-gray-700 text-sm bg-white hover:bg-gray-50 transition"
                  >
                    Shirts
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
  
        {/* Overlay and Slide-in Menu */}
        <div
          className={`fixed inset-0 z-40 transition-opacity duration-500 ${
            menuOpen
              ? "pointer-events-auto opacity-100"
              : "pointer-events-none opacity-0"
          }`}
        >
          {/* Blur Overlay */}
          <div
            className="absolute inset-0 backdrop-blur-[8px] bg-black/300"
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu overlay"
          />
          {/* Slide-in Menu */}
          <div
            className={`absolute top-0 left-0 h-full w-4/5 max-w-xs bg-gray-400 text-white shadow-lg
                      transition-transform duration-500
                       ${menuOpen ? "translate-x-0" : "-translate-x-full"}
                     z-500
                 `}
          >
            <div className="flex items-center justify-between px-4 py-4 border-b border-white relative">
              <div className="flex-1 flex justify-start">
                <Link
                  href="/"
                  className="flex items-center"
                  onClick={() => (window.location.href = "/")}
                >
                  <Image
                    src={Logo}
                    alt="EDELQUINN Logo"
                    width={110}
                    height={30}
                    priority
                  />
                </Link>
              </div>
              <button
                aria-label="Close menu"
                onClick={() => setMenuOpen(false)}
                className="absolute right-0 top-1/2 flex items-center justify-center w-9 h-9 rounded-full bg-white shadow z-50"
                style={{ transform: "translateY(-40%) translateX(50%)" }}
              >
                <ChevronLeft className="w-6 h-6 text-gray-800" />
              </button>
            </div>
            <nav className="flex flex-col gap-0 p-2 pl-4 pr-2">
              <Link
                href="/"
                onClick={() => setMenuOpen(false)}
                className="hover:underline py-4"
              >
                Home
              </Link>
              <span className="h-px bg-white opacity-40" />
  
              <Link
                href="/products"
                onClick={() => setMenuOpen(false)}
                className="hover:underline py-4"
              >
                Products
              </Link>
              <span className="h-px bg-white opacity-40" />
  
              <Link
                href="/about"
                onClick={() => setMenuOpen(false)}
                className="hover:underline py-4"
              >
                About
              </Link>
              <span className="h-px bg-white opacity-40" />
  
              <Link
                href="/Category"
                onClick={() => setMenuOpen(false)}
                className="hover:underline py-4"
              >
                SHOP BY CATEGORY
              </Link>
              <span className="h-px bg-white opacity-40" />
  
              <Link
                href="/new-now"
                onClick={() => setMenuOpen(false)}
                className="hover:underline py-4"
              >
                NEW NOW
              </Link>
              <span className="h-px bg-white opacity-40" />
  
              <Link
                href="/casuals"
                onClick={() => setMenuOpen(false)}
                className="hover:underline py-4"
              >
                CASUALS
              </Link>
              <span className="h-px bg-white opacity-40" />
  
              <Link
                href="/corporate-wears"
                onClick={() => setMenuOpen(false)}
                className="hover:underline py-4"
              >
                CORPORATE WEARS
              </Link>
              <span className="h-px bg-white opacity-40" />
  
              <Link
                href="/african-designs"
                onClick={() => setMenuOpen(false)}
                className="hover:underline py-4"
              >
                AFRICAN DESIGNS
              </Link>
            </nav>
          </div>
        </div>
      </>
    );
}