"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-30 border-b border-slate-200/80 bg-white/80 backdrop-blur">
      <nav className="flex w-full items-center justify-between px-4 py-3 sm:px-6 lg:px-12">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 -ml-2 sm:-ml-4">
          <Image
            src="/dealora-logo.png"
            alt="Dealora logo"
            width={140}
            height={40}
            priority
            className="h-8 w-auto"
          />
        </Link>

        {/* Desktop menu */}
        <div className="hidden items-center gap-6 text-sm text-slate-700 md:flex">
          <Link href="/features" className="hover:text-brand-accent">
            Features
          </Link>
          <Link href="/how-it-works" className="hover:text-brand-accent">
            How It Works
          </Link>
          <Link href="/about" className="hover:text-brand-accent">
            About
          </Link>
          <Link href="/faq" className="hover:text-brand-accent">
            FAQ
          </Link>
          <Link
            href="/contact"
            className="rounded-full bg-brand-gradient px-4 py-1.5 text-xs font-medium text-white shadow-soft-glow hover:brightness-110"
          >
            Contact
          </Link>
        </div>

        {/* Mobile button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-slate-700"
          aria-label="Toggle menu"
        >
          ☰
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="border-t border-slate-200 bg-white md:hidden">
          <div className="flex flex-col gap-4 px-4 py-4 text-sm text-slate-700">
            <Link href="/features" onClick={() => setMenuOpen(false)}>
              Features
            </Link>
            <Link href="/how-it-works" onClick={() => setMenuOpen(false)}>
              How It Works
            </Link>
            <Link href="/about" onClick={() => setMenuOpen(false)}>
              About
            </Link>
            <Link href="/faq" onClick={() => setMenuOpen(false)}>
              FAQ
            </Link>
            <Link
              href="/contact"
              onClick={() => setMenuOpen(false)}
              className="font-medium text-brand-accent"
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}