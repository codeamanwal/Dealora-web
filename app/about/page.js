'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 }
  }
}

export default function AboutPage() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-50 via-purple-50/60 to-cyan-50/70 py-12 text-slate-900">

      {/* ambient blobs */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 -left-32 h-[520px] w-[520px] rounded-full bg-purple-300/25 blur-3xl" />
        <div className="absolute top-24 -right-32 h-[520px] w-[520px] rounded-full bg-cyan-300/25 blur-3xl" />
        <div className="absolute bottom-32 left-1/3 h-[420px] w-[420px] rounded-full bg-violet-300/20 blur-3xl" />
      </div>

      <div className="relative z-10 space-y-20 px-4 sm:px-6 lg:px-12">

        {/* HERO */}
        <div className="mb-16 w-full max-w-full">
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-brand-accent">
            About Dealora
          </p>

          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-slate-900">
            Built for users who never want to miss a reward again.
          </h1>

          <p className="mt-5 text-lg leading-relaxed text-slate-600">
            Dealora exists to remove friction from how everyday users discover, redeem,
            and track rewards. Today, coupons live in multiple apps, SMS inboxes,
            screenshots, emails, and browser tabs. Important offers get buried or
            expire before they are used.
          </p>
        </div>

        {/* MISSION + WHY */}
        <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-2">
          <motion.div
            whileHover={{ y: -6 }}
            className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white/80 p-8 backdrop-blur shadow-[0_20px_60px_rgba(2,6,23,0.08)]"
          >
            <div className="absolute -top-10 -right-10 h-40 w-40 rounded-full bg-purple-200/25 blur-3xl" />
            <div className="relative">
              <div className="inline-flex rounded-full bg-purple-100 px-4 py-1.5 text-xl font-medium text-purple-700">
                Our Mission
              </div>
              <p className="mt-6 text-lg leading-relaxed text-slate-700">
                Our mission is to become the single source of truth for your savings
                and rewards. Dealora aims to centralise every live coupon, cashback,
                and offer you are eligible for, and make it instantly redeemable.
              </p>
            </div>
          </motion.div>

          <motion.div
            whileHover={{ y: -6 }}
            className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white/80 p-8 backdrop-blur shadow-[0_20px_60px_rgba(2,6,23,0.08)]"
          >
            <div className="absolute -bottom-10 -left-10 h-40 w-40 rounded-full bg-cyan-200/25 blur-3xl" />
            <div className="relative">
              <div className="inline-flex rounded-full bg-amber-100 px-4 py-1.5 text-xl font-medium text-amber-700">
                Why We Built Dealora
              </div>
              <p className="mt-6 text-lg leading-relaxed text-slate-700">
                The rewards ecosystem is fragmented. Individual apps run excellent
                offers, but users rarely see all of them in one view. The result is
                lost value for both users and partners. Dealora bridges this gap with
                a clean, unified interface.
              </p>
            </div>
          </motion.div>
        </div>

        {/* WHAT MAKES US DIFFERENT */}
        <div className="mx-auto max-w-4xl">
          <h2 className="text-3xl font-semibold tracking-tight">
            What makes Dealora different
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            We're reimagining how rewards and coupons should work in a mobile-first world.
          </p>

          <div className="mt-12 space-y-10">
            {[
              {
                title: "Real-time Coupon Aggregation",
                description: "Automatically pulls live coupons and offers from your connected apps and accounts.",
                icon: "🔄"
              },
              {
                title: "Unified Dashboard",
                description: "See all available offers in one place, organized by category and expiration date.",
                icon: "📊"
              },
              {
                title: "Smart Notifications",
                description: "Get alerts for expiring offers and personalized recommendations.",
                icon: "🔔"
              },
              {
                title: "Privacy First",
                description: "Your data stays on your device. We never sell or share your personal information.",
                icon: "🔒"
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={fadeIn}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="flex gap-4"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/80 text-xl shadow-sm">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-lg font-medium">{item.title}</h3>
                  <p className="mt-1 text-slate-600">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* VISION */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative mx-auto max-w-4xl overflow-hidden rounded-3xl border border-slate-200 bg-white/80 p-10 backdrop-blur shadow-[0_30px_90px_rgba(2,6,23,0.10)]"
        >
          <div className="absolute -top-10 -right-10 h-40 w-40 rounded-full bg-purple-200/25 blur-3xl" />
          <div className="absolute -bottom-10 -left-10 h-40 w-40 rounded-full bg-cyan-200/25 blur-3xl" />

          <div className="relative">
            <h2 className="text-2xl font-semibold">Our Vision</h2>
            <p className="mt-4 text-slate-700">
              Over the next one to two years, the vision for Dealora is to become the most trusted rewards layer for consumers and brands in our core markets.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {[
                "Onboard more categories and partner apps for deeper coverage.",
                "Expand cashback intelligence and savings insights for users.",
                "Provide brands with privacy-safe, aggregated insights on redemption.",
                "Maintain a sharp focus on user trust, control, and data security."
              ].map((item, i) => (
                <div key={i} className="flex gap-3">
                  <div className="mt-2 h-1.5 w-1.5 rounded-full bg-brand-accent" />
                  <p className="text-slate-700">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight">
            Ready to simplify your rewards?
          </h2>
          <p className="mt-4 text-lg text-slate-700">
            Join thousands of users who are already saving time and money with Dealora.
          </p>

          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/signup"
              className="rounded-full bg-brand-accent px-7 py-3 text-sm font-medium text-white shadow hover:bg-brand-accent/90"
            >
              Get Started for Free
            </Link>

            <Link
              href="/how-it-works"
              className="text-sm font-medium text-slate-700 hover:text-slate-900"
            >
              Learn how it works →
            </Link>
          </div>
        </div>

      </div>
    </section>
  )
}