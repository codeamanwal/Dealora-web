"use client"

import { useState } from "react"
import { FiChevronDown } from "react-icons/fi"

const faqs = [
  {
    question: "Why is my coupon not working?",
    answer:
      "Some coupons are limited by time, usage count, or specific terms from partner apps. Check the expiry, category, and conditions in the coupon details before redeeming.",
  },
  {
    question: "How does Dealora get my coupons?",
    answer:
      "When you connect supported apps, Dealora reads available rewards and coupons via secure integrations or approved channels, then surfaces them inside your dashboard.",
  },
  {
    question: "Which apps does Dealora support?",
    answer:
      "Support will expand over time and may vary by region. The app will clearly list currently supported partners inside the integrations area.",
  },
  {
    question: "Is my data safe?",
    answer:
      "Dealora is built with a security-first mindset. Only the data required to show and track your rewards is processed, and it is handled according to strict privacy standards.",
  },
  {
    question: "What happens when a coupon expires?",
    answer:
      "Expired coupons are automatically removed or archived from your active view so that your dashboard stays focused on live offers.",
  },
  {
    question: "How does cashback tracking work?",
    answer:
      "Cashback amounts move through stages such as pending and confirmed. Dealora reflects these statuses based on information from partner apps or services.",
  },
  {
    question: "Do I need to pay to use Dealora?",
    answer:
      "The core Dealora experience is designed to be free for end users. If pricing or premium features are introduced, they will be communicated clearly in the app.",
  },
  {
    question: "Who do I contact for support or partnerships?",
    answer:
      "Use the contact form on the Contact page or the support email provided there. Partnership enquiries can also be initiated from the same page.",
  },
]

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState(null)

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-slate-50 via-purple-50/60 to-cyan-50/70 text-slate-900">
      <section className="relative px-4 py-12 sm:px-6 lg:px-12">
        {/* Background blobs */}
        <div aria-hidden className="pointer-events-none absolute inset-0">
          <div className="absolute -top-20 -left-20 h-96 w-96 rounded-full bg-purple-300/25 blur-3xl" />
          <div className="absolute top-20 -right-20 h-[420px] w-[420px] rounded-full bg-cyan-300/25 blur-3xl" />
        </div>

        <div className="relative mx-auto w-full">
          {/* Header */}
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-brand-accent">
            FAQ
          </p>

          <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-4xl">
            Frequently asked questions.
          </h1>

          <p className="mt-5 text-lg leading-relaxed text-slate-600">
            Short, clear answers to the most common questions about Dealora. The experience
            may evolve as we add new partners and capabilities.
          </p>

          {/* FAQ list */}
          <div className="mt-14 space-y-4 mx-auto max-w-2xl">
            {faqs.map((item, idx) => {
              const isOpen = openIndex === idx

              return (
                <div
                  key={item.question}
                  className="rounded-2xl border border-slate-200 bg-white/85 backdrop-blur shadow-[0_18px_50px_rgba(2,6,23,0.08)]"
                >
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? null : idx)}
                    className="flex w-full items-center gap-4 px-6 py-3.5 text-left"
                  >
                    <span className="w-10 text-sm font-semibold tabular-nums text-slate-400">
                      {String(idx + 1).padStart(2, "0")}
                    </span>

                    <span className="flex-1 text-lg font-semibold text-slate-900">
                      {item.question}
                    </span>

                    <span
                      className={`flex h-9 w-9 items-center justify-center rounded-full bg-slate-900 transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    >
                      <FiChevronDown className="h-5 w-5 text-white" />
                    </span>
                  </button>

                  {isOpen && (
                    <div className="px-16 pb-6 pr-6 text-base leading-relaxed text-slate-700">
                      {item.answer}
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </section>
    </div>
  )
}