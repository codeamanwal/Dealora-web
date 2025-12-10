import "./globals.css"
import Link from "next/link"
import Image from "next/image"

export const metadata = {
  title: {
    default: "Dealora – Unlock Rewards. Save Smarter.",
    template: "%s | Dealora",
  },
  description:
    "Dealora is a smart coupon aggregation and cashback app that pulls all your rewards into a single, clean dashboard.",
  openGraph: {
    title: "Dealora – Unlock Rewards. Save Smarter.",
    description:
      "Discover, redeem, and track all your coupons and cashback in one place with Dealora.",
    url: "https://dealora.app",
    siteName: "Dealora",
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-slate-50 text-slate-900">
        <div className="flex min-h-screen flex-col">
          <header className="sticky top-0 z-30 border-b border-slate-200/80 bg-white/80 backdrop-blur">
            <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
              <Link href="/" className="flex items-center gap-2">
                <Image
                  src="/dealora-logo.png"
                  alt="Dealora logo"
                  width={140}
                  height={40}
                  priority
                  className="h-8 w-auto"
                />
              </Link>

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
                  className="rounded-full bg-brand-gradient px-4 py-1.5 text-xs font-medium text-slate-950 shadow-soft-glow hover:brightness-110"
                >
                  Contact
                </Link>
              </div>
            </nav>
          </header>

          <main className="flex-1">{children}</main>

          <footer className="border-t border-slate-200 bg-white">
            <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-8 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between sm:px-6">
              <p>
                © {new Date().getFullYear()} Dealora. All rights reserved.
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <Link href="/privacy-policy" className="hover:text-slate-900">
                  Privacy Policy
                </Link>
                <Link href="/terms" className="hover:text-slate-900">
                  Terms of Use
                </Link>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  )
}
