'use client'

import { useState } from "react"
import emailjs from "@emailjs/browser"

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" })
  const [status, setStatus] = useState("idle")
  const [error, setError] = useState("")

async function handleSubmit(e) {
  e.preventDefault()
  setStatus("submitting")
  setError("")

  try {
    await fetch("https://script.google.com/macros/s/AKfycbxmFDaa2Uvx1VUyhhb1383jLbTnrUiwz_siBZrL6e5Fd0A5WcvvyO1JCTKgMY2Nfhio/exec", {
      method: "POST",
      mode: "no-cors",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(form)
    })

    // If fetch didn't throw, assume success
    setStatus("submitted")
    setForm({ name: "", email: "", message: "" })

  } catch (err) {
    setStatus("error")
    setError("Something went wrong. Please try again.")
  }
}

  function onChange(event) {
    const { name, value } = event.target
    setForm((current) => ({ ...current, [name]: value }))
  }

  return (
    <div className="relative w-full min-h-screen bg-gradient-to-br from-slate-50 via-purple-50/60 to-cyan-50/70 text-slate-900 overflow-hidden">
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

      {/* header */}
      <section className="relative w-full px-4 py-12 sm:px-6 lg:px-12 sm:py-12 z-20">
        <p className="text-xs font-medium uppercase tracking-[0.3em] text-brand-accent">
          Contact
        </p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight text-slate-900">
          Get in touch with the Dealora team.
        </h1>
        <p className="mt-5 text-lg leading-relaxed text-slate-600">
          Use the form below for support, feedback, or partnership enquiries. We
          try to respond to relevant messages in a reasonable timeframe.
        </p>
      </section>

      {/* content */}
      <section className="relative w-full px-4 pb-16 sm:px-6 lg:px-12 sm:pb-20 z-20">
        <div className="grid gap-8 md:grid-cols-[minmax(0,_1.2fr)_minmax(0,_0.9fr)]">
          <form
            onSubmit={handleSubmit}
            className="space-y-4 rounded-2xl border border-slate-200 bg-white/95 backdrop-blur-sm p-6 shadow-sm"
          >
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-slate-800">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                autoComplete="name"
                value={form.name}
                onChange={onChange}
                className="mt-1 w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 outline-none ring-brand-accent/40 placeholder:text-slate-400 focus:border-brand-accent focus:ring-1"
                placeholder="Your name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-slate-800">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                autoComplete="email"
                value={form.email}
                onChange={onChange}
                className="mt-1 w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 outline-none ring-brand-accent/40 placeholder:text-slate-500 focus:border-brand-accent focus:ring-1"
                placeholder="you@example.com"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-slate-800">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={4}
                value={form.message}
                onChange={onChange}
                className="mt-1 w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 outline-none ring-brand-accent/40 placeholder:text-slate-400 focus:border-brand-accent focus:ring-1"
                placeholder="How can we help?"
              />
            </div>

            {error && <p className="text-sm text-red-400">{error}</p>}
            {status === "submitted" && !error && (
              <p className="text-xs text-emerald-400">
                Thank you. Your message has been received.
              </p>
            )}

            <button
              type="submit"
              disabled={status === "submitting"}
              className="mt-1 inline-flex items-center justify-center rounded-full bg-brand-gradient px-5 py-2 text-sm font-medium text-white shadow-soft-glow hover:brightness-110 disabled:opacity-60"
            >
              {status === "submitting" ? "Sending..." : "Send message"}
            </button>
          </form>

          <div className="space-y-6 text-sm text-slate-600">
            <div>
              <h2 className="text-md font-semibold text-slate-900">Support</h2>
              <p className="mt-2 text-sm text-slate-600">
                For general questions, feedback, or issues while redeeming coupons,
                use the form or reach out via the support email below.
              </p>
              <p className="mt-2 text-sm text-brand-accent">
                contact@dealora.co.in
              </p>
            </div>

            <div>
              <h2 className="text-md font-semibold text-slate-900">Partnerships</h2>
              <p className="mt-2 text-sm text-slate-600">
                If you represent a brand, aggregator, or platform that runs rewards
                and would like to explore integrations, mention it in your message
                and include relevant details.
              </p>
            </div>

            <div>
              <h2 className="text-md font-semibold text-slate-900">Social</h2>
              <p className="mt-2 text-sm text-slate-600">
                Social handles can be added here once they are live. This is where
                users can see updates, product tips, and new partner announcements.
              </p>
            </div>
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