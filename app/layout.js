import "./globals.css"
import Header from "./components/Header"
import Link from "next/link"

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
          <Header />

          <main className="flex-1">{children}</main>

          <footer className="border-t border-slate-200 bg-white">
            <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-8 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between sm:px-6">
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
          </footer>
        </div>
      </body>
    </html>
  )
}