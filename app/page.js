
'use client'

import Image from "next/image"
import Link from "next/link"
import { motion, useScroll, useTransform, useInView } from "framer-motion"
import { useEffect, useRef, useState } from "react"
import { GiNetworkBars } from "react-icons/gi"
import { FaWifi } from "react-icons/fa";
import { IoIosBatteryFull } from "react-icons/io";
import { FcGoogle } from "react-icons/fc";
import dealoraHomeMockup from "../out/mockups/dealora-home.png"

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
  {
    label: "App",
    src: "/Splash%20Screen%202.png",
  },
  {
    label: "Apps authentication",
    src: "/Apps%20Authetication%202.png",
  },
  {
    label: "Coupons listing",
    src: "/Coupons%20listing%201.png",
  },
  {
    label: "More coupons",
    src: "/Coupons%20listing%205.png",
  },
  {
    label: "De-sync apps",
    src: "/De-Sync%20Apps.png",
  },
  {
    label: "Offer detail",
    src: "/Detail%20page%201.png",
  },
]

export default function HomePage() {
  const { scrollYProgress } = useScroll()
  const heroOrbY = useTransform(scrollYProgress, [0, 0.25], [0, -90])
  const heroOrbY2 = useTransform(scrollYProgress, [0, 0.25], [0, 60])

  const primaryPhone = {
    key: "home",
    src: dealoraHomeMockup,
    alt: "Dealora app home screen",
    width: 320,
    height: 640,
  }

  return (
    <div className="bg-slate-50 text-slate-900">
      <motion.section
        initial="hidden"
        animate="visible"
        variants={heroVariants}
        className="relative isolate overflow-hidden border-b border-slate-200 bg-white"
      >
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white via-slate-50 to-slate-100" />
        <motion.div
          aria-hidden
          style={{ y: heroOrbY }}
          className="pointer-events-none absolute -left-24 top-[-140px] h-[520px] w-[520px] rounded-full bg-[radial-gradient(circle_at_center,_rgba(34,211,238,0.18),_transparent_60%)] blur-2xl"
        />
        <motion.div
          aria-hidden
          style={{ y: heroOrbY2 }}
          className="pointer-events-none absolute -right-32 top-[120px] h-[560px] w-[560px] rounded-full bg-[radial-gradient(circle_at_center,_rgba(124,58,237,0.18),_transparent_62%)] blur-2xl"
        />
  <div className="relative flex w-full flex-col gap-8 px-4 pb-12 sm:px-6 lg:px-12 md:flex-row md:items-center md:pb-20 md:-pt-0">
          <div className="flex-1 space-y-6">

            <h1 className="!mt-0 text-balance text-[clamp(2.6rem,4.5vw,4.5rem)] font-semibold leading-[1.05] tracking-[-0.04em]">
              Unlock Rewards.
              <span className="-mt-2 block bg-brand-gradient bg-clip-text text-transparent">
                CSave Smarter.
              </span>
            </h1>

            <div className="inline-flex items-center gap-2 rounded-full border border-slate-200/70 bg-white/70 px-3 py-1 text-xs text-slate-700 shadow-sm backdrop-blur">
              {/* animated attention dot: pulsing center + expanding ping ring */}
              <span className="relative inline-flex h-3 w-3 items-center justify-center">
                <span className="absolute inline-flex h-full w-full rounded-full bg-brand-accent/30 animate-ping" aria-hidden />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-brand-accent shadow-[0_0_8px_rgba(34,211,238,0.28)] animate-pulse" aria-hidden />
              </span>
              <span>Smart rewards hub for modern shoppers</span>
            </div>
            {/* <p className="max-w-xl text-sm leading-relaxed text-slate-600 sm:text-base md:text-lg">
              Dealora is a coupon aggregation and cashback app that pulls all your rewards
              across apps into one simple dashboard. Discover, redeem, and track every
              deal without the usual friction.
            </p> */}

            <div className="flex flex-wrap items-center gap-3">
              <Link
                href="#"
                aria-label="Download on Google Play"
                className="inline-flex items-center justify-center h-12 w-36 rounded-full bg-brand-gradient border border-slate-200 shadow-sm hover:shadow-md"
              >
                <Image src="/googleplaystorelogo.png" alt="Google Play" width={88} height={24} className="object-contain" />
              </Link>
              <Link
                href="#"
                aria-label="Download on the App Store"
                className="inline-flex items-center justify-center h-12 w-36 rounded-full bg-white border border-slate-200 shadow-sm hover:shadow-md"
              >
                
                <Image src="/App_Store.svg" alt="App Store" width={38} height={24} className="object-contain" />
              </Link>
            </div>

            <div className="mt-6 w-64 space-y-3 mr-auto">
              <p className="text-sm font-medium text-center text-slate-700">Sign in to access your rewards</p>
              <button
                onClick={() => {/* Handle Google sign in */}}
                className="flex w-full items-center justify-center gap-2 rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-sm font-medium text-slate-700 shadow-sm transition-colors hover:bg-slate-50"
              >
                <FcGoogle className="h-5 w-5" />
                Continue with Google
              </button>
              <div className="relative flex items-center py-1">
                <div className="flex-grow border-t border-slate-200"></div>
                <span className="mx-3 flex-shrink text-sm text-slate-500">or</span>
                <div className="flex-grow border-t border-slate-200"></div>
              </div>
              <button
                onClick={() => {/* Handle email sign in */}}
                className="flex w-full items-center justify-center gap-2 rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-sm font-medium text-slate-700 shadow-sm transition-colors hover:bg-slate-50"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Continue with Email
              </button>
            </div>
            
            <div className="mt-6 border-t border-slate-100 pt-6">
              <p className="text-xs text-slate-500">
                For business and partnership enquiries, visit the contact page.
              </p>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="flex-1"
          >
            <motion.div
              className="relative mx-auto flex h-[580px] w-full max-w-[400px] items-end justify-center sm:h-[800px] sm:max-w-[500px] md:ml-auto md:mr-0 md:justify-end -translate-x-[0.25rem] md:-translate-x-[6.25rem]"
            >
              <div aria-hidden className="pointer-events-none absolute inset-0">
                <div className="absolute -right-10 top-8 h-72 w-72 rounded-full bg-sky-200/60 blur-3xl" />
                <div className="absolute right-20 top-40 h-80 w-80 rounded-full bg-violet-200/60 blur-3xl" />
                <div className="absolute left-8 bottom-10 h-64 w-64 rounded-full bg-amber-200/55 blur-3xl" />
                <div className="absolute bottom-10 right-0 h-40 w-[360px] rotate-[-10deg] rounded-full bg-slate-900/10 blur-2xl" />
              </div>
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 z-0 flex items-center justify-center"
              >
                <div className="h-[420px] w-[420px] rounded-full bg-[radial-gradient(circle_at_center,_rgba(124,58,237,0.28),_transparent_62%)] blur-3xl" />
              </div>

              <div
                className="relative z-20 -translate-x-2 md:-translate-x-120"
                style={{
                  transform:
                    "perspective(1400px) rotateY(-10deg) rotateX(20deg) rotateZ(13deg)",
                  transformStyle: "preserve-3d",
                }}
              >
                <div
                  aria-hidden
                  className="absolute inset-0.5 translate-x-4 translate-y-0 rounded-[3.1rem] bg-[linear-gradient(135deg,_rgba(15,23,42,0.95),_rgba(124,58,237,0.40))] opacity-80"
                />
                <div
                  className="relative h-[500px] w-[240px] rounded-[3.1rem] bg-slate-950 p-[9px] shadow-[0_44px_140px_rgba(2,6,23,0.38)] ring-1 ring-white/10 sm:h-[740px] sm:w-[370px] overflow-hidden"
                >
                  {/* Right edge highlight */}
                  <div 
                    aria-hidden 
                    className="absolute right-0 top-0 h-full w-1.5 bg-black-to-b from-slate-900 via-slate-700/90 to-slate-900 z-10"
                    style={{
                      boxShadow: 'inset -1px 0 4px rgba(255,255,255,0.1)',
                      transform: 'translateX(1px)',
                      clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
                      borderTopRightRadius: '3.1rem',
                      borderBottomRightRadius: '3.1rem',
                    }}
                  />
                  <div className="relative h-full w-full overflow-hidden rounded-[2.55rem] bg-white">
                    <Image
                      src={primaryPhone.src}
                      alt={primaryPhone.alt}
                      fill
                      sizes="(min-width: 1024px) 330px, 72vw"
                      className="object-cover object-center translate-y-3"
                      priority
                    />

                    <div className="absolute right-[40px] sm:right-[75px]  top-4 z-10 text-black">
                      <GiNetworkBars className="h-3 w-3 sm:h-5 sm:w-5" />
                    </div>
                    <div className="absolute right-[25px] sm:right-[50px] top-4 z-10 text-black">
                      <FaWifi  className="h-3 w-3 sm:h-5 sm:w-5" />
                    </div>
                    <div className="absolute right-[7px] sm:right-[17px] top-3.5 sm:top-3 z-10 text-black">
                      <IoIosBatteryFull  className="h-4 w-4 sm:h-7 sm:w-7" />
                    </div>
                    <div
                      aria-hidden
                      className="pointer-events-none absolute right-0 top-0 h-full w-8 bg-[linear-gradient(90deg,_transparent,_rgba(255,255,255,0.16),_transparent)]"
                    />

                      <div
                        aria-hidden
                        className="pointer-events-none absolute left-1/2 top-2 h-7 w-28 -translate-x-1/2 rounded-full bg-black"
                      />

                      <div
                        aria-hidden
                        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/25 via-white/0 to-white/85"
                      />

                      <motion.div
                        aria-hidden
                        initial={{ opacity: 1 }}
                        animate={{ opacity: 0 }}
                        transition={{ duration: 0.8 }}
                        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_22%_18%,_rgba(124,58,237,0.60),_transparent_58%),_radial-gradient(circle_at_80%_70%,_rgba(34,211,238,0.40),_transparent_55%)]"
                      />
                      <motion.div
                        aria-hidden
                        initial={{ opacity: 0.85 }}
                        animate={{ opacity: 0 }}
                        transition={{ duration: 0.8 }}
                        className="pointer-events-none absolute inset-0 bg-white/10 backdrop-blur-[2px]"
                      />
                    </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      <motion.section
        id="what-is-dealora"
        initial="hidden"
        animate="visible"
        variants={sectionVariants}
        className="relative w-full overflow-hidden bg-gradient-to-br from-slate-50 via-purple-50/60 to-cyan-50/70 px-4 py-20 sm:px-6 lg:px-12 sm:py-28"
      >
        {/* Decorative color patches */}
        <div aria-hidden className="pointer-events-none absolute inset-0">
          <div className="absolute top-10 left-10 h-64 w-64 rounded-full bg-purple-300/40 blur-3xl" />
          <div className="absolute top-20 right-20 h-80 w-80 rounded-full bg-cyan-300/40 blur-3xl" />
          <div className="absolute bottom-10 left-1/4 h-72 w-72 rounded-full bg-violet-300/35 blur-3xl" />
          <div className="absolute bottom-20 right-1/3 h-96 w-96 rounded-full bg-sky-300/35 blur-3xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-gradient-to-br from-purple-200/30 via-cyan-200/30 to-violet-200/30 blur-3xl" />
        </div>
        
        <div className="relative flex w-full flex-col items-center text-center">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
            What is <span className="bg-brand-gradient bg-clip-text text-transparent">Dealora</span>?
          </h2>
          <p className="mt-6 w-full max-w-3xl text-xl leading-relaxed text-slate-700 sm:text-2xl lg:text-2xl">
            Dealora is a <span className="text-purple-600 font-medium">smart rewards layer</span> for your daily spending. It connects with
            supported apps and services, pulls live coupons and cashback offers, and
            surfaces them in one place so you can redeem in a tap.
          </p>
          <p className="mt-4 w-full max-w-3xl text-base leading-relaxed text-slate-600 sm:text-lg lg:text-xl">
            No more juggling screenshots, copied codes, or searching through emails.
            Dealora keeps every relevant offer at your fingertips.
          </p>
        </div>
  </motion.section>

  <HowItWorks />
     <motion.section
  id="features"
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, amount: 0.25 }}
  variants={sectionVariants}
  className="relative w-full bg-gradient-to-br from-slate-50 via-purple-50/40 to-cyan-50/50 px-4 py-20 sm:px-6 lg:px-12 sm:py-28"
