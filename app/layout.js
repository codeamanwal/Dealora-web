import "./globals.css"
import Header from "./components/Header"
import Link from "next/link"
import Image from "next/image"

export const metadata = {
  title: {
    default: "Dealora – Unlock Rewards. Save Smarter.",
    template: "%s | Dealora",
  },
  description:
    "Dealora is a smart coupon aggregation and cashback app that pulls all your rewards into a single, clean dashboard.",
  icons: {
    icon: '/favicon.ico',
  },
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
          <Header />

          <main className="flex-1">{children}</main>

          <footer className="border-t border-slate-200 bg-white">
            <div className="w-full px-4 py-12 text-sm text-slate-600 sm:px-6 lg:px-12">
              <div className="grid gap-10 md:grid-cols-[1fr_auto_auto] md:items-start">
                <div>
                  <Link href="/" className="inline-flex items-center">
                    <Image
                      src="/dealora-logo.png"
                      alt="Dealora logo"
                      width={140}
                      height={40}
                      className="h-8 w-auto"
                    />
                  </Link>
                  <p className="mt-2 max-w-sm text-sm leading-relaxed text-slate-600">
                    Unlock rewards, redeem coupons, and track cashback from one clean dashboard.
                  </p>
                </div>

                <div className="md:justify-self-end">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                    Explore
                  </p>
                  <div className="mt-3 flex flex-col gap-2 text-sm">
                    <Link href="/features" className="hover:text-slate-900">
                      Features
                    </Link>
                    <Link href="/how-it-works" className="hover:text-slate-900">
                      How It Works
                    </Link>
                    <Link href="/about" className="hover:text-slate-900">
                      About
                    </Link>
                    <Link href="/faq" className="hover:text-slate-900">
                      FAQ
                    </Link>
                  </div>
                </div>

                <div className="md:justify-self-end">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                    Contact
                  </p>
                  <div className="mt-3 flex flex-col gap-2 text-sm">
                    <Link href="/contact" className="hover:text-slate-900">
                      Contact page
                    </Link>
                    <a href="mailto:support@dealora.co.in" className="hover:text-slate-900">
                      support@dealora.co.in
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-10 flex flex-col gap-3 border-t border-slate-200 pt-6 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
                <p>© {new Date().getFullYear()} Dealora. All rights reserved.</p>
                <div className="flex flex-wrap items-center gap-4">
                  <Link href="/privacy-policy" className="hover:text-slate-900">
                    Privacy Policy
                  </Link>
                  <Link href="/terms" className="hover:text-slate-900">
                    Terms of Use
                  </Link>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  )
}