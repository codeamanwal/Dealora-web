'use client'

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { useState } from "react"

const heroVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
}

const sectionVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

const features = [
  {
    title: "Unified Coupon Dashboard",
    description:
      "See all your coupons, rewards, and cashback in a single, clean view instead of switching between apps.",
  },
  {
    title: "Auto-Fetch Rewards",
    description:
      "Dealora pulls eligible coupons and offers from supported apps so you never miss a deal.",
  },
  {
    title: "Instant Redemption",
    description:
      "Tap once to copy codes or jump straight into the right app or website to redeem.",
  },
  {
    title: "Smart Categorisation",
    description:
      "Organised by brands, categories, and expiry so your most important coupons stay on top.",
  },
  {
    title: "Cashback Tracking",
    description:
      "Track earned, pending, and confirmed cashback across sources inside Dealora.",
  },
  {
    title: "Secure Sign-In",
    description:
      "Privacy-first authentication with modern security best practices.",
  },
]

const appScreens = [
  "Home dashboard",
  "All coupons",
  "Redeem flow",
  "Linked apps",
  "Cashback overview",
  "Saved coupons",
]

export default function HomePage() {
  const [isSwapped, setIsSwapped] = useState(false)

  const primaryPhone = isSwapped
    ? {
        key: "offers",
        src: "/mockups/dealora-offers.png",
        alt: "Dealora offers and coupons screen",
        width: 280,
        height: 560,
      }
    : {
        key: "home",
        src: "/mockups/dealora-home.png",
        alt: "Dealora app home screen",
        width: 320,
        height: 640,
      }

  const secondaryPhone = isSwapped
    ? {
        key: "home",
        src: "/mockups/dealora-home.png",
        alt: "Dealora app home screen",
        width: 320,
        height: 640,
      }
    : {
        key: "offers",
        src: "/mockups/dealora-offers.png",
        alt: "Dealora offers and coupons screen",
        width: 280,
        height: 560,
      }

  return (
    <div className="bg-slate-50 text-slate-900">
      <motion.section
        initial="hidden"
        animate="visible"
        variants={heroVariants}
        className="relative overflow-hidden border-b border-slate-200 bg-gradient-to-b from-white via-slate-50 to-slate-100"
      >
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.12),_transparent_60%),_radial-gradient(circle_at_bottom,_rgba(124,58,237,0.12),_transparent_55%)]" />
        <div className="relative mx-auto flex max-w-6xl flex-col gap-10 px-4 pb-20 pt-16 sm:px-6 md:flex-row md:items-center md:pb-24 md:pt-20">
          <div className="flex-1 space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 text-xs text-slate-600 shadow-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-accent" />
              <span>Smart rewards hub for modern shoppers</span>
            </div>

            <h1 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
              Unlock Rewards.
              <span className="block bg-brand-gradient bg-clip-text text-transparent">
                Save Smarter.
              </span>
            </h1>

            <p className="max-w-xl text-sm leading-relaxed text-slate-600 sm:text-base">
              Dealora is a coupon aggregation and cashback app that pulls all your rewards
              across apps into one simple dashboard. Discover, redeem, and track every
              deal without the usual friction.
            </p>

            <div className="flex flex-wrap items-center gap-3">
              <Link
                href="#"
                className="rounded-full bg-brand-gradient px-5 py-2 text-sm font-medium text-slate-950 shadow-soft-glow hover:brightness-110"
              >
                Download on Google Play
              </Link>
              <Link
                href="#"
                className="rounded-full border border-slate-200 bg-white px-5 py-2 text-sm font-medium text-slate-900 hover:border-brand-accent/80 hover:text-brand-accent shadow-sm"
              >
                Download on App Store
              </Link>
            </div>

            <p className="text-xs text-slate-500">
              For business and partnership enquiries, visit the contact page.
            </p>

            <div className="mt-4 grid gap-3 text-xs text-slate-600 sm:grid-cols-3">
              <div className="rounded-lg border border-slate-200 bg-white px-3 py-2 shadow-sm">
                <p className="font-medium text-slate-900">All rewards in one place</p>
                <p className="mt-1 text-[11px] text-slate-500">
                  Centralise coupons, offers, and cashback from supported apps.
                </p>
              </div>
              <div className="rounded-lg border border-slate-200 bg-white px-3 py-2 shadow-sm">
                <p className="font-medium text-slate-900">Verified coupons only</p>
                <p className="mt-1 text-[11px] text-slate-500">
                  Focus on live, high-intent offers instead of generic promo codes.
                </p>
              </div>
              <div className="rounded-lg border border-slate-200 bg-white px-3 py-2 shadow-sm">
                <p className="font-medium text-slate-900">Fast app redirection</p>
                <p className="mt-1 text-[11px] text-slate-500">
                  Jump straight into the right app when a deal is app-linked.
                </p>
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="flex-1"
          >
            <div className="relative mx-auto flex h-[360px] w-full max-w-[280px] items-center justify-center sm:h-[420px] sm:max-w-[320px]">
              {[primaryPhone, secondaryPhone].map((phone, index) => (
                <motion.button
                  key={phone.key}
                  type="button"
                  onClick={() => setIsSwapped((prev) => !prev)}
                  layout
                  transition={{ type: "spring", stiffness: 320, damping: 28 }}
                  className={
                    index === 0
                      ? "relative z-10 h-full w-[72%] rounded-[2rem] border border-slate-200 bg-white/90 p-2 shadow-soft-glow backdrop-blur-sm"
                      : "absolute -right-6 bottom-4 h-[75%] w-[62%] rounded-[2rem] border border-slate-200 bg-white/90 p-2 shadow-soft-glow backdrop-blur-sm"
                  }
                  aria-label={phone.alt}
                >
                  <div className="h-full w-full overflow-hidden rounded-[1.4rem] bg-slate-100">
                    <Image
                      src={phone.src}
                      alt={phone.alt}
                      width={phone.width}
                      height={phone.height}
                      className="h-full w-full object-contain"
                    />
                  </div>
                </motion.button>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.section>

      <motion.section
        id="what-is-dealora"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
        variants={sectionVariants}
        className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16"
      >
        <div className="grid gap-8 md:grid-cols-[minmax(0,_1.2fr)_minmax(0,_1fr)] md:items-center">
          <div>
            <h2 className="text-xl font-semibold tracking-tight sm:text-2xl">
              What is Dealora?
            </h2>
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-slate-600 sm:text-base">
              Dealora is a smart rewards layer for your daily spending. It connects with
              supported apps and services, pulls live coupons and cashback offers, and
              surfaces them in one place so you can redeem in a tap.
            </p>
            <p className="mt-3 max-w-xl text-sm leading-relaxed text-slate-600 sm:text-base">
              No more juggling screenshots, copied codes, or searching through emails.
              Dealora keeps every relevant offer at your fingertips.
            </p>
          </div>
          <div className="space-y-3 rounded-2xl border border-slate-200 bg-white p-4 text-xs text-slate-600 shadow-sm">
            <div className="flex items-center justify-between">
              <span>All rewards, centralised</span>
              <span className="rounded-full bg-emerald-100 px-2 py-0.5 text-[10px] text-emerald-700">
                Benefit
              </span>
            </div>
            <div className="h-px bg-gradient-to-r from-slate-200 via-slate-300 to-slate-200" />
            <ul className="space-y-1.5 text-[11px] leading-relaxed">
              <li>Single dashboard for coupons, rewards, and cashback.</li>
              <li>Auto-fetch logic for supported partners and apps.</li>
              <li>Works alongside your existing shopping and payment apps.</li>
              <li>Designed for both users and partner brands to win together.</li>
            </ul>
          </div>
        </div>
      </motion.section>

      <motion.section
        id="how-it-works"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
        variants={sectionVariants}
        className="border-y border-slate-200 bg-slate-50"
      >
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
          <div className="max-w-3xl">
            <h2 className="text-xl font-semibold tracking-tight sm:text-2xl">
              How Dealora works
            </h2>
            <p className="mt-3 text-sm text-slate-600 sm:text-base">
              A simple, guided flow from sign-up to redemption and tracking.
            </p>
          </div>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
              <div className="mb-3 inline-flex h-7 w-7 items-center justify-center rounded-full bg-brand-gradient text-xs font-semibold text-slate-950">
                1
              </div>
              <h3 className="text-sm font-semibold">Sign up and connect apps</h3>
              <p className="mt-2 text-xs text-slate-600">
                Sign up using email or Google. Optionally link supported apps so
                Dealora can start pulling your live coupons and rewards.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
              <div className="mb-3 inline-flex h-7 w-7 items-center justify-center rounded-full bg-brand-gradient text-xs font-semibold text-slate-950">
                2
              </div>
              <h3 className="text-sm font-semibold">Discover and redeem</h3>
              <p className="mt-2 text-xs text-slate-600">
                Browse your unified dashboard, filter by category, and tap on a coupon
                to copy the code or jump into the relevant app or web page.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
              <div className="mb-3 inline-flex h-7 w-7 items-center justify-center rounded-full bg-brand-gradient text-xs font-semibold text-slate-950">
                3
              </div>
              <h3 className="text-sm font-semibold">Track savings</h3>
              <p className="mt-2 text-xs text-slate-600">
                Saved coupons, used offers, and cashback earnings are tracked in-app
                so you always know how much you have saved with Dealora.
              </p>
            </div>
          </div>
        </div>
      </motion.section>

      <motion.section
        id="features"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionVariants}
        className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16"
      >
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="text-xl font-semibold tracking-tight sm:text-2xl">
              Key features
            </h2>
            <p className="mt-3 max-w-2xl text-sm text-slate-600 sm:text-base">
              Everything in Dealora is designed to reduce friction and maximise the
              value you get from every coupon and reward.
            </p>
          </div>
          <Link
            href="/features"
            className="text-xs font-medium text-brand-accent hover:text-brand-accent/80"
          >
            View all features
          </Link>
        </div>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-2xl border border-slate-200 bg-white p-4 text-xs text-slate-600 shadow-sm"
            >
              <h3 className="text-sm font-semibold text-slate-900">
                {feature.title}
              </h3>
              <p className="mt-2 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </motion.section>

      <motion.section
        id="app-preview"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionVariants}
        className="border-y border-slate-200 bg-slate-50"
      >
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="text-xl font-semibold tracking-tight sm:text-2xl">
                App preview
              </h2>
              <p className="mt-3 max-w-xl text-sm text-slate-600 sm:text-base">
                A focused mobile experience with a dashboard-first design.
              </p>
            </div>
            <p className="text-[11px] text-slate-500">
              Final UI and screens may change as the product evolves.
            </p>
          </div>
          <div className="mt-6 overflow-x-auto pb-2">
            <div className="flex min-w-max gap-4">
              {appScreens.map((label) => (
                <div
                  key={label}
                  className="flex h-64 w-40 flex-col justify-between rounded-3xl border border-slate-200 bg-gradient-to-b from-white via-slate-50 to-slate-100 p-3 text-[11px] text-slate-700 shadow-soft-glow"
                >
                  <div>
                    <div className="h-1.5 w-10 rounded-full bg-slate-200" />
                    <p className="mt-4 text-xs font-medium text-slate-900">{label}</p>
                    <p className="mt-2 text-[10px] text-slate-500">
                      Placeholder for app screen preview. Replace with final product
                      screenshots.
                    </p>
                  </div>
                  <div className="space-y-1 text-[10px] text-slate-500">
                    <div className="h-1 w-12 rounded-full bg-slate-200" />
                    <div className="h-1 w-16 rounded-full bg-slate-300" />
                    <div className="h-1 w-10 rounded-full bg-slate-300" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.section>

      <motion.section
        id="download"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={sectionVariants}
        className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16"
      >
        <div className="relative overflow-hidden rounded-3xl border border-slate-800 bg-gradient-to-r from-brand-violet/90 via-brand-blue/90 to-brand-accent/90 px-5 py-8 text-slate-950 shadow-soft-glow sm:px-8">
          <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-slate-50/10" />
          <div className="absolute -bottom-10 right-8 h-28 w-28 rounded-full bg-slate-50/10" />
          <div className="relative flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="text-xl font-semibold tracking-tight sm:text-2xl">
                Ready to save smarter with Dealora?
              </h2>
              <p className="mt-2 max-w-xl text-sm text-slate-100/90">
                Download the app to centralise your coupons, auto-fetch new deals, and
                track every rupee you save.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <Link
                href="#"
                className="rounded-full bg-slate-950 px-5 py-2 text-sm font-medium text-slate-50 hover:bg-slate-900"
              >
                Google Play
              </Link>
              <Link
                href="#"
                className="rounded-full border border-slate-100/60 px-5 py-2 text-sm font-medium text-slate-950 hover:bg-slate-100/10"
              >
                App Store
              </Link>
              <Link
                href="/contact"
                className="text-xs font-medium text-slate-950/90 underline underline-offset-4"
              >
                Contact for partnerships
              </Link>
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  )
}