>
  {/* ambient background blobs */}
  <div aria-hidden className="pointer-events-none absolute inset-0">
    <div className="absolute top-16 left-12 h-72 w-72 rounded-full bg-purple-300/30 blur-3xl" />
    <div className="absolute top-24 right-16 h-96 w-96 rounded-full bg-cyan-300/30 blur-3xl" />
    <div className="absolute bottom-16 left-1/3 h-80 w-80 rounded-full bg-violet-300/25 blur-3xl" />
  </div>

  {/* header */}
  <div className="relative mb-16 max-w-3xl">
    <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
      Key features that{" "}
      <span className="bg-brand-gradient bg-clip-text text-transparent">
        reduce friction
      </span>
    </h2>
    <p className="mt-4 text-base text-slate-600">
      Everything in Dealora is designed to stay out of your way and quietly help you
      save more every day.
    </p>
  </div>

  {/* layered cards */}
  <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <div className="group relative grid gap-6 md:grid-cols-2 lg:grid-cols-4 auto-rows-fr" style={{ perspective: '2000px' }}>
      {[
        {
          title: "All rewards in one place",
          text: "Coupons, offers, and cashback from supported apps in one clean dashboard.",
          gradient: "from-purple-500 to-violet-600",
          rotate: 5,
          imageSrc: "/all rewards.jpg"
        },
        {
          title: "Auto-fetched verified coupons",
          text: "Live, high-intent offers pulled automatically. No expired or fake codes.",
          gradient: "from-cyan-500 to-sky-600",
          rotate: -5,
          imageSrc: "/verified.jpg"
        },
        {
          title: "Secure sign-in",
          text: "Privacy-first authentication with modern security best practices.",
          gradient: "from-emerald-500 to-teal-600",
          rotate: 5,
          imageSrc: "/secure sign in.jpg"
        },
        {
          title: "Cashback tracking",
          text: "Track earned, pending, and confirmed cashback across sources.",
          gradient: "from-amber-500 to-orange-600",
          rotate: -5,
          imageSrc: "/cashback tracking.jpg"
        },
      ].map((item, index) => (
        <motion.div
          key={item.title}
          whileHover={{
            scale: 1.1,
            rotate: 0,
            zIndex: 20,
            transition: { 
              type: "spring", 
              stiffness: 300,
              damping: 25
            }
          }}
          initial={{ 
            scale: 0.98,
            rotate: item.rotate,
            y: 20,
            opacity: 0.9
          }}
          whileInView={{ 
            scale: 0.98,
            rotate: item.rotate,
            y: 0,
            opacity: 1,
            transition: { 
              duration: 0.6,
              delay: index * 0.1,
              ease: [0.16, 1, 0.3, 1]
            }
          }}
          viewport={{ once: true, margin: "-50px" }}
          className="relative h-full"
        >
          <div
            className={`
              relative h-full rounded-3xl border-2 border-slate-200/60
              bg-white/95 p-8 backdrop-blur-sm
              shadow-[0_25px_60px_rgba(2,6,23,0.08)]
              transition-all duration-500 
              group-hover:[&:not(:hover)]:opacity-70
              group-hover:[&:not(:hover)]:scale-[0.96]
              hover:shadow-[0_30px_70px_rgba(2,6,23,0.12)]
              hover:border-slate-300/50
              hover:z-10
            `}
          >
            {/* gradient accent */}
            <div
              aria-hidden
              className={`absolute inset-0 rounded-[1.5rem] bg-gradient-to-br ${item.gradient} opacity-[0.04]`}
            />

            {/* glow ring */}
            <div
              aria-hidden
              className="absolute inset-0 rounded-[1.5rem] ring-1 ring-slate-200/70"
            />

            <div className="relative">
              <h3 className="text-2xl font-bold tracking-tight text-slate-900">
                {item.title}
              </h3>

              
                <p className="mt-4 text-base leading-relaxed text-slate-600 mb-8 whitespace-pre-wrap">
                  {item.text}
                </p>
              
              <div className="relative mt-6 h-64 overflow-hidden rounded-2xl">
  {/* The container below is now set to full height/width without restricting padding */}
  <div className="relative z-10 flex h-full w-full items-center justify-center">
    {/* Removed max-w-[220px] to allow the image to expand */}
    <div className="h-full w-full">
      <Image
        src={item.imageSrc}
        alt={item.title}
        // Use fill for Next.js Images to automatically fit the parent container
        fill 
        className="object-cover transition-transform duration-300 group-hover:scale-105"
      />
    </div>
  </div>
</div>

            </div>
          </div>
        </motion.div>
      ))}
    </div>
  </div>
