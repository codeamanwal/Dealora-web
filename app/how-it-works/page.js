"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import {
  FiMail,
  FiLink,
  FiLayers,
  FiShoppingCart,
  FiCheckCircle,
  FiSave,
} from "react-icons/fi"

const steps = [
  {
    title: "Sign up via email or Google",
    description:
      "Create your Dealora account using email or a supported sign-in provider. Basic profile details help personalise your dashboard.",
  },
  {
    title: "Connect your favourite apps",
    description:
      "Link supported apps where you already earn coupons and cashback. This enables Dealora to start fetching your offers.",
  },
  {
    title: "See all coupons inside Dealora",
    description:
      "New and existing coupons are surfaced in a single, organised dashboard so you can browse without context switching.",
  },
  {
    title: "Tap on a coupon to redeem",
    description:
      "If a coupon is code-based, Dealora helps you copy or apply it on the right website. If it is app-linked, you get redirected.",
  },
  {
    title: "Redeem and track usage",
    description:
      "Once you use a coupon, Dealora keeps track of the redemption outcome and updates your dashboard.",
  },
  {
    title: "Manage and save for later",
    description:
      "Pin important coupons, archive used ones, and keep an eye on cashback timelines from a single place.",
  },
]

export default function HowItWorksPage() {
  return (
    <section className="relative w-full bg-gradient-to-br from-slate-50 via-purple-50/60 to-cyan-50/70 pt-12 pb-40 text-slate-900 overflow-hidden">
      {/* background blobs */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 -left-24 h-[520px] w-[520px] rounded-full bg-purple-300/25 blur-3xl" />
        <div className="absolute top-40 -right-24 h-[520px] w-[520px] rounded-full bg-cyan-300/25 blur-3xl" />
        <div className="absolute bottom-20 left-1/3 h-[420px] w-[420px] rounded-full bg-violet-300/20 blur-3xl" />
      </div>

      {/* soft top fade */}
      <div
        aria-hidden
        className="pointer-events-none absolute top-0 left-0 right-0 h-0
                   bg-gradient-to-b from-slate-50/100 via-slate-50/70 to-transparent z-10"
      />

      {/* center spine */}
      <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-brand-accent/40 to-transparent" />

      <div className="relative w-full px-4 sm:px-6 lg:px-12">
        {/* header */}
        <div className="mb-16 w-full max-w-full">
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-brand-accent">
            How it works
          </p>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight text-slate-900">
            A simple journey from sign-up to savings.
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-slate-600 mb-44">
            Dealora is designed as a smooth, guided flow. From the moment you sign up
            to the moment you redeem a coupon and see cashback reflected, every step is
            optimised for clarity and speed.
          </p>
        </div>

        {/* steps */}
        <motion.div
          className="space-y-52"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.08 } },
          }}
        >
          {steps.map((step, index) => {
            const isLeft = index % 2 === 0
            const icons = [
              FiMail,
              FiLink,
              FiLayers,
              FiShoppingCart,
              FiCheckCircle,
              FiSave,
            ]
            const Icon = icons[index % icons.length]
            const stepRef = useRef(null)
            const isInView = useInView(stepRef, { once: true, margin: "-100px" })

            return (
              <motion.div
                key={step.title}
                ref={stepRef}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                variants={{
                  hidden: { opacity: 0 },
                  visible: {
                    opacity: 1,
                    transition: { staggerChildren: 0.2, delayChildren: 0.1 },
                  },
                }}
                className="relative grid grid-cols-2 items-start"
              >
                {/* text */}
                <motion.div
                  tabIndex={0}
                  role="article"
                  aria-labelledby={`step-${index}-title`}
                  variants={{
                    hidden: {
                      opacity: 0,
                      x: isLeft ? -50 : 50,
                    },
                    visible: {
                      opacity: 1,
                      x: 0,
                      transition: {
                        duration: 0.6,
                        ease: [0.16, 1, 0.3, 1],
                      },
                    },
                  }}
                  whileHover={{ scale: 1.01 }}
                  whileFocus={{ scale: 1.01 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className={`rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent/30 ${
                    isLeft ? "pr-16 text-right" : "col-start-2 pl-16 text-left"
                  }`}
                >
                  <div className="flex items-start justify-between md:justify-end lg:justify-between">
                    <div className="min-w-0">
                      <h3
                        id={`step-${index}-title`}
                        className="text-lg font-semibold text-slate-900 inline-flex items-center gap-3"
                      >
                        <span className="hidden sm:inline-flex">
                          <Icon
                            className="h-5 w-5 text-brand-accent"
                            aria-hidden
                          />
                        </span>
                        {step.title}
                      </h3>

                      <p className="mt-3 text-sm leading-relaxed text-slate-600">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </motion.div>

                {/* indicator */}

                <div className="absolute left-1/2  -translate-x-1/2 flex items-center justify-center">
                <div className="relative flex items-center justify-center">
                {/* GIF LEFT (even steps: 2,4,6...) */}
  {!isLeft && (
    <motion.img
      src={[
        "/how-it-works-gifs/output-onlinegiftools1.gif",
        "/Apps Authetication 2 (1).png",
        "/how-it-works-gifs/output-onlinegiftools3.gif",
        "/Detail page 1 (1).png",
        "/how-it-works-gifs/output-onlinegiftools5.gif",
        "/Dashboard Page (1).png",
      ][index]}
      alt={`Step ${index + 1} demonstration`}
      variants={{
        hidden: {
          opacity: 0,
          scale: 0.8,
          x: 30,
        },
        visible: {
          opacity: 1,
          scale: 1,
          x: 0,
          transition: {
            duration: 0.7,
            ease: [0.16, 1, 0.3, 1],
            delay: 0.2,
          },
        },
      }}
      className="absolute right-full mr-16 h-64 min-w-64 w-64 sm:h-80 sm:min-w-80 sm:w-80 md:h-96 md:min-w-96 md:w-96 lg:h-[400px] lg:min-w-[400px] lg:w-[400px] mix-blend-darken object-contain"
    />
  )}
                  <motion.div 
                    className="relative flex items-center justify-center" 
                    aria-hidden
                    variants={{
                      hidden: {
                        opacity: 0,
                        scale: 0,
                      },
                      visible: {
                        opacity: 1,
                        scale: 1,
                        transition: {
                          type: "spring",
                          stiffness: 200,
                          damping: 15,
                          delay: 0.3,
                        },
                      },
                    }}
                  >
                    <motion.div
                      className="absolute h-10 w-10 rounded-full bg-white shadow-[0_10px_30px_rgba(2,6,23,0.06)]"
                      animate={{ scale: [1, 1.06, 1] }}
                      transition={{
                        duration: 1.8,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    />

                    <motion.div
                      whileHover={{ scale: 1.08 }}
                      whileTap={{ scale: 0.98 }}
                      className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white text-sm font-semibold text-brand-accent ring-1 ring-brand-accent/30 shadow-[0_6px_20px_rgba(99,102,241,0.22)]"
                    >
                      {index + 1}
                    </motion.div>
                  </motion.div>
                  {/* GIF RIGHT (odd steps: 1,3,5...) */}
  {isLeft && (
    <motion.img
      src={[
        "/Signup.png",
        "/how-it-works-gifs/output-onlinegiftools2.gif",
        "/Coupons listing 1 (1).png",
        "/how-it-works-gifs/output-onlinegiftools4.gif",
        "/Redeemed Coupons.png",
        "/how-it-works-gifs/output-onlinegiftools6.gif",
      ][index]}
      alt={`Step ${index + 1} demonstration`}
      variants={{
        hidden: {
          opacity: 0,
          scale: 0.8,
          x: -30,
        },
        visible: {
          opacity: 1,
          scale: 1,
          x: 0,
          transition: {
            duration: 0.7,
            ease: [0.16, 1, 0.3, 1],
            delay: 0.2,
          },
        },
      }}
      className="absolute left-full ml-16 h-64 min-w-64 w-64 sm:h-80 sm:min-w-80 sm:w-80 md:h-96 md:min-w-96 md:w-96 lg:h-[400px] lg:min-w-[400px] lg:w-[400px] object-contain"
    />
  )}
                </div>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>

      {/* soft bottom fade */}
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-0 left-0 right-0 h-0
                   bg-gradient-to-t from-slate-50/100 via-slate-50/70 to-transparent z-10"
      />
    </section>
  )
}