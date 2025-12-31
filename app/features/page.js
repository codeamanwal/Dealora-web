'use client'

import { motion } from "framer-motion"
import Image from "next/image"

export default function FeaturesPage() {
  const highlightedFeatures = [
    {
      id: 1,
      title: "Coupon aggregation",
      description: "Pull live coupons and offers from supported apps into one central dashboard instead of juggling multiple sources.",
      icon: "/voucher.png",
      gradient: "from-purple-500 via-violet-600 to-purple-700",
      accentColor: "purple",
    },
    {
      id: 2,
      title: "Multi-app integration",
      description: "Connect shopping, travel, food, and payments apps so rewards surface automatically.",
      icon: "/data-integration.png",
      gradient: "from-emerald-500 via-teal-600 to-emerald-700",
      accentColor: "emerald",
    },
    {
      id: 3,
      title: "Real-time sync",
      description: "Rewards update instantly across devices, ensuring you always have the latest offers at your fingertips.",
      icon: "/refresh.png",
      gradient: "from-blue-500 via-blue-600 to-blue-700",
      accentColor: "blue",
    },
  ]

  const otherFeatures = [
    {
      title: "In-app dashboard",
      description: "Track coupons, usage, and savings in one focused view.",
      icon: "/data.png",
    },
    {
      title: "Cashback tracking",
      description: "Track pending and confirmed cashback in real time.",
      icon: "/rupee.png",
    },
    {
      title: "Smart categorisation",
      description: "Organised by brand, category, and expiry.",
      icon: "/subfolder.png",
    },
    {
      title: "Auto redirection",
      description: "Jump directly to the correct app or website to redeem the deal.",
      icon: "/redirect.png",
    },
    {
      title: "Saved coupons",
      description: "Bookmark deals and use them later.",
      icon: "/mobile-coupon.png",
    },
    {
      title: "Secure sign-in",
      description: "Privacy-first authentication and data protection.",
      icon: "/log-in.png",
    },
  ]

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

        {/* Highlighted Features - Top Section */}
        <div className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
            {highlightedFeatures.map((feature, index) => (
              <motion.div
                key={feature.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                whileHover={{ 
                  y: -12,
                  scale: 1.02,
                  transition: { type: "spring", stiffness: 300, damping: 20 }
                }}
                className="relative group"
              >
                {/* Gradient Background Card */}
                <div className={`relative h-full rounded-3xl bg-gradient-to-br ${feature.gradient} p-[2px] overflow-hidden`}>
                  <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-50" />
                  <div className="relative h-full bg-white/95 backdrop-blur-sm rounded-[1.35rem] p-8 flex flex-col">
                    {/* Animated gradient glow */}
                    <motion.div
                      className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-10 rounded-[1.35rem] transition-opacity duration-500`}
                      animate={{
                        backgroundPosition: ["0% 0%", "100% 100%"],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        repeatType: "reverse",
                      }}
                    />
                    
                    {/* Icon */}
                    <div className="w-12 h-12 flex items-center justify-center mb-6">
                      <img 
                        src={feature.icon} 
                        alt={`${feature.title} icon`} 
                        className="w-12 h-12 object-contain"
                      />
                    </div>

                    {/* Content */}
                    <h3 className="text-2xl font-bold text-slate-900 mb-3 relative z-10">
                      {feature.title}
                    </h3>
                    <p className="text-base leading-relaxed text-slate-600 relative z-10">
                      {feature.description}
                    </p>

                    {/* Decorative accent */}
                    <div className={`absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-br ${feature.gradient} opacity-5 rounded-tl-full blur-2xl`} />
                  </div>
                </div>

                {/* Outer glow effect */}
                <motion.div
                  className={`absolute -inset-1 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-30 rounded-3xl blur-xl -z-10 transition-opacity duration-500`}
                />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Other Features Grid */}
        <div>
          <h2 className="text-2xl font-semibold text-slate-900 mb-8 text-center">
            Additional Features
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -6, scale: 1.02 }}
                className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 border border-slate-200/60 hover:border-slate-300 hover:shadow-xl transition-all duration-300"
              >
                <div className="w-12 h-12 flex items-center justify-center mb-4">
                  <img 
                    src={feature.icon} 
                    alt={`${feature.title} icon`} 
                    className="w-12 h-12 object-contain"
                  />
                </div>
                <h4 className="text-lg font-semibold text-slate-900 mb-2">
                  {feature.title}
                </h4>
                <p className="text-sm leading-relaxed text-slate-600">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
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