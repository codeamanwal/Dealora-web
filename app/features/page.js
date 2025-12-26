'use client'

import { motion } from "framer-motion"
import { useState } from "react"

export default function FeaturesPage() {
  const [activeIndex, setActiveIndex] = useState(null)

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-50 via-purple-50/60 to-cyan-50/70 text-slate-900 overflow-hidden">
      {/* ambient blobs */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 -left-24 h-[520px] w-[520px] rounded-full bg-purple-300/25 blur-3xl" />
        <div className="absolute top-40 -right-24 h-[520px] w-[520px] rounded-full bg-cyan-300/25 blur-3xl" />
        <div className="absolute bottom-24 left-1/3 h-[420px] w-[420px] rounded-full bg-violet-300/20 blur-3xl" />
      </div>

      {/* top fade */}
      <div
        aria-hidden
        className="pointer-events-none absolute top-0 left-0 right-0 h-0
                   bg-gradient-to-b from-slate-50/100 via-slate-50/70 to-transparent z-10"
      />

      {/* Header */}
      <section className="relative w-full px-4 py-12 sm:px-6 lg:px-12 z-20">
        <div className="w-full mb-16 max-w-full">
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-brand-accent">
            Features
          </p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-slate-900">
            Everything you need to keep rewards under control.
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-slate-600">
            Dealora is built as a focused companion app that sits above your daily spending stack. Each feature is designed to work quietly in the background while staying one tap away when you need it.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 ">
          {/* Coupon Aggregation */}
          <motion.div
            whileHover={{ y: -6 }}
            className="md:col-span-2 bg-white/95 backdrop-blur-sm rounded-2xl p-4 border border-slate-200 hover:shadow-lg transition-all"
          >
          
              <div className="w-12 h-12 flex items-center justify-center">
                <img src="/voucher.png" alt="Coupon icon" className="w-12 h-12" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900">
                Coupon aggregation
              </h3>
              <p className="text-sm text-slate-600">
                Pull live coupons and offers from supported apps into one central dashboard instead of juggling multiple sources.
              </p>
            {/* <div className="absolute -top-20 -right-20 w-64 h-64 bg-violet-200/30 blur-3xl rounded-full" /> */}
          </motion.div>

          {/* In-App Dashboard */}
          <motion.div
            whileHover={{ y: -6 }}
            className="md:row-span-1 bg-white/95 backdrop-blur-sm rounded-2xl p-4 border border-slate-200 hover:shadow-lg transition-all"
          >
            <div className="w-12 h-12 flex items-center justify-center">
              <img src="/data.png" alt="dashboard icon" className="w-12 h-12" />
            </div>
            <h3 className="text-lg font-semibold text-slate-900">
              In-app dashboard
            </h3>
            <p className="text-sm text-slate-600">
              Track coupons, usage, and savings in one focused view.
            </p>

            {/* <div className="mt-8 space-y-3">
              {[40, 65, 50, 85, 60].map((w, i) => (
                <div key={i} className="h-2 bg-slate-100 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-violet-400 transition-all duration-700"
                    style={{ width: `${w}%` }}
                  />
                </div>
              ))}
            </div> */}

            {/* <div className="absolute top-0 right-0 w-72 h-72 bg-violet-500/30 blur-[100px]" /> */}
          </motion.div>

          {/* Cashback Tracking */}
          <motion.div
            whileHover={{ y: -6 }}
            className="bg-white/95 backdrop-blur-sm rounded-2xl p-4 border border-slate-200 hover:shadow-lg transition-all"
          >
            {/* <div className="flex justify-between mb-4"> */}
              <div className="w-12 h-12 flex items-center justify-center">
                <img src="/rupee.png" alt="package icon" className="w-12 h-12" />
              </div>
            {/* </div> */}
            <h4 className="text-lg font-semibold text-slate-900">
              Cashback tracking
            </h4>
            <p className="text-sm text-slate-600">
              Track pending and confirmed cashback in real time.
            </p>
          </motion.div>

          {/* Smart Categorisation */}
          <motion.div
            whileHover={{ y: -6 }}
            className="bg-white/95 backdrop-blur-sm rounded-2xl p-4 border border-slate-200 hover:shadow-lg transition-all"
          >
            <div className="w-12 h-12 flex items-center justify-center">
              <img src="/subfolder.png" alt="options icon" className="w-12 h-12" />
            </div>
            <h4 className="text-lg font-semibold text-slate-900">
              Smart categorisation
            </h4>
            <p className="text-sm text-slate-600">
              Organised by brand, category, and expiry.
            </p>
            {/* <div className="flex flex-wrap gap-2">
              {["Shopping", "Travel", "Food"].map(tag => (
                <span key={tag} className="text-xs px-3 py-1 bg-slate-100 rounded-full text-slate-600">
                  {tag}
                </span>
              ))}
            </div> */}
          </motion.div>

          {/* Auto Redirection */}
          <motion.div
            whileHover={{ y: -6 }}
            className="bg-white/95 backdrop-blur-sm rounded-2xl p-4 border border-slate-200 hover:shadow-lg transition-all"
          >
            <div className="w-12 h-12 flex items-center justify-center">
              <img src="/redirect.png" alt="redirection icon" className="w-12 h-12" />
            </div>
            <h4 className="text-lg font-semibold text-slate-900">
              Auto redirection
            </h4>
            <p className="text-sm text-slate-600">
              Jump directly to the correct app or website to redeem the deal.
            </p>
          </motion.div>
          {/* Multi-App Integration */}
          <motion.div
            whileHover={{ y: -6 }}
            className="md:col-span-2 bg-white/95 backdrop-blur-sm rounded-2xl p-4 border border-slate-200 hover:shadow-lg transition-all"
          >
            <div className="w-12 h-12 flex items-center justify-center">
              <img src="/data-integration.png" alt="integration icon" className="w-12 h-12" />
            </div>
            <h4 className="text-lg font-semibold text-slate-900">
              Multi-app integration
            </h4>
            <p className="text-sm text-slate-600">
              Connect shopping, travel, food, and payments apps so rewards surface automatically.
            </p>
          </motion.div>


          {/* Saved Coupons */}
          <motion.div
            whileHover={{ y: -6 }}
            className="bg-white/95 backdrop-blur-sm rounded-2xl p-4 border border-slate-200 hover:shadow-lg transition-all"
          >
            <div className="w-12 h-12 flex items-center justify-center">
              <img src="/mobile-coupon.png" alt="saved coupon icon" className="w-12 h-12" />
            </div>
            <h4 className="text-lg font-semibold text-slate-900">
              Saved coupons
            </h4>
            <p className="text-sm text-slate-600">
              Bookmark deals and use them later.
            </p>
          </motion.div>

          {/* Secure Sign-in */}
          <motion.div
            whileHover={{ y: -6 }}
            className="bg-white/95 backdrop-blur-sm rounded-2xl p-4 border border-slate-200 hover:shadow-lg transition-all"
          >
            <div className="w-12 h-12 flex items-center justify-center">
              <img src="/log-in.png" alt="secure log in icon" className="w-12 h-12" />
            </div>
            <h4 className="text-lg font-semibold text-slate-900">
              Secure sign-in
            </h4>
            <p className="text-sm text-slate-600">
              Privacy-first authentication and data protection.
            </p>
          </motion.div>

          {/* Real-time Sync */}
          <motion.div
            whileHover={{ y: -6 }}
            className="bg-white/95 backdrop-blur-sm rounded-2xl p-4 border border-slate-200 hover:shadow-lg transition-all"
          >
            <div className="w-12 h-12 flex items-center justify-center">
              <img src="/refresh.png" alt="real time sync icon" className="w-12 h-12" />
            </div>
            <h4 className="text-lg font-semibold text-slate-900">
              Real-time sync
            </h4>
            <p className="text-sm text-slate-600">
              Rewards update instantly across devices.
            </p>
          </motion.div>
        </div>
      </section>

      {/* bottom fade */}
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-0 left-0 right-0 h-28
                   bg-gradient-to-t from-slate-50/100 via-slate-50/70 to-transparent z-10"
      />
    </div>
  )
}