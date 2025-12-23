'use client'

import { useState } from "react"

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" })
  const [status, setStatus] = useState("idle")
  const [error, setError] = useState("")

  async function handleSubmit(event) {
    event.preventDefault()
    setStatus("submitting")
    setError("")

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      })

      if (!response.ok) {
        throw new Error("Failed to submit form")
      }

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
    <div className="bg-slate-50 text-slate-900">
      <section className="w-full px-4 py-12 sm:px-6 lg:px-12 sm:py-16">
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-brand-accent">
          Contact
        </p>
        <h1 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">
          Get in touch with the Dealora team.
        </h1>
        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-slate-600 sm:text-base">
          Use the form below for support, feedback, or partnership enquiries. We
          try to respond to relevant messages in a reasonable timeframe.
        </p>
      </section>

      <section className="w-full px-4 pb-16 sm:px-6 lg:px-12 sm:pb-20">
        <div className="grid gap-8 md:grid-cols-[minmax(0,_1.2fr)_minmax(0,_0.9fr)]">
          <form
            onSubmit={handleSubmit}
            className="space-y-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
          >
            <div>
              <label htmlFor="name" className="block text-xs font-medium text-slate-800">
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
              <label htmlFor="email" className="block text-xs font-medium text-slate-800">
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
                className="mt-1 w-full rounded-lg border border-slate-800 bg-white px-3 py-2 text-sm text-slate-50 outline-none ring-brand-accent/40 placeholder:text-slate-500 focus:border-brand-accent focus:ring-1"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-xs font-medium text-slate-800">
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
            {error && (
              <p className="text-xs text-red-400">{error}</p>
            )}
            {status === "submitted" && !error && (
              <p className="text-xs text-emerald-400">
                Thank you. Your message has been received.
              </p>
            )}
            <button
              type="submit"
              disabled={status === "submitting"}
              className="mt-1 inline-flex items-center justify-center rounded-full bg-brand-gradient px-5 py-2 text-sm font-medium text-slate-950 shadow-soft-glow hover:brightness-110 disabled:opacity-60"
            >
              {status === "submitting" ? "Sending..." : "Send message"}
            </button>
          </form>

          <div className="space-y-6 text-sm text-slate-600">
            <div>
              <h2 className="text-sm font-semibold text-slate-900">Support</h2>
              <p className="mt-2 text-xs text-slate-600">
                For general questions, feedback, or issues while redeeming coupons,
                use the form or reach out via the support email below.
              </p>
              <p className="mt-2 text-xs text-brand-accent">
                support@dealora.app
              </p>
            </div>
            <div>
              <h2 className="text-sm font-semibold text-slate-900">Partnerships</h2>
              <p className="mt-2 text-xs text-slate-600">
                If you represent a brand, aggregator, or platform that runs rewards
                and would like to explore integrations, mention it in your message
                and include relevant details.
              </p>
            </div>
            <div>
              <h2 className="text-sm font-semibold text-slate-900">Social</h2>
              <p className="mt-2 text-xs text-slate-600">
                Social handles can be added here once they are live. This is where
                users can see updates, product tips, and new partner announcements.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