</motion.section>
      {/* <motion.section
        id="app-preview"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionVariants}
        className="relative overflow-hidden border-y border-slate-200 bg-slate-50"
      >
        <div className="w-full px-4 py-16 sm:px-6 lg:px-12 sm:py-20">
          <div aria-hidden className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_10%_20%,_rgba(34,211,238,0.10),_transparent_40%),_radial-gradient(circle_at_90%_50%,_rgba(124,58,237,0.12),_transparent_45%)]" />
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
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
          <div className="relative mt-8 overflow-x-auto pb-2">
            <div className="grid snap-x snap-mandatory grid-flow-col auto-cols-[82%] gap-5 pr-4 sm:auto-cols-[55%] md:auto-cols-[42%] lg:auto-cols-[calc((100%-2.5rem)/3)]">
              {appScreens.map((screen) => (
                <div
                  key={screen.label}
                  className="flex h-[28rem] w-full snap-center flex-col items-center rounded-[2.2rem] border border-slate-200/70 bg-white/70 p-3 text-[11px] text-slate-700 shadow-[0_20px_70px_rgba(2,6,23,0.10)] backdrop-blur sm:h-[30rem] lg:h-[34rem]"
                >
                  <div className="relative flex h-full w-full items-center justify-center">
                    <div className="h-full w-full overflow-hidden rounded-[1.85rem] border border-slate-200/80 bg-slate-100">
                      <Image
                        src={screen.src}
                        alt={screen.label}
                        width={240}
                        height={480}
                        className="h-full w-full object-contain"
                      />
                    </div>
                  </div>
                  {/* <p className="mt-3 text-xs font-medium text-slate-900">{screen.label}</p>}
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.section> */}

      <motion.section
        id="download"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={sectionVariants}
        className="w-full px-4 py-16 sm:px-6 lg:px-12 sm:py-20"
      >
        <div className="relative overflow-hidden rounded-[2.4rem] border border-slate-200 bg-white px-6 py-10 shadow-[0_26px_90px_rgba(2,6,23,0.10)] sm:px-10">
          <div aria-hidden className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,_rgba(124,58,237,0.20),_transparent_55%),_radial-gradient(circle_at_85%_70%,_rgba(34,211,238,0.18),_transparent_60%)]" />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-white/60 via-white/20 to-white/50" />
          <div className="relative flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                Ready to save smarter with Dealora?
              </h2>
              <p className="mt-3 max-w-xl text-sm text-slate-600 sm:text-base">
                Download the app to centralise your coupons, auto-fetch new deals, and
                track every rupee you save.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <Link
                href="#"
                aria-label="Download on Google Play"
                className="inline-flex items-center justify-center h-12 w-36 rounded-full bg-brand-gradient border border-slate-200 shadow-sm hover:shadow-md"
              >
                <Image src="/googleplaystorelogo.png" alt="Google Play" width={88} height={24} className="object-contain" />
              </Link>
              <Link
                href="#"
                aria-label="Download on the App Store"
                className="inline-flex items-center justify-center h-12 w-36 rounded-full bg-white border border-slate-200 shadow-sm hover:shadow-md"
              >
                <Image src="/App_Store.svg" alt="App Store" width={38} height={24} className="object-contain" />
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
function HowItWorks() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-120px" })

  const [activeStep, setActiveStep] = useState(-1)
  const [completedStep, setCompletedStep] = useState(-1)
  const [hoveredStep, setHoveredStep] = useState(null)

  useEffect(() => {
    if (!isInView) return

    const timers = [
      // Step 1
      setTimeout(() => setActiveStep(0), 400),

      // Connector 1 → 2
      setTimeout(() => setCompletedStep(0), 900),

      // Step 2
      setTimeout(() => setActiveStep(1), 1400),

      // Connector 2 → 3
      setTimeout(() => setCompletedStep(1), 1900),

      // Step 3
      setTimeout(() => setActiveStep(2), 2400),
    ]

    return () => timers.forEach(clearTimeout)
  }, [isInView])

  const steps = [
    {
      icon: "🔗",
      title: "Sign up and connect apps",
      description:
        "Sign up using email or Google. Optionally link supported apps so Dealora can start pulling your live coupons and rewards.",
      color: "from-purple-500 to-violet-600",
    },
    {
      icon: "🎯",
      title: "Discover and redeem",
      description:
        "Browse your unified dashboard, filter by category, and tap on a coupon to copy the code or jump into the relevant app or web page.",
      color: "from-cyan-500 to-blue-600",
    },
    {
      icon: "💰",
      title: "Track savings",
      description:
        "Saved coupons, used offers, and cashback earnings are tracked in-app so you always know how much you have saved.",
      color: "from-emerald-500 to-teal-600",
    },
  ]

  return (
    <section
      ref={ref}
      className="relative overflow-hidden border-y border-slate-200 bg-gradient-to-br from-slate-50 via-purple-50/40 to-cyan-50/50 px-4 py-20 sm:px-6 lg:px-12 sm:py-28"
    >
      {/* Background blobs */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute top-20 left-10 h-96 w-96 rounded-full bg-purple-300/30 blur-3xl" />
        <div className="absolute top-10 right-20 h-80 w-80 rounded-full bg-cyan-300/30 blur-3xl" />
        <div className="absolute bottom-20 left-1/3 h-72 w-72 rounded-full bg-violet-300/25 blur-3xl" />
        <div className="absolute bottom-10 right-1/4 h-96 w-96 rounded-full bg-emerald-300/25 blur-3xl" />
      </div>

      <div className="relative text-center mb-16">
        <h2 className="text-3xl font-bold sm:text-4xl lg:text-5xl text-slate-900">
          How Dealora{" "}
          <span className="bg-brand-gradient bg-clip-text text-transparent">
            works
          </span>
        </h2>
        <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
          A simple, guided flow from sign-up to redemption and tracking.
        </p>
      </div>

      <div className="relative flex flex-col gap-8 md:flex-row md:justify-between md:gap-6 lg:gap-8">
        {/* CONNECTOR */}
        <div className="hidden md:absolute md:top-1/2 md:left-0 md:right-0 md:flex md:-translate-y-1/2 md:justify-between px-[calc(33.333%/2)]">
          {[0, 1].map((i) => (
            <div
              key={i}
              className="relative w-1/2 h-1 rounded-full bg-slate-300 overflow-hidden"
            >
              <motion.div
                className="absolute left-0 top-0 h-full rounded-full bg-[rgba(124,58,237,0.9)]"
                initial={{ width: "0%" }}
                animate={{ width: completedStep >= i ? "100%" : "0%" }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
              />
            </div>
          ))}
        </div>

        {steps.map((step, index) => {
          const isActive = activeStep === index
          const isHovered = hoveredStep === index

          return (
            <motion.div
              key={step.title}
              onHoverStart={() => setHoveredStep(index)}
              onHoverEnd={() => setHoveredStep(null)}
              animate={{
                borderColor:
                  isActive || isHovered
                    ? "rgba(124,58,237,0.9)"
                    : "rgba(226,232,240,0.8)",
                boxShadow:
                  isActive || isHovered
                    ? "0 0 0 3px rgba(124,58,237,0.2), 0 20px 60px rgba(124,58,237,0.15), 0 0 40px rgba(124,58,237,0.1)"
                    : "0 10px 40px rgba(2,6,23,0.08)",
                scale: isActive || isHovered ? 1.05 : 1,
                y: isActive || isHovered ? -8 : 0,
              }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="relative rounded-3xl border-4 bg-white/90 backdrop-blur-lg p-8 cursor-pointer group w-full md:max-w-[320px] lg:max-w-[360px]"
            >
              <div
                className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${step.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
              />

              <div className="absolute -top-4 left-1/2 -translate-x-1/2 h-12 w-12 rounded-full bg-gradient-to-br from-purple-500 via-violet-500 to-cyan-500 text-white font-bold flex items-center justify-center shadow-lg ring-4 ring-white">
                {index + 1}
              </div>

              <div className="flex justify-center mb-4 mt-6 text-5xl">
                {step.icon}
              </div>

              <h3 className="text-xl font-bold text-slate-900 mb-3 text-center">
                {step.title}
              </h3>

              <p className="text-sm text-slate-600 text-center">
                {step.description}
              </p>
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}